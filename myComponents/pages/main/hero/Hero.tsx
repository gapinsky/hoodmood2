import { ChevronsDown } from "lucide-react";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import LocationBadge from "./LocationBadge";
import HeroVideo from "./HeroVideo";
import SmoothScrollLink from "./SmoothScrollLink";
import HeroContent from "./HeroContent";


export default function Hero() {
  return (
    <div className="relative h-svh isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-10 bg-black/10" />
      <HeroVideo
        videoSrc={'/assets/optimized/hero/hero-desktop-wide.mp4'}
        mobileVideoSrc={'/assets/optimized/hero/hero-mobile.mp4'}
        posterSrc={'/assets/videos/chairRotate-poster.jpg'}
      />

      <div className="mx-auto flex h-full max-w-380 items-center">
        <HeroContent>
          <div className="hero-enter">
            <LocationBadge />
          </div>

          <div className="mt-1 flex flex-col gap-3">
            <h1 className="max-w-[7ch] font-anton text-[2.9rem] font-black uppercase leading-[0.94] tracking-tighter text-white drop-shadow-[0_18px_38px_rgba(0,0,0,0.32)] sm:text-[4.25rem] md:text-[5.5rem] xl:text-[7.2rem]">
              <span className="inline-block ">
                Hoodmood
              </span>
            </h1>
          </div>

          <h2 className="hero-enter hero-enter-soft hero-enter-delay-2 mt-2  max-w-xl text-base font-bold leading-[1.7] tracking-[0.02em] text-white/90 sm:text-lg md:text-xl">
            <span className="block">Szkoła tańca i akrobatyki</span>
          </h2>
          <p className="hero-enter hero-enter-soft hero-enter-delay-3 mt-2  max-w-xl text-sm leading-[1.7] text-white/90 sm:text-[0.95rem] sm:leading-7">
            Zajęcia dla dzieci, młodzieży i dorosłych, w tym hip-hop, balet, taniec współczesny, KPOP, akrobatyka i lekcje indywidualne.
          </p>

          <div className="hero-enter hero-enter-soft hero-enter-delay-4 mt-6  flex flex-wrap gap-3">
            <ButtonSecondary
              href="/grafik/koszalin"
              className="border-white/30 bg-black/15 text-white hover:border-white/60 hover:bg-white/10"
            >
              Sprawdź grafik
            </ButtonSecondary>

            <ButtonSecondary
              href="/oferta/koszalin"
              className="border-white/30 bg-black/15 text-white hover:border-white/60 hover:bg-white/10"
            >
              Zobacz ofertę
            </ButtonSecondary>
          </div>
        </HeroContent>

        <SmoothScrollLink
          href="#offer"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 hover:cursor-pointer hover:text-white"
        >
          <span>Zobacz więcej</span>
          <ChevronsDown className="animate-bounce" />
        </SmoothScrollLink>
      </div>
    </div>
  );
}
