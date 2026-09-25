import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { createRef } from "react";
import SchedulePdfTable from "./SchedulePdfTable";
import type { ClassesByDay } from "./types";

// This entire module (including the technical table) is loaded only on click.
export default async function exportSchedule(classesByDay: ClassesByDay, name: string, signal: AbortSignal) {
  signal.throwIfAborted();
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas-pro"), import("jspdf"),
  ]);
  signal.throwIfAborted();
  const host = document.createElement("div");
  host.setAttribute("aria-hidden", "true");
  host.inert = true;
  host.style.cssText = "position:absolute;left:-10000px;top:0;pointer-events:none;";
  document.body.appendChild(host);
  const root = createRoot(host);
  const pdfRef = createRef<HTMLDivElement>();
  let canvas: HTMLCanvasElement | undefined;
  let fontTimer: ReturnType<typeof setTimeout> | undefined;
  try {
    flushSync(() => root.render(<SchedulePdfTable classesByDay={classesByDay} pdfRef={pdfRef} />));
    await Promise.race([document.fonts.ready, new Promise<void>((resolve) => { fontTimer = setTimeout(resolve, 5000); })]);
    signal.throwIfAborted();
    const element = pdfRef.current;
    if (!element) throw new Error("Missing PDF table");
    // 2400 px at normal table width, capped at 8 megapixels for long schedules.
    const scale = Math.min(1.5, Math.sqrt(8_000_000 / (element.offsetWidth * element.offsetHeight)));
    canvas = await html2canvas(element, { scale, useCORS: true, backgroundColor: "#ffffff" });
    signal.throwIfAborted();
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      compress: true,
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const margin = 8;
    const usableWidth = pageWidth - margin * 2;
    const usableHeight = pageHeight - margin * 2;

    const imgWidth = usableWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (imgHeight <= usableHeight) {
      pdf.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight);
    } else {
      let heightLeft = imgHeight;
      let position = margin;

      pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      heightLeft -= usableHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight + margin;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
        heightLeft -= usableHeight;
      }
    }


    pdf.save(`${name.replace(/[^\p{L}\p{N} -]/gu, "").trim() || "grafik"}.pdf`);
  } finally {
    clearTimeout(fontTimer);
    root.unmount();
    host.remove();
    if (canvas) { canvas.width = 0; canvas.height = 0; }
  }
}
