"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

import { cn } from "@/lib/utils";
import { cardLiftHoverStyles } from "@/myComponents/common/cardMotion";
import { useRevealInView } from "@/lib/hooks/useRevealInView";

type Props = {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  revealDelay: number;
};

export default function ResponsiveImage({
  src,
  alt,
  className,
  sizes,
  revealDelay,
}: Props) {
  const { ref, mounted, revealed } = useRevealInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -4% 0px",
  });
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );

  return (
    <div
      className={cn(
        "relative isolate aspect-auto min-h-24 w-full rounded-sm",
        className,
        cardLiftHoverStyles,
      )}
    >
      <div
        ref={ref}
        data-reveal={mounted ? (revealed ? "visible" : "hidden") : "visible"}
        style={{ "--reveal-delay": `${revealDelay}ms` } as CSSProperties}
        className="reveal-base reveal-item absolute inset-0 overflow-hidden rounded-[inherit] bg-black/6 dark:bg-white/7 motion-reduce:transition-none"
      >
        {status === "loading" ? (
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-pulse bg-black/6 transition-opacity duration-300 dark:bg-white/7 motion-reduce:animate-none motion-reduce:transition-none"
          />
        ) : null}

        {status === "error" ? (
          <div
            role="img"
            aria-label={alt}
            className="absolute inset-0 flex items-center justify-center p-6 text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
          >
            Nie udało się załadować obrazu.
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
            className={cn(
              "object-cover transition-opacity duration-500 ease-out motion-reduce:transition-none",
              status === "loaded" ? "opacity-100" : "opacity-0",
            )}
          />
        )}
      </div>
    </div>
  );
}
