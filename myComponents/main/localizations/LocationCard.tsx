import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mapsUrl, type Location, type LocationVenue } from "@/data/locations";
import { cardLiftHoverStyles } from "@/myComponents/motion/cardMotion";

type Props = {
  location: Location;
  venue: LocationVenue;
};

export default function LocationCard({ location, venue }: Props) {
  const description = venue.address
    ? [venue.name, venue.address].filter(Boolean).join(" · ")
    : `ul. ${location.address.street}`;

  return (
    <article
      className={`group relative isolate aspect-square overflow-clip rounded-md bg-[#151215] transform-gpu backface-hidden [clip-path:inset(0_round_1rem)] contain-[paint] ${cardLiftHoverStyles}`}
    >
      {venue.img && venue.hoverImg ? (
        <>
          <Image
            src={venue.img}
            alt={`${location.name} — ${description}`}
            fill
            quality={75}
            sizes="(max-width: 767px) calc(100vw - 4rem), (max-width: 1279px) calc(50vw - 3rem), 440px"
            className="object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.035] group-hover:opacity-0 motion-reduce:transition-none"
          />
          <Image
            src={venue.hoverImg}
            alt=""
            fill
            quality={75}
            sizes="(max-width: 767px) calc(100vw - 4rem), (max-width: 1279px) calc(50vw - 3rem), 440px"
            className="scale-[1.035] object-cover opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#ac4967,transparent_70%)]" />
      )}

      <div className="pointer-events-none absolute -inset-5 bg-[linear-gradient(180deg,rgba(10,8,10,0.02)_20%,rgba(10,8,10,0.20)_52%,rgba(10,8,10,0.94)_100%)]" />

      <div className="absolute left-0 top-0 inline-flex h-14 w-28 -rotate-8 items-center justify-center opacity-35 transition-[transform,opacity] duration-700 group-hover:rotate-0 group-hover:opacity-100 sm:h-16 sm:w-32">
        <Image
          src={location.logo}
          alt={location.logoAlt}
          fill
          sizes="(max-width: 639px) 112px, 128px"
          className="object-contain"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 ">
        <p className="text-sm leading-6 text-white/80 sm:text-base mb-1">
          {description}
        </p>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl uppercase leading-[1.08] tracking-[0.02em] text-white sm:text-2xl ">
              {location.name}
            </h3>
          </div>

          <Link
            href={mapsUrl(location, venue)}
            target="_blank"
            rel="noreferrer"
            aria-label={`Wyznacz trasę: ${location.name}, ${description}`}
            className="group/link ui-focus-ring mb-1 inline-flex shrink-0 items-center gap-1.5 rounded-sm py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white focus-visible:text-white"
          >
            Trasa
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
