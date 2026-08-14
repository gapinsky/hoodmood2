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
import { usePathname, useRouter } from "next/navigation";

export default function PricingFilterBar() {
  const pathname = usePathname();
  const router = useRouter();
  const currentCategory = pathname.split("/").at(-1);
  const selectedCategory =
    currentCategory === "pakiety-zajec" ||
    currentCategory === "zajecia-indywidualne"
      ? currentCategory
      : "zajecia";
  const {
    searchInput,
    setSearchInput,
    searchAge,
    setSearchAge,
    sorting,
    setSorting,
  } = usePricingFilters();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[3fr_7fr_2fr_4fr]">
      <Field className="flex flex-col gap-2.5">
        <FieldLabel className="ui-muted-label pl-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
          Kategoria
        </FieldLabel>
        <Select
          value={selectedCategory}
          onValueChange={(value) => router.push(`/cennik/koszalin/${value}`)}
        >
          <SelectTrigger className={selectTriggerStyles}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className={selectContentStyles}>
            <SelectGroup>
              <SelectItem className={selectItemStyles} value="zajecia">
                Zajęcia
              </SelectItem>
              <SelectItem className={selectItemStyles} value="pakiety-zajec">
                Pakiety zajęć
              </SelectItem>
              <SelectItem
                className={selectItemStyles}
                value="zajecia-indywidualne"
              >
                Zajęcia indywidualne
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>

      <Field className="flex flex-col gap-2.5">
        <FieldLabel
          htmlFor="searchInput"
          className="ui-muted-label pl-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
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
            <SearchIcon className="text-black/45 dark:text-white/35" />
          </InputGroupAddon>

          {searchInput !== "" && (
            <InputGroupAddon align="inline-end">
              <button
                type="button"
                onClick={() => setSearchInput("")}
                className="inline-flex items-center gap-1 px-2 text-xs text-black/68 hover:cursor-pointer hover:text-black/85 dark:invert dark:opacity-50 dark:hover:opacity-100"
              >
                <CircleX className="w-4" />
              </button>
            </InputGroupAddon>
          )}
        </InputGroup>
      </Field>

      <Field className="flex flex-col gap-2.5">
        <FieldLabel
          htmlFor="age"
          className="ui-muted-label pl-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
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
            <User className="text-black/45 dark:text-white/35" />
          </InputGroupAddon>

          {searchAge !== "" && (
            <InputGroupAddon
              align="inline-end"
              className="text-black/45 dark:text-white/35"
            >
              <button
                type="button"
                onClick={() => setSearchAge("")}
                className="inline-flex items-center gap-1 px-2 text-xs text-black/68 hover:cursor-pointer hover:text-black/85 dark:hover:text-white/60"
              >
                <CircleX className="w-4" />
              </button>
            </InputGroupAddon>
          )}
        </InputGroup>
      </Field>

      <Field className="flex flex-col gap-2.5">
        <FieldLabel className="ui-muted-label pl-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
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
  "ui-field ui-outline ui-interactive h-10 rounded-lg text-foreground";
export const selectTriggerStyles =
  "ui-field ui-outline ui-interactive h-10 rounded-lg px-5 text-foreground";
export const selectContentStyles = "rounded-lg p-2";
export const selectItemStyles =
  "ui-interactive rounded-md text-foreground focus:bg-accent motion-safe:hover:bg-accent/80";

export const clearButtonStyles =
  "ui-focus-ring ui-pressable ui-field ui-outline inline-flex size-8 h-10 items-center justify-center rounded-md text-black/55 motion-safe:hover:bg-accent motion-safe:hover:text-black/75 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 dark:text-white/80 dark:motion-safe:hover:text-white/90";
