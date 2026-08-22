"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function HeroContent({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => setIsReady(true));
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, []);

  return (
    <div
      className={`hero-stage px-8 lg:px-12 xl:px-16 ${
        isReady ? "hero-content-ready" : ""
      }`}
    >
      {children}
    </div>
  );
}
