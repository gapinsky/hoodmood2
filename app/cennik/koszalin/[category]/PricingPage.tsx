import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import ToggleButtons from "@/myComponents/common/ToggleButtons";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import Table from "./Table";
import { tabs, type PricingPageContent } from "./data";

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
        <ToggleButtons tabs={tabs} />
        <Table data={tableData} />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}