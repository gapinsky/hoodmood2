export const data = {
  badge: "zapisy",
  title: "Jak dołączyć do Hoodmood?",
  description: "Zapis na zajęcia ogarniesz online w kilka minut. Wybierz lokalizację, sprawdź grafik, wypełnij formularz – a my odezwiemy się z potwierdzeniem miejsca i wszystkimi szczegółami."
};

export type Step = {
  id: number;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    id: 1,
    title: "Wybierz lokalizację",
    description:
      "Sprawdź, która filia Hoodmood najlepiej pasuje do Twojego planu dnia.",
  },
  {
    id: 2,
    title: "Wybierz zajęcia",
    description: "Wybierz styl i poziom, który najbardziej Cię kręci.",
  },
  {
    id: 3,
    title: "Wypełnij formularz",
    description: "Podaj podstawowe dane i zaznacz wybrane zajęcia.",
  },
  {
    id: 4,
    title: "Gotowe!",
    description:
      "Wpadnij kilka minut przed zajęciami, żeby ogarnąć formalności.",
  },
];