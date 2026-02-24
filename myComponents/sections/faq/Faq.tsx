import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, questions } from "./data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
export default function Faq() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <Accordion type="single" collapsible>
        {questions.map((question) => (
          <AccordionItem value={question.question} key={question.question}>
            <AccordionTrigger>{question.question}</AccordionTrigger>
            <AccordionContent>{question.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <ButtonPrimary href="/oferta/koszalin">Zobacz pełną ofertę</ButtonPrimary>
    </SectionContainer>
  );
}
