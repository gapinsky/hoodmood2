import SectionContainer from "@/myComponents/common/SectionContainer";
import LocationPageHeader from "@/myComponents/common/headers/LocationPageHeader";
import { pricingTabs } from "@/data/tabs";
import {
  bialyBorPricingPageContent,
  bialyBorPricingTableData,
} from "@/data/pricingData";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import MainWrapper from "@/myComponents/common/MainWrapper";
export default function PricingBialyBor() {
  return (
    <MainWrapper>
      <SectionContainer>
        <LocationPageHeader
          tabs={pricingTabs}
          eyebrow="Twój ruch / Hoodmood"
          navigationLabel="Lokalizacja cennika"
          title={bialyBorPricingPageContent.title}
          description={bialyBorPricingPageContent.description}
        ></LocationPageHeader>
        <PricingTable items={bialyBorPricingTableData} />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
