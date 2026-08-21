"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      className={`group relative block aspect-square w-full rounded-lg bg-[#151215] text-left transition duration-300 hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)] focus-visible:ring-offset-2 ${
        isCarousel
          ? "isolate overflow-clip transform-gpu [backface-visibility:hidden] [clip-path:inset(0_round_0.5rem)] [contain:paint]"
          : "overflow-hidden bg-white/18 dark:bg-white/[0.05]"
      } ${cardLiftHoverStyles}`}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-black/[0.08] transition-opacity duration-500 dark:bg-white/[0.08] ${
            imageLoaded
              ? "pointer-events-none opacity-0"
              : "animate-pulse opacity-100"
          }`}
        />
        <Image
          src={images[0]}
          fill
          alt={name}
          sizes={
            isCarousel
              ? "(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 42vw, (max-width: 1535px) 32vw, 440px"
              : "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) 33vw, 25vw"
          }
          className={`object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
            imageLoaded ? "opacity-100" : "opacity-0"
          } ${
            isCarousel
              ? "group-hover:scale-[1.035] group-focus-visible:scale-[1.035]"
              : ""
          }`}
          onLoad={() => setImageLoaded(true)}
          quality={isCarousel ? 100 : undefined}
          priority={false}
        />

        {isCarousel ? (
          <div className="absolute left-0 top-0 z-10 inline-flex h-14 w-28 -rotate-8 items-center justify-center opacity-35 transition-[transform,opacity] duration-700 group-hover:rotate-0 group-hover:opacity-100 group-focus-visible:rotate-0 group-focus-visible:opacity-100 sm:h-16 sm:w-32">
            <Image
              src="/assets/optimized/home/hoodmood-logo-transparent.webp"
              alt="Logo Hoodmood"
              fill
              sizes="(max-width: 639px) 112px, 128px"
              className="object-contain"
            />
          </div>
        ) : null}

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,10,0)_34%,rgba(12,8,10,0.18)_68%,rgba(12,8,10,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
          <div className="flex items-center justify-between gap-3">
            <h2
              className={`leading-tight ${
                isCarousel
                  ? "text-sm sm:text-lg md:text-xl"
                  : "text-sm sm:text-base lg:text-4xl"
              }`}
            >
              {name}
            </h2>
            {isCarousel ? (
              <ArrowUpRight className="size-5 shrink-0 text-white/72 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:text-white" />
            ) : null}
          </div>
          {/* {specialization ? (
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/78">
              {specialization}
            </p>
          ) : null} */}
        </div>
        {!isCarousel ? (
          <>
            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/42 group-focus-visible:bg-black/42 [@media(hover:none)]:bg-black/42 [@media(pointer:coarse)]:bg-black/42" />
            <div className="absolute inset-0 z-20 flex items-center justify-center px-5 text-center text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100 [@media(pointer:coarse)]:opacity-100">
              Zobacz profil
            </div>
          </>
        ) : null}
      </div>
    </Link>
  );
}
