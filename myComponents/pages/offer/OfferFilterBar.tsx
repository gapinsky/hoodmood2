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

export type OfferSortingValue =
  | "default"
  | "alphabetical-asc"
  | "alphabetical-desc"
  | "age-asc";

type Props = {
  searchName: string;
  setSearchName: (value: string) => void;
  searchAge: string;
  setSearchAge: (value: string) => void;
  sorting: OfferSortingValue;
  setSorting: (value: OfferSortingValue) => void;
};

export default function OfferFilterBar({
  searchName,
  setSearchName,
  searchAge,
  setSearchAge,
  sorting,
  setSorting,
}: Props) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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

      <Field className="flex-1">
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
        <FieldLabel>Sortowanie</FieldLabel>
        <Select
          value={sorting}
          onValueChange={(value) =>
            setSorting(value as OfferSortingValue)
          }
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
    </div>
  );
}