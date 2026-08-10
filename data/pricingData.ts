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
  minAge: string;
  maxAge: string;
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
        minAge: "4",
        maxAge: "6",
        category: "kidsDance",
      },
      {
        name: "Balet",
        price: "180",
        frequency: "1",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "ballet",
      },
      {
        name: "Young Generation",
        price: "240",
        frequency: "2",
        trending: false,
        minAge: "7",
        maxAge: "9",
        category: "youngGeneration",
      },
      {
        name: "The Beat Hunters",
        price: "290",
        frequency: "1",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "The Beat Hunters",
      },
      {
        name: "Podstawa - treningi hip-hop",
        price: "300",
        frequency: "2",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "hiphop",
      },
      {
        name: "Akrobatyka",
        price: "190",
        frequency: "1",
        trending: false,
        minAge: "4",
        maxAge: "6",
        category: "acrobatics",
      },
      {
        name: "Akrobatyka",
        price: "280",
        frequency: "2",
        trending: false,
        minAge: "7",
        maxAge: "9",
        category: "acrobatics",
      },
      {
        name: "Akrobatyka",
        price: "280",
        frequency: "2",
        trending: false,
        minAge: "10",
        maxAge: "13",
        category: "acrobatics",
      },

      {
        name: "Formacja dla dorosłych (HIP-HOP/HOUSE)",
        price: "210",
        frequency: "1",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "adults",
      },
      {
        name: "Feminine Flow",
        price: "190",
        frequency: "1",
        trending: false,
        minAge: "18",
        maxAge: "99",
        category: "adults",
      },
      {
        name: "Taniec współczesny",
        price: "230",
        frequency: "1",
        trending: false,
        minAge: "13",
        maxAge: "18",
        category: "modernDance",
      },
      {
        name: "Taniec współczesny",
        price: "230",
        frequency: "1",
        trending: false,
        minAge: "6",
        maxAge: "8",
        category: "modernDance",
      },
      {
        name: "Taniec współczesny",
        price: "320",
        frequency: "2",
        trending: false,
        minAge: "13",
        maxAge: "18",
        category: "modernDance",
      },
      {
        name: "K-POP",
        price: "240",
        frequency: "2",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "kpop",
      },
      {
        name: "Hype Crew",
        price: "310",
        frequency: "TBA",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "hypeCrew",
      },
      {
        name: "Master Trainers",
        price: "60 zł aktywni kursanci Hoodmood / pozostali 180 zł",
        frequency: "TBA",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "masterProgram",
      },
      {
        name: "Masterclass",
        price: "90 zł aktywni kursanci Hoodmood / pozostali 120 zł",
        frequency: "Specjalne wydarzenie",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "masterclass",
      },
      {
        name: "Hoodmood Master Pass",
        price: "140 zł",
        frequency: "TBA",
        trending: false,
        minAge: "",
        maxAge: "",
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
        minAge: "4",
        maxAge: "6",
        category: "kidsDance",
      },
      {
        name: "The Beat Hunters + K-POP",
        price: "370",
        frequency: "2",
        frequencyDescription:
          "The Beat Hunters: 1 raz w tygodniu. K-POP: 1 raz w tygodniu.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "kidsDance",
      },
      {
        name: "The Beat Hunters + Akrobatyka",
        price: "455",
        frequency: "2",
        frequencyDescription:
          "The Beat Hunters: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "theBeatHunters",
      },
      {
        name: "Hype Crew + K-POP",
        price: "380",
        frequency: "2",
        frequencyDescription:
          "Hype Crew: 1 raz w tygodniu. K-POP: 1 raz w tygodniu.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "hypeCrew",
      },
      {
        name: "Hype Crew + Akrobatyka",
        price: "465",
        frequency: "2",
        frequencyDescription:
          "Hype Crew: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "hypeCrew",
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
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "Taniec współczesny duet",
        price: "110 zł/h od osoby",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "Hip-hop solo",
        price: "150 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "Hip-hop duet",
        price: "100 zł/h od osoby",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "Hip-hop trio",
        price: "90 zł/h od osoby",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "K-pop solo",
        price: "140 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "Akrobatyka",
        price: "170 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "Pierwszy taniec",
        price: "160 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
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
    minAge: "4",
    maxAge: "7",
    category: "kidsDance",
  },
  {
    name: "Hip-hop",
    price: "90",
    frequency: "1x/tyg",
    trending: false,
    minAge: "8",
    maxAge: "13",
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
    price: "130",
    frequency: "1x/tyg",
    trending: false,
    minAge: "4",
    maxAge: "6",
    category: "kidsDance",
  },
  {
    name: "Hip-hop",
    price: "140",
    frequency: "1x/tyg",
    trending: false,
    minAge: "7",
    maxAge: "9",
    category: "hiphop",
  },
  {
    name: "Hip-hop",
    price: "170",
    frequency: "1x/tyg",
    trending: false,
    minAge: "10",
    maxAge: "15",
    category: "hiphop",
  },
];
