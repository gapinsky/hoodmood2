import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import Link from "next/link";
import { data } from "./data";
import Timeline from "./Timeline";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
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
