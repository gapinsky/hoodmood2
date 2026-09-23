import PageStructuredData from "@/myComponents/common/PageStructuredData";
import { createMetadata } from "@/lib/seo";
import { staticSeoPages } from "@/lib/seo-pages";
import SectionContainer from "@/myComponents/common/SectionContainer";
import LocationPageHeader from "@/myComponents/common/headers/LocationPageHeader";
import { pricingTabs } from "@/data/tabs";
import { getPricingPageContent } from "@/lib/data-adapters/class-pricing";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import MainWrapper from "@/myComponents/common/MainWrapper";
export const metadata = createMetadata({ path: "/cennik/polanow", ...staticSeoPages["/cennik/polanow"] });

export default function PricingPolanow() {
  const content = getPricingPageContent("polanow");
  return (
    <MainWrapper>
      <PageStructuredData metadata={metadata} />
      <SectionContainer>
        <LocationPageHeader
          tabs={pricingTabs}
          eyebrow="Twój ruch / Hoodmood"
          navigationLabel="Lokalizacja cennika"
          title={content.title}
          description={content.description}
        ></LocationPageHeader>
        <PricingTable items={content.tableData} />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
