"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRevealInView } from "@/lib/hooks/useRevealInView";
import motion from "@/myComponents/common/motion/TextReveal.module.css";
import type { Step } from "./data";

export default function TimelineStep({ step, textOnLeft, reached, markerRef }: {
  step: Step;
  textOnLeft: boolean;
  reached: boolean;
  markerRef: (node: HTMLSpanElement | null) => void;
}) {
  const stepNumber = String(step.id).padStart(2, "0");
  const { ref, mounted, revealed } = useRevealInView<HTMLLIElement>();

  return (
    <li
      ref={ref}
      data-reveal={mounted ? (revealed ? "visible" : "hidden") : undefined}
      className={cn(
        motion.root,
        "relative grid items-center gap-6 pl-16 md:grid-cols-[1fr_5rem_1fr] md:gap-0 md:pl-0 lg:grid-cols-[1fr_8rem_1fr]",
      )}
    >
      <span
        ref={markerRef}
        aria-hidden="true"
        data-reached={reached}
        className={cn(
          "absolute left-5 top-6 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-sm font-semibold tabular-nums transition-colors duration-300 motion-reduce:transition-none md:left-1/2 md:top-1/2 md:size-12",
          reached ? "border-(--brand-600) bg-(--brand-600) text-white dark:border-(--brand-400) dark:bg-(--brand-400) dark:text-black" : "border-foreground/20 bg-background text-muted-foreground",
        )}
      >
        {stepNumber}
      </span>
      <div className={cn(motion.title, "md:row-start-1", textOnLeft ? "md:col-start-1 md:text-right" : "md:col-start-3 md:text-left")}>
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-(--brand-700) dark:text-(--brand-400)">Krok {stepNumber}</p>
        <h3 className="font-anton text-3xl uppercase leading-tight lg:text-4xl">{step.title}</h3>
        <p className={cn("mt-4 max-w-md text-base leading-7 text-muted-foreground", textOnLeft && "md:ml-auto")}>{step.description}</p>
      </div>
      <div className={cn(motion.description, "relative aspect-3/2 overflow-hidden rounded-md bg-muted md:row-start-1", textOnLeft ? "md:col-start-3" : "md:col-start-1")}>
        <Image
          src={step.image}
          alt={step.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 6rem), (max-width: 1519px) 42vw, 632px"
          className="object-cover"
        />
      </div>
    </li>
  );
}
