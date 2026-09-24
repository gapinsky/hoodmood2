"use client";

import { useEffect, useRef, useState } from "react";

export function useTimelineProgress() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const markerRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [reachedStep, setReachedStep] = useState(-1);

  useEffect(() => {
    const timeline = timelineRef.current;
    const line = lineRef.current;
    const fill = fillRef.current;
    if (!timeline || !line || !fill) return;

    let frame: number | null = null;

    const update = () => {
      frame = null;
      const centers = markerRefs.current
        .filter((marker) => marker !== null)
        .map((marker) => {
          const rect = marker.getBoundingClientRect();
          return rect.top + rect.height / 2;
        });
      if (!centers.length) return;

      const start = centers[0];
      const end = centers[centers.length - 1];
      const readingLine = window.innerHeight * 0.6;
      const progress = Math.max(0, Math.min(1, (readingLine - start) / Math.max(1, end - start)));

      line.style.top = `${start - timeline.getBoundingClientRect().top}px`;
      line.style.height = `${end - start}px`;
      fill.style.transform = `scaleY(${progress})`;
      setReachedStep(centers.filter((center) => center <= readingLine).length - 1);
    };

    const scheduleUpdate = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(timeline);
    timeline.querySelectorAll("li").forEach((step) => observer.observe(step));
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("pageshow", scheduleUpdate);
    scheduleUpdate();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return { timelineRef, lineRef, fillRef, markerRefs, reachedStep };
}
