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
  images,
  localizations = [],
  id,
  variant = "grid",
}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isCarousel = variant === "carousel";

  if (!isCarousel) {
    return (
      <Link
        href={`/kadra/${id}`}
        aria-label={`Zobacz profil trenera: ${name}`}
        className="ui-focus-ring group block min-w-0 rounded-md text-left"
      >
        <div className="relative aspect-square overflow-hidden rounded-md bg-muted">
          {!imageLoaded && (
            <div aria-hidden="true" className="absolute inset-0 animate-pulse bg-foreground/5 motion-reduce:animate-none" />
          )}
          <Image
            src={images[0]}
            alt={name}
            fill
            sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 767px) 46vw, (max-width: 1519px) 30vw, 440px"
            onLoad={() => setImageLoaded(true)}
            className={`object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-safe:group-hover:scale-[1.035] motion-safe:group-focus-visible:scale-[1.035] ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
          <span className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full border border-white/25 bg-black/15 text-white backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-black group-focus-visible:bg-white group-focus-visible:text-black">
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </span>
        </div>
        <div className="border-b border-foreground/10 pb-5 pt-5">
          <h3 className="font-anton text-2xl uppercase leading-tight lg:text-3xl">{name}</h3>
          {localizations.length > 0 && (
            <p className="mt-3 text-sm text-muted-foreground">{localizations.join(" · ")}</p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      scroll
      href={`/kadra/${id}`}
      aria-label={`Zobacz profil trenera: ${name}`}
      className={`group relative block aspect-square w-full rounded-lg bg-[#151215] text-left transition duration-300 hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-500) focus-visible:ring-offset-2 isolate overflow-clip transform-gpu backface-hidden [clip-path:inset(0_round_0.5rem)] contain-[paint] ${cardLiftHoverStyles}`}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div
          aria-hidden="true"
          className="team-card-dim pointer-events-none absolute inset-0 z-20 bg-black/30  opacity-0 transition-opacity duration-300"
        />
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-black/8 transition-opacity duration-500 dark:bg-white/8 ${
            imageLoaded
              ? "pointer-events-none opacity-0"
              : "animate-pulse opacity-100"
          }`}
        />
        <Image
          src={images[0]}
          fill
          alt={name}
          sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 42vw, (max-width: 1535px) 32vw, 440px"
          className={`object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
            imageLoaded ? "opacity-100" : "opacity-0"
          } group-hover:scale-[1.035] group-focus-visible:scale-[1.035]`}
          onLoad={() => setImageLoaded(true)}
          quality={100}
          priority={false}
        />

        <div className="absolute left-0 top-0 z-10 inline-flex h-14 w-28 -rotate-8 items-center justify-center opacity-35 transition-[transform,opacity] duration-700 group-hover:rotate-0 group-hover:opacity-100 group-focus-visible:rotate-0 group-focus-visible:opacity-100 sm:h-16 sm:w-32">
          <Image
            src="/assets/optimized/home/hoodmood-logo-transparent.webp"
            alt="Logo Hoodmood"
            fill
            sizes="(max-width: 639px) 112px, 128px"
            className="object-contain"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,10,0)_34%,rgba(12,8,10,0.18)_68%,rgba(12,8,10,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
          <div className="flex items-center justify-between gap-3">
            <h2
              className="leading-tight text-xl"
            >
              {name}
            </h2>
            <ArrowUpRight className="size-5 shrink-0 text-white/72 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
}
