import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
export default function TermsAndConditions() {
  return (
    <main className="">
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>

        <div className="space-y-16 xl:space-y-32"></div>
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
