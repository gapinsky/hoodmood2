"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type ResponsiveImageProps = Omit<
  ImageProps,
  "alt" | "fill" | "height" | "onError" | "onLoad" | "src" | "width"
> & {
  src: string;
  alt: string;
  ariaLabel?: string;
  fallbackText?: string;
  className?: string;
  imageClassName?: string;
  skeletonClassName?: string;
};

export default function ResponsiveImage({
  src,
  alt,
  ariaLabel,
  fallbackText = "Nie udało się załadować obrazu.",
  className,
  imageClassName,
  skeletonClassName,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...imageProps
}: ResponsiveImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );

  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "relative isolate min-h-24 w-full overflow-hidden bg-black/6 dark:bg-white/7 rounded-sm",
        className,
      )}
    >
      {status === "loading" ? (
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 animate-pulse bg-black/6 transition-opacity duration-300 dark:bg-white/7 motion-reduce:animate-none motion-reduce:transition-none",
            skeletonClassName,
          )}
        />
      ) : null}

      {status === "error" ? (
        <div
          role="img"
          aria-label={ariaLabel ?? alt}
          className="absolute inset-0 flex items-center justify-center p-6 text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
        >
          {fallbackText}
        </div>
      ) : (
        <Image
          {...imageProps}
          src={src}
          alt={alt}
          aria-label={ariaLabel}
          fill
          sizes={sizes}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={cn(
            "object-cover transition-opacity duration-500 ease-out motion-reduce:transition-none",
            status === "loaded" ? "opacity-100" : "opacity-0",
            imageClassName,
          )}
        />
      )}
    </div>
  );
}
