"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
  const activeItem = items[activeIndex];

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

  return (
    <>
      {activeItem.type === "VIDEO" ? (
        <InstagramVideo item={activeItem} caption={caption} />
      ) : (
        <Image
          src={activeItem.url}
          alt={caption}
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
        />
      )}

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
    </>
  );
}
