"use client";

import { buttonPrimaryStyes } from "@/myComponents/common/ButtonPrimary";
import html2canvas from "html2canvas-pro";
import type { RefObject } from "react";

type Props = {
  pdfRef: RefObject<HTMLDivElement | null>;
  name: string;
};

export default function DownloadSchedulePdfButton({ pdfRef, name }: Props) {
  const handleDownloadPdf = async () => {
    const element = pdfRef.current;
    if (!element) return;

    const [{ jsPDF }, canvas] = await Promise.all([
      import("jspdf"),
      html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      }),
    ]);

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
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

    pdf.save(name);
  };

  return (
    <button onClick={handleDownloadPdf} className={buttonPrimaryStyes}>
      Pobierz grafik w PDF
    </button>
  );
}
