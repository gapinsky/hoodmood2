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
  isAdultClass,
} from "@/lib/data/enrollment-classes";
import type { SelectedClassItem } from "@/lib/schemas/enrollmentSchema";
import { inputStyles } from "@/myComponents/pages/pricing/PricingFilterBar";

type ClassConfiguratorProps = {
  items: SelectedClassItem[];
  participantType: "youth" | "adult";
  participantAge: string;
  selectedLocationId: "koszalin" | "polanow" | "bialy-bor";
  onAdd: (item: SelectedClassItem) => void;
};

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function ClassConfigurator({
  items,
  participantType,
  participantAge,
  selectedLocationId,
  onAdd,
}: ClassConfiguratorProps) {
  const [searchValue, setSearchValue] = useState("");
  const [selectionMode, setSelectionMode] = useState<"class" | "package">(
    "class",
  );

  const numericAge = Number.parseInt(participantAge, 10);
  const normalizedSearch = normalizeText(searchValue.trim());
  const packageModeAvailable = selectedLocationId === "koszalin";

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

      if (participantType === "adult") {
        return isAdultClass(item);
      }

      if (isAdultClass(item)) return false;
      if (!Number.isFinite(numericAge)) return true;
      if (item.minAge !== null && numericAge < item.minAge) return false;
      if (item.maxAge !== null && numericAge > item.maxAge) return false;

      return true;
    });
  }, [
    selectedLocationId,
    selectionMode,
    normalizedSearch,
    numericAge,
    participantType,
  ]);

  const getFrequencyLabel = (frequency: string) =>
    frequency.includes("wej")
      ? frequency
      : frequency.includes("x/tyg")
        ? frequency
        : `${frequency}x/tyg`;

  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setSelectionMode("class")}
          className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
            selectionMode === "class"
              ? "border-[#ac4967] bg-[#ac4967] text-white"
              : "border-black/10 bg-black/5 text-black/70 hover:bg-black/7 dark:border-white/10 dark:bg-white/3 dark:text-white/70 dark:hover:bg-white/6"
          }`}
        >
          Zajęcia
        </button>

        <button
          type="button"
          onClick={() => packageModeAvailable && setSelectionMode("package")}
          disabled={!packageModeAvailable}
          className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
            selectionMode === "package"
              ? "border-[#ac4967] bg-[#ac4967] text-white"
              : "border-black/10 bg-black/5 text-black/70 hover:bg-black/7 dark:border-white/10 dark:bg-white/3 dark:text-white/70 dark:hover:bg-white/6"
          } ${!packageModeAvailable ? "cursor-not-allowed opacity-45" : ""}`}
        >
          Pakiety
        </button>
      </div>

      <Field className="flex flex-col gap-2.5">
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

      <div className="min-h-0 space-y-3 overflow-y-auto pr-1 md:pr-2">
        {filteredClasses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-black/10 bg-black/5 px-4 py-6 text-sm leading-6 text-black/60 dark:border-white/10 dark:bg-white/3 dark:text-white/55">
            Brak {selectionMode === "package" ? "pakietów" : "zajęć"} dla
            wybranej lokalizacji i filtrów. Zmień miasto, nazwę zajęć albo grupę
            wiekową uczestnika.
          </div>
        ) : (
          filteredClasses.map((item) => {
            const ageLabel = getClassAgeLabel(item);
            const isAdded = items.some(
              (selectedItem) =>
                selectedItem.locationId === item.locationId &&
                selectedItem.classTypeId === item.id,
            );

            return (
              <article
                key={item.id}
                className="rounded-2xl border border-black/10 bg-black/5 p-4 dark:border-white/10 dark:bg-white/3 md:p-5"
              >
                <div className="flex flex-col gap-4">
                  <div className="min-w-0 space-y-2">
                    <p className="wrap-break-word text-base font-semibold leading-6 text-black dark:text-white md:text-lg">
                      {item.name}
                    </p>

                    <div className="ui-muted-label flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-black/60 dark:text-white/55">
                      <p className="inline-flex items-center gap-1.5">
                        <User className="h-4 w-4 shrink-0" />
                        <span>{ageLabel}</span>
                      </p>
                      <p className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 shrink-0" />
                        <span>{getFrequencyLabel(item.frequency)}</span>
                        {(item.frequencyDescription || item.frequency !== "-") && (
                          <HoverCard openDelay={20} closeDelay={20}>
                            <HoverCardTrigger asChild>
                              <button type="button" className="px-1">
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

                  <div className="flex justify-between gap-3 items-end">
                    <div className="space-y-0.5 md:flex md:items-center ">
                      <p className="text-base font-semibold text-black dark:text-white md:text-lg">
                        {item.price.toFixed(2).replace(".", ",")} zł
                      </p>
                      <span className="hidden md:block ml-1 mt-1 text-xs ui-muted-label text-black/50 dark:text-white/45">
                        /
                      </span>
                      <p className="ui-muted-label text-xs text-black/50 dark:text-white/45 md:mt-1">
                        {item.billingPeriod === "one-time"
                          ? "jednorazowo"
                          : "miesięcznie"}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        onAdd({
                          clientId: crypto.randomUUID(),
                          locationId: item.locationId,
                          locationName: item.locationName,
                          classTypeId: item.id,
                          classTypeName: item.name,
                          billingPeriod: item.billingPeriod,
                          scheduleId: item.id,
                          dayLabel: item.frequency,
                          timeLabel: ageLabel,
                          price: item.price,
                          currency: "PLN",
                        })
                      }
                      disabled={isAdded}
                      className={`inline-flex  w-fit items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition  ${
                        isAdded
                          ? "cursor-not-allowed bg-black/10 text-black/45 dark:bg-white/10 dark:text-white/45"
                          : "bg-[#ac4967] text-white hover:opacity-90"
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
