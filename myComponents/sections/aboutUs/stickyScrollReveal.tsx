import Image from "next/image";
import { cn } from "@/lib/utils";

export type StickyScrollRevealItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type Props = {
  items: StickyScrollRevealItem[];
  className?: string;
};

export default function StickyScrollReveal({ items, className }: Props) {
  if (items.length === 0) return null;

  return (
    <div className={cn("space-y-14 lg:space-y-0", className)}>
      {items.map((item, index) => (
        <article
          key={item.title}
          className="grid items-start gap-7 border-b border-border pb-14 last:border-b-0 lg:min-h-[110vh] lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-14 lg:pb-24 xl:gap-20"
        >
          <div className="flex flex-col justify-center lg:min-h-screen lg:py-16">
            <span className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl leading-tight text-foreground sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              {item.description}
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:sticky lg:top-28 lg:aspect-auto lg:h-[min(68vh,720px)]">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              priority={index === 0}
              quality={90}
              sizes="(max-width: 1023px) calc(100vw - 4rem), (max-width: 1535px) 52vw, 760px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5" />
            <div className="absolute bottom-5 right-5 rounded-full bg-black/45 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              {index + 1} / {items.length}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
