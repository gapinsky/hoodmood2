import { Calendar, SearchIcon, User } from "lucide-react";
import { useMemo, useState } from "react";

import { Field, FieldLabel } from "@/components/ui/field";
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

  const numericAge = Number.parseInt(participantAge, 10);
  const normalizedSearch = normalizeText(searchValue.trim());

  const filteredClasses = useMemo(() => {
    return enrollmentClasses.filter((item) => {
      if (item.locationId !== selectedLocationId) {
        return false;
      }

      if (normalizedSearch.length > 0) {
        const normalizedName = normalizeText(item.name);
        if (!normalizedName.includes(normalizedSearch)) {
          return false;
        }
      }

      if (participantType === "adult") {
        return isAdultClass(item);
      }

      if (isAdultClass(item)) {
        return false;
      }

      if (!Number.isFinite(numericAge)) {
        return true;
      }

      if (item.minAge !== null && numericAge < item.minAge) {
        return false;
      }

      if (item.maxAge !== null && numericAge > item.maxAge) {
        return false;
      }

      return true;
    });
  }, [selectedLocationId, normalizedSearch, numericAge, participantType]);

  return (
    <div className="space-y-4 max-h-full">
      <Field className="flex flex-col gap-2.5">
        <FieldLabel
          htmlFor="enrollment-class-search"
          className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55"
        >
          Wyszukaj zajęcia
        </FieldLabel>

        <InputGroup className={inputStyles}>
          <InputGroupInput
            id="enrollment-class-search"
            placeholder="Wpisz nazwę zajęć"
            value={searchValue}
            onChange={(event) => setSearchValue(event.currentTarget.value)}
          />
          <InputGroupAddon>
            <SearchIcon className="text-black/35 dark:text-white/35" />
          </InputGroupAddon>
        </InputGroup>
      </Field>

      <div className="space-y-3 pr-1 md:max-h-112 md:overflow-y-auto md:pr-2">
        {filteredClasses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/3 px-5 py-7 text-sm leading-7 text-white/55">
            Brak zajęć dla wybranej lokalizacji i filtrów. Zmień miasto, nazwę
            zajęć albo grupę wiekową uczestnika.
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
                className="rounded-2xl border border-white/10 bg-white/3 p-4 md:p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="min-w-0 space-y-2">
                    <p className="text-base font-semibold leading-6 text-white md:text-lg">
                      {item.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/55">
                      <p className="inline-flex items-center gap-1">
                        <User className="w-4" />
                        {ageLabel}
                      </p>
                      <p className="inline-flex items-center gap-1">
                        <Calendar className="w-4" />
                        {item.frequency}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-3 sm:min-w-47.5 sm:justify-end">
                    <div className="sm:text-right">
                      <p className="text-base font-semibold text-white md:text-lg">
                        {item.price.toFixed(2).replace(".", ",")} zł
                      </p>
                      <p className="text-xs text-white/45">miesięcznie</p>
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
                          scheduleId: item.id,
                          dayLabel: item.frequency,
                          timeLabel: ageLabel,
                          price: item.price,
                          currency: "PLN",
                        })
                      }
                      disabled={isAdded}
                      className={`inline-flex min-h-10 items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${
                        isAdded
                          ? "cursor-not-allowed bg-white/10 text-white/45"
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
