import PageStructuredData from "@/myComponents/common/PageStructuredData";
import { createMetadata } from "@/lib/seo";
import { szczecinekSeo, szczecinekSocialImage } from "@/lib/seo-szczecinek";
import SectionContainer from "@/myComponents/common/SectionContainer";
import LocationPageHeader from "@/myComponents/common/headers/LocationPageHeader";
import { getClassPricing, getPricingPageContent } from "@/lib/data-adapters/class-pricing";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import MainWrapper from "@/myComponents/common/MainWrapper";
export const metadata = createMetadata({ ...szczecinekSeo.pricing, socialImage: szczecinekSocialImage });

export default function PricingSzczecinek() {
  const content = getPricingPageContent("szczecinek");
  const items = [...content.tableData, ...getClassPricing("szczecinek", "zajecia-indywidualne")];
  return (
    <MainWrapper>
      <PageStructuredData metadata={metadata} />
      <SectionContainer>
        <LocationPageHeader
          eyebrow="Twój ruch / Hoodmood"
          navigationLabel="Lokalizacja cennika"
          title={content.title}
          description="Miesięczne opłaty za zajęcia zespołu REBELIA w Szczecinku oraz ceny lekcji indywidualnych. Każda grupa trenuje dwa razy w tygodniu. Termin lekcji indywidualnej ustalamy przy zapisach."
        ></LocationPageHeader>
        <PricingTable items={items} />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
