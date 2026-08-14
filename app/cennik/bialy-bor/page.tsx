import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import {
  bialyBorPricingPageContent,
  bialyBorPricingTableData,
} from "@/data/pricingData";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import MainWrapper from "@/myComponents/common/MainWrapper";
import ToggleButtons from "@/myComponents/common/ToggleButtons";
import { pricingTabs } from "@/data/tabs";
export default function PricingBialyBor() {
  return (
    <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={bialyBorPricingPageContent.badge}
          title={bialyBorPricingPageContent.title}
          description={bialyBorPricingPageContent.description}
        ></SectionContent>
        <ToggleButtons tabs={pricingTabs} />
        <PricingTable items={bialyBorPricingTableData} />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
