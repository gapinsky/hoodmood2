import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, camps } from "./data";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import NoEvents from "@/myComponents/pages/camps/NoEvents";
import PreviousEvents from "@/myComponents/pages/camps/PreviousEvents";

export default function Camps() {
  return (
    <main className="">
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <NoEvents />
        <h2 className="text-xl lg:text-3xl">
          Zobacz, jak bawiliśmy się na poprzednich wydarzeniach!
        </h2>
        <div className="space-y-16 xl:space-y-32">
          {camps.map((camp, id) => (
            <PreviousEvents
              key={id}
              title={camp.title}
              description={camp.description}
              video={camp.video}
            />
          ))}
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
