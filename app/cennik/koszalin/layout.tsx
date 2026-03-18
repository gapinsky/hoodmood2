import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, tabs } from "./data";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import { ReactNode } from "react";
import ToggleButtons from "@/myComponents/common/ToggleButtons";
import { PricingFiltersProvider } from "../../../myComponents/pages/pricing/PricingFiltersProvider";
import PricingFilterBar from "../../../myComponents/pages/pricing/PricingFilterBar";
import MainWrapper from "@/myComponents/common/MainWrapper";
export default function Schedule({ children }: { children: ReactNode }) {
  return (
    <MainWrapper>
      <PricingFiltersProvider>
        <SectionContainer>
          <SectionContent
            badge={data.badge}
            title={data.title}
            description={data.description}
          ></SectionContent>
          <ToggleButtons tabs={tabs} />
          <PricingFilterBar />
          {children}
          <AnyQuestionsContact />
        </SectionContainer>
      </PricingFiltersProvider>
    </MainWrapper>
  );
}
