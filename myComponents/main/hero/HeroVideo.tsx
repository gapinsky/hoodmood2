"use client";

import { getImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { useHeroVideoSource } from "./useHeroVideoSource";
import { useHeroVideoPlayback } from "./useHeroVideoPlayback";

type Props = { videoSrc: string; mobileVideoSrc: string; posterSrc: string; mobilePosterSrc: string };

const mediaClassName =
  "object-cover object-[center_10%] transition-opacity duration-700 motion-reduce:transition-none";

export default function HeroVideo({ videoSrc, mobileVideoSrc, posterSrc, mobilePosterSrc }: Props) {
  const source = useHeroVideoSource(videoSrc, mobileVideoSrc);
  const { videoRef, containerRef, status } = useHeroVideoPlayback(source);
  const isPlaying = status === "playing";
  const { props: desktopPoster } = getImageProps({ src: posterSrc, alt: "", fill: true, sizes: "100vw", loading: "eager" });
  const { props: mobilePoster } = getImageProps({ src: mobilePosterSrc, alt: "", fill: true, sizes: "100vw" });

  return (
    <div
      ref={containerRef}
      data-hero-video-state={status}
      className="absolute inset-0 -z-20"
      aria-hidden="true"
    >
      <picture>
        <source media="(width < 768px)" srcSet={mobilePoster.srcSet} sizes={mobilePoster.sizes} />
        {/* getImageProps preserves Next.js optimization while picture selects the matching poster before hydration. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...desktopPoster}
          alt=""
          fetchPriority="high"
          className={cn(mediaClassName, isPlaying ? "opacity-0" : "opacity-100")}
        />
      </picture>
      {source && (
        <video
          key={source}
          ref={videoRef}
          src={source}
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          className={cn(
            mediaClassName,
            "absolute inset-0 h-full w-full motion-reduce:hidden",
            isPlaying ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </div>
  );
}
