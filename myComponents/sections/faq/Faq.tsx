import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import { faq } from "@/app/faq/data";
export default function Faq() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <Accordion type="single" collapsible>
        {faq.splice(0, 3).map((question) => (
          <AccordionItem value={question.question} key={question.question}>
            <AccordionTrigger>{question.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-md">
              {question.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <ButtonPrimary href="/faq">Wszystkie pytania</ButtonPrimary>
    </SectionContainer>
  );
}
