"use client";

import { CircleX, SearchIcon, User } from "lucide-react";
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
import { usePricingFilters } from "./PricingFiltersProvider";

export default function PricingFilterBar() {
  const {
    searchInput,
    setSearchInput,
    searchAge,
    setSearchAge,
    sorting,
    setSorting,
  } = usePricingFilters();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[7fr_2fr_4fr] gap-8">
      {/* <div   className="    grid grid-cols-1 md:grid-cols-[7fr_2fr_4fr] gap-5
     rounded-[28px]
     border border-black/[0.06] dark:border-white/[0.08]
     bg-white/[0.72] dark:bg-white/[0.04]
     backdrop-blur-xl
     ring-1 ring-inset ring-white/50 dark:ring-white/[0.05]
     shadow-[0_12px_40px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.55)]
     dark:shadow-[0_12px_40px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.06)]
     p-4 md:p-5" > */}
      {/* <Field className="flex-1"> */}
      <Field className="flex flex-col gap-2.5">
        {/* <FieldLabel htmlFor="searchInput">Wyszukaj zajęć</FieldLabel> */}
        <FieldLabel
          htmlFor="searchInput"
          className="text-[11px] uppercase tracking-[0.16em] text-black/55 dark:text-white/55 font-semibold    pl-1  "
        >
          Wyszukaj zajęć
        </FieldLabel>
        <InputGroup className={inputStyles}>
          <InputGroupInput
            id="searchInput"
            placeholder="Wprowadź nazwę szukanych zajęć"
            value={searchInput}
            onChange={(e) => setSearchInput(e.currentTarget.value)}
          />
          <InputGroupAddon>
            <SearchIcon className="text-black/35 dark:text-white/35" />
          </InputGroupAddon>

          {searchInput !== "" && (
            <InputGroupAddon align="inline-end">
              <button
                type="button"
                onClick={() => setSearchInput("")}
                className="px-2 hover:cursor-pointer text-black dark:invert dark:opacity-50 inline-flex items-center gap-1 text-xs hover:text-black/70 dark:hover:opacity-100"
              >
                <CircleX className="w-4" />
              </button>
            </InputGroupAddon>
          )}
        </InputGroup>
      </Field>

      {/* <Field className="flex-1"> */}
      <Field className="flex flex-col gap-2.5">
        {/* <FieldLabel htmlFor="age">Wiek uczestnika</FieldLabel> */}
        <FieldLabel
          htmlFor="age"
          className="text-[11px] uppercase tracking-[0.16em] text-black/55 dark:text-white/55 font-semibold    pl-1  "
        >
          Wiek uczestnika
        </FieldLabel>
        <InputGroup className={inputStyles}>
          <InputGroupInput
            id="age"
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
            <User className="text-black/35 dark:text-white/35" />
          </InputGroupAddon>

          {searchAge !== "" && (
            <InputGroupAddon
              align="inline-end"
              className="text-black/35 dark:text-white/35"
            >
              <button
                type="button"
                onClick={() => setSearchAge("")}
                className="px-2 hover:cursor-pointer   inline-flex items-center gap-1 text-xs hover:text-black/15 dark:hover:text-white/60"
              >
                <CircleX className="w-4" />
              </button>
            </InputGroupAddon>
          )}
        </InputGroup>
      </Field>

      {/* <Field className="flex-1"> */}
      <Field className="flex flex-col gap-2.5">
        {/* <FieldLabel>Sortowanie</FieldLabel> */}
        <FieldLabel className="text-[11px] uppercase tracking-[0.16em] text-black/55 dark:text-white/55 font-semibold    pl-1  ">
          Sortowanie
        </FieldLabel>
        <Select
          value={sorting}
          onValueChange={(value) =>
            setSorting(
              value as "default" | "ascending" | "descending" | "alphabetical",
            )
          }
        >
          <SelectTrigger className={selectTriggerStyles}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className={selectContentStyles}>
            <SelectGroup>
              <SelectItem className={selectItemStyles} value="default">
                Sortowanie domyślne
              </SelectItem>
              <SelectItem className={selectItemStyles} value="ascending">
                Cena: rosnąco
              </SelectItem>
              <SelectItem className={selectItemStyles} value="descending">
                Cena: malejąco
              </SelectItem>
              <SelectItem className={selectItemStyles} value="alphabetical">
                Nazwa: A-Z
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
}

export const inputStyles =
  "ui-field ui-outline h-10 rounded-lg text-foreground";
export const selectTriggerStyles =
  "ui-field ui-outline h-10 rounded-lg px-5 text-foreground";
export const selectContentStyles =
  "ui-floating rounded-lg p-2";
export const selectItemStyles =
  "rounded-md text-foreground focus:bg-accent";

export const clearButtonStyles =
  "ui-field ui-outline inline-flex size-8 h-10 items-center justify-center rounded-md text-black/40 transition-colors duration-200 hover:bg-accent hover:text-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 dark:text-white/80 dark:hover:text-white/90";
