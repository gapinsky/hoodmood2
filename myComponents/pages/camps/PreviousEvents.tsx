"use client";

import { useRevealInView } from "@/lib/hooks/useRevealInView";
import motion from "@/myComponents/common/motion/TextReveal.module.css";

type Props = {
  title: string;
  description: string;
  video: string;
  number: number;
};
export default function PreviousEvents({ title, description, video, number }: Props) {
  const { ref, mounted, revealed } = useRevealInView<HTMLDivElement>();

  return (
    <article className="grid grid-cols-1 items-center gap-7 border-b border-foreground/10 pb-12 last:border-0 last:pb-0 lg:grid-cols-[1.15fr_1fr] lg:gap-14 xl:gap-20">
      <div className="relative w-full aspect-video overflow-hidden rounded-md bg-muted ring-1 ring-foreground/10">
        <iframe
          className="absolute inset-0 h-full w-full  "
          src={video}
          title={`Film z wydarzenia: ${title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div
        ref={ref}
        data-reveal={mounted ? (revealed ? "visible" : "hidden") : undefined}
        className={motion.root}
      >
        <div className={motion.title}>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-(--brand-700) dark:text-(--brand-400)">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            {String(number).padStart(2, "0")} / Zakończone wydarzenie
          </p>
          <h3 className="mb-5 font-anton text-3xl uppercase leading-tight sm:text-4xl">{title}</h3>
        </div>
        <p className={`max-w-xl text-base leading-8 text-muted-foreground ${motion.description}`}>{description}</p>
      </div>
    </article>
  );
}
