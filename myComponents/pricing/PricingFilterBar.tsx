"use client";

import { CircleX, SearchIcon, User } from "lucide-react";
import { Field, FieldLabel } from "@/components/ui/field";
import { inputStyles, selectTriggerStyles, selectContentStyles, selectItemStyles } from "@/myComponents/forms/filterStyles";
import { Checkbox } from "@/components/ui/checkbox";
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
    isHoodmoodMember,
    setIsHoodmoodMember,
  } = usePricingFilters();

  return (
    <div className="grid grid-cols-1 gap-5 rounded-md border border-foreground/10 bg-foreground/2.5 p-5 md:grid-cols-2 xl:grid-cols-[1.2fr_2fr_1fr_1.3fr] sm:p-6">
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
          Wyszukaj zajęcia
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
                aria-label="Wyczyść nazwę zajęć"
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
                aria-label="Wyczyść wiek uczestnika"
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
              value as "ascending" | "descending" | "alphabetical",
            )
          }
        >
          <SelectTrigger className={selectTriggerStyles}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className={selectContentStyles}>
            <SelectGroup>
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
      <div className="flex flex-col gap-2 border-t border-foreground/10 pt-4 md:col-span-2 xl:col-span-4">
        <label htmlFor="hoodmood-member" className="flex min-h-10 w-fit cursor-pointer items-center gap-3 text-sm font-semibold">
          <Checkbox
            id="hoodmood-member"
            checked={isHoodmoodMember}
            onCheckedChange={(checked) => setIsHoodmoodMember(checked === true)}
            aria-describedby="hoodmood-member-description"
          />
          <span>Aktywny kursant Hoodmood</span>
        </label>
        <p id="hoodmood-member-description" className="text-sm text-muted-foreground">
          Ceny Master Trainers, Masterclass i Master Pass dla {isHoodmoodMember ? (<>
            <a href="/regulamin#aktywny-kursant" target="_blank" rel="noopener noreferrer" className="ui-focus-ring underline underline-offset-4 hover:text-foreground">aktywnych kursantów</a>{" "}Hoodmood
          </>) : "osób spoza Hoodmood"}.
        </p>
      </div>
    </div>
  );
}
