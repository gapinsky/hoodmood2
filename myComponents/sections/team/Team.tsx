import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import TeamCarousel from "./TeamCarousel";
import { instructors } from "@/app/kadra/data";

export default function Team() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <TeamCarousel instructors={instructors} />
      <ButtonPrimary href="/kadra">Kadra trenerska</ButtonPrimary>
    </SectionContainer>
  );
}
