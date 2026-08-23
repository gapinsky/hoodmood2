"use client";

import Image from "next/image";
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
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      setShouldLoadVideo(true);
      return;
    }

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

  const handleVideoReady = () => {
    const video = videoRef.current;
    setIsVideoReady(true);

    if (video?.paused) {
      video.play().catch(() => {
        // Poster remains a visual fallback when the browser blocks autoplay.
      });
    }
  };

  return (
    <>
      <Image
        src={posterSrc}
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        aria-hidden="true"
        className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${
          isVideoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {shouldLoadVideo ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline=""
          preload="auto"
          poster={posterSrc}
          onCanPlay={handleVideoReady}
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          aria-hidden="true"
        >
          <source
            media="(max-width: 768px)"
            src={mobileVideoSrc}
            type="video/mp4"
          />
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}
