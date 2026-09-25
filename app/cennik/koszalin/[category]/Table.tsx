"use client";

import { useMemo } from "react";
import type { PricingItem } from "@/myComponents/pricing/types";
import { filterAndSortPricingData } from "@/myComponents/pricing/filterHelper";
import PricingFilterBar from "@/myComponents/pricing/PricingFilterBar";
import { usePricingFilters } from "@/myComponents/pricing/PricingFiltersProvider";
import PricingTable from "@/myComponents/pricing/PricingTable";

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
