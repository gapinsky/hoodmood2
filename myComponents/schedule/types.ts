export const dayOrder = [
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
  "sobota",
  "niedziela",
] as const;

export type DayKey = (typeof dayOrder)[number];

export type ClassItem = {
  id: string;
  name: string;
  time: string;
  instructor: string;
  venue?: string;
  specialInstructors: string;
  frequencyDescription?: string;
  info: string;
  age: string;
};

export type ClassesByDay = Record<DayKey, ClassItem[]>;

export function getDayVenues(items: ClassItem[]): string[] {
  return [...new Set(items.flatMap((item) => item.venue ? [item.venue] : []))];
}

export function getScheduleDays(classesByDay: ClassesByDay) {
  return dayOrder.filter((day, index) => index < 5 || classesByDay[day].length > 0);
}
