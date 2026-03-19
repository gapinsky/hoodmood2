"use client";
import dynamic from "next/dynamic";

const DownloadSchedulePdfButton = dynamic(
  () => import("@/myComponents/pages/schedule/DownloadSchedulePdf"),
  { ssr: false },
);
import SchedulePdfTable, {
  ClassesByDay,
} from "@/myComponents/pages/schedule/SchedulePdfTable";
import { useRef } from "react";
type Props = {
  title: string;
  scheduleContent: ClassesByDay;
};
export default function DownloadSchedule({ title, scheduleContent }: Props) {
  const ref = useRef(null);
  return (
    <>
      <div className="absolute -left-[100000px]">
        <SchedulePdfTable
          classesByDay={scheduleContent}
          pdfRef={ref}
          title={title}
        />
      </div>
      <DownloadSchedulePdfButton pdfRef={ref} name={title} />
    </>
  );
}
