"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { steps, type Step } from "./data";
import { useRevealInView } from "@/lib/hooks/useRevealInView";
import motion from "@/myComponents/common/motion/TextReveal.module.css";

export default function Timeline() {
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
      const markers = markerRefs.current.filter((node) => node !== null);
      if (!markers.length) return;
      const centers = markers.map((node) => {
        const rect = node.getBoundingClientRect();
        return rect.top + rect.height / 2;
      });
      const start = centers[0];
      const end = centers[centers.length - 1];
      const readingLine = window.innerHeight * 0.6;
      const progress = Math.max(0, Math.min(1, (readingLine - start) / Math.max(1, end - start)));

      // Measure the real marker positions so the line also follows wrapped mobile content.
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

  return (
    <div ref={timelineRef} className="relative isolate">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div ref={lineRef} className="absolute left-5 w-0.5 -translate-x-1/2 bg-foreground/30 md:left-1/2">
          <div ref={fillRef} style={{ transform: "scaleY(0)" }} className="h-full w-full origin-top bg-(--brand-600) dark:bg-(--brand-400)" />
        </div>
      </div>
      <ol aria-label="Jak zapisać się na zajęcia — krok po kroku" className="relative z-10 space-y-14 md:space-y-20 lg:space-y-28">
        {steps.map((step, index) => (
          <TimelineStep
            key={step.id}
            step={step}
            textOnLeft={index % 2 === 0}
            reached={index <= reachedStep}
            markerRef={(node) => { markerRefs.current[index] = node; }}
          />
        ))}
      </ol>
    </div>
  );
}

function TimelineStep({ step, textOnLeft, reached, markerRef }: {
  step: Step;
  textOnLeft: boolean;
  reached: boolean;
  markerRef: (node: HTMLSpanElement | null) => void;
}) {
  const { ref, mounted, revealed } = useRevealInView<HTMLLIElement>();

  return (
          <li ref={ref} data-reveal={mounted ? (revealed ? "visible" : "hidden") : undefined} className={cn(motion.root, "relative grid items-center gap-6 pl-16 md:grid-cols-[1fr_5rem_1fr] md:gap-0 md:pl-0 lg:grid-cols-[1fr_8rem_1fr]")}>
            <span
              ref={markerRef}
              aria-hidden="true"
              data-reached={reached}
              className={cn(
                "absolute left-5 top-6 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-sm font-semibold tabular-nums transition-colors duration-300 motion-reduce:transition-none md:left-1/2 md:top-1/2 md:size-12",
                reached ? "border-(--brand-600) bg-(--brand-600) text-white dark:border-(--brand-400) dark:bg-(--brand-400) dark:text-black" : "border-foreground/20 bg-background text-muted-foreground",
              )}
            >
              {String(step.id).padStart(2, "0")}
            </span>
            <div className={cn(motion.title, "md:row-start-1", textOnLeft ? "md:col-start-1 md:text-right" : "md:col-start-3 md:text-left")}>
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-(--brand-700) dark:text-(--brand-400)">Krok {String(step.id).padStart(2, "0")}</p>
              <h3 className="font-anton text-3xl uppercase leading-tight lg:text-4xl">{step.title}</h3>
              <p className={cn("mt-4 max-w-md text-base leading-7 text-muted-foreground", textOnLeft && "md:ml-auto")}>{step.description}</p>
            </div>
            <div className={cn(motion.description, "relative aspect-3/2 overflow-hidden rounded-md bg-muted md:row-start-1", textOnLeft ? "md:col-start-3" : "md:col-start-1")}>
              <Image src={step.image} alt={step.imageAlt} fill sizes="(max-width: 767px) calc(100vw - 6rem), (max-width: 1519px) 42vw, 632px" className="object-cover" />
            </div>
          </li>
  );
}
