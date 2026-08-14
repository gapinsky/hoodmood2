"use client";

import { useEffect } from "react";

const awayMessage = "• HOODMOOD • Wróć do nas! 💃    ";

export default function AwayTabTitle() {
  useEffect(() => {
    let originalTitle = document.title;
    let animatedTitle = awayMessage;
    let intervalId: number | undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    function stopAnimation() {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
        intervalId = undefined;
      }
    }

    function startAnimation() {
      stopAnimation();
      animatedTitle = awayMessage;
      document.title = animatedTitle;

      if (reducedMotion.matches) return;

      intervalId = window.setInterval(() => {
        animatedTitle = `${animatedTitle.slice(1)}${animatedTitle[0]}`;
        document.title = animatedTitle;
      }, 1);
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        originalTitle = document.title;
        startAnimation();
        return;
      }

      stopAnimation();
      document.title = originalTitle;
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAnimation();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
