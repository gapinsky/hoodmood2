import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import Timeline from "./Timeline";

export default function HowToJoin() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <Timeline />
      <ButtonPrimary href="/zapisz-sie">Dołącz do nas</ButtonPrimary>
    </SectionContainer>
  );
}
