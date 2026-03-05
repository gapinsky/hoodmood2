import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, faq } from "./data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <main className="">
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <div>
          <Accordion type="single" collapsible defaultValue="0">
            {faq.map((item, id) => (
              <AccordionItem key={id} value={`${id}`}>
                <AccordionTrigger className="text-xs md:text-md lg:text-lg py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className=" text-muted-foreground pb-12">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
