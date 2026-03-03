import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, instructors } from "./data";
import TeamCard from "@/myComponents/pages/team/TeamCard";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";

export default function Team() {
  return (
    <main className="">
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <TeamCard
              key={instructor.id}
              name={instructor.name}
              shortBio={instructor.shortBio}
              description={instructor.description}
              img={instructor.img}
              role={instructor.role}
              hoverImg={instructor.hoverImg}
              localizations={instructor.localizations}
              styles={instructor.styles}
            />
          ))}
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
