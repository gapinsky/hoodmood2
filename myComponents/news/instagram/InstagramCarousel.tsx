"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import InstagramVideo from "./InstagramVideo";
import type { InstagramMediaItem } from "./types";

export default function InstagramCarousel({
  items,
  caption,
}: {
  items: InstagramMediaItem[];
  caption: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? items.length - 1 : current - 1,
    );
  }

  function showNext() {
    setActiveIndex((current) =>
      current === items.length - 1 ? 0 : current + 1,
    );
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0];

    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    const touchStart = touchStartRef.current;
    const touch = event.changedTouches[0];

    touchStartRef.current = null;

    if (!touchStart) {
      return;
    }

    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;

    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX > 0) {
      showPrevious();
      return;
    }

    showNext();
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full w-full transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="relative h-full w-full shrink-0">
            {item.type === "VIDEO" ? (
              <InstagramVideo item={item} caption={caption} />
            ) : (
              <Image
                src={item.url}
                alt={caption}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Poprzednie zdjecie"
        onClick={showPrevious}
        className="absolute left-3 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white transition hover:bg-black/55"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Nastepne zdjecie"
        onClick={showNext}
        className="absolute right-3 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white transition hover:bg-black/55"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {items.map((item, index) => (
          <span
            key={item.id}
            className={`size-1.5 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-white/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
