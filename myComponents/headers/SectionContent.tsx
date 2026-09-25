"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useRevealInView } from "@/lib/hooks/useRevealInView";
import motion from "@/myComponents/motion/TextReveal.module.css";

type Props = {
  styles?: string;
  title: string;
  description?: ReactNode;
};

export default function SectionContent({
  styles,
  title,
  description,
}: Props) {
  const { ref, mounted, revealed } = useRevealInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={mounted ? (revealed ? "visible" : "hidden") : undefined}
      className={cn(
        "flex flex-col items-start gap-3 text-left",
        motion.root,
        styles,
      )}
    >
      <h2
        className={cn(
          "font-anton text-3xl uppercase leading-tight tracking-[0.08em] text-foreground sm:text-4xl md:text-4xl",
          motion.title,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-left text-base leading-7 text-muted-foreground md:text-lg",
            motion.description,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
