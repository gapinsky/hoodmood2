import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import ToggleButtons from "@/myComponents/common/ToggleButtons";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import {
  koszalinPricingTabs,
  type PricingPageContent,
} from "@/data/pricingData";
import Table from "./Table";

export default function PricingPage({
  badge,
  title,
  description,
  tableData,
}: PricingPageContent) {
  return (
    <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={badge}
          title={title}
          description={description}
        />
        <ToggleButtons tabs={koszalinPricingTabs} />
        <Table data={tableData} />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
