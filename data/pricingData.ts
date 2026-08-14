export type PricingCategory =
  | "zajecia"
  | "pakiety-zajec"
  | "zajecia-indywidualne";

export type TabItem = {
  label: string;
  href: string;
};

export type PricingItem = {
  name: string;
  price: string;
  frequency: string;
  frequencyDescription?: string;
  trending: boolean;
  minAge: number;
  maxAge: number;
  category: string;
};

export type PricingPageContent = {
  badge: string;
  title: string;
  description: string;
  tableData: PricingItem[];
};

export const koszalinPricingTabs: TabItem[] = [
  { label: "Zajęcia", href: "/cennik/koszalin/zajecia" },
  { label: "Pakiety zajęć", href: "/cennik/koszalin/pakiety-zajec" },
  {
    label: "Zajęcia indywidualne",
    href: "/cennik/koszalin/zajecia-indywidualne",
  },
];

export const koszalinPricingContent: Record<
  PricingCategory,
  PricingPageContent
> = {
  zajecia: {
    badge: "Cennik",
    title: "Cennik zajęć - Hoodmood Koszalin",
    description:
      "Sprawdź ofertę regularnych zajęć tanecznych i akrobatycznych w naszej filii w Koszalinie. Ceny rozliczane są miesięcznie i zależą od liczby treningów w tygodniu oraz rodzaju grupy. Wybierz styl, dopasuj wiek uczestnika i znajdź zajęcia najlepiej dopasowane do poziomu oraz zainteresowań.",
    tableData: [
      {
        name: "Taniec dla 4-6 latków",
        price: "180",
        frequency: "1",
        trending: false,
        minAge: 4,
        maxAge: 6,
        category: "kidsDance",
      },
      {
        name: "Balet",
        price: "180",
        frequency: "1",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "ballet",
      },
      {
        name: "Young Generation",
        price: "240",
        frequency: "2",
        trending: false,
        minAge: 7,
        maxAge: 9,
        category: "youngGeneration",
      },
      {
        name: "The Beat Hunters",
        price: "290",
        frequency: "2",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "The Beat Hunters",
      },
      {
        name: "Akrobatyka",
        price: "190",
        frequency: "1",
        trending: false,
        minAge: 4,
        maxAge: 6,
        category: "acrobatics",
      },
      {
        name: "Akrobatyka",
        price: "280",
        frequency: "2",
        trending: false,
        minAge: 7,
        maxAge: 9,
        category: "acrobatics",
      },
      {
        name: "Akrobatyka",
        price: "280",
        frequency: "2",
        trending: false,
        minAge: 10,
        maxAge: 13,
        category: "acrobatics",
      },

      {
        name: "Formacja dla dorosłych (Hip-Hop)",
        price: "210",
        frequency: "1",
        trending: false,
        minAge: 30,
        maxAge: 99,
        category: "adults",
      },
      {
        name: "Feminine Flow",
        price: "190",
        frequency: "1",
        trending: false,
        minAge: 18,
        maxAge: 99,
        category: "adults",
      },
      {
        name: "Taniec współczesny",
        price: "230",
        frequency: "1",
        trending: false,
        minAge: 6,
        maxAge: 9,
        category: "modernDance",
      },
      {
        name: "Taniec współczesny",
        price: "230",
        frequency: "1",
        trending: false,
        minAge: 10,
        maxAge: 12,
        category: "modernDance",
      },
      {
        name: "Taniec współczesny",
        price: "320",
        frequency: "2",
        trending: false,
        minAge: 13,
        maxAge: 18,
        category: "modernDance",
      },
      {
        name: "KPOP Kids",
        price: "240",
        frequency: "2",
        trending: false,
        minAge: 10,
        maxAge: 12,
        category: "kpop",
      },
      {
        name: "KPOP Teens",
        price: "240",
        frequency: "2",
        trending: false,
        minAge: 13,
        maxAge: 99,
        category: "kpop",
      },
      {
        name: "KPOP dla dorosłych",
        price: "240",
        frequency: "1",
        trending: false,
        minAge: 30,
        maxAge: 99,
        category: "kpop",
      },
      {
        name: "HYPE CREW",
        price: "300",
        frequency: "2",
        frequencyDescription: "grupa średniozaawansowana",
        trending: false,
        minAge: 12,
        maxAge: 99,
        category: "hypeCrew",
      },
      {
        name: "MASTER TRAINERS",
        price: "60 zł – aktywni kursanci HOODMOOD / 180 zł – osoby spoza HOODMOOD",
        frequency: "3 godziny | regularnie, 1x w miesiącu",
        frequencyDescription: "To stała współpraca z wybranym trenerem, który regularnie pojawia się w naszym grafiku. Dzięki temu możesz trenować z nim przez cały sezon i rozwijać się pod jego okiem.",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "masterProgram",
      },
      {
        name: "MASTERCLASS",
        price: "90 zł – aktywni kursanci HOODMOOD / 120 zł – osoby spoza HOODMOOD",
        frequency: "1,5 godziny | specjalne wydarzenia",
        frequencyDescription: "Jednorazowe warsztaty z zaproszonymi choreografami, tancerzami i instruktorami. Różne nazwiska, różne style, różne doświadczenia.",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "masterclass",
      },
      {
        name: "HOODMOOD MASTER PASS",
        price: "140 zł / miesiąc – aktywni kursanci HOODMOOD / 290 zł / miesiąc – osoby spoza HOODMOOD",
        frequency: "3-godzinny MASTER TRAINER + 1,5-godzinny MASTERCLASS",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "masterPass",
      },
    ],
  },
  "pakiety-zajec": {
    badge: "Cennik",
    title: "Cennik pakietów zajęć - Hoodmood Koszalin",
    description:
      "Chcesz uczęszczać na więcej niż jedne zajęcia? Sprawdź dostępne pakiety, które łączą kilka treningów w korzystniejszej cenie. To dobre rozwiązanie dla osób, które chcą rozwijać się wszechstronnie, łącząc różne style tańca, akrobatykę lub dodatkowe treningi uzupełniające.",
    tableData: [
      {
        name: "Taniec dla 4-6 latków + Taniec współczesny",
        price: "240",
        frequency: "2",
        frequencyDescription:
          "Taniec dla 4-6 latków: 1 raz w tygodniu. Taniec współczesny: 1 raz w tygodniu.",
        trending: false,
        minAge: 4,
        maxAge: 6,
        category: "kidsDance",
      },
      {
        name: "Balet + Taniec współczesny 6-9 lat",
        price: "375",
        frequency: "2",
        frequencyDescription: "Balet: 1 raz w tygodniu. Taniec współczesny 6-9 lat: 1 raz w tygodniu.",
        trending: false,
        minAge: 6,
        maxAge: 9,
        category: "ballet",
      },
      {
        name: "The Beat HUNTERS + KPOP 1x w tygodniu",
        price: "370",
        frequency: "3",
        frequencyDescription:
          "The Beat HUNTERS: 2 razy w tygodniu. KPOP: 1 raz w tygodniu.",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "kidsDance",
      },
      {
        name: "The Beat HUNTERS + Akrobatyka 1x w tygodniu",
        price: "455",
        frequency: "3",
        frequencyDescription:
          "The Beat HUNTERS: 2 razy w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "theBeatHunters",
      },
      {
        name: "HYPE CREW + KPOP 1x w tygodniu",
        price: "380",
        frequency: "3",
        frequencyDescription:
          "HYPE CREW: 2 razy w tygodniu. KPOP: 1 raz w tygodniu.",
        trending: false,
        minAge: 12,
        maxAge: 99,
        category: "hypeCrew",
      },
      {
        name: "HYPE CREW + Akrobatyka 1x w tygodniu",
        price: "465",
        frequency: "3",
        frequencyDescription:
          "HYPE CREW: 2 razy w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: 12,
        maxAge: 99,
        category: "hypeCrew",
      },
      {
        name: "Taniec współczesny 6-9 lat + Akrobatyka 1x w tygodniu",
        price: "395",
        frequency: "2",
        frequencyDescription: "Taniec współczesny 6-9 lat: 1 raz w tygodniu. Akrobatyka 1x w tygodniu.",
        trending: false,
        minAge: 6,
        maxAge: 9,
        category: "modernDance",
      },
    ],
  },
  "zajecia-indywidualne": {
    badge: "Cennik",
    title: "Cennik zajęć indywidualnych - Hoodmood Koszalin",
    description:
      "Zajęcia indywidualne to opcja dla osób, które chcą pracować w pełni na własnych celach i w swoim tempie. To świetny wybór, jeśli zależy Ci na przygotowaniu choreografii, doskonaleniu techniki, pracy nad konkretnym stylem albo lekcjach solo, w duecie czy małej grupie.",
    tableData: [
      {
        name: "Taniec współczesny solo",
        price: "170 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "individual",
      },
      {
        name: "Taniec współczesny duet",
        price: "110 zł/h od osoby",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "individual",
      },
      {
        name: "Hip-hop solo",
        price: "150 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "individual",
      },
      {
        name: "Hip-hop duet",
        price: "100 zł/h od osoby",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "individual",
      },
      {
        name: "Hip-hop trio",
        price: "90 zł/h od osoby",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "individual",
      },
      {
        name: "K-pop solo",
        price: "140 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "individual",
      },
      {
        name: "Akrobatyka",
        price: "170 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "individual",
      },
      {
        name: "Pierwszy taniec",
        price: "160 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: 5,
        maxAge: 99,
        category: "wedding",
      },
    ],
  },
};

