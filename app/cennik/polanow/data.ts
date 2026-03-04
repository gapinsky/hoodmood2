export const data = {
  badge: "grafik",
  title: "Grafik zajęć - Polanów",
  description:
    "Sprawdź aktualny grafik zajęć i wybierz termin, który Ci pasuje. Kliknij w wybrane zajęcia, żeby zobaczyć poziom, prowadzącego i dostępne miejsca.",
};

type ClassItem = {
  name: string;
  time: string;
  instructor: string;
  info: string;
  age: string;
};

export const classesByDay: Record<
  "monday" | "tuesday" | "wednesday" | "thursday" | "friday",
  ClassItem[]
> = {
  monday: [],
  tuesday: [],
  wednesday: [
    {
      name: "Taniec dla 4–6 latków",
      time: "16:00–17:00",
      instructor: "brak",
      age: "4–6",
      info: "Zajęcia ogólnorozwojowe z tańcem: rytm, koordynacja, proste kroki i zabawy ruchowe. Nauka pracy w grupie.",
    },
    {
      name: "Hiphop 7–14 lat",
      time: "17:00–18:30",
      instructor: "brak",
      age: "7–14",
      info: "Hip-hop dla dzieci i młodzieży: groove, podstawowe kroki i technika, krótkie choreografie oraz praca w grupie. Rozwój muzykalności i pewności siebie.",
    },
  ],
  thursday: [],
  friday: [],
};

export const dayLabelsPl: Record<keyof typeof classesByDay, string> = {
  monday: "Poniedziałek",
  tuesday: "Wtorek",
  wednesday: "Środa",
  thursday: "Czwartek",
  friday: "Piątek",
};