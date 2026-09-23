import PageStructuredData from "@/myComponents/common/PageStructuredData";
import { createMetadata } from "@/lib/seo";
import { szczecinekSeo, szczecinekSocialImage } from "@/lib/seo-szczecinek";
import SectionContainer from "@/myComponents/common/SectionContainer";
import LocationPageHeader from "@/myComponents/common/headers/LocationPageHeader";
import { pricingTabs } from "@/data/tabs";
import { getPricingPageContent } from "@/lib/data-adapters/class-pricing";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SzczecinekIndividualLesson from "@/myComponents/common/SzczecinekIndividualLesson";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import MainWrapper from "@/myComponents/common/MainWrapper";
export const metadata = createMetadata({ ...szczecinekSeo.pricing, socialImage: szczecinekSocialImage });

export default function PricingSzczecinek() {
  const content = getPricingPageContent("szczecinek");
  return (
    <MainWrapper>
      <PageStructuredData metadata={metadata} />
      <SectionContainer>
        <LocationPageHeader
          tabs={pricingTabs}
          eyebrow="Twój ruch / Hoodmood"
          navigationLabel="Lokalizacja cennika"
          title={content.title}
          description="Miesięczne opłaty za zajęcia zespołu REBELIA w Szczecinku. Każda grupa trenuje dwa razy w tygodniu."
        ></LocationPageHeader>
        <PricingTable items={content.tableData} />
        <SzczecinekIndividualLesson />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
