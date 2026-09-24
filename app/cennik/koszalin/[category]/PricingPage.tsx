import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";
import LocationPageHeader from "@/myComponents/common/headers/LocationPageHeader";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import type { PricingPageContent } from "@/myComponents/pages/pricing/types";
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
