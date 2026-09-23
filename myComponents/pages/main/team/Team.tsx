import SectionContent from "@/myComponents/common/headers/SectionContent";
import { data } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import TeamCarousel from "./TeamCarousel";
import { activeTrainers } from "@/data/trainers";

export default function Team() {
  return (
    <SectionContainer>
      <SectionContent
        title={data.title}
        description={data.description}
      />
      <TeamCarousel trainers={activeTrainers} />
    </SectionContainer>
  );
}
