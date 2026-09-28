"use client";

import { useMemo, useState } from "react";
import type { ClassOffer, OfferFilters } from "./types";
import OfferCard from "@/myComponents/offer/OfferCard";
import OfferFilterBar from "./OfferFilterBar";
import { filterAndSortOffers } from "./filterHelper";

type Props = {
  offerContent: ClassOffer[];
};

const initialFilters: OfferFilters = {
  searchName: "",
  searchAge: "",
  sorting: "default",
  experience: "all",
};

export default function OfferFiltersSection({ offerContent }: Props) {
  const [filters, setFilters] = useState(initialFilters);
  const { searchName, searchAge, sorting, experience } = filters;

  const handleClearFilters = () => {
    setFilters(initialFilters);
  };

  const filteredOffers = useMemo(
    () => filterAndSortOffers(offerContent, searchName, searchAge, experience, sorting),
    [offerContent, searchName, searchAge, sorting, experience],
  );

  return (
    <section aria-labelledby="offer-title" className="space-y-8">
      <div className="border-b border-foreground/10 pb-5">
        <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">02 / Zajęcia dla Ciebie</p>
        <h2 id="offer-title" className="font-anton text-3xl uppercase sm:text-4xl">Wybierz swój kierunek</h2>
      </div>
      <OfferFilterBar
        filters={filters}
        onChange={(changes) => setFilters((current) => ({ ...current, ...changes }))}
        onClearFilters={handleClearFilters}
      />
      <div className="space-y-4">

        {filteredOffers.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
            {filteredOffers.map((item, index) => (
              <OfferCard key={item.id} {...item} eager={index === 0} />
            ))}
          </div>
        ) : (
          <div className="rounded-md border border-dashed border-foreground/15 p-8 text-center">
            <p className="text-base leading-7 text-muted-foreground">Nie znaleziono zajęć dla podanych filtrów.</p>
            <button type="button" onClick={handleClearFilters} className="ui-focus-ring mt-4 rounded-full border border-foreground/10 px-5 py-3 text-sm transition-colors hover:bg-foreground/5">Wyczyść</button>
          </div>
        )}
      </div>
    </section>
  );
}
