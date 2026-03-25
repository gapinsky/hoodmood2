import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import MainWrapper from "@/myComponents/common/MainWrapper";
import EnrollmentForm from "./_components/enrollmentForm/EnrollmentForm";

export default function TermsAndConditions() {
  return (
    <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <div className="grid grid-cols-1 border-2">
          {/* <div className="relative w-full aspect-square h-fit ">
            <Image
              alt="image"
              src="/assets/images/enrollmentForm/target.svg"
              fill
              className="aspect-square max-w-[60%]   object-contain "
            />
          </div> */}
          <EnrollmentForm />
        </div>

        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
