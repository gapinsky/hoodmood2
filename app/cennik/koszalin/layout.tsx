import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import { ReactNode } from "react";
import ToggleButtons from "@/myComponents/pages/pricing/ToggleButtons";
export default function Schedule({ children }: { children: ReactNode }) {
  return (
    <main>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <ToggleButtons />
        {children}
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
