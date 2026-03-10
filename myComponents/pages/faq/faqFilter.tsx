"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMemo, useState } from "react";
import { FaqItem } from "@/app/faq/data";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { CircleX } from "lucide-react";
import NoQuestion from "./noQuestion";
const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

type Props = {
  faq: FaqItem[];
};

export default function FaqFilter({ faq }: Props) {
  const [search, setSearch] = useState("");

  const filteredFaq = useMemo(() => {
    const words = normalize(search).trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) return faq;

    return faq.filter((item) => {
      const normalizedQuestion = normalize(item.question);
      return words.every((word) => normalizedQuestion.includes(word));
    });
  }, [search, faq]);

  const clearSearchBar = () => {
    setSearch("");
  };

  return (
    <>
      <InputGroup>
        <InputGroupInput
          id="input-field-question"
          type="text"
          placeholder="Zacznij wpisywać pytanie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputGroupAddon align={"inline-end"}>
          {search !== "" && (
            <button
              className="   px-2 hover:cursor-pointer text-black dark:invert dark:opacity-50 inline-flex items-center gap-1 text-xs hover:text-black/70 dark:hover:opacity-100"
              onClick={clearSearchBar}
            >
              <CircleX className="max-w-4" /> Wyczyść
            </button>
          )}
        </InputGroupAddon>
      </InputGroup>

      <Accordion type="single" collapsible>
        {filteredFaq.map((item, id) => (
          <AccordionItem key={id} value={`${id}`}>
            <AccordionTrigger className="text-xs md:text-md xl:text-lg py-6">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-12">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {filteredFaq.length === 0 && <NoQuestion />}
    </>
  );
}
