"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useRevealInView } from "@/lib/hooks/useRevealInView";
import motion from "@/myComponents/common/motion/TextReveal.module.css";

type Props = {
  styles?: string;
  title: string;
  description?: ReactNode;
  align?: "center" | "left";
};

export default function SectionContent({
  styles,
  title,
  description,
  align = "center",
}: Props) {
  const { ref, mounted, revealed } = useRevealInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={mounted ? (revealed ? "visible" : "hidden") : undefined}
      className={cn(
        "flex flex-col gap-3",
        align === "left" ? "items-start text-left" : "items-center text-center",
        motion.root,
        styles,
      )}
    >
      <h2
        className={cn(
          "font-anton text-3xl uppercase leading-48 tracking-[0.08em] text-foreground sm:text-4xl md:text-4xl",
          motion.title,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-7 text-muted-foreground md:text-lg",
            align === "left" ? "max-w-full text-left" : "max-w-full text-center md:max-w-[60%] lg:max-w-[40%]",
            motion.description,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
