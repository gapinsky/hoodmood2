import { scheduleContentData } from "@/data/scheduleData";
import { scheduleTabs } from "@/data/tabs";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import TabsNav from "@/myComponents/common/ToggleButtons";
import ScheduleGrid from "@/myComponents/pages/schedule/ScheduleGrid";
import DownloadSchedule from "./DownloadSchedule";
import MainWrapper from "@/myComponents/common/MainWrapper";

type SchedulePageProps = {
  header: { title: string; description: string };
  scheduleContent: (typeof scheduleContentData)["koszalin"];
};

export default function SchedulePageTemplate({
  header,
  scheduleContent,
}: SchedulePageProps) {
  return (
    <MainWrapper>
      <SectionContainer>
        <SectionContent
          title={header.title}
          description={header.description}
          badge="grafik"
        ></SectionContent>
        <TabsNav tabs={scheduleTabs} />
        <ScheduleGrid classesByDay={scheduleContent} />
        <DownloadSchedule
          title={header.title}
          scheduleContent={scheduleContent}
        />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
