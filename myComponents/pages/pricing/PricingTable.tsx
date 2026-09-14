import { Badge } from "@/components/ui/badge";
import PricingFrequency from "./PricingFrequency";
import type { PricingItem } from "@/data/pricingData";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";

export type PricingTableProps = {
  title?: string;
  items: PricingItem[];
  ctaHref?: string;
};

const desktopGrid =
  "md:grid-cols-[minmax(0,1.6fr)_90px_120px_100px_120px] lg:grid-cols-[minmax(0,1.8fr)_140px_180px_140px_140px]";

const masterCategories = new Set(["masterProgram", "masterclass", "masterPass"]);

function Price({ value }: { value: string }) {
  return (
    <span className="text-sm font-semibold leading-5 tabular-nums text-foreground">
      {value.includes("zł") ? value : `${value} zł`}
    </span>
  );
}

const formatAge = (item: PricingItem) => {
  if (masterCategories.has(item.category)) {
    return `${item.minAge}-${item.maxAge} lat`;
  }
  if (item.minAge === 5 && item.maxAge === 99) return "Bez limitu wieku";
  if (item.maxAge === 99) return `${item.minAge}+ lat`;
  return `${item.minAge}-${item.maxAge} lat`;
};

export default function PricingTable({
  title,
  items,
  ctaHref = "/zapisz-sie",
}: PricingTableProps) {
  return (
    <section className="w-full ">
      <div className="space-y-4">
        <div className="mb-8 flex items-end justify-between gap-4 border-b border-foreground/10 pb-5">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">02 / Ceny i zajęcia</p>
            {title && <h2 className="font-anton text-3xl uppercase sm:text-4xl">{title}</h2>}
          </div>
          <span aria-label={`Liczba dostępnych pozycji: ${items.length}`} className="font-anton text-4xl tabular-nums text-foreground/20 sm:text-5xl">{String(items.length).padStart(2, "0")}</span>
        </div>

        <div className="overflow-hidden rounded-md border border-foreground/10 bg-foreground/1.5">
          <div
            className={`hidden ${desktopGrid} items-center gap-4 border-b border-foreground/10 bg-foreground/2.5 px-5 py-4 text-[11px] font-medium uppercase tracking-[0.16em] md:grid text-muted-foreground`}
          >
            <span className=" ">Rodzaj zajęć</span>
            <span className=" text-center">Wiek</span>
            <span className=" text-center">Częstotliwość</span>
            <span className=" text-center">Cena</span>
            <span className="sr-only">Zapisy</span>
          </div>

          <div className="divide-y divide-foreground/10">
            {items.length === 0 && (
              <p className="px-5 py-12 max-w-lg mx-auto text-center leading-7 text-muted-foreground">
                Brak pasujących zajęć. Zmień nazwę lub wiek uczestnika, aby zobaczyć inne propozycje.
              </p>
            )}
            {items.map((item, index) => (
              <article
                key={`${item.name}-${item.minAge}-${index}`}
                className={`group grid gap-5 px-5 py-6 transition-colors ${desktopGrid} md:items-center md:gap-4 md:py-7 hover:bg-foreground/[0.035]`}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-base font-medium leading-6 text-foreground">{item.name}</p>
                    {item.trending && (
                      <Badge
                        variant="secondary"
                        className="rounded-full border-0 bg-pink-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-(--brand-700) dark:text-(--brand-300) hover:bg-pink-500/15"
                      >
                        Najczęściej wybierane
                      </Badge>
                    )}
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm md:hidden text-muted-foreground">
                    <span className="">
                      {formatAge(item)}
                    </span>
                    <PricingFrequency item={item} compact />
                    <span className="basis-full pt-2">
                      <Price value={item.price} />
                    </span>
                  </div>
                </div>

                <div className="hidden text-sm  md:block  text-center">
                  {formatAge(item)}
                </div>

                <div className="hidden text-sm  md:block  text-center">
                  <PricingFrequency item={item} />
                </div>

                <div className="hidden md:block text-center">
                  <Price value={item.price} />
                </div>

                <div className="flex justify-self-start md:justify-self-end">
                  <ButtonSecondary href={ctaHref}>Zapisz się</ButtonSecondary>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
