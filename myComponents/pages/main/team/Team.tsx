import SectionContent from "@/myComponents/common/headers/SectionContent";
import SectionContainer from "@/myComponents/common/SectionContainer";
import TeamCarousel from "./TeamCarousel";

const data = {
  title: "Poznaj ekipę hoodmood!",
  description:
    "Za zajęciami stoją ludzie, którzy naprawdę żyją tańcem – i ogarniają pracę z dzieciakami, młodzieżą i dorosłymi. Łączy ich jedno: zajawka, którą czuć od pierwszych zajęć.",
};

export default function Team() {
  return (
    <SectionContainer>
      <SectionContent
        title={data.title}
        description={data.description}
      />
      <TeamCarousel/>
    </SectionContainer>
  );
}
