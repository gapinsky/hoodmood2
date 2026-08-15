"use client";

import { useEffect } from "react";

const awayMessage = "• HOODMOOD • Wróć do nas! 💃    ";
const titleScrollInterval = 220;

export default function AwayTabTitle() {
  useEffect(() => {
    let originalTitle = document.title;
    const titleCharacters = Array.from(awayMessage);
    let titleOffset = 0;
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
      titleOffset = 0;
      document.title = awayMessage;

      if (reducedMotion.matches) return;

      intervalId = window.setInterval(() => {
        titleOffset = (titleOffset + 1) % titleCharacters.length;
        document.title = [
          ...titleCharacters.slice(titleOffset),
          ...titleCharacters.slice(0, titleOffset),
        ].join("");
      }, titleScrollInterval);
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
