import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, instructors } from "./data";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import MainWrapper from "@/myComponents/common/MainWrapper";
import TeamCard from "@/myComponents/pages/team/TeamCard";

export default function Team() {
  return (
    <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-2 lg:gap-3">
          {instructors.map((instructor) => (
            <TeamCard
              key={instructor.id}
              name={instructor.name}
              role={instructor.role}
              images={instructor.images}
              localizations={instructor.localizations}
              id={instructor.id}
              styles={instructor.styles}
            />
          ))}
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
