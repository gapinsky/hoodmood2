import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";

export type PriceItem = {
  name: string;
  price: string;
  frequency: string;
  trending: boolean;
  age: string;
  category:
    | "kidsDance"
    | "youngGeneration"
    | "ballet"
    | "acrobatics"
    | "breakdance"
    | "partnerAcro"
    | "modernDance"
    | "kpop"
    | "hiphop"
    | "adults"
    | "foundation"
    | "individual"
    | "wedding";
};

export type PricingTableProps = {
  title?: string;
  items: PriceItem[];
  ctaHref?: string;
};

const desktopGrid =
  "md:grid-cols-[minmax(0,1.6fr)_90px_120px_100px_120px] lg:grid-cols-[minmax(0,1.8fr)_140px_180px_140px_140px_140px]";

export default function PricingTable({
  title,
  items,
  ctaHref = "/kontakt",
}: PricingTableProps) {
  return (
    <section className="w-full">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className=" text-white text-lg">{title}</h2>
        </div>

        <div className="overflow-hidden rounded-2xl border  backdrop-blur-sm">
          <div
            className={`hidden ${desktopGrid} items-center gap-4 border-b  px-5 py-3 text-xs font-medium uppercase tracking-[0.18em]  md:grid text-muted-foreground`}
          >
            <span className=" ">Rodzaj zajęć</span>
            <span className=" text-center">Zaawansowanie</span>
            <span className=" text-center">Wiek</span>
            <span className=" text-center">Częstotliwość</span>
            <span className=" text-center">Cena</span>
          </div>

          <div className="divide-y divide-white/10">
            {items.length === 0 && (
              <p className="text-center py-4 max-w-md mx-auto leading-relaxed text-balance">
                Nie znaleziono zajęć pasujących do wprowadzonego hasła.
              </p>
            )}
            {items.map((item, index) => (
              <article
                key={`${item.name}-${item.age}-${index}`}
                className={`group grid gap-4 px-4 py-4 transition-colors md:px-5 ${desktopGrid} md:items-center hover:bg-black/10 dark:hover:bg-white/5`}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium  sm:text-[15px]">
                      {item.name}
                    </p>
                    {item.trending && (
                      <Badge
                        variant="secondary"
                        className="rounded-full border-0 bg-pink-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-pink-300 hover:bg-pink-500/15"
                      >
                        Najczęściej wybierane
                      </Badge>
                    )}
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-md md:hidden text-muted-foreground">
                    <span className="">{item.age || "Bez limitu wieku"}</span>
                    <span className="">{item.age || "Bez limitu wieku"}</span>
                    <span className="inline-flex items-center ">
                      {item.frequency}{" "}
                      {item.name.includes("+") ? (
                        <HoverCard key="bottom" openDelay={20} closeDelay={20}>
                          <HoverCardTrigger>
                            <button type="button" className="px-1">
                              <Info className="w-4 text-muted-foreground" />
                            </button>
                          </HoverCardTrigger>
                          <HoverCardContent
                            className=" text-sm "
                            align="center"
                          >
                            Na każde zajęcia z pakietu można wejść maksymalnie{" "}
                            {item.frequency.replace(/\D/g, "")} raz(y) w
                            tygodniu.
                          </HoverCardContent>
                        </HoverCard>
                      ) : item.frequency !== "-" ? (
                        <HoverCard key="bottom" openDelay={20} closeDelay={20}>
                          <HoverCardTrigger>
                            <button type="button" className="px-1">
                              <Info className="w-4 text-muted-foreground" />
                            </button>
                          </HoverCardTrigger>

                          <HoverCardContent className="text-sm" align="center">
                            Na wybrane zajęcia można wejść maksymalnie{" "}
                            {item.frequency.replace(/\D/g, "")} raz(y) w
                            tygodniu.
                          </HoverCardContent>
                        </HoverCard>
                      ) : null}
                    </span>
                    <span className="font-semibold ">{item.price}</span>
                  </div>
                </div>

                <div className="hidden text-sm  md:block  text-center">
                  {item.age || "—"}
                </div>
                <div className="hidden text-sm  md:block  text-center">
                  {item.age || "—"}
                </div>

                <div className="hidden text-sm  md:block  text-center">
                  {item.frequency}

                  {item.name.includes("+") ? (
                    <HoverCard key="bottom" openDelay={20} closeDelay={20}>
                      <HoverCardTrigger>
                        <button type="button" className="px-2">
                          <Info className="w-4 text-muted-foreground" />
                        </button>
                      </HoverCardTrigger>

                      <HoverCardContent className="text-sm md:hidden">
                        Na każde zajęcia z pakietu można wejść maksymalnie{" "}
                        {item.frequency} raz(y) w tygodniu.
                      </HoverCardContent>

                      <HoverCardContent
                        className="hidden text-sm md:block"
                        align="center"
                      >
                        Na każde zajęcia z pakietu można wejść maksymalnie{" "}
                        {item.frequency.replace(/\D/g, "")} raz(y) w tygodniu.
                      </HoverCardContent>
                    </HoverCard>
                  ) : item.frequency !== "-" ? (
                    <HoverCard key="bottom" openDelay={20} closeDelay={20}>
                      <HoverCardTrigger>
                        <button type="button" className="px-2">
                          <Info className="w-4 text-muted-foreground" />
                        </button>
                      </HoverCardTrigger>

                      <HoverCardContent className="text-sm md:hidden">
                        Na wybrane zajęcia można wejść maksymalnie{" "}
                        {item.frequency.replace(/\D/g, "")} raz(y) w tygodniu.
                      </HoverCardContent>

                      <HoverCardContent
                        className="hidden text-sm md:block"
                        align="center"
                      >
                        Na wybrane zajęcia można wejść maksymalnie{" "}
                        {item.frequency.replace(/\D/g, "")} raz(y) w tygodniu.
                      </HoverCardContent>
                    </HoverCard>
                  ) : null}
                </div>

                <div className="hidden text-sm font-semibold  md:block  text-center">
                  {item.price}
                </div>

                <div className="flex justify-self-end md:justify-self-end  ">
                  <Button asChild size="sm" variant={"secondary"}>
                    <Link href={ctaHref}>Zapisz się</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
