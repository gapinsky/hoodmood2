"use client";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import { data } from "./data";
import { useMemo, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { CircleX, SearchIcon, User } from "lucide-react";
import { normalize } from "@/myComponents/pages/faq/faqFilter";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

export default function page() {
  const [searchInput, setSearchInput] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const filteredData = useMemo(() => {
    const words = normalize(searchInput).trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) return data;

    return data.filter((item) => {
      const normalizedName = normalize(item.name);
      return words.every((word) => normalizedName.includes(word));
    });
  }, [searchInput, data]);

  const clearInput = () => {
    setSearchInput("");
  };
  const clearAge = () => {
    setSearchAge("");
  };
  return (
    <>
      <div className="flex gap-4">
        <Field>
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
              <InputGroupAddon align={"inline-end"}>
                <button
                  onClick={clearInput}
                  className=" px-2 hover:cursor-pointer text-black dark:invert dark:opacity-50 inline-flex items-center gap-1 text-xs hover:text-black/70 dark:hover:opacity-100"
                >
                  <CircleX className="w-4" />
                </button>
              </InputGroupAddon>
            )}
          </InputGroup>
        </Field>
        <Field>
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
              <InputGroupAddon align={"inline-end"}>
                <button
                  onClick={clearAge}
                  className=" px-2 hover:cursor-pointer text-black dark:invert dark:opacity-50 inline-flex items-center gap-1 text-xs hover:text-black/70 dark:hover:opacity-100"
                >
                  <CircleX className="w-4" />
                </button>
              </InputGroupAddon>
            )}
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel>Sortowanie</FieldLabel>
          <Select defaultValue="default">
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
      <PricingTable items={filteredData} />
    </>
  );
}
