import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";
import LocationPageHeader from "@/myComponents/common/headers/LocationPageHeader";
import { pricingTabs } from "@/data/tabs";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import { type PricingPageContent } from "@/data/pricingData";
import Table from "./Table";

export default function PricingPage({
  title,
  description,
  tableData,
}: PricingPageContent) {
  return (
    <MainWrapper>
      <SectionContainer>
        <LocationPageHeader
          tabs={pricingTabs}
          eyebrow="Twój ruch / Hoodmood"
          navigationLabel="Lokalizacja cennika"
          title={title}
          description={description}
        />
        <Table data={tableData} />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
