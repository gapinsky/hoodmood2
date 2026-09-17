import { normalizeText } from "@/lib/normalizeText";
import type { ClassOffer, ExperienceFilterValue, OfferSortingValue } from "./types";

export function filterAndSortOffers(
  offers: ClassOffer[],
  searchName: string,
  searchAge: string,
  experience: ExperienceFilterValue,
  sorting: OfferSortingValue,
) {
  const search = normalizeText(searchName.trim());
  const age = Number(searchAge);
  const hasAge = searchAge.trim() !== "" && Number.isFinite(age);

  const result = offers.filter((item) =>
    normalizeText(item.name).includes(search) &&
    (!hasAge || (age >= item.minAge && (item.maxAge === null || age <= item.maxAge))) &&
    (experience === "all" || item.level === "all" || item.level === experience),
  );

  switch (sorting) {
    case "alphabetical-asc":
      return result.sort((a, b) => a.name.localeCompare(b.name, "pl"));
    case "alphabetical-desc":
      return result.sort((a, b) => b.name.localeCompare(a.name, "pl"));
    case "age-asc":
      return result.sort((a, b) => a.minAge - b.minAge);
    default:
      return result.sort((a, b) => a.sortOrder - b.sortOrder);
  }
}
