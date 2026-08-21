import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import SectionContent from "../../common/SectionContent";
import { data, offer } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import { cardLiftHoverStyles } from "@/myComponents/common/cardMotion";

const desktopSpans = [
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-6",
  "lg:col-span-6",
];

export default function Offer() {
  return (
    <div id="offer" className="scroll-mt-36">
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {offer.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              aria-label={`Przejdź do: ${item.title}`}
              className={`group relative isolate min-h-90 overflow-clip rounded-2xl bg-[#151215] transform-gpu [backface-visibility:hidden] [clip-path:inset(0_round_1rem)] [contain:paint] md:min-h-100 lg:min-h-50 ${desktopSpans[index]} ${cardLiftHoverStyles}`}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                quality={75}
                sizes="(max-width: 767px) calc(100vw - 6rem), (max-width: 1023px) calc(50vw - 4rem), 50vw"
                className="object-cover transition-[opacity,transform,filter] duration-700 ease-out group-hover:scale-[1.035] group-hover:opacity-0 group-hover:grayscale-0 motion-reduce:transition-none"
              />
              <Image
                src={item.hoverImg}
                alt=""
                fill
                quality={75}
                sizes="(max-width: 767px) calc(100vw - 6rem), (max-width: 1023px) calc(50vw - 4rem), 50vw"
                className="scale-[1.035] object-cover opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
              />

              <div className="pointer-events-none absolute -inset-5 bg-[linear-gradient(180deg,rgba(10,8,10,0.04)_20%,rgba(10,8,10,0.22)_52%,rgba(10,8,10,0.94)_100%)]" />

              <div className="absolute left-0 top-0 inline-flex h-14 w-28 -rotate-8 items-center justify-center rounded-lg opacity-35 transition-[transform,opacity] duration-700 group-hover:rotate-0 group-hover:opacity-100 sm:h-16 sm:w-32">
                <Image
                  src={"/assets/optimized/home/hoodmood-logo-transparent.webp"}
                  alt="logo hoodmood"
                  fill
                  sizes="(max-width: 639px) 112px, 128px"
                  className="object-contain "
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="flex items-end justify-between gap-4">
                  <h4 className=" font-anton mb-4 text-4xl uppercase leading-[0.92] tracking-wide text-white sm:text-4xl">
                    {item.title}
                  </h4>
                  <ArrowUpRight className="mb-1 size-7 shrink-0 text-white/65 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                </div>
                <p className=" max-w-2xl  text-sm  text-white/80">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