export const bialyBorPricingPageContent = {
  badge: "Cennik",
  title: "Cennik zajęć - Hoodmood Biały Bór",
  description:
    "Sprawdź aktualny cennik zajęć Hoodmood w Białym Borze. Prowadzimy regularne zajęcia taneczne dla dzieci oraz hip-hop dla dzieci i młodzieży. Opłaty rozliczane są miesięcznie.",
};

export const bialyBorPricingTableData: PricingItem[] = [
  {
    name: "Zajęcia taneczne",
    price: "90",
    frequency: "1x/tyg",
    trending: false,
    minAge: 4,
    maxAge: 7,
    category: "kidsDance",
  },
  {
    name: "Hip-hop",
    price: "90",
    frequency: "1x/tyg",
    trending: false,
    minAge: 8,
    maxAge: 13,
    category: "hiphop",
  },
];

export const polanowPricingPageContent = {
  badge: "Cennik",
  title: "Cennik zajęć - Hoodmood Polanów",
  description:
    "Sprawdź aktualny cennik zajęć Hoodmood w Polanowie. Prowadzimy zajęcia taneczne dla najmłodszych oraz hip-hop dla dzieci i młodzieży. Opłaty rozliczane są miesięcznie.",
};

export const polanowPricingTableData: PricingItem[] = [
  {
    name: "Taniec dla 4–6 latków",
    price: "140",
    frequency: "1x/tyg",
    trending: false,
    minAge: 4,
    maxAge: 6,
    category: "kidsDance",
  },
  {
    name: "Hip-hop",
    price: "150",
    frequency: "1x/tyg",
    trending: false,
    minAge: 7,
    maxAge: 9,
    category: "hiphop",
  },
  {
    name: "Hip-hop",
    price: "180",
    frequency: "1x/tyg",
    trending: false,
    minAge: 10,
    maxAge: 14,
    category: "hiphop",
  },
  {
    name: "Taniec współczesny",
    price: "150",
    frequency: "1x/tyg",
    trending: false,
    minAge: 7,
    maxAge: 11,
    category: "contemporary",
  },
];
