import PageStructuredData from "@/myComponents/common/PageStructuredData";
import { createMetadata } from "@/lib/seo";
import { staticSeoPages } from "@/lib/seo-pages";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import PageIntro from "@/myComponents/headers/PageIntro";
import { data } from "./data";
import MainWrapper from "@/myComponents/common/MainWrapper";
import EnrollmentForm from "./_components/enrollmentForm/EnrollmentForm";
import Toaster from "@/components/ui/sonner";

export const metadata = createMetadata({ path: "/zapisz-sie", ...staticSeoPages["/zapisz-sie"] });

export default function EnrollmentPage() {
  return (
    <MainWrapper>
      <PageStructuredData metadata={metadata} />
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
