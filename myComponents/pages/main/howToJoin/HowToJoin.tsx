import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/headers/SectionContent";
import { data } from "./data";
import ButtonPrimary from "@/myComponents/common/buttons/ButtonPrimary";
import Timeline from "./Timeline";

export default function HowToJoin() {
  return (
    <SectionContainer>
      <SectionContent
        title={data.title}
        description={data.description}
      />
      <Timeline />
      <div className="flex justify-center">
        <ButtonPrimary href="/zapisz-sie">Zapisz się na zajęcia</ButtonPrimary>
      </div>
    </SectionContainer>
  );
}
