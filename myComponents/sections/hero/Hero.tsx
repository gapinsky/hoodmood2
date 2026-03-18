import SectionContainer from "@/myComponents/common/SectionContainer";
import Link from "next/link";
import { ChevronsDown, MapPin } from "lucide-react";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import LocationBadge from "./LocationBadge";
type HeroProps = {
  videoSrc?: string;
  posterSrc?: string;
  location?: string;
  title?: string;
  description?: string;
};

export default function Hero({
  videoSrc = "/videos/hero-bg.mp4",
  posterSrc = "/images/hero-poster.jpg",
  location = "Koszalin",
  title = "Hoodmood",
  description = "Zajęcia taneczne i akrobatyczne dla dzieci, młodzieży i dorosłych. Street dance, high heels, pierwszy taniec i akrobatyka — grupy dopasowane do wieku i poziomu.",
}: HeroProps) {
  return (
    <div className="min-h-screen   isolate  overflow-hidden  text-white bg-blue-900">
      <video
        className="absolute inset-0 h-full w-full object-cover -z-20"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="max-w-380  mx-auto min-h-screen flex items-center">
        <div className="px-8   lg:px-12 xl:px-16">
          <LocationBadge />

          <h1 className="max-w-[10ch] text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-[7rem]">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            {description}
          </p>

          <div className="mt-8 flex  gap-3 ">
            <ButtonSecondary href="/grafik/koszalin">
              Sprawdź grafik
            </ButtonSecondary>

            <ButtonPrimary href="#oferta">Poznaj ofertę</ButtonPrimary>
          </div>
        </div>

        <a
          href="#offer"
          className=" absolute bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 hover:text-white hover:cursor-pointer"
        >
          <span className="">Zobacz więcej</span>
          <ChevronsDown className="animate-bounce" />
        </a>
      </div>
    </div>
  );
}
