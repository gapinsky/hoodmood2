"use client";

import ButtonSecondary from "@/myComponents/common/buttons/ButtonSecondary";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function MasterclassFeature() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [posterStatus, setPosterStatus] = useState<"loading" | "loaded" | "error">("loading");
  const [videoStatus, setVideoStatus] = useState<"idle" | "starting" | "started">("idle");

  function startVideo() {
    const video = videoRef.current;
    if (!video) return;

    setVideoStatus("starting");
    void video.play().catch(() => setVideoStatus("idle"));
  }

  return (
    <section className="mx-auto max-w-380 px-4 sm:px-6 lg:px-12 xl:px-16">
      <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div className="max-w-md">
          <h2 className="font-anton text-5xl uppercase leading-[0.9] tracking-[0.02em] sm:text-7xl">
            Master Program
            <br />
            <span className="text-(--brand-700)">co to w ogóle jest?</span>
          </h2>
          <p className="mt-7 max-w-sm text-base leading-7 text-muted-foreground">
           Nowy instruktor. Nowa choreografia. Nowe
            doświadczenie.
          </p>
          <ButtonSecondary
            href="/oferta/koszalin"
            className="mt-8"
          >
            Sprawdź Master Program <ArrowUpRight className="size-4" />
          </ButtonSecondary>
        </div>

        <div className="relative mx-auto aspect-4/5 w-full max-w-120 overflow-hidden rounded-xl bg-black lg:max-w-none">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            playsInline
            preload="metadata"
            controls={videoStatus !== "idle"}
            onPlaying={() => setVideoStatus("started")}
          >
            <source src="/assets/videos/masterclass.mp4" type="video/mp4" />
          </video>
          {posterStatus !== "loaded" && videoStatus !== "started" && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 animate-pulse bg-muted motion-reduce:animate-none"
            />
          )}
          {videoStatus !== "started" && posterStatus !== "error" && (
            <Image
              src="/assets/videos/masterclass-poster.jpg"
              alt=""
              fill
              sizes="(max-width: 1023px) 480px, (max-width: 1519px) 59vw, 820px"
              onLoad={() => setPosterStatus("loaded")}
              onError={() => setPosterStatus("error")}
              className={`pointer-events-none object-cover transition-opacity duration-300 motion-reduce:transition-none ${posterStatus === "loaded" ? "opacity-100" : "opacity-0"}`}
            />
          )}
          {videoStatus === "idle" ? (
            <button
              type="button"
              onClick={startVideo}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/20 text-white transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
              aria-label="Odtwórz film Master Program z dźwiękiem"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-white text-black">
                <Play className="ml-1 size-6 fill-current" />
              </span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em]">
                Obejrzyj / 00:36
              </span>
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
