export const data = {
  badge: "zapisy",
  title: "Jak zapisać się na zajęcia w Hoodmood?",
  description: "Zapis na zajęcia w Hoodmood zajmuje tylko kilka minut. Wybierz lokalizację, sprawdź grafik, wypełnij formularz i poczekaj na potwierdzenie miejsca oraz szczegóły pierwszych zajęć."
};

export type Step = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const steps: Step[] = [
  {
    id: 1,
    image: "/assets/images/realLife/studio.jpeg",
    imageAlt: "Sala taneczna Hoodmood",
    title: "Wybierz lokalizację",
    description:
      "Sprawdź, czy chcesz zapisać się na zajęcia w Koszalinie, Polanowie czy Białym Borze.",
  },
  {
    id: 2,
    image: "/assets/images/landingOffer/teens1.jpg",
    imageAlt: "Tancerze Hoodmood podczas występu",
    title: "Wybierz zajęcia",
    description:
      "Dobierz styl, grupę wiekową i poziom zaawansowania odpowiedni dla siebie lub dziecka.",
  },
  {
    id: 3,
    image: "/assets/images/bento/niekorpo2.jpg",
    imageAlt: "Uczestnicy wspólnego wydarzenia Hoodmood",
    title: "Wypełnij formularz",
    description:
      "Podaj podstawowe dane i zaznacz wybrane zajęcia, a my sprawdzimy dostępność miejsc.",
  },
  {
    id: 4,
    image: "/assets/images/timeline/normal.jpeg",
    imageAlt: "Ekipa trenerska Hoodmood",
    title: "Potwierdź zapis",
    description:
      "Odezwiemy się z potwierdzeniem, szczegółami organizacyjnymi i informacją o pierwszych zajęciach.",
  },
];