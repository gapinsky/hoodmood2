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
        name: "Balet",
        time: "16:00–17:00",
        instructor: "Anna Kowalska",
        age: "brak",
        info: "Podstawy baletu: postawa, praca stóp, koordynacja i lekkość ruchu. Ćwiczenia przy drążku i na środku dopasowane do poziomu.",
      },
      {
        name: "Young Generation (hip-hop)",
        time: "17:00–18:00",
        instructor: "Anna Kowalska",
        age: "7–9",
        info: "Hip-hop dla dzieci: rytmika, podstawowe kroki, proste choreografie i praca w grupie. Budowanie pewności siebie i muzykalności.",
      },
      {
        name: "The Beat Hunters (hip-hop)",
        time: "18:00–19:00",
        instructor: "Anna Kowalska",
        age: "10–12",
        info: "Hip-hop: technika, izolacje, dynamika i krótkie układy. Nacisk na czystość ruchu i groove.",
      },
      {
        name: "Quality Crew (grupa zaawansowana hip-hop)",
        time: "19:00–20:30",
        instructor: "Anna Kowalska",
        age: "brak",
        info: "Zaawansowany trening: trudniejsze choreografie, performance i praca nad stylem. Przygotowanie do pokazów i występów.",
      },
    ],

    wtorek: [
      {
        name: "Taniec dla 4–6 latków",
        time: "16:15–17:00",
        instructor: "Anna Kowalska",
        age: "4–6",
        info: "Zajęcia ogólnorozwojowe z tańcem: rytm, koordynacja, proste kroki i zabawy ruchowe. Nauka pracy w grupie.",
      },
      {
        name: "Young Generation (hip-hop)",
        time: "17:00–18:00",
        instructor: "Anna Kowalska",
        age: "7–9",
        info: "Hip-hop dla dzieci: podstawy techniki, groove, kombinacje i choreografie. Rozwój muzykalności i swobody ruchu.",
      },
      {
        name: "The Beat Hunters (hip-hop)",
        time: "18:00–19:00",
        instructor: "Anna Kowalska",
        age: "10–12",
        info: "Hip-hop: izolacje, praca nad dynamiką i koordynacją. Układy dopasowane do wieku i poziomu.",
      },
      {
        name: "Quality Crew (grupa zaawansowana hip-hop)",
        time: "19:00–20:00",
        instructor: "Anna Kowalska",
        age: "brak",
        info: "Grupa zaawansowana: intensywniejszy trening, detal i sceniczność. Praca nad jakością i pewnością w choreografiach.",
      },
      {
        name: "Taniec współczesny",
        time: "20:00–21:00",
        instructor: "Anna Kowalska",
        age: "13–18",
        info: "Taniec współczesny: płynność, praca z ciężarem ciała, podstawy floorwork i ekspresja. Technika + choreografia.",
      },
    ],

    środa: [
      {
        name: "Akrobatyka 4–6 latki",
        time: "16:00–17:00",
        instructor: "Anna Kowalska",
        age: "4–6",
        info: "Podstawy akrobatyki dla najmłodszych: mobilność, siła, równowaga i bezpieczne przewroty. Ćwiczenia w formie zabawowej.",
      },
      {
        name: "Akrobatyka",
        time: "17:00–18:00",
        instructor: "Anna Kowalska",
        age: "7–9",
        info: "Akrobatyka: przewroty, stanie na rękach (podstawy), skoki i wzmacnianie. Nauka techniki i kontroli ciała.",
      },
      {
        name: "Akrobatyka",
        time: "18:00–19:00",
        instructor: "Anna Kowalska",
        age: "10–14",
        info: "Akrobatyka dla starszych: trudniejsze elementy, siła i stabilizacja, łączenie ruchów w sekwencje. Nacisk na technikę i bezpieczeństwo.",
      },
      {
        name: "Partnerowanie Akro",
        time: "19:00–20:00",
        instructor: "Anna Kowalska",
        age: "brak",
        info: "Ćwiczenia w parach: podnoszenia, stabilizacja, zaufanie i komunikacja. Progresje od podstaw z bezpiecznymi wejściami/zejściami.",
      },
      {
        name: "Formacja dla dorosłych",
        time: "20:00–21:30",
        instructor: "Anna Kowalska",
        age: "brak",
        info: "Zespół/formacja: praca nad choreografią, synchronem i scenicznością. Regularny trening w grupie, opcjonalnie pod występy.",
      },
    ],

    czwartek: [
      {
        name: "KPOP",
        time: "16:30–17:30",
        instructor: "Anna Kowalska",
        age: "brak",
        info: "Choreografie inspirowane K-popem: precyzja, energia, praca rąk i synchron. Nauka układów i szlifowanie detali.",
      },
      {
        name: "Taniec współczesny",
        time: "17:30–18:30",
        instructor: "Anna Kowalska",
        age: "8–12",
        info: "Taniec współczesny dla dzieci: koordynacja, płynność, podstawy pracy z podłogą i proste choreografie. Rozwijanie ekspresji.",
      },
      {
        name: "Taniec współczesny",
        time: "18:30–19:30",
        instructor: "Anna Kowalska",
        age: "13–18",
        info: "Taniec współczesny dla młodzieży: technika, floorwork, dynamika i interpretacja muzyki. Praca nad jakością ruchu.",
      },
    ],

    piątek: [
      {
        name: "Lekcje indywidualne",
        time: "16:00–17:00",
        instructor: "Anna Kowalska",
        age: "brak",
        info: "Trening 1:1 dopasowany do celu: technika, choreografia, przygotowanie do występu lub poprawa konkretnych elementów.",
      },
      {
        name: "Feminine Flow 18+",
        time: "17:00–18:00",
        instructor: "Anna Kowalska",
        age: "18+",
        info: "Zajęcia dla dorosłych: płynny, kobiecy styl, świadomość ciała i pewność siebie. Praca z choreografią w komfortowej atmosferze.",
      },
      {
        name: "Lekcje indywidualne",
        time: "18:00–19:00",
        instructor: "Anna Kowalska",
        age: "brak",
        info: "Trening 1:1: plan pod Twoje potrzeby (technika, układ, mobilność, rozciąganie lub kondycja). Tempo dopasowane do Ciebie.",
      },
      {
        name: "KPOP",
        time: "19:00–20:00",
        instructor: "Anna Kowalska",
        age: "brak",
        info: "K-pop dance: nauka choreografii, synchronizacja, czyste linie i energia. Szlifowanie detali i performance’u.",
      },
      {
        name: "Lekcje indywidualne",
        time: "20:00–21:00",
        instructor: "Anna Kowalska",
        age: "brak",
        info: "Trening 1:1: szlifowanie techniki i choreografii, przygotowanie pod nagrania lub występy. Konkretne feedbacki i progres.",
      },
    ],
  },
  polanow: {
    poniedziałek: [],
    wtorek: [],
    środa: [
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
    piątek: [],
  },
};
