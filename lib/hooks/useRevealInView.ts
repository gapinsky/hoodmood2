"use client";

import { useEffect, useRef, useState } from "react";

type RevealOptions = {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

export function useRevealInView<T extends HTMLElement>({
  once = true,
  threshold = 0.12,
  rootMargin = "0px 0px -6% 0px",
}: RevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setRevealed(true);
      return;
    }

    const node = ref.current;

    if (!node || (once && revealed)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setRevealed(true);

        if (once) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [mounted, once, revealed, rootMargin, threshold]);

  return { ref, revealed, mounted };
}

