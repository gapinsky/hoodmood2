import SectionContent from "@/myComponents/common/SectionContent";
import { data, instructors } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import TeamCarousel from "./TeamCarousel";

export default function Team() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <TeamCarousel instructors={instructors} />
      <ButtonPrimary href="/grafik/koszalin">Sprawdź grafik</ButtonPrimary>
    </SectionContainer>
  );
}
