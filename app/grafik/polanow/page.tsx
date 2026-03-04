import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, classesByDay, dayLabelsPl } from "./data";
import ScheduleGrid from "@/myComponents/pages/schedule/ScheduleGrid";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
export default function Schedule() {
  return (
    <main>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <ScheduleGrid classesByDay={classesByDay} dayLabelsPl={dayLabelsPl} />
        <AnyQuestionsContact/>
      </SectionContainer>
    </main>
  );
}
