"use client";

import { useEffect, useRef, useState } from "react";

export default function PlayerEmbed() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldRenderIframe, setShouldRenderIframe] = useState(false);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setShouldRenderIframe(true);
        observer.disconnect();
      },
      {
        rootMargin: "240px 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl"
    >
      {shouldRenderIframe ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://www.youtube.com/embed/cRFh3wTlvas?si=8hGkj0z5HXb9CL3K"
          title="Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 ui-surface-soft" />
      )}
    </div>
  );
}
