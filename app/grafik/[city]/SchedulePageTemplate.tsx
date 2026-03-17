import { scheduleContentData } from "@/data/scheduleData";
import { scheduleTabs } from "@/data/tabs";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import TabsNav from "@/myComponents/common/ToggleButtons";
import ScheduleGrid from "@/myComponents/pages/schedule/ScheduleGrid";

type SchedulePageProps = {
  header: { title: string; description: string };
  scheduleContent: (typeof scheduleContentData)["koszalin"];
};

export default function SchedulePageTemplate({
  header,
  scheduleContent,
}: SchedulePageProps) {
  return (
    <main className="my-36">
      <SectionContainer>
        <SectionContent
          title={header.title}
          description={header.description}
          badge="grafik"
        ></SectionContent>
        <TabsNav tabs={scheduleTabs}/>
        <ScheduleGrid classesByDay={scheduleContent} />
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
