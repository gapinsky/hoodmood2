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
    <div className="flex gap-4">
      <Field className="flex-1">
        <FieldLabel htmlFor="searchInput">Wyszukaj zajęć</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="searchInput"
            placeholder="Wprowadź nazwę szukanych zajęć"
            value={searchInput}
            onChange={(e) => setSearchInput(e.currentTarget.value)}
          />
          <InputGroupAddon>
            <SearchIcon className="text-muted-foreground" />
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

      <Field className="flex-1">
        <FieldLabel htmlFor="age">Wiek uczestnika</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="age"
            placeholder="Wprowadź wiek uczestnika"
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
                className="px-2 hover:cursor-pointer text-black dark:invert dark:opacity-50 inline-flex items-center gap-1 text-xs hover:text-black/70 dark:hover:opacity-100"
              >
                <CircleX className="w-4" />
              </button>
            </InputGroupAddon>
          )}
        </InputGroup>
      </Field>

      <Field className="flex-1">
        <FieldLabel>Sortowanie</FieldLabel>
        <Select
          value={sorting}
          onValueChange={(value) =>
            setSorting(
              value as "default" | "ascending" | "descending" | "alphabetical"
            )
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="default">Sortowanie domyślne</SelectItem>
              <SelectItem value="ascending">Cena: rosnąco</SelectItem>
              <SelectItem value="descending">Cena: malejąco</SelectItem>
              <SelectItem value="alphabetical">Alfabetycznie</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
}