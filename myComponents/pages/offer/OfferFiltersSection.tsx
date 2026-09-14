"use client";

import { useMemo, useState } from "react";
import { ClassesOfferType } from "@/data/ofertaData";
import OfferCard from "@/myComponents/pages/offer/OfferCard";
import OfferFilterBar, {
  ExperienceFilterValue,
  OfferSortingValue,
} from "./OfferFilterBar";

type Props = {
  offerContent: ClassesOfferType[];
};

function matchesAge(minAge: number | null, maxAge: number | null, searchedAge: string) {
  if (!searchedAge) return true;

  const ageNumber = Number(searchedAge);
  if (Number.isNaN(ageNumber)) return true;

  if (minAge == null && maxAge == null) return false;
  if (minAge != null && maxAge == null) return ageNumber >= minAge;
  if (minAge == null && maxAge != null) return ageNumber <= maxAge;

  return minAge !== null && maxAge !== null
    ? ageNumber >= minAge && ageNumber <= maxAge
    : false;
}

export default function OfferFiltersSection({ offerContent }: Props) {
  const [searchName, setSearchName] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [sorting, setSorting] = useState<OfferSortingValue>("default");
  const [experience, setExperience] = useState<ExperienceFilterValue>("all");

  const handleClearFilters = () => {
    setSearchName("");
    setSearchAge("");
    setSorting("default");
    setExperience("all");
  };

  const filteredOffers = useMemo(() => {
    const normalizedSearch = searchName.trim().toLowerCase();

    let result = offerContent.filter((item) => {
      const matchesName =
        normalizedSearch === "" ||
        item.name.toLowerCase().includes(normalizedSearch);

      const ageMatches = matchesAge(
        item.minAge === "" ? null : Number(item.minAge),
        item.maxAge === "" ? null : Number(item.maxAge),
        searchAge,
      );

      const experienceMatches =
        experience === "all" ||
        item.experience === experience ||
        (experience === "Średniozaawansowani" &&
          item.experience === "grupa średniozaawansowana") ||
        item.experience === "Dla każdego";

      return matchesName && ageMatches && experienceMatches;
    });

    if (sorting === "alphabetical-asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name, "pl"));
    }

    if (sorting === "alphabetical-desc") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name, "pl"));
    }

    if (sorting === "age-asc") {
      result = [...result].sort((a, b) => {
        const ageA = a.minAge === "" ? Number.POSITIVE_INFINITY : Number(a.minAge);
        const ageB = b.minAge === "" ? Number.POSITIVE_INFINITY : Number(b.minAge);
        return ageA - ageB;
      });
    }

    return result;
  }, [offerContent, searchName, searchAge, sorting, experience]);

  return (
    <section aria-labelledby="offer-title" className="space-y-8">
      <div className="border-b border-foreground/10 pb-5">
        <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">02 / Zajęcia dla Ciebie</p>
        <h2 id="offer-title" className="font-anton text-3xl uppercase sm:text-4xl">Wybierz swój kierunek</h2>
      </div>
      <OfferFilterBar
        searchName={searchName}
        setSearchName={setSearchName}
        searchAge={searchAge}
        setSearchAge={setSearchAge}
        sorting={sorting}
        setSorting={setSorting}
        experience={experience}
        setExperience={setExperience}
        onClearFilters={handleClearFilters}
      />
      <div className="space-y-4">

        {filteredOffers.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
            {filteredOffers.map((item, id) => (
              <OfferCard
                key={`${item.name}-${id}`}
                name={item.name}
                instructors={item.instructors}
                img={item.img}
                minAge={item.minAge}
                maxAge={item.maxAge}
                description={item.description}
                experience={item.experience}
                scheduleSrc={item.scheduleSrc}
                pricingSrc={item.pricingSrc}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-md border border-dashed border-foreground/15 p-8 text-center">
            <p className="text-base leading-7 text-muted-foreground">Nie znaleziono zajęć dla podanych filtrów.</p>
            <button type="button" onClick={handleClearFilters} className="ui-focus-ring mt-4 rounded-full border border-foreground/10 px-5 py-3 text-sm transition-colors hover:bg-foreground/5">Wyczyść</button>
          </div>
        )}
      </div>
    </section>
  );
}
