"use client";

import { useMemo } from "react";
import type { PricingItem } from "@/data/pricingData";
import { filterAndSortPricingData } from "@/myComponents/pages/pricing/filterHelper";
import PricingFilterBar from "@/myComponents/pages/pricing/PricingFilterBar";
import { usePricingFilters } from "@/myComponents/pages/pricing/PricingFiltersProvider";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";

type TableProps = {
  data: PricingItem[];
};

export default function Table({ data }: TableProps) {
  const { searchInput, searchAge, sorting, isHoodmoodMember } = usePricingFilters();

  const filteredData = useMemo(() => {
    const pricedData = data.map((item) => ({
      ...item,
      price: (isHoodmoodMember ? item.memberPrice : item.nonMemberPrice) ?? item.price,
    }));
    return filterAndSortPricingData(pricedData, searchInput, searchAge, sorting);
  }, [data, searchInput, searchAge, sorting, isHoodmoodMember]);

  return (
    <div className="space-y-10">
      <PricingFilterBar />
      <PricingTable items={filteredData} />
    </div>
  );
}
