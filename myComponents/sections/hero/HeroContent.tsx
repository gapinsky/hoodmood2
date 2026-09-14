"use client";

import type { ReactNode } from "react";
import { useRevealInView } from "@/lib/hooks/useRevealInView";

export default function HeroContent({ children }: { children: ReactNode }) {
  const { ref, mounted, revealed } = useRevealInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={mounted ? (revealed ? "visible" : "hidden") : undefined}
      className="hero-stage px-4 sm:px-6 lg:px-12 xl:px-16"
    >
      {children}
    </div>
  );
}
