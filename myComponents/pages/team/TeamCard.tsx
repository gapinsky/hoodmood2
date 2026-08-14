"use client";

import Image from "next/image";
import Link from "next/link";
import { cardLiftHoverStyles } from "@/myComponents/common/cardMotion";
import { useState } from "react";

type Props = {
  name: string;
  role?: string;
  styles?: string[];
  images: string[];
  localizations?: string[];
  id: string;
  variant?: "grid" | "carousel";
};

export default function TeamCard({
  name,
  role,
  styles = [],
  images,
  localizations: _localizations,
  id,
  variant = "grid",
}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const specialization = role || styles[0];
  const isCarousel = variant === "carousel";

  return (
    <Link
      scroll
      href={`/kadra/${id}`}
      aria-label={`Zobacz profil trenera: ${name}`}
      className={`group relative block aspect-square w-full overflow-hidden rounded-lg bg-white/18 text-left transition duration-300 hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)] focus-visible:ring-offset-2 dark:bg-white/[0.05] ${cardLiftHoverStyles}`}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-black/[0.08] transition-opacity duration-500 dark:bg-white/[0.08] ${
            imageLoaded ? "pointer-events-none opacity-0" : "animate-pulse opacity-100"
          }`}
        />
        <Image
          src={images[0]}
          fill
          alt={name}
          sizes={
            isCarousel
              ? "(max-width: 767px) calc(100vw - 4rem), (max-width: 1279px) calc(33vw - 3rem), 280px"
              : "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) 33vw, 25vw"
          }
          className={`object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          quality={isCarousel ? 60 : undefined}
          priority={false}
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,10,0)_34%,rgba(12,8,10,0.18)_68%,rgba(12,8,10,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
          <h2
            className={`leading-tight ${
              isCarousel ? "text-sm sm:text-base" : "text-sm sm:text-base lg:text-4xl"
            }`}
          >
            {name}
          </h2>
          {specialization ? (
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/78">
              {specialization}
            </p>
          ) : null}
        </div>

        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/42 group-focus-visible:bg-black/42 [@media(hover:none)]:bg-black/42 [@media(pointer:coarse)]:bg-black/42" />
        <div className="absolute inset-0 z-20 flex items-center justify-center px-5 text-center text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100 [@media(pointer:coarse)]:opacity-100">
          Zobacz profil
        </div>
      </div>
    </Link>
  );
}
