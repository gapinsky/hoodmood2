import Image from "next/image";
import { ChevronsDown } from "lucide-react";
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
  videoSrc = "/assets/videos/lightHeroVid.mp4",
  posterSrc = "/assets/videos/vidPoster.png",
  title = "Hoodmood",
  description = "Zajęcia dla dzieci, młodzieży i dorosłych, w tym hip-hop, breakdance, balet, taniec współczesny, KPOP, akrobatyka i lekcje indywidualne.",
}: HeroProps) {
  return (
    <div className="relative min-h-screen isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-10 bg-black/10" />
      <Image
        src={posterSrc}
        alt="Hoodmood - szkoła tańca i akrobatyki"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={posterSrc}
        controls={false}
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="mx-auto flex min-h-screen max-w-380 items-center">
        <div className="px-8 lg:px-12 xl:px-16">
          <LocationBadge />

          <div className="max-w-[10ch] font-anton text-5xl font-black uppercase leading-[0.9] tracking-wider text-white sm:text-6xl md:text-7xl xl:text-[7rem]">
            {title}
          </div>

          <h1 className="mt-6 max-w-xl text-sm font-bold leading-7 text-white/90 sm:text-lg">
            Szkoła tańca i akrobatyki w Koszalinie, Polanowie i Białym Borze
          </h1>
          <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            {description}
          </p>

          <div className="mt-8 flex gap-3">
            <ButtonSecondary href="/grafik/koszalin">
              Sprawdź grafik
            </ButtonSecondary>

            <ButtonPrimary href="/oferta/koszalin">Zobacz ofertę</ButtonPrimary>
          </div>
        </div>

        <a
          href="#offer"
          className="absolute bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 hover:cursor-pointer hover:text-white"
        >
          <span>Zobacz więcej</span>
          <ChevronsDown className="animate-bounce" />
        </a>
      </div>
    </div>
  );
}
