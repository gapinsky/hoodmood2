"use client";

import { useMemo, useState } from "react";
import { ClassesOfferType } from "@/data/ofertaData";
import OfferCard from "@/myComponents/pages/offer/OfferCard";
import OfferFilterBar, { OfferSortingValue } from "./OfferFilterBar";

type Props = {
  offerContent: ClassesOfferType[];
};

function matchesAge(
  minAge: number | null | undefined,
  maxAge: number | null | undefined,
  searchedAge: string,
) {
  if (!searchedAge) return true;

  const ageNumber = Number(searchedAge);
  if (Number.isNaN(ageNumber)) return true;

  if (minAge == null && maxAge == null) return false;
  if (minAge != null && maxAge == null) return ageNumber >= minAge;
  if (minAge == null && maxAge != null) return ageNumber <= maxAge;

  return ageNumber >= minAge! && ageNumber <= maxAge!;
}

export default function OfferFiltersSection({ offerContent }: Props) {
  const [searchName, setSearchName] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [sorting, setSorting] = useState<OfferSortingValue>("default");

  const filteredOffers = useMemo(() => {
    const normalizedSearch = searchName.trim().toLowerCase();

    let result = offerContent.filter((item) => {
      const matchesName =
        normalizedSearch === "" ||
        item.name.toLowerCase().includes(normalizedSearch);

      const ageMatches = matchesAge(+item.minAge, +item.maxAge, searchAge);

      return matchesName && ageMatches;
    });

    if (sorting === "alphabetical-asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name, "pl"));
    }

    if (sorting === "alphabetical-desc") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name, "pl"));
    }

    if (sorting === "age-asc") {
      result = [...result].sort((a, b) => {
        const ageA = +a.minAge;
        const ageB = +b.minAge;
        return ageA - ageB;
      });
    }

    return result;
  }, [offerContent, searchName, searchAge, sorting]);

  return (
    <>
      <OfferFilterBar
        searchName={searchName}
        setSearchName={setSearchName}
        searchAge={searchAge}
        setSearchAge={setSearchAge}
        sorting={sorting}
        setSorting={setSorting}
      />

      {filteredOffers.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredOffers.map((item, id) => (
            <OfferCard
              key={`${item.name}-${id}`}
              name={item.name}
              instructor={item.instructor}
              img={item.img}
              instructorAvatar={item.instructorAvatar}
              minAge={item.minAge}
              maxAge={item.maxAge}
              description={item.description}
              experience={item.experience}
              localization={item.localizations[0]}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border p-6 text-sm text-muted-foreground">
          Nie znaleziono zajęć dla podanych filtrów.
        </div>
      )}
    </>
  );
}
