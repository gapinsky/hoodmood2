import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, instructors } from "./data";
import TeamCard from "@/myComponents/pages/team/TeamCard";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import MainWrapper from "@/myComponents/common/MainWrapper";

export default function Team() {
  return (
    <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {instructors.map((instructor) => (
            <TeamCard
              key={instructor.id}
              name={instructor.name}
              images={instructor.images}
              role={instructor.role}
              localizations={instructor.localizations}
              id={instructor.id}
            />
          ))}
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
