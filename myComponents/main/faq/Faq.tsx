import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/headers/SectionContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/app/faq/data";
import Link from "next/link";

 const data = {
  title: "Najczęściej zadawane pytania",
  description:
    "Wiemy, że przed pierwszymi zajęciami w głowie pojawia się milion pytań. Zebraliśmy te najczęstsze - zanim do nas napiszesz sprawdź, czy nie ma tu odpowiedzi.",
};


export default function Faq() {
  return (
    <SectionContainer>
      <SectionContent
        title={data.title}
        description={
          <>
            {data.description}{" "}
            <Link
              href="/faq"
              className="font-semibold text-(--brand-700) underline decoration-(--brand-500)/60 underline-offset-4 transition-colors hover:text-(--brand-500) dark:text-(--brand-300) dark:hover:text-(--brand-200)"
            >
              Zobacz więcej
            </Link>
          </>
        }
      />
      <Accordion type="single" collapsible>
        {faq.slice(0, 3).map((question) => (
          <AccordionItem value={question.question} key={question.question}>
            <AccordionTrigger>{question.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm md:text-base">
              {question.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionContainer>
  );
}
