"use client";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import { data } from "./data";
import { useMemo, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { CircleX, SearchIcon } from "lucide-react";
import { normalize } from "@/myComponents/pages/faq/faqFilter";

export default function page() {
  const [searchInput, setSearchInput] = useState("");

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
  return (
    <>
      <InputGroup>
        <InputGroupInput
          placeholder="Szukaj zajęć"
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
      <PricingTable items={filteredData} />
    </>
  );
}
