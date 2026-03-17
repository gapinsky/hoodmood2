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
    <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-4 lg:grid-cols-[5fr_3fr_4fr_3fr_3fr] xl:gap-8 xl:grid-cols-[8fr_4fr_4fr_3fr_3fr]">
      <Field className="flex-1">
        <FieldLabel htmlFor="searchName">Wyszukaj zajęcia</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="searchName"
            placeholder="Wpisz nazwę zajęć"
            value={searchName}
            onChange={(e) => setSearchName(e.currentTarget.value)}
          />
          <InputGroupAddon>
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>

          {searchName !== "" && (
            <InputGroupAddon align="inline-end">
              <button
                type="button"
                onClick={() => setSearchName("")}
                className="inline-flex items-center px-2 text-xs text-black hover:cursor-pointer hover:text-black/70 dark:invert dark:opacity-50 dark:hover:opacity-100"
              >
                <CircleX className="w-4" />
              </button>
            </InputGroupAddon>
          )}
        </InputGroup>
      </Field>

      <Field className="flex-1 ">
        <FieldLabel htmlFor="searchAge">Wiek uczestnika</FieldLabel>
        <InputGroup>
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
          <InputGroupAddon>
            <User className="text-muted-foreground" />
          </InputGroupAddon>

          {searchAge !== "" && (
            <InputGroupAddon align="inline-end">
              <button
                type="button"
                onClick={() => setSearchAge("")}
                className="inline-flex items-center px-2 text-xs text-black hover:cursor-pointer hover:text-black/70 dark:invert dark:opacity-50 dark:hover:opacity-100"
              >
                <CircleX className="w-4" />
              </button>
            </InputGroupAddon>
          )}
        </InputGroup>
      </Field>

      <Field className="flex-1">
        <FieldLabel>Poziom zaawansowania</FieldLabel>
        <Select
          value={experience}
          onValueChange={(value) =>
            setExperience(value as ExperienceFilterValue)
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">Wszystkie poziomy</SelectItem>
              <SelectItem value="Początkujący">Początkujący</SelectItem>
              <SelectItem value="Średniozaawansowani">
                Średniozaawansowani
              </SelectItem>
              <SelectItem value="Zaawansowani">Zaawansowani</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>

      <Field className="flex-1">
        <FieldLabel>Sortowanie</FieldLabel>
        <Select
          value={sorting}
          onValueChange={(value) => setSorting(value as OfferSortingValue)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="default">Domyślne</SelectItem>
              <SelectItem value="alphabetical-asc">Nazwa: A–Z</SelectItem>
              <SelectItem value="alphabetical-desc">Nazwa: Z–A</SelectItem>
              <SelectItem value="age-asc">Wiek: rosnąco</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>

      <Field className="flex-1 ">
        <FieldLabel className="opacity-0 hidden lg:block">Wyczyść</FieldLabel>
        <button
          type="button"
          onClick={onClearFilters}
          disabled={!hasActiveFilters}
          className="inline-flex h-10 w-full items-center justify-center  rounded-md border px-4 text-sm font-medium transition hover:bg-accent disabled:pointer-events-none disabled:opacity-50"
        >
          <RotateCcw className="w-4" />
          Wyczyść filtry
        </button>
      </Field>
    </div>
  );
}
