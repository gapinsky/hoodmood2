"use client";

import { RotateCcw, SearchIcon, User } from "lucide-react";
import type { ExperienceFilterValue, OfferFilters, OfferSortingValue } from "./types";
import { clearButtonStyles } from "@/myComponents/forms/filterStyles";
import OfferTextFilter from "./filters/OfferTextFilter";
import OfferSelectFilter from "./filters/OfferSelectFilter";

type Props = {
  filters: OfferFilters;
  onChange: (changes: Partial<OfferFilters>) => void;
  onClearFilters: () => void;
};

export default function OfferFilterBar({ filters, onChange, onClearFilters }: Props) {
  const { searchName, searchAge, sorting, experience } = filters;
  const hasActiveFilters = searchName !== "" || searchAge !== "" || sorting !== "default" || experience !== "all";

  return (
    <div className="grid grid-cols-1 gap-5 rounded-md border border-foreground/10 bg-foreground/2.5 p-5 sm:p-6 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1.4fr_1.4fr_auto]">
      <OfferTextFilter
        label="Wyszukaj zajęcia"
        placeholder="Wpisz nazwę zajęć"
        clearLabel="Wyczyść wyszukiwanie zajęć"
        value={searchName}
        onChange={(value) => onChange({ searchName: value })}
        icon={SearchIcon}
      />
      <OfferTextFilter
        label="Wiek uczestnika"
        placeholder="Np. 7"
        clearLabel="Wyczyść wiek uczestnika"
        value={searchAge}
        onChange={(value) => onChange({ searchAge: value })}
        icon={User}
        numeric
      />
      <OfferSelectFilter<ExperienceFilterValue>
        label="Poziom zaawansowania"
        value={experience}
        onChange={(value) => onChange({ experience: value })}
        options={[
          { value: "all", label: "Wszystkie poziomy" },
          { value: "beginner", label: "Początkujący" },
          { value: "intermediate", label: "Średniozaawansowani" },
          { value: "advanced", label: "Zaawansowani" },
        ]}
      />
      <OfferSelectFilter<OfferSortingValue>
        label="Sortowanie"
        value={sorting}
        onChange={(value) => onChange({ sorting: value })}
        options={[
          { value: "default", label: "Domyślne" },
          { value: "alphabetical-asc", label: "Nazwa: A–Z" },
          { value: "alphabetical-desc", label: "Nazwa: Z–A" },
          { value: "age-asc", label: "Wiek: rosnąco" },
        ]}
      />
      <div className="flex flex-col gap-2.5">
        <span aria-hidden="true" className="opacity-0 pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55">
          Wyczyść
        </span>
        <button type="button" onClick={onClearFilters} disabled={!hasActiveFilters} className={clearButtonStyles}>
          <RotateCcw className="size-4" aria-hidden="true" />
          Wyczyść
        </button>
      </div>
    </div>
  );
}
