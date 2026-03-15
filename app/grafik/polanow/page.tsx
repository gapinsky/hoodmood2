"use client";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, classesByDay, dayLabelsPl } from "./data";
import ScheduleGrid from "@/myComponents/pages/schedule/ScheduleGrid";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import TabsNav from "@/myComponents/common/ToggleButtons";
import { tabs } from "../tabs";
import SchedulePdfTable from "@/myComponents/pages/schedule/SchedulePdfTable";
import { useRef } from "react";
import DownloadSchedulePdfButton from "@/myComponents/pages/schedule/DownloadSchedulePdf";
export default function Schedule() {
  const pdfRef = useRef<HTMLDivElement>(null);
  return (
    <main>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <TabsNav tabs={tabs} />
        <ScheduleGrid classesByDay={classesByDay} dayLabelsPl={dayLabelsPl} />
        <DownloadSchedulePdfButton pdfRef={pdfRef} name="grafik-polanow.pdf" />
        <div className="fixed -left-[1000px]">
          <SchedulePdfTable
            pdfRef={pdfRef}
            classesByDay={classesByDay}
            dayLabels={dayLabelsPl}
            title="Grafik zajęć - Polanów"
          />
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
