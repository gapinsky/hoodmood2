import PageStructuredData from "@/myComponents/common/PageStructuredData";
import { createMetadata } from "@/lib/seo";
import { staticSeoPages } from "@/lib/seo-pages";
import SectionContainer from "@/myComponents/common/SectionContainer";
import PageIntro from "@/myComponents/headers/PageIntro";
import { data, faq } from "./data";
import FaqFilter from "@/myComponents/pages/faq/faqFilter";
import MainWrapper from "@/myComponents/common/MainWrapper";

export const metadata = createMetadata({ path: "/faq", ...staticSeoPages["/faq"] });

export default function FAQ() {
  return (
    <MainWrapper>
      <PageStructuredData metadata={metadata} />
      <SectionContainer>
        <PageIntro
          eyebrow="Warto wiedzieć / Hoodmood"
          title={data.title}
          description={data.description}
        />
        <FaqFilter faq={faq} />
      </SectionContainer>
    </MainWrapper>
  );
}
