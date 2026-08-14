import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import MainWrapper from "@/myComponents/common/MainWrapper";
import Form from "./_components/Form";
import Toaster from "@/components/ui/sonner";

export default function TermsAndConditions() {
  return (
    <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>

        <div className="mx-auto w-full max-w-3xl">
          <div className={sectionSurfaceStyles}>
            <Form />
          </div>
        </div>

        <AnyQuestionsContact />
        <Toaster />
      </SectionContainer>
    </MainWrapper>
  );
}

const sectionSurfaceStyles =
  "rounded-lg bg-white/[0.72] p-5 backdrop-blur-xl dark:bg-white/[0.04] md:p-6 xl:p-8";
