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
  const { searchInput, searchAge, sorting } = usePricingFilters();

  const filteredData = useMemo(() => {
    return filterAndSortPricingData(data, searchInput, searchAge, sorting);
  }, [data, searchInput, searchAge, sorting]);

  return (
    <>
      <PricingFilterBar />
      <PricingTable items={filteredData} />
    </>
  );
}
