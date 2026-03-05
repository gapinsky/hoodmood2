export const data = {
  badge: "Cennik",
  title: "Cennik - Biały Bór",
  description:
    "Sprawdź, ile kosztują zajęcia grupowe, lekcje indywidualne oraz zajęcia w naszych filiach. Płatności rozliczamy w systemie miesięcznym za wyjątkiem lekcji indywidualnych. Chcesz chodzić na więcej niż jedne zajęcia? Sprawdź pakiety promocyjne - zestawy kilku zajęć w promocyjnych cenach!",
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
  wednesday: [],
  thursday: [
    {
      name: "Zajęcia taneczne 4–7 lat",
      time: "16:15–17:00",
      instructor: "brak",
      age: "4–7",
      info: "Zajęcia ogólnorozwojowe z tańcem: rytm, koordynacja, proste kroki i zabawy ruchowe. Nauka pracy w grupie.",
    },
    {
      name: "Hiphop 8–13 lat",
      time: "17:00–18:00",
      instructor: "brak",
      age: "8–13",
      info: "Hip-hop dla dzieci: groove, podstawowe kroki i technika, krótkie choreografie oraz praca w grupie. Rozwój muzykalności i pewności siebie.",
    },
  ],
  friday: [],
};

export const dayLabelsPl: Record<keyof typeof classesByDay, string> = {
  monday: "Poniedziałek",
  tuesday: "Wtorek",
  wednesday: "Środa",
  thursday: "Czwartek",
  friday: "Piątek",
};
