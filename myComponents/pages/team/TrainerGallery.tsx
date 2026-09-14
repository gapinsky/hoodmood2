import Image from "next/image";
import Link from "next/link";
import { Instagram, ArrowUpRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { Trainer } from "@/app/kadra/data";

export default function TrainerGallery({ trainer }: { trainer: Pick<Trainer, "name" | "images" | "instagram"> }) {
  return (
<div className="min-w-0 lg:sticky lg:top-28">
              <Carousel
                className="w-full"
                aria-label={`Zdjęcia: ${trainer.name}`}
                opts={{ align: "start", loop: trainer.images.length > 1 }}
              >
                <CarouselContent>
                  {trainer.images.map((image, index) => (
                    <CarouselItem key={image + index}>
                      <div className="relative aspect-square overflow-hidden rounded-md bg-muted ring-1 ring-inset ring-foreground/10">
                        <Image
                          src={image}
                          alt={`${trainer.name} — zdjęcie ${index + 1}`}
                          fill
                          priority={index === 0}
                          quality={100}
                          sizes="(max-width: 1023px) calc(100vw - 2rem), (max-width: 1519px) 46vw, 660px"
                          className="object-cover"
                        />
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-5 text-white sm:px-7">
                          <span className="text-xs uppercase tracking-[0.18em]">Meet the crew</span>
                          <span className="text-xs tabular-nums tracking-[0.16em]">
                            {String(index + 1).padStart(2, "0")} / {String(trainer.images.length).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {trainer.images.length > 1 && (
                  <>
                    <CarouselPrevious aria-label="Poprzednie zdjęcie" className="left-4 cursor-pointer [&_svg]:text-current" />
                    <CarouselNext aria-label="Następne zdjęcie" className="right-4 cursor-pointer [&_svg]:text-current" />
                  </>
                )}
              </Carousel>
              {trainer.instagram && trainer.instagram !== "TBA" && (
                <Link
                  href={trainer.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Instagram: ${trainer.name} (otwiera nową kartę)`}
                  className="ui-focus-ring group mt-4 flex items-center gap-3 rounded-md border border-foreground/10 bg-foreground/2.5 px-5 py-4 text-sm transition-colors hover:bg-foreground/5"
                >
                  <Instagram className="size-5 text-(--brand-600) dark:text-(--brand-400)" aria-hidden="true" />
                  Zajrzyj na Instagram
                  <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              )}
            </div>
  );
}
