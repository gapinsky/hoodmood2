import { scheduleContentData } from "@/data/scheduleData";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import LocationPageHeader from "@/myComponents/common/headers/LocationPageHeader";
import { scheduleTabs } from "@/data/tabs";
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
        <LocationPageHeader
          tabs={scheduleTabs}
          eyebrow="Twój tydzień / Hoodmood"
          navigationLabel="Lokalizacja grafiku"
          title={header.title}
          description={header.description}
        />
        <ScheduleGrid classesByDay={scheduleContent} />
        <section aria-labelledby="download-schedule-title" className="flex flex-col items-start justify-between gap-6 rounded-md border border-foreground/10 bg-foreground/2.5 p-6 sm:p-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">03 / Zawsze pod ręką</p>
            <h2 id="download-schedule-title" className="font-anton text-2xl uppercase sm:text-3xl">Zabierz grafik ze sobą</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">Zapisz plan zajęć na telefonie lub wydrukuj go w domu.</p>
          </div>
          <DownloadSchedule title={header.title} scheduleContent={scheduleContent} />
        </section>
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
