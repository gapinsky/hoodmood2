import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, priceList } from "./data";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import PricingTabs from "@/myComponents/pages/pricing/PricingTabs";
export default function Schedule() {
  return (
    <main>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
       <PricingTabs data={priceList}/>
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
