"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stages = [
  {
    title: "SERIOUS",
    image: "/assets/images/timeline/serious.jpeg",
    alt: "Ekipa Hoodmood w poważnej pozie",
  },
  {
    title: "NOT REALLY",
    image: "/assets/images/timeline/notReally.jpeg",
    alt: "Ekipa Hoodmood żartująca przed aparatem",
  },
  {
    title: "THAT'S MORE LIKE IT",
    image: "/assets/images/timeline/moreLikeThis.jpeg",
    alt: "Ekipa Hoodmood w luźnej pozie",
  },
  {
    title: "HOODM00D",
    image: "/assets/images/timeline/normal.jpeg",
    alt: "Cała ekipa Hoodmood razem",
  },
];

export default function CrewStory() {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    if (!section || !panel) return;

    let frameId: number | null = null;

    const updateStage = () => {
      frameId = null;
      const stickyTop = parseFloat(getComputedStyle(panel).top) || 0;
      const scrollDistance = section.offsetHeight - panel.offsetHeight;
      const progress =
        (stickyTop - section.getBoundingClientRect().top) /
        Math.max(1, scrollDistance);

      // Every stage gets an equal part of the distance while the panel is pinned.
      setActiveStage(
        Math.min(stages.length - 1, Math.max(0, Math.floor(progress * stages.length))),
      );
    };

    const scheduleUpdate = () => {
      if (frameId === null) frameId = requestAnimationFrame(updateStage);
    };

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(section);
    resizeObserver.observe(panel);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("pageshow", scheduleUpdate);
    scheduleUpdate();

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Meet the crew"
      className="relative mx-auto max-w-380 px-4 sm:px-6 lg:px-12 xl:px-16"
    >
      <div
        ref={panelRef}
        className="sticky top-24 lg:top-28 lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16"
      >
        <div className="mb-6 lg:hidden">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            0{activeStage + 1} / Meet the crew
          </p>
          <h2 className="mt-2 grid font-anton text-4xl uppercase leading-none text-foreground">
            {stages.map((stage, index) => (
              <span
                key={stage.title}
                aria-hidden={activeStage !== index}
                className={`col-start-1 row-start-1 transition-opacity duration-300 motion-reduce:transition-none ${
                  activeStage === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {stage.title}
              </span>
            ))}
          </h2>
        </div>

        <div className="hidden lg:block lg:py-10">
          <p className="mb-8 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Różne twarze, różne style - ta sama misja!
          </p>
          <div className="space-y-3">
            {stages.map((stage, index) => (
              <p
                key={stage.title}
                aria-current={activeStage === index ? "step" : undefined}
                className={`font-anton text-4xl uppercase leading-none transition-colors duration-300 motion-reduce:transition-none xl:text-6xl ${
                  activeStage === index
                    ? "text-foreground"
                    : "text-foreground/20"
                }`}
              >
                <span className="mr-3 text-xs align-middle font-semibold tracking-[0.16em]">
                  0{index + 1}
                </span>
                {stage.title}
              </p>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[max(8rem,calc(100svh-15rem))] overflow-hidden rounded-md lg:aspect-auto lg:h-[60svh] lg:max-w-none">
          {stages.map((stage, index) => (
            <Image
              key={stage.title}
              src={stage.image}
              alt={stage.alt}
              aria-hidden={activeStage !== index}
              fill
              sizes="(max-width: 1023px) calc(100vw - 2rem), (max-width: 1519px) 58vw, 810px"
              className={`object-cover transition-[opacity,transform] duration-400 ease-out motion-reduce:transition-none ${
                activeStage === index
                  ? "scale-100 opacity-100"
                  : "scale-[1.025] opacity-0"
              }`}
            />
          ))}
          <span className="absolute bottom-5 left-5 rounded bg-black/40 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
            {String(activeStage + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div aria-hidden="true" className="h-[280svh]" />
    </section>
  );
}
