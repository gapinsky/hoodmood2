import { classList } from "@/data/classess";
import type { CitySlug } from "@/data/locations";
import { trainers, type TrainerId } from "@/data/trainers";
import { dayOrder, type ClassesByDay } from "@/myComponents/schedule/types";

function trainerNames(ids: TrainerId[]) {
  return ids.map((id) => trainers[id].name).join(" / ");
}

export function getClassSchedule(city: CitySlug): ClassesByDay {
  const schedule: ClassesByDay = {
    poniedziałek: [],
    wtorek: [],
    środa: [],
    czwartek: [],
    piątek: [],
    sobota: [],
    niedziela: [],
  };

  const entries = classList
    .filter((item) => item.active && item.locationId === city)
    .flatMap((item) => item.schedule.map((entry) => ({ item, entry })))
    .sort((a, b) =>
      a.entry.startTime.localeCompare(b.entry.startTime) ||
      a.item.sortOrder - b.item.sortOrder,
    );

  for (const { item, entry } of entries) {
    schedule[dayOrder[entry.dayOfWeek - 1]].push({
      id: `${item.id}-${entry.dayOfWeek}-${entry.startTime}`,
      name: item.name,
      venue: entry.venue,
      time: `${entry.startTime}–${entry.endTime}`,
      instructor: trainerNames(entry.trainerIds ?? item.trainerIds) || "Prowadzący do ustalenia",
      specialInstructors: trainerNames(item.specialTrainerIds),
      frequencyDescription: item.frequency.description,
      info: item.description || item.shortInfo,
      age: item.maxAge === null ? `${item.minAge}+` : `${item.minAge}–${item.maxAge}`,
    });
  }

  return schedule;
}
