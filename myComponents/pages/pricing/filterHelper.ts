import type { PricingItem } from "@/data/pricingData";
import { normalize } from "@/myComponents/pages/faq/faqFilter";

type SortingValue = "default" | "ascending" | "descending" | "alphabetical";

const parsePrice = (price: string) => Number(price.replace(/\D/g, ""));

const parseAgeValue = (value: string) => {
  const normalized = value.trim().toLowerCase();
  if (!normalized || normalized === "bez limitu") return null;

  const num = Number(normalized);
  return Number.isNaN(num) ? null : num;
};

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

    const min = parseAgeValue(item.minAge);
    const max = parseAgeValue(item.maxAge);

    const matchesAge =
      !hasValidAge ||
      (min === null && max === null) ||
      (min !== null && max === null && age >= min) ||
      (min === null && max !== null && age <= max) ||
      (min !== null && max !== null && age >= min && age <= max);

    return matchesText && matchesAge;
  });

  switch (sorting) {
    case "alphabetical":
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name, "pl"));
    case "ascending":
      return [...filtered].sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price),
      );
    case "descending":
      return [...filtered].sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price),
      );
    case "default":
    default:
      return filtered;
  }
}
