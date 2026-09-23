"use client";

import { Calendar, Info, SearchIcon, User } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Field, FieldLabel } from "@/components/ui/field";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  enrollmentClasses,
  getClassAgeLabel,
  getEnrollmentClassPrice,
  matchesEnrollmentParticipant,
  createSelectedClass,
  getEnrollmentFrequencyLabel,
} from "@/lib/data-adapters/enrollment-classes";
import type { CitySlug } from "@/data/locations";
import type { SelectedClassItem } from "@/lib/schemas/enrollmentSchema";
import { inputStyles } from "@/myComponents/forms/filterStyles";

type ClassConfiguratorProps = {
  items: SelectedClassItem[];
  isHoodmoodMember: boolean;
  participantType: "youth" | "adult";
  participantAge: string;
  selectedLocationId: CitySlug;
  onAdd: (item: SelectedClassItem) => void;
};

import { normalizeText } from "@/lib/normalizeText";

export default function ClassConfigurator({
  items,
  isHoodmoodMember,
  participantType,
  participantAge,
  selectedLocationId,
  onAdd,
}: ClassConfiguratorProps) {
  const [searchValue, setSearchValue] = useState("");
  const [selectionMode, setSelectionMode] = useState<"class" | "package">(
    "class",
  );

  const normalizedSearch = normalizeText(searchValue.trim());
  const packageModeAvailable = enrollmentClasses.some((item) =>
    item.locationId === selectedLocationId && item.type === "package",
  );

  useEffect(() => {
    if (!packageModeAvailable && selectionMode === "package") {
      setSelectionMode("class");
    }
  }, [packageModeAvailable, selectionMode]);

  const filteredClasses = useMemo(() => {
    return enrollmentClasses.filter((item) => {
      if (item.locationId !== selectedLocationId) return false;
      if (item.type !== selectionMode) return false;

      if (normalizedSearch.length > 0) {
        const normalizedName = normalizeText(item.name);
        if (!normalizedName.includes(normalizedSearch)) return false;
      }

      return matchesEnrollmentParticipant(item, participantType, participantAge);
    });
  }, [
    selectedLocationId,
    selectionMode,
    normalizedSearch,
    participantAge,
    participantType,
  ]);


  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4">
      <div className="grid shrink-0 grid-cols-2 gap-3">
        <button
          type="button"
          aria-pressed={selectionMode === "class"}
          onClick={() => setSelectionMode("class")}
          className={`ui-focus-ring min-h-11 rounded-md border px-4 py-2.5 text-sm font-semibold transition ${
            selectionMode === "class"
              ? "border-[#ac4967] bg-[#ac4967] text-white"
              : "border-black/10 bg-black/5 text-black/70 hover:bg-black/7 dark:border-foreground/10 dark:bg-white/3 dark:text-white/70 dark:hover:bg-white/6"
          }`}
        >
          Zajęcia
        </button>

        <button
          type="button"
          onClick={() => packageModeAvailable && setSelectionMode("package")}
          aria-pressed={selectionMode === "package"}
          disabled={!packageModeAvailable}
          className={`ui-focus-ring min-h-11 rounded-md border px-4 py-2.5 text-sm font-semibold transition ${
            selectionMode === "package"
              ? "border-[#ac4967] bg-[#ac4967] text-white"
              : "border-black/10 bg-black/5 text-black/70 hover:bg-black/7 dark:border-foreground/10 dark:bg-white/3 dark:text-white/70 dark:hover:bg-white/6"
          } ${!packageModeAvailable ? "cursor-not-allowed opacity-45" : ""}`}
        >
          Pakiety
        </button>
      </div>

      <Field className="flex shrink-0 flex-col gap-2.5">
        <FieldLabel
          htmlFor="enrollment-class-search"
          className="ui-muted-label pl-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
        >
          {selectionMode === "package"
            ? "Wyszukaj pakiety"
            : "Wyszukaj zajęcia"}
        </FieldLabel>

        <InputGroup className={inputStyles}>
          <InputGroupInput
            id="enrollment-class-search"
            placeholder={
              selectionMode === "package"
                ? "Wpisz nazwę pakietu"
                : "Wpisz nazwę zajęć"
            }
            value={searchValue}
            onChange={(event) => setSearchValue(event.currentTarget.value)}
          />
          <InputGroupAddon>
            <SearchIcon className="text-black/45 dark:text-white/35" />
          </InputGroupAddon>
        </InputGroup>
      </Field>

      <div tabIndex={0} role="region" aria-label="Dostępne zajęcia" className="ui-focus-ring max-h-96 min-h-0 space-y-3 overflow-y-auto pr-2 scrollbar-gutter-stable lg:max-h-none lg:flex-1">
        {filteredClasses.length === 0 ? (
          <div className="rounded-md border border-dashed border-black/10 bg-black/5 px-4 py-6 text-sm leading-6 text-black/60 dark:border-foreground/10 dark:bg-white/3 dark:text-white/55">
            Brak {selectionMode === "package" ? "pakietów" : "zajęć"} dla
            wybranej lokalizacji i filtrów. Zmień miasto, nazwę zajęć albo grupę
            wiekową uczestnika.
          </div>
        ) : (
          filteredClasses.map((item) => {
            const price = getEnrollmentClassPrice(item, isHoodmoodMember);
            const ageLabel = getClassAgeLabel(item);
            const isAdded = items.some(
              (selectedItem) =>
                selectedItem.locationId === item.locationId &&
                selectedItem.scheduleId === item.classId,
            );

            return (
              <article
                key={item.id}
                className="rounded-md border border-black/10 bg-black/5 p-4 dark:border-foreground/10 dark:bg-white/3 md:p-5"
              >
                <div className="flex flex-col gap-4">
                  <div className="min-w-0 space-y-2">
                    <p className="wrap-break-word text-base font-medium leading-6 text-black dark:text-white">
                      {item.name}
                    </p>

                    <div className="ui-muted-label flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-black/60 dark:text-white/55">
                      <p className="inline-flex items-center gap-1.5">
                        <User className="h-4 w-4 shrink-0" />
                        <span>{ageLabel}</span>
                      </p>
                      <p className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 shrink-0" />
                        <span>{getEnrollmentFrequencyLabel(item.frequency)}</span>
                        {(item.frequencyDescription || /^\d+$/.test(item.frequency)) && (
                          <HoverCard openDelay={20} closeDelay={20}>
                            <HoverCardTrigger asChild>
                              <button type="button" aria-label="Szczegóły częstotliwości zajęć" className="ui-focus-ring px-1">
                                <Info className="h-4 w-4 text-muted-foreground" />
                              </button>
                            </HoverCardTrigger>
                            <HoverCardContent className="text-sm" align="center">
                              {item.frequencyDescription ??
                                `Na wybrane zajęcia można wejść maksymalnie ${item.frequency} raz(y) w tygodniu.`}
                            </HoverCardContent>
                          </HoverCard>
                        )}
                      </p>
                    </div>
                  </div>

                  {(item.instructorLabel || item.specialInstructorLabel) && (
                    <div className="space-y-1 text-xs leading-5 text-muted-foreground">
                      {item.instructorLabel && <p>Prowadzący: {item.instructorLabel}</p>}
                      {item.specialInstructorLabel && <p>Gościnnie: {item.specialInstructorLabel}</p>}
                    </div>
                  )}

                  <div className="flex justify-between gap-3 items-end">
                    <div className="space-y-0.5 md:flex md:items-center ">
                      <p className="text-sm font-semibold text-black dark:text-white">
                        {price.toFixed(2).replace(".", ",")} zł
                      </p>
                      <p className="ui-muted-label text-xs text-black/50 dark:text-white/45 md:ml-1">
                        {item.priceUnit}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        onAdd(createSelectedClass(item, isHoodmoodMember, crypto.randomUUID()))
                      }
                      disabled={isAdded}
                      className={`ui-focus-ring inline-flex min-h-11 shrink-0 w-fit items-center justify-center rounded-md border border-foreground/20 px-4 py-2 text-sm font-semibold transition  ${
                        isAdded
                          ? "cursor-not-allowed bg-black/10 text-black/45 dark:bg-white/10 dark:text-white/45"
                          : "bg-transparent text-foreground hover:bg-foreground/5"
                      }`}
                    >
                      {isAdded ? "Dodano" : "Dodaj +"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
