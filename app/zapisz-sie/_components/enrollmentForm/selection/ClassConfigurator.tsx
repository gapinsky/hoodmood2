import { SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import {
  enrollmentClasses,
  enrollmentLocationOptions,
  getClassAgeLabel,
  isAdultClass,
} from "@/lib/data/enrollment-classes";
import type { SelectedClassItem } from "@/lib/schemas/enrollmentSchema";
import {
  inputStyles,
  selectTriggerStyles,
} from "@/myComponents/pages/pricing/PricingFilterBar";

type ClassConfiguratorProps = {
  items: SelectedClassItem[];
  participantType: "youth" | "adult";
  participantAge: string;
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
  onAdd,
}: ClassConfiguratorProps) {
  const [locationId, setLocationId] = useState<"koszalin" | "polanow" | "bialy-bor">(
    "koszalin",
  );
  const [searchValue, setSearchValue] = useState("");

  const numericAge = Number.parseInt(participantAge, 10);
  const normalizedSearch = normalizeText(searchValue.trim());

  const filteredClasses = useMemo(() => {
    return enrollmentClasses.filter((item) => {
      if (item.locationId !== locationId) {
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
  }, [locationId, normalizedSearch, numericAge, participantType]);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4">
        <Field className="flex flex-col gap-2.5">
          <FieldLabel className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55">
            Lokalizacja
          </FieldLabel>

          <select
            value={locationId}
            onChange={(event) =>
              setLocationId(event.target.value as "koszalin" | "polanow" | "bialy-bor")
            }
            className={`${selectTriggerStyles} w-full rounded-2xl border-white/10 bg-white/[0.06] px-4 text-white`}
          >
            {enrollmentLocationOptions.map((location) => (
              <option key={location.id} value={location.id}>
                {location.label}
              </option>
            ))}
          </select>
        </Field>

        <Field className="flex flex-col gap-2.5">
          <FieldLabel
            htmlFor="enrollment-class-search"
            className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55"
          >
            Wyszukaj zajęć
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
      </div>

      <div className="max-h-[28rem] space-y-4 overflow-y-auto pr-1 sm:pr-2">
        {filteredClasses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] px-5 py-8 text-sm leading-7 text-white/55">
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
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="min-w-0 space-y-3">
                    <h3 className="text-lg font-semibold leading-7 text-white md:text-xl">
                      {item.name}
                    </h3>
                    <div className="space-y-1 text-sm text-white/55">
                      <p>{ageLabel}</p>
                      <p>{item.frequency}/miesiąc</p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-3 sm:min-w-[190px] sm:justify-end">
                    <div className="sm:text-right">
                      <p className="text-lg font-semibold text-white">
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
                      className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
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
