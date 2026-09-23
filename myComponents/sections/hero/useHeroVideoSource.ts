"use client";

import { useEffect, useState } from "react";

type Connection = EventTarget & { saveData?: boolean };

export function useHeroVideoSource(videoSrc: string, mobileVideoSrc: string) {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = matchMedia("(max-width: 768px)");
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    const update = () => {
      if (motion.matches || connection?.saveData) {
        setSource(null);
        return;
      }

      setSource(mobile.matches ? mobileVideoSrc : videoSrc);
    };
    update();
    motion.addEventListener("change", update);
    mobile.addEventListener("change", update);
    connection?.addEventListener("change", update);
    return () => {
      motion.removeEventListener("change", update);
      mobile.removeEventListener("change", update);
      connection?.removeEventListener("change", update);
    };
  }, [videoSrc, mobileVideoSrc]);

  return source;
}
