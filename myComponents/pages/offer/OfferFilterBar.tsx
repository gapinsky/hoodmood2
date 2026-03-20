"use client";

import { CircleX, RotateCcw, SearchIcon, User } from "lucide-react";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  clearButtonStyles,
  inputStyles,
  selectContentStyles,
  selectItemStyles,
  selectTriggerStyles,
} from "../pricing/PricingFilterBar";

export type OfferSortingValue =
  | "default"
  | "alphabetical-asc"
  | "alphabetical-desc"
  | "age-asc";

export type ExperienceFilterValue =
  | "all"
  | "Początkujący"
  | "Średniozaawansowani"
  | "Zaawansowani";

type Props = {
  searchName: string;
  setSearchName: (value: string) => void;
  searchAge: string;
  setSearchAge: (value: string) => void;
  sorting: OfferSortingValue;
  setSorting: (value: OfferSortingValue) => void;
  experience: ExperienceFilterValue;
  setExperience: (value: ExperienceFilterValue) => void;
  onClearFilters: () => void;
};

const fieldLabelStyles =
  "pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55";

const inputAddonStyles = "text-black/35 dark:text-white/35";

const toolbarWrapperStyles =
  "grid grid-cols-1 gap-4    md:grid-cols-2 lg:grid-cols-[5fr_3fr_4fr_3fr_3fr] lg:gap-4 xl:grid-cols-[8fr_4fr_4fr_3fr_3fr] xl:gap-8";

export default function OfferFilterBar({
  searchName,
  setSearchName,
  searchAge,
  setSearchAge,
  sorting,
  setSorting,
  experience,
  setExperience,
  onClearFilters,
}: Props) {
  const hasActiveFilters =
    searchName !== "" ||
    searchAge !== "" ||
    sorting !== "default" ||
    experience !== "all";

  return (
    <div className={toolbarWrapperStyles}>
      <Field className="flex flex-col gap-2.5">
        <FieldLabel htmlFor="searchName" className={fieldLabelStyles}>
          Wyszukaj zajęcia
        </FieldLabel>

        <InputGroup className={inputStyles}>
          <InputGroupInput
            id="searchName"
            placeholder="Wpisz nazwę zajęć"
            value={searchName}
            onChange={(e) => setSearchName(e.currentTarget.value)}
          />

          <InputGroupAddon className={inputAddonStyles}>
            <SearchIcon className="size-4" />
          </InputGroupAddon>

          {searchName !== "" && (
            <InputGroupAddon align="inline-end">
              <button
                type="button"
                onClick={() => setSearchName("")}
                className="px-2 hover:cursor-pointer   inline-flex items-center gap-1 text-xs hover:text-black/15 dark:hover:text-white/60"
                aria-label="Wyczyść wyszukiwanie zajęć"
              >
                <CircleX className="size-4" />
              </button>
            </InputGroupAddon>
          )}
        </InputGroup>
      </Field>

      <Field className="flex flex-col gap-2.5">
        <FieldLabel htmlFor="searchAge" className={fieldLabelStyles}>
          Wiek uczestnika
        </FieldLabel>

        <InputGroup className={inputStyles}>
          <InputGroupInput
            id="searchAge"
            placeholder="Np. 7"
            type="text"
            inputMode="numeric"
            value={searchAge}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 2);
              setSearchAge(value);
            }}
          />

          <InputGroupAddon className={inputAddonStyles}>
            <User className="size-4" />
          </InputGroupAddon>

          {searchAge !== "" && (
            <InputGroupAddon align="inline-end">
              <button
                type="button"
                onClick={() => setSearchAge("")}
                className="px-2 hover:cursor-pointer   inline-flex items-center gap-1 text-xs hover:text-black/15 dark:hover:text-white/60"
                aria-label="Wyczyść wiek uczestnika"
              >
                <CircleX className="size-4" />
              </button>
            </InputGroupAddon>
          )}
        </InputGroup>
      </Field>

      <Field className="flex flex-col gap-2.5">
        <FieldLabel className={fieldLabelStyles}>
          Poziom zaawansowania
        </FieldLabel>

        <Select
          value={experience}
          onValueChange={(value) =>
            setExperience(value as ExperienceFilterValue)
          }
        >
          <SelectTrigger className={selectTriggerStyles}>
            <SelectValue />
          </SelectTrigger>

          <SelectContent className={selectContentStyles}>
            <SelectGroup>
              <SelectItem className={selectItemStyles} value="all">
                Wszystkie poziomy
              </SelectItem>
              <SelectItem className={selectItemStyles} value="Początkujący">
                Początkujący
              </SelectItem>
              <SelectItem
                className={selectItemStyles}
                value="Średniozaawansowani"
              >
                Średniozaawansowani
              </SelectItem>
              <SelectItem className={selectItemStyles} value="Zaawansowani">
                Zaawansowani
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>

      <Field className="flex flex-col gap-2.5">
        <FieldLabel className={fieldLabelStyles}>Sortowanie</FieldLabel>

        <Select
          value={sorting}
          onValueChange={(value) => setSorting(value as OfferSortingValue)}
        >
          <SelectTrigger className={selectTriggerStyles}>
            <SelectValue />
          </SelectTrigger>

          <SelectContent className={selectContentStyles}>
            <SelectGroup>
              <SelectItem className={selectItemStyles} value="default">
                Domyślne
              </SelectItem>
              <SelectItem className={selectItemStyles} value="alphabetical-asc">
                Nazwa: A–Z
              </SelectItem>
              <SelectItem
                className={selectItemStyles}
                value="alphabetical-desc"
              >
                Nazwa: Z–A
              </SelectItem>
              <SelectItem className={selectItemStyles} value="age-asc">
                Wiek: rosnąco
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>

      <Field className="flex flex-col gap-2.5">
        <FieldLabel className={`opacity-0  ${fieldLabelStyles}`}>
          Wyczyść
        </FieldLabel>

        <button
          type="button"
          onClick={onClearFilters}
          disabled={!hasActiveFilters}
          className={clearButtonStyles}
        >
          <RotateCcw className="size-4" />
          Wyczyść filtry
        </button>
      </Field>
    </div>
  );
}
