"use client";

import { useMemo } from "react";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import { data } from "./data";
import { usePricingFilters } from "@/myComponents/pages/pricing/PricingFiltersProvider";
import { filterAndSortPricingData } from "@/myComponents/pages/pricing/filterHelper";
import OfferCard from "@/myComponents/pages/offer/OfferCard";

export default function Page() {
  const { searchInput, searchAge, sorting } = usePricingFilters();

  const filteredData = useMemo(() => {
    return filterAndSortPricingData(data, searchInput, searchAge, sorting);
  }, [searchInput, searchAge, sorting]);

  return  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredData.map((item, id) => (
                <OfferCard
                  key={id}
                  name={item.name}
                  instructor={item.instructor}
                  img={item.img}
                  instructorAvatar={item.instructorAvatar}
                  age={item.age}
                  description={item.description}
                  experience={item.experience}
                  localization={item.localizations[0]}
                />
              ))}
            </div>;
}