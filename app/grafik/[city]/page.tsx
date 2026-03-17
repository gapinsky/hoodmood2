import { notFound } from "next/navigation";
import SchedulePageTemplate from "./SchedulePageTemplate";
import { CitySlug } from "@/data/citySlug";
import { scheduleContentData, scheduleHeaderData } from "@/data/scheduleData";

type Props = {
  params: Promise<{
    city: string;
  }>;
};

function isCitySlug(value: string): value is CitySlug {
  return value === "bialy-bor" || value === "koszalin" || value === "polanow";
}
export default async function Schedule({ params }: Props) {
  const { city } = await params;
  if (!isCitySlug(city)) {
    notFound();
  }
  const headerContent = scheduleHeaderData[city];
  const scheduleContent = scheduleContentData[city];
  if (!headerContent || !scheduleContent) {
    notFound();
  }
  return (
    <SchedulePageTemplate header={headerContent} scheduleContent={scheduleContent} />
  );
}
