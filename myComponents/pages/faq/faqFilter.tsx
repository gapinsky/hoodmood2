"use client";

import { useMemo, useState } from "react";
import { CircleX, Search } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  InputGroup, InputGroupAddon, InputGroupInput,
} from "@/components/ui/input-group";
import type { FaqItem } from "@/app/faq/data";
import { normalizeText as normalize } from "@/lib/normalizeText";
import { inputStyles } from "@/myComponents/forms/filterStyles";
import ButtonSecondary from "@/myComponents/common/buttons/ButtonSecondary";
import NoQuestion from "./noQuestion";

export default function FaqFilter({ faq }: { faq: FaqItem[] }) {
  const [search, setSearch] = useState("");
  const filteredFaq = useMemo(() => {
    const words = normalize(search).trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return faq;
    return faq.filter((item) =>
      words.every((word) => normalize(item.question).includes(word)),
    );
  }, [search, faq]);

  return (
    <div className="grid items-start gap-8 border-t border-foreground/10 pt-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
      <aside className="min-w-0 space-y-6">
        <div className="space-y-3">
          <label htmlFor="input-field-question" className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Znajdź odpowiedź
          </label>
          <InputGroup className={inputStyles}>
            <InputGroupAddon><Search className="size-4" aria-hidden="true" /></InputGroupAddon>
            <InputGroupInput
              id="input-field-question"
              type="text"
              placeholder="Np. zapisy, płatności, zajęcia próbne"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="text-base"
            />
            {search !== "" && (
              <InputGroupAddon align="inline-end">
                <button type="button" aria-label="Wyczyść wyszukiwanie" onClick={() => setSearch("")} className="ui-focus-ring inline-flex size-11 items-center justify-center rounded-md text-muted-foreground hover:text-foreground">
                  <CircleX className="size-4" aria-hidden="true" />
                </button>
              </InputGroupAddon>
            )}
          </InputGroup>
        </div>
        <div className="rounded-md border border-foreground/10 bg-foreground/2.5 p-5 sm:p-6">
          <h2 className="text-2xl">Wolisz porozmawiać?</h2>
          <p className="mt-3 mb-5 text-sm leading-6 text-muted-foreground">
            Pomożemy wybrać grupę i przygotować się do pierwszych zajęć.
          </p>
          <ButtonSecondary href="/kontakt">Napisz do nas</ButtonSecondary>
        </div>
      </aside>

      <div className="min-w-0">
        <p className="sr-only" role="status">Liczba pasujących pytań: {filteredFaq.length}</p>
        {filteredFaq.length > 0 ? (
          <Accordion type="single" collapsible className="border-t border-foreground/10">
            {filteredFaq.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="border-foreground/10 px-0">
                <AccordionTrigger className="rounded-md py-6 text-base font-medium normal-case leading-6 md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-prose pb-6 text-sm leading-7 text-muted-foreground sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : <NoQuestion />}
      </div>
    </div>
  );
}
