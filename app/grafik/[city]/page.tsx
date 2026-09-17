import { createMetadata } from "@/lib/seo";
import { locationList, isCitySlug } from "@/data/locations";
import { notFound } from "next/navigation";
import SchedulePageTemplate from "./SchedulePageTemplate";
import { getClassSchedule } from "@/lib/data/class-schedule";

type Props = {
  params: Promise<{
    city: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locationList.map(({ id }) => ({ city: id }));
}
export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  if (!isCitySlug(city)) notFound();
  const location = locationList.find((location) => location.id === city);
  if (!location) notFound();
  return createMetadata({
    path: `/grafik/${city}`,
    title: `Grafik zajęć tanecznych — ${location.name}`,
    description: `Sprawdź aktualny grafik zajęć Hoodmood — ${location.name}. Zobacz dni i godziny treningów tańca i akrobatyki oraz zaplanuj swój udział w zajęciach.`,
  });
}

export default async function Schedule({ params }: Props) {
  const { city } = await params;
  if (!isCitySlug(city)) {
    notFound();
  }
  const location = locationList.find((location) => location.id === city);
  if (!location) {
    notFound();
  }
  const headerContent = {
    title: `Grafik - ${location.name}`,
    description: "Sprawdź aktualny grafik zajęć i wybierz termin, który Ci pasuje. Rozwiń szczegóły, żeby dowiedzieć się więcej o zajęciach.",
  };
  const scheduleContent = getClassSchedule(city);
  return (
    <SchedulePageTemplate
      header={headerContent}
      scheduleContent={scheduleContent}
    />
  );
}
