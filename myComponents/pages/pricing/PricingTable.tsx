import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

const desktopGrid = "md:grid-cols-[minmax(0,1.8fr)_140px_180px_140px_140px]";

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
            className={`hidden ${desktopGrid} items-center gap-4 border-b  px-5 py-3 text-xs font-medium uppercase tracking-[0.18em]  md:grid`}
          >
            <span>Rodzaj zajęć</span>
            <span>Wiek</span>
            <span>Częstotliwość</span>
            <span>Cena</span>
            <span className="">Akcja</span>
          </div>

          <div className="divide-y divide-white/10">
            {items.map((item, index) => (
              <article
                key={`${item.name}-${item.age}-${index}`}
                className={`group grid gap-4 px-4 py-4 transition-colors md:px-5 ${desktopGrid} md:items-center`}
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

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:hidden ">
                    <span className="/60">
                      {item.age || "Bez limitu wieku"}
                    </span>
                    <span className="/60">{item.frequency}</span>
                    <span className="font-semibold ">{item.price}</span>
                  </div>
                </div>

                <div className="hidden text-sm  md:block ">
                  {item.age || "—"}
                </div>

                <div className="hidden text-sm  md:block ">
                  {item.frequency}
                </div>

                <div className="hidden text-sm font-semibold  md:block ">
                  {item.price}
                </div>

                <div className="flex md:justify-self-end  w-full">
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

// Example usage:
// import PricingTable from "@/components/pricing-table";
// import { priceList } from "@/data/price-list";
//
// <PricingTable
//   title="Zajęcia dla dzieci i młodzieży"
//   items={priceList.filter((item) => item.category !== "individual" && item.category !== "wedding")}
//   ctaHref="/kontakt"
// />;
