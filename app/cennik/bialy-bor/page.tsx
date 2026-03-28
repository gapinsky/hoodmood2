import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
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
        <SectionContent
          badge={bialyBorPricingPageContent.badge}
          title={bialyBorPricingPageContent.title}
          description={bialyBorPricingPageContent.description}
        ></SectionContent>
        <PricingTable items={bialyBorPricingTableData} />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
