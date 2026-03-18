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

export const tabs: TabItem[] = [
  { label: "Zajęcia", href: "/cennik/koszalin/zajecia" },
  { label: "Pakiety zajęć", href: "/cennik/koszalin/pakiety-zajec" },
  {
    label: "Zajęcia indywidualne",
    href: "/cennik/koszalin/zajecia-indywidualne",
  },
];
export const pricingContent: Record<PricingCategory, PricingPageContent> = {
  zajecia: {
    badge: "Cennik",
    title: "Cennik zajęć - Hoodmood Koszalin",
    description:
      "Sprawdź ofertę regularnych zajęć tanecznych i akrobatycznych w naszej filii w Koszalinie. Ceny rozliczane są miesięcznie i zależą od liczby treningów w tygodniu oraz rodzaju grupy. Wybierz styl, dopasuj wiek uczestnika i znajdź zajęcia najlepiej dopasowane do poziomu oraz zainteresowań.",
    tableData: [
      {
        name: "Taniec dla 4–6 latków",
        price: "170",
        frequency: "1",
        trending: false,
        minAge: "4",
        maxAge: "6",
        category: "kidsDance",
      },
      {
        name: "Break Dance",
        price: "170",
        frequency: "1",
        trending: false,
        minAge: "6",
        maxAge: "8",
        category: "breakdance",
      },
      {
        name: "Balet",
        price: "170",
        frequency: "1",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "ballet",
      },
      {
        name: "Young Generation",
        price: "230",
        frequency: "2",
        trending: false,
        minAge: "7",
        maxAge: "9",
        category: "youngGeneration",
      },
      {
        name: "Pakiet podstawowy",
        price: "280",
        frequency: "1",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "foundation",
      },
      {
        name: "Podstawa - treningi hip-hop",
        price: "290",
        frequency: "2",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "hiphop",
      },
      {
        name: "Akrobatyka",
        price: "180",
        frequency: "1",
        trending: false,
        minAge: "4",
        maxAge: "6",
        category: "acrobatics",
      },
      {
        name: "Akrobatyka",
        price: "180",
        frequency: "1",
        trending: false,
        minAge: "7",
        maxAge: "9",
        category: "acrobatics",
      },
      {
        name: "Akrobatyka",
        price: "180",
        frequency: "1",
        trending: false,
        minAge: "10",
        maxAge: "14",
        category: "acrobatics",
      },
      {
        name: "Partnerowanie akro",
        price: "230",
        frequency: "1",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "partnerAcro",
      },
      {
        name: "Formacja dla dorosłych (HIP-HOP/HOUSE)",
        price: "200",
        frequency: "1",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "adults",
      },
      {
        name: "FEMININE FLOW",
        price: "180",
        frequency: "1",
        trending: false,
        minAge: "18",
        maxAge: "99",
        category: "adults",
      },
      {
        name: "Taniec współczesny",
        price: "210",
        frequency: "1",
        trending: false,
        minAge: "8",
        maxAge: "12",
        category: "modernDance",
      },
      {
        name: "Taniec współczesny",
        price: "220",
        frequency: "1",
        trending: false,
        minAge: "13",
        maxAge: "18",
        category: "modernDance",
      },
      {
        name: "Taniec współczesny",
        price: "310",
        frequency: "2",
        trending: false,
        minAge: "13",
        maxAge: "18",
        category: "modernDance",
      },
      {
        name: "Partnerowanie akro",
        price: "230",
        frequency: "1",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "partnerAcro",
      },
      {
        name: "K-POP",
        price: "230",
        frequency: "2",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "kpop",
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
        name: "Taniec dla 4–6 latków + balet",
        price: "230 ",
        frequency: "2",
        frequencyDescription:
          "Taniec dla 4-6 latków: 1 raz w tygodniu. Balet: 1 raz w tygodniu.",
        trending: false,
        minAge: "4",
        maxAge: "6",
        category: "kidsDance",
      },
      {
        name: "Taniec dla 4–6 latków + akrobatyka",
        price: "240 ",
        frequency: "2",
        frequencyDescription:
          "Taniec dla 4-6 latków: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: "4",
        maxAge: "6",
        category: "kidsDance",
      },
      {
        name: "Balet + akrobatyka",
        price: "240 ",
        frequency: "1",
        frequencyDescription:
          "Taniec dla 4-6 latków: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "ballet",
      },
      {
        name: "Young Generation + akrobatyka",
        price: "270 ",
        frequency: "1",
        frequencyDescription:
          "Taniec dla 4-6 latków: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: "7",
        maxAge: "9",
        category: "youngGeneration",
      },
      {
        name: "Podstawa + KPOP/akrobatyka",
        price: "320 ",
        frequency: "1",
        frequencyDescription:
          "Taniec dla 4-6 latków: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "foundation",
      },
      {
        name: "Podstawa + choreo",
        price: "320 ",
        frequency: "1",
        frequencyDescription:
          "Taniec dla 4-6 latków: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "foundation",
      },
      {
        name: "Podstawa + choreo + taniec współczesny",
        price: "380 ",
        frequency: "1",
        frequencyDescription:
          "Taniec dla 4-6 latków: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "foundation",
      },
      {
        name: "Podstawa + taniec współczesny + KPOP + akrobatyka",
        price: "420 ",
        frequency: "1",
        frequencyDescription:
          "Taniec dla 4-6 latków: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "foundation",
      },
      {
        name: "Podstawa + KPOP / akrobatyka / choreo open",
        price: "330 ",
        frequency: "1",
        frequencyDescription:
          "Taniec dla 4-6 latków: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "hiphop",
      },
      {
        name: "Taniec współczesny + partnerowanie akro",
        price: "300",
        frequency: "1",
        frequencyDescription:
          "Taniec dla 4-6 latków: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: "8",
        maxAge: "12",
        category: "modernDance",
      },
      {
        name: "Taniec współczesny + partnerowanie akro + taniec współczesny + partnerowanie akro",
        price: "380",
        frequency: "2",
        frequencyDescription:
          "Taniec dla 4-6 latków: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
        trending: false,
        minAge: "13",
        maxAge: "18",
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
        price: "160 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "Taniec współczesny duet",
        price: "100 zł/h od osoby",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "Hip-hop solo",
        price: "140 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "Hip-hop duet",
        price: "90 zł/h od osoby",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "Hip-hop trio",
        price: "80 zł/h od osoby",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "K-pop solo",
        price: "130 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "Akrobatyka",
        price: "160 zł/h",
        frequency: "1 wejście",
        frequencyDescription: "Jednorazowe uczestnictwo w zajęciach.",
        trending: false,
        minAge: "",
        maxAge: "",
        category: "individual",
      },
      {
        name: "Pierwszy taniec",
        price: "150 zł/h",
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
