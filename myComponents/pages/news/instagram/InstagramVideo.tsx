"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

import type { InstagramMediaItem } from "./types";

export default function InstagramVideo({
  item,
  caption,
}: {
  item: InstagramMediaItem;
  caption: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  function togglePlayback() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
      return;
    }

    video.pause();
  }

  function toggleSound() {
    setIsMuted((current) => !current);
  }

  return (
    <div className="group/video relative h-full w-full">
      <video
        ref={videoRef}
        src={item.url}
        poster={item.thumbnailUrl}
        aria-label={caption}
        muted={isMuted}
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        className="h-full w-full object-cover"
      />

      <button
        type="button"
        aria-label={isPlaying ? "Pauza" : "Odtworz"}
        onClick={togglePlayback}
        className={`absolute left-1/2 top-1/2 z-10 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition hover:bg-black/60 ${
          isPlaying
            ? "opacity-0 group-hover/video:opacity-100"
            : "opacity-100"
        }`}
      >
        {isPlaying ? <Pause className="size-6" /> : <Play className="size-6" />}
      </button>

      <button
        type="button"
        aria-label={isMuted ? "Wlacz dzwiek" : "Wycisz"}
        onClick={toggleSound}
        className="absolute bottom-4 right-4 z-10 grid size-9 place-items-center rounded-full bg-black/55 text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition hover:bg-black/70"
      >
        {isMuted ? (
          <VolumeX className="size-4" />
        ) : (
          <Volume2 className="size-4" />
        )}
      </button>
    </div>
  );
}
