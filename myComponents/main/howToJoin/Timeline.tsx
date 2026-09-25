"use client";

import { steps } from "./data";
import TimelineStep from "./TimelineStep";
import { useTimelineProgress } from "./useTimelineProgress";

export default function Timeline() {
  const { timelineRef, lineRef, fillRef, markerRefs, reachedStep } = useTimelineProgress();

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
