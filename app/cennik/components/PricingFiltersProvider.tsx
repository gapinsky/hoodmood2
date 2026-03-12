"use client";

import { createContext, useContext, useState } from "react";

export type SortingValue =
  | "default"
  | "ascending"
  | "descending"
  | "alphabetical";

type PricingFiltersContextType = {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchAge: string;
  setSearchAge: React.Dispatch<React.SetStateAction<string>>;
  sorting: SortingValue;
  setSorting: React.Dispatch<React.SetStateAction<SortingValue>>;
};

const PricingFiltersContext = createContext<PricingFiltersContextType | null>(
  null
);

export function PricingFiltersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchInput, setSearchInput] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [sorting, setSorting] = useState<SortingValue>("default");

  return (
    <PricingFiltersContext.Provider
      value={{
        searchInput,
        setSearchInput,
        searchAge,
        setSearchAge,
        sorting,
        setSorting,
      }}
    >
      {children}
    </PricingFiltersContext.Provider>
  );
}

export function usePricingFilters() {
  const context = useContext(PricingFiltersContext);

  if (!context) {
    throw new Error(
      "usePricingFilters must be used within PricingFiltersProvider"
    );
  }

  return context;
}