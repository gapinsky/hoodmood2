import type { PricingItem } from "./types";
import { normalizeText as normalize } from "@/lib/normalizeText";

type SortingValue = "ascending" | "descending" | "alphabetical";

export function filterAndSortPricingData(
  data: PricingItem[],
  searchInput: string,
  searchAge: string,
  sorting: SortingValue,
) {
  const words = normalize(searchInput).trim().split(/\s+/).filter(Boolean);
  const age = Number(searchAge);
  const hasValidAge = searchAge.trim() !== "" && !Number.isNaN(age);

  const filtered = data.filter((item) => {
    const normalizedName = normalize(item.name);

    const matchesText =
      words.length === 0 ||
      words.every((word) => normalizedName.includes(word));

    const min = item.minAge;
    const max = item.maxAge;

    const matchesAge =
      !hasValidAge ||
      (age >= min && (max === null || age <= max));

    return matchesText && matchesAge;
  });

  switch (sorting) {
    case "alphabetical":
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name, "pl"));
    case "ascending":
      return [...filtered].sort(
        (a, b) => a.price - b.price,
      );
    case "descending":
      return [...filtered].sort(
        (a, b) => b.price - a.price,
      );
    default:
      return [...filtered].sort(
        (a, b) => a.price - b.price,
      );
  }
}
