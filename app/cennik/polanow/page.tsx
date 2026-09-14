import SectionContainer from "@/myComponents/common/SectionContainer";
import LocationPageHeader from "@/myComponents/common/headers/LocationPageHeader";
import { pricingTabs } from "@/data/tabs";
import {
  polanowPricingPageContent,
  polanowPricingTableData,
} from "@/data/pricingData";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import MainWrapper from "@/myComponents/common/MainWrapper";
export default function PricingPolanow() {
  return (
    <MainWrapper>
      <SectionContainer>
        <LocationPageHeader
          tabs={pricingTabs}
          eyebrow="Twój ruch / Hoodmood"
          navigationLabel="Lokalizacja cennika"
          title={polanowPricingPageContent.title}
          description={polanowPricingPageContent.description}
        ></LocationPageHeader>
        <PricingTable items={polanowPricingTableData} />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
