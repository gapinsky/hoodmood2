import { classesOffer } from "./ofertaData";

const koszalinInstructor = (offerName: string) =>
  classesOffer.koszalin
    .find((item) => item.name === offerName)
    ?.instructors.map((instructor) => instructor.name)
    .join(" / ") ?? "";

export const scheduleHeaderData = {
  "bialy-bor": {
    title: "Grafik - Biały Bór",
    description:
      "Sprawdź aktualny grafik zajęć i wybierz termin, który Ci pasuje. Kliknij w wybrane zajęcia, żeby zobaczyć poziom, prowadzącego i dostępne miejsca.",
  },
  koszalin: {
    title: "Grafik - Koszalin",
    description:
      "Sprawdź aktualny grafik zajęć i wybierz termin, który Ci pasuje. Kliknij w wybrane zajęcia, żeby zobaczyć poziom, prowadzącego i dostępne miejsca.",
  },
  polanow: {
    title: "Grafik - Polanów",
    description:
      "Sprawdź aktualny grafik zajęć i wybierz termin, który Ci pasuje. Kliknij w wybrane zajęcia, żeby zobaczyć poziom, prowadzącego i dostępne miejsca.",
  },
} as const;

export const scheduleContentData = {
  koszalin: {
    poniedziałek: [
      {
        name: "Taniec dla 4–6 latków",
        time: "16:15–17:00",
        instructor: "Wiktoria Butwicka",
        age: "4–6",
        info: "Zajęcia taneczne dla najmłodszych, rozwijające rytmikę, koordynację i swobodę ruchu.",
      },
      {
        name: "Young Generation",
        time: "17:00–18:00",
        instructor: "Wiktoria Butwicka",
        age: "7–9",
        info: "Hip-hop dla dzieci: podstawowe kroki, choreografie, muzykalność i praca w grupie.",
      },
      {
        name: "HYPE CREW",
        time: "18:00–19:30",
        instructor: "Talita Jarzęcka",
        age: "12+",
        info: "Trening grupowy z naciskiem na choreografię, technikę i performance.",
      },
      {
        name: "Taniec współczesny",
        time: "19:30–20:30",
        instructor: "Talita Jarzęcka (Kamila Maik / Joanna Jedynak 1x/msc)",
        age: "13-18",
        info: "Taniec współczesny: technika, płynność, praca z podłogą i ekspresja ruchowa.",
      },
      {
        name: "Feminine Flow",
        time: "20:30–21:30",
        instructor: "Wiktoria Butwicka",
        age: "18+",
        info: "Płynny, kobiecy styl, świadomość ciała i praca z choreografią.",
      },
    ],

    wtorek: [
      {
        name: "Balet",
        time: "16:00–17:00",
        instructor: "Paulina Walikowska",
        age: "7-9",
        info: "Podstawy baletu: postawa, praca stóp, koordynacja i lekkość ruchu.",
      },
      {
        name: "Young Generation",
        time: "17:00–18:00",
        instructor: "Magdalena Sokołowska",
        age: "7–9",
        info: "Hip-hop dla dzieci: podstawy techniki, choreografie, muzykalność i swoboda ruchu.",
      },
      {
        name: "The Beat Hunters",
        time: "18:00–19:00",
        instructor: "Magdalena Sokołowska",
        age: "10–12",
        info: "Hip-hop: izolacje, dynamika, koordynacja i choreografie dopasowane do poziomu.",
      },
      {
        name: "Taniec współczesny",
        time: "19:00–20:00",
        instructor: "Klara Walach / Marianna Stanisławska",
        age: "10–12",
        info: "Taniec współczesny: technika, płynność, praca z podłogą i ekspresja ruchowa.",
      },
      {
        name: "Taniec współczesny",
        time: "20:00–21:00",
        instructor: "Talita Jarzęcka (Kamila Maik / Joanna Jedynak 1x/msc)",
        age: "13-18",
        info: "Taniec współczesny: technika, płynność, praca z podłogą i ekspresja ruchowa.",
      },
    ],

    środa: [
      {
        name: "KPOP Kids",
        time: "16:00–17:00",
        instructor: koszalinInstructor("KPOP Kids | 10-12 lat"),
        age: "10-12",
        info: "Choreografie inspirowane K-popem: precyzja, energia, synchron i performance.",
      },
      {
        name: "KPOP Teens",
        time: "17:00–18:00",
        instructor: koszalinInstructor("KPOP Teens | 13+"),
        age: "13+",
        info: "Choreografie inspirowane K-popem: precyzja, energia, synchron i performance.",
      },
      {
        name: "Akrobatyka",
        time: "18:00–19:00",
        instructor: "Aleks Kultys",
        age: "7–9",
        info: "Akrobatyka: mobilność, siła, równowaga i bezpieczna nauka elementów.",
      },
      {
        name: "Akrobatyka",
        time: "19:00–20:00",
        instructor: "Aleks Kultys",
        age: "10–13",
        info: "Akrobatyka: technika, siła, stabilizacja i łączenie elementów w sekwencje.",
      },
      {
        name: "Formacja dla dorosłych (Hip-Hop)",
        time: "20:00–21:30",
        instructor: "Wiktoria Butwicka",
        age: "30+",
        info: "Praca nad choreografią, synchronem, techniką i scenicznością.",
      },
    ],

    czwartek: [
      {
        name: "The Beat Hunters",
        time: "16:30–17:30",
        instructor: "Maria Kober",
        age: "10–12",
        info: "Hip-hop: technika, dynamika, koordynacja i choreografie dopasowane do poziomu.",
      },
      {
        name: "HYPE CREW",
        time: "17:30–18:30",
        instructor: "Maria Kober / Paulina Kapuścińska",
        age: "12+",
        info: "Trening grupowy z naciskiem na choreografię, technikę i performance.",
      },
      {
        name: "KPOP Kids",
        time: "18:30–19:30",
        instructor: koszalinInstructor("KPOP Kids | 10-12 lat"),
        age: "10-12",
        info: "Choreografie inspirowane K-popem: precyzja, energia, synchron i performance.",
      },
      {
        name: "KPOP Teens",
        time: "19:30–20:30",
        instructor: koszalinInstructor("KPOP Teens | 13+"),
        age: "13+",
        info: "Choreografie inspirowane K-popem: precyzja, energia, synchron i performance.",
      },
      {
        name: "KPOP dla dorosłych",
        time: "20:30–21:30",
        instructor: koszalinInstructor("KPOP dla dorosłych | 30+"),
        age: "30+",
        info: "Choreografie inspirowane K-popem dla dorosłych: technika, synchron i performance.",
      },
    ],

    piątek: [
      {
        name: "Taniec współczesny",
        time: "16:00–17:00",
        instructor: "Klara Walach / Nel Głowacka",
        age: "6–9",
        info: "Taniec współczesny: koordynacja, płynność, praca z podłogą i ekspresja ruchowa.",
      },
      {
        name: "Akrobatyka",
        time: "17:00–18:00",
        instructor: koszalinInstructor("Akrobatyka | 4-6 lat"),
        age: "4–6",
        info: "Akrobatyka dla najmłodszych: mobilność, siła, równowaga i bezpieczna nauka elementów.",
      },
      {
        name: "Akrobatyka",
        time: "18:00–19:00",
        instructor: koszalinInstructor("Akrobatyka | 7-9 lat"),
        age: "7–9",
        info: "Akrobatyka: mobilność, siła, równowaga i bezpieczna nauka elementów.",
      },
      {
        name: "Akrobatyka",
        time: "19:00–20:00",
        instructor: koszalinInstructor("Akrobatyka | 10-13 lat"),
        age: "10–13",
        info: "Akrobatyka: technika, siła, stabilizacja i łączenie elementów w sekwencje.",
      },
      {
        name: "MASTERCLASS",
        time: "20:00–21:30",
        instructor: "Gość specjalny",
        age: "7–99",
        minAge: 7,
        maxAge: 99,
        info: "Intensywne zajęcia rozwijające technikę, choreografię i performance.",
      },
    ],
  },
  polanow: {
    poniedziałek: [],
    wtorek: [],
    środa: [
      {
        name: "TANIEC DLA 4-6 LATKÓW",
        time: "16:00–16:45",
        instructor: "Talita Jarzęcka",
        age: "4–6",
        info: "Zajęcia ogólnorozwojowe z tańcem: rytm, koordynacja, proste kroki i zabawy ruchowe. Nauka pracy w grupie.",
      },
      {
        name: "Hip-hop ",
        time: "16:45–17:45",
        instructor: "Talita Jarzęcka",
        age: "7–9",
        info: "Hip-hop dla dzieci i młodzieży: groove, podstawowe kroki i technika, krótkie choreografie oraz praca w grupie. Rozwój muzykalności i pewności siebie.",
      },
      {
        name: "Hip-hop ",
        time: "17:45–19:15",
        instructor: "Talita Jarzęcka",
        age: "10–14",
        info: "Hip-hop dla dzieci i młodzieży: groove, podstawowe kroki i technika, krótkie choreografie oraz praca w grupie. Rozwój muzykalności i pewności siebie.",
      },
      {
        name: "Taniec współczesny",
        time: "19:15–20:15",
        instructor: "Marianna Stanisławska",
        age: "7–11",
        info: "Taniec współczesny: technika, płynność, praca z podłogą i ekspresja ruchowa.",
      },
    ],
    czwartek: [],
    piątek: [],
  },
  "bialy-bor": {
    poniedziałek: [],
    wtorek: [],
    środa: [],
    czwartek: [
      {
        name: "Zajęcia taneczne 4–7 lat",
        time: "16:15–17:00",
        instructor: "Talita Jarzęcka",
        age: "4–7",
        info: "Zajęcia ogólnorozwojowe z tańcem: rytm, koordynacja, proste kroki i zabawy ruchowe. Nauka pracy w grupie.",
      },
      {
        name: "Hip-hop ",
        time: "17:00–18:00",
        instructor: "Talita Jarzęcka",
        age: "8–13",
        info: "Hip-hop dla dzieci: groove, podstawowe kroki i technika, krótkie choreografie oraz praca w grupie. Rozwój muzykalności i pewności siebie.",
      },
    ],
    piątek: [],
  },
};
