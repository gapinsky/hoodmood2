import type { PricingItem } from "@/data/pricingData";
import { normalize } from "@/myComponents/pages/faq/faqFilter";

type SortingValue = "default" | "ascending" | "descending" | "alphabetical";

const parsePrice = (price: string) => Number(price.replace(/\D/g, ""));

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
      (age >= min && age <= max);

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
