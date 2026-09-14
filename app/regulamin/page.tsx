import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import PageContent from "@/myComponents/common/headers/PageContent";
import { data } from "./data";
import Regulations from "./Regulations";
import MainWrapper from "@/myComponents/common/MainWrapper";
export default function TermsAndConditions() {
  return (
  <MainWrapper>
      <SectionContainer>
        <PageContent
          title={data.title}
          description={data.description}
        ></PageContent>

        <Regulations />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
