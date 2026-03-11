import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type PackageEntry = {
  name: string;
  frequency?: string;
};

type PackageItem = {
  title: string;
  price: string;
  age?: string;
  trending: boolean;
  category:
    | "kidsPackages"
    | "balletPackages"
    | "youngGenerationPackages"
    | "foundationPackages"
    | "hiphopPackages"
    | "modernDancePackages";
  entries: PackageEntry[];
};

type PackageTableProps = {
  title?: string;
  items: PackageItem[];
  ctaHref?: string;
};

const desktopGrid = "md:grid-cols-[minmax(0,1.9fr)_140px_140px_140px]";

export default function PackageTable({
  title = "Pakiety zajęć",
  items,
  ctaHref = "/kontakt",
}: PackageTableProps) {
  return (
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl  text-white sm:text-2xl">{title}</h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <div
            className={`hidden ${desktopGrid} items-center gap-4 border-b border-white/10 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white/50 md:grid`}
          >
            <span>Pakiet</span>
            <span>Wiek</span>
            <span>Cena</span>
            <span className="justify-self-end text-right">Akcja</span>
          </div>

          <div className="divide-y divide-white/10">
            {items.map((item, index) => (
              <article
                key={`${item.title}-${item.age}-${index}`}
                className={`group grid gap-4 px-4 py-4 transition-colors hover:bg-white/[0.04] md:px-5 ${desktopGrid} md:items-center`}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-medium text-white sm:text-[15px]">
                      {item.title}
                    </h3>

                    {item.trending && (
                      <Badge
                        variant="secondary"
                        className="rounded-full border-0 bg-pink-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-pink-300 hover:bg-pink-500/15"
                      >
                        Najczęściej wybierane
                      </Badge>
                    )}
                  </div>

                  <ul className="mt-2 space-y-1">
                    {item.entries.map((entry, i) => (
                      <li
                        key={`${entry.name}-${i}`}
                        className="text-sm text-white/65"
                      >
                        — {entry.name}
                        {entry.frequency ? ` · ${entry.frequency}` : ""}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:hidden">
                    <span className="text-white/60">
                      {item.age || "Bez limitu wieku"}
                    </span>
                    <span className="font-semibold text-white">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="hidden text-sm text-white/70 md:block">
                  {item.age || "—"}
                </div>

                <div className="hidden text-sm font-semibold text-white md:block">
                  {item.price}
                </div>

                <div className="flex md:justify-self-end">
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-pink-500 px-5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-pink-400"
                  >
                    <Link href={ctaHref}>Zapisz się</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
  );
}
