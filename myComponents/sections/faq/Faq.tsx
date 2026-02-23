import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import Link from "next/link";
import { data } from "./data";
import { Accordion, AccordionContent } from "@/components/ui/accordion";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
export default function Faq() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      {/* <Accordion type="single">
        <AccordionContent>

        </AccordionContent>
      </Accordion> */}
      <ButtonPrimary href="/oferta/koszalin">Zobacz pełną ofertę</ButtonPrimary>
    </SectionContainer>
  );
}
