"use client";

import { useEffect, useRef, useState } from "react";
import { buttonSecondaryStyles } from "@/myComponents/common/ButtonSecondary";
import type { ClassesByDay } from "@/myComponents/pages/schedule/types";

type Props = { title: string; scheduleContent: ClassesByDay };

export default function DownloadSchedule({ title, scheduleContent }: Props) {
  const [status, setStatus] = useState<"idle" | "generating" | "error">("idle");
  const request = useRef<AbortController | null>(null);
  useEffect(() => () => { request.current?.abort(); }, []);

  async function download() {
    if (request.current) return;
    const controller = new AbortController();
    request.current = controller;
    setStatus("generating");
    try {
      const { default: exportSchedule } = await import("@/myComponents/pages/schedule/DownloadSchedulePdf");
      await exportSchedule(scheduleContent, title, controller.signal);
      if (!controller.signal.aborted) setStatus("idle");
    } catch (error) {
      if (!controller.signal.aborted) {
        setStatus("error");
        if (process.env.NODE_ENV === "development") console.error("PDF export failed", error);
      }
    } finally {
      request.current = null;
    }
  }

  return (
    <div>
      <button type="button" onClick={download} disabled={status === "generating"}
        aria-busy={status === "generating"} className={buttonSecondaryStyles}>
        {status === "generating" ? "Generowanie PDF…" : "Pobierz grafik w PDF"}
      </button>
      <p role="status" className="mt-2 text-sm text-muted-foreground">
        {status === "error" ? "Nie udało się wygenerować PDF. Spróbuj ponownie." : ""}
      </p>
    </div>
  );
}
