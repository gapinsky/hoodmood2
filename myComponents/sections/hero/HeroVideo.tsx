"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  videoSrc: string;
  mobileVideoSrc: string;
  posterSrc: string;
};

export default function HeroVideo({
  videoSrc,
  mobileVideoSrc,
  posterSrc,
}: HeroVideoProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const idleCallback = window.requestIdleCallback?.(
      () => setShouldLoadVideo(true),
      { timeout: 2000 },
    );

    const timeoutId =
      idleCallback === undefined
        ? window.setTimeout(() => setShouldLoadVideo(true), 1200)
        : undefined;

    return () => {
      if (idleCallback !== undefined) {
        window.cancelIdleCallback?.(idleCallback);
      }

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.controls = false;
    video.disablePictureInPicture = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.removeAttribute("controls");

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Safari can reject autoplay during transient page states; keep quiet.
      });
    }
  }, [shouldLoadVideo]);

  if (!shouldLoadVideo) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 -z-20 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      webkit-playsinline=""
      preload="none"
      poster={posterSrc}
      controls={false}
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      aria-hidden="true"
    >
      <source media="(max-width: 768px)" src={mobileVideoSrc} type="video/mp4" />
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
