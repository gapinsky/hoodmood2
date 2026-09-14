import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import PageIntro from "@/myComponents/common/headers/PageIntro";
import { data } from "./data";
import MainWrapper from "@/myComponents/common/MainWrapper";
import EnrollmentForm from "./_components/enrollmentForm/EnrollmentForm";
import Toaster from "@/components/ui/sonner";

export default function EnrollmentPage() {
  return (
    <MainWrapper>
      <SectionContainer>
        <PageIntro
          eyebrow="Dołącz do Hoodmood"
          title={data.title}
          description={data.description}
        ></PageIntro>
        <EnrollmentForm />

        <AnyQuestionsContact />
        <Toaster />
      </SectionContainer>
    </MainWrapper>
  );
}
