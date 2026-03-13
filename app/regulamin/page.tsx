import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import Regulations from "./Regulations";
export default function TermsAndConditions() {
  return (
    <main className="">
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>

        <Regulations />
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
