import SectionContainer from "@/myComponents/common/SectionContainer";
import Link from "next/link";
import { ChevronsDown, MapPin } from "lucide-react";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5" />
            {location}
          </div>

          <h1 className="max-w-[10ch] text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-[7rem]">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonSecondary href="/grafik/koszalin">
              Sprawdź grafik
            </ButtonSecondary>

            <ButtonPrimary href="#oferta">Poznaj ofertę</ButtonPrimary>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
          <span>Zobacz więcej</span>
          <ChevronsDown />
        </div>
      </div>
    </div>
  );
}
