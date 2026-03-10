import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, faq } from "./data";
import FaqFilter from "@/myComponents/pages/faq/faqFilter";

export default function FAQ() {
  return (
    <main className="">
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <div className="space-y-4">
          <FaqFilter faq={faq} />
        </div>
      </SectionContainer>
    </main>
  );
}
