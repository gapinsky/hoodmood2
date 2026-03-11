import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, priceList, packageList } from "./data";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import PackageTable from "@/myComponents/pages/pricing/PackageTable";
import ToggleButtons from "@/myComponents/pages/pricing/ToggleButtons";
import Filters from "@/myComponents/pages/pricing/Filters";
export default function Schedule() {
  return (
    <main>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <ToggleButtons/>
        <Filters/>
        <PricingTable items={priceList} />
        <PackageTable items={packageList}/>
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
