"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = { videoSrc: string; mobileVideoSrc: string; posterSrc: string };
type Connection = EventTarget & { saveData?: boolean };

export default function HeroVideo({ videoSrc, mobileVideoSrc, posterSrc }: Props) {
  const [source, setSource] = useState<string | null>(null);
  const [status, setStatus] = useState<"static" | "loading" | "playing" | "failed">("static");
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = matchMedia("(max-width: 768px)");
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    const update = () => {
      // Connection estimates can change without changing the selected source.
      // Keep the current video mounted unless its URL or playback preference changes.
      setSource(motion.matches || connection?.saveData
        ? null
        : mobile.matches ? mobileVideoSrc : videoSrc);
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

  useEffect(() => {
    setStatus(source ? "loading" : "static");
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container || !source) return;
    let disposed = false;
    let visible = false;
    let failed = false;
    let pending = false;
    const synchronize = () => {
      if (disposed || failed) return;
      if (!visible || document.visibilityState !== "visible") { video.pause(); return; }
      if (pending || !video.paused) return;
      pending = true;
      video.play().catch((error: DOMException) => {
        if (disposed || error.name === "AbortError") return;
        failed = true;
        setStatus("failed");
      }).finally(() => { pending = false; });
    };
    const playing = () => {
      if (disposed) return;
      if (!visible || document.visibilityState !== "visible") video.pause();
      else setStatus("playing");
    };
    const error = () => { failed = true; setStatus("failed"); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      synchronize();
    });
    observer.observe(container);
    document.addEventListener("visibilitychange", synchronize);
    video.addEventListener("playing", playing);
    video.addEventListener("error", error);
    video.addEventListener("canplay", synchronize);
    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", synchronize);
      video.removeEventListener("playing", playing);
      video.removeEventListener("error", error);
      video.removeEventListener("canplay", synchronize);
      video.pause();
    };
  }, [source]);

  return (
    <div ref={containerRef} data-hero-video-state={status} className="absolute inset-0 -z-20" aria-hidden="true">
      <Image src={posterSrc} alt="" fill preload sizes="100vw"
        className={`object-cover object-[center_10%] transition-opacity duration-700 motion-reduce:transition-none ${status === "playing" ? "opacity-0" : "opacity-100"}`} />
      {source && <video key={source} ref={videoRef} src={source} muted loop playsInline preload="auto"
        disablePictureInPicture controls={false}
        className={`absolute inset-0 h-full w-full object-cover object-[center_10%] transition-opacity duration-700 motion-reduce:transition-none motion-reduce:hidden ${status === "playing" ? "opacity-100" : "opacity-0"}`} />}
    </div>
  );
}
