import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import {
  polanowPricingPageContent,
  polanowPricingTableData,
} from "@/data/pricingData";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import MainWrapper from "@/myComponents/common/MainWrapper";
import ToggleButtons from "@/myComponents/common/ToggleButtons";
import { pricingTabs } from "@/data/tabs";
export default function PricingPolanow() {
  return (
    <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={polanowPricingPageContent.badge}
          title={polanowPricingPageContent.title}
          description={polanowPricingPageContent.description}
        ></SectionContent>
        <ToggleButtons tabs={pricingTabs} />
        <PricingTable items={polanowPricingTableData} />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
