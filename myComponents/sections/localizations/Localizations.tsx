import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import SectionContent from "@/myComponents/common/SectionContent";
import { data, localizations } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import { cardLiftHoverStyles } from "@/myComponents/common/cardMotion";

export default function Localizations() {
  return (
    <SectionContainer>
      <SectionContent title={data.title} description={data.description} />

      <div className="grid grid-cols-1 gap-8 pb-3 md:grid-cols-3 md:gap-16">
        {localizations.map((item) => (
          <article
            key={item.slug}
            className={`group relative isolate aspect-[5/6] overflow-clip rounded-2xl bg-[#151215] transform-gpu [backface-visibility:hidden] [clip-path:inset(0_round_1rem)] [contain:paint] ${cardLiftHoverStyles}`}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              quality={75}
              sizes="(max-width: 767px) calc(100vw - 4rem), (max-width: 1279px) calc(33vw - 3rem), 400px"
              className="object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.035] group-hover:opacity-0 motion-reduce:transition-none"
            />
            <Image
              src={item.hoverImg}
              alt=""
              fill
              quality={75}
              sizes="(max-width: 767px) calc(100vw - 4rem), (max-width: 1279px) calc(33vw - 3rem), 400px"
              className="scale-[1.035] object-cover opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
            />

            <div className="pointer-events-none absolute -inset-5 bg-[linear-gradient(180deg,rgba(10,8,10,0.02)_20%,rgba(10,8,10,0.20)_52%,rgba(10,8,10,0.94)_100%)]" />

            <div className="absolute left-0 top-0 inline-flex h-14 w-28 -rotate-8 items-center justify-center opacity-35 transition-[transform,opacity] duration-700 group-hover:rotate-0 group-hover:opacity-100 sm:h-16 sm:w-32">
              <Image
                src="/assets/optimized/home/hoodmood-logo-transparent.webp"
                alt="Logo Hoodmood"
                fill
                sizes="(max-width: 639px) 112px, 128px"
                className="object-contain"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-anton text-3xl font-normal leading-normal text-white">
                    {item.title}
                  </h3>
                  <p className="text-lg text-white">{item.description}</p>
                </div>

                <Link
                  href={item.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Wyznacz trasę do lokalizacji ${item.title}`}
                  className="group/link ui-focus-ring mb-1 inline-flex shrink-0 items-center gap-1.5 rounded-sm py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white focus-visible:text-white"
                >
                  Trasa
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
