"use client";

import { useEffect, useRef, useState } from "react";

type VideoStatus = "static" | "loading" | "playing" | "failed";

export function useHeroVideoPlayback(source: string | null) {
  const [status, setStatus] = useState<VideoStatus>("static");
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStatus(source ? "loading" : "static");
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container || !source) return;

    let disposed = false;
    let visible = false;
    let failed = false;
    let playPending = false;

    const shouldPlay = () => visible && document.visibilityState === "visible";

    const handleError = () => {
      if (disposed) return;
      failed = true;
      setStatus("failed");
    };

    const synchronize = async () => {
      if (disposed || failed) return;

      if (!shouldPlay()) {
        video.pause();
        return;
      }

      // Only one play request may be in flight while the video is loading.
      if (playPending || !video.paused) return;
      playPending = true;

      try {
        await video.play();
      } catch (error) {
        // Pausing or changing the source can interrupt a pending play request.
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          handleError();
        }
      } finally {
        playPending = false;
      }
    };

    const handlePlaying = () => {
      if (disposed) return;

      if (!shouldPlay()) {
        video.pause();
        return;
      }

      setStatus("playing");
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      void synchronize();
    });

    observer.observe(container);
    document.addEventListener("visibilitychange", synchronize);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("error", handleError);
    video.addEventListener("canplay", synchronize);

    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", synchronize);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("error", handleError);
      video.removeEventListener("canplay", synchronize);
      video.pause();
    };
  }, [source]);

  return { videoRef, containerRef, status };
}
