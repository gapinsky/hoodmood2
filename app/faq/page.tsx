import SectionContainer from "@/myComponents/common/SectionContainer";
import PageContent from "@/myComponents/common/headers/PageContent";
import { data, faq } from "./data";
import FaqFilter from "@/myComponents/pages/faq/faqFilter";
import MainWrapper from "@/myComponents/common/MainWrapper";

export default function FAQ() {
  return (
  <MainWrapper>
      <SectionContainer>
        <PageContent
          title={data.title}
          description={data.description}
        ></PageContent>
        <div className="space-y-4">
          <FaqFilter faq={faq} />
        </div>
      </SectionContainer>
    </MainWrapper>
  );
}
