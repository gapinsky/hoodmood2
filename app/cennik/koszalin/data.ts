export const data = {
  badge: "Cennik",
  title: "Cennik - Koszalin",
  description:
    "Sprawdź, ile kosztują zajęcia grupowe, lekcje indywidualne oraz zajęcia w naszych filiach. Płatności rozliczamy w systemie miesięcznym za wyjątkiem lekcji indywidualnych. Chcesz chodzić na więcej niż jedne zajęcia? Sprawdź pakiety promocyjne - zestawy kilku zajęć w promocyjnych cenach!",
};

export type PricingTableProps = {
  title?: string;
  items: PriceItem[];
  ctaHref?: string;
};

export type PriceItem = {
  name: string;
  price: string;
  frequency: string;
  trending: boolean;
  age: string;
  category:
    | "kidsDance"
    | "youngGeneration"
    | "ballet"
    | "acrobatics"
    | "breakdance"
    | "partnerAcro"
    | "modernDance"
    | "kpop"
    | "hiphop"
    | "adults"
    | "foundation"
    | "individual"
    | "wedding";
};

export const priceList: PriceItem[] = [
  // Dzieci / podstawy
  {
    name: "Taniec dla 4–6 latków",
    price: "170 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "4–6 lat",
    category: "kidsDance",
  },
  {
    name: "Taniec dla 4–6 latków + balet",
    price: "230 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "4–6 lat",
    category: "kidsDance",
  },
  {
    name: "Taniec dla 4–6 latków + akrobatyka",
    price: "240 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "4–6 lat",
    category: "kidsDance",
  },
  {
    name: "Break Dance",
    price: "170 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "6–8 lat",
    category: "breakdance",
  },
  {
    name: "Balet",
    price: "170 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "",
    category: "ballet",
  },
  {
    name: "Balet + akrobatyka",
    price: "240 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "",
    category: "ballet",
  },
  {
    name: "Young Generation",
    price: "230 zł",
    frequency: "2x/tyg",
    trending: false,
    age: "7–9 lat",
    category: "youngGeneration",
  },
  {
    name: "Young Generation + akrobatyka",
    price: "270 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "7–9 lat",
    category: "youngGeneration",
  },

  // Pakiety / podstawa / hip-hop
  {
    name: "Pakiet podstawowy",
    price: "280 zł",
    frequency: "-",
    trending: false,
    age: "",
    category: "foundation",
  },
  {
    name: "Podstawa + KPOP/akrobatyka",
    price: "320 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "",
    category: "foundation",
  },
  {
    name: "Podstawa + choreo",
    price: "320 zł",
    frequency: "-",
    trending: false,
    age: "",
    category: "foundation",
  },
  {
    name: "Podstawa + choreo + taniec współczesny",
    price: "380 zł",
    frequency: "-",
    trending: false,
    age: "",
    category: "foundation",
  },
  {
    name: "Podstawa + taniec współczesny + KPOP + akrobatyka",
    price: "420 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "",
    category: "foundation",
  },
  {
    name: "Podstawa - treningi hip-hop",
    price: "290 zł",
    frequency: "2x/tyg",
    trending: false,
    age: "",
    category: "hiphop",
  },
  {
    name: "Podstawa + KPOP / akrobatyka / choreo open",
    price: "330 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "",
    category: "hiphop",
  },

  // Akrobatyka
  {
    name: "Akrobatyka",
    price: "180 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "4–6 lat",
    category: "acrobatics",
  },
  {
    name: "Akrobatyka",
    price: "180 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "7–9 lat",
    category: "acrobatics",
  },
  {
    name: "Akrobatyka",
    price: "180 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "10–14 lat",
    category: "acrobatics",
  },
  {
    name: "Partnerowanie akro",
    price: "230 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "",
    category: "partnerAcro",
  },

  // Dorośli
  {
    name: "Formacja dla dorosłych (HIP-HOP/HOUSE)",
    price: "200 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "dorośli",
    category: "adults",
  },
  {
    name: "FEMININE FLOW",
    price: "180 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "dorośli",
    category: "adults",
  },

  // Taniec współczesny
  {
    name: "Taniec współczesny",
    price: "210 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "8–12 lat",
    category: "modernDance",
  },
  {
    name: "Taniec współczesny + partnerowanie akro",
    price: "300 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "8–12 lat",
    category: "modernDance",
  },
  {
    name: "Taniec współczesny",
    price: "220 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "13–18 lat",
    category: "modernDance",
  },
  {
    name: "Taniec współczesny",
    price: "310 zł",
    frequency: "2x/tyg",
    trending: false,
    age: "13–18 lat",
    category: "modernDance",
  },
  {
    name: "Taniec współczesny + partnerowanie akro",
    price: "380 zł",
    frequency: "2x/tyg + 1x/tyg",
    trending: false,
    age: "13–18 lat",
    category: "modernDance",
  },
  {
    name: "Partnerowanie akro",
    price: "230 zł",
    frequency: "1x/tyg",
    trending: false,
    age: "",
    category: "partnerAcro",
  },

  // K-POP
  {
    name: "K-POP",
    price: "230 zł",
    frequency: "2x/tyg",
    trending: false,
    age: "",
    category: "kpop",
  },

  // Indywidualne / godzinowe
  {
    name: "Taniec współczesny solo",
    price: "160 zł/h",
    frequency: "-",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "Taniec współczesny duet",
    price: "100 zł/h od osoby",
    frequency: "-",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "Hip-hop solo",
    price: "140 zł/h",
    frequency: "-",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "Hip-hop duet",
    price: "90 zł/h od osoby",
    frequency: "-",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "Hip-hop trio",
    price: "80 zł/h od osoby",
    frequency: "-",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "K-pop solo",
    price: "130 zł/h",
    frequency: "-",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "Akrobatyka",
    price: "160 zł/h",
    frequency: "-",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "Pierwszy taniec",
    price: "150 zł/h",
    frequency: "-",
    trending: false,
    age: "",
    category: "wedding",
  },
];

type PackageEntry = {
  name: string;
  frequency?: string;
};

type PackageItem = {
  title: string;
  price: string;
  age?: string;
  trending: boolean;
  category:
    | "kidsPackages"
    | "balletPackages"
    | "youngGenerationPackages"
    | "foundationPackages"
    | "hiphopPackages"
    | "modernDancePackages";
  entries: PackageEntry[];
};

export const packageList: PackageItem[] = [
  {
    title: "Pakiet 4–6 lat + balet",
    price: "230 zł",
    age: "4–6 lat",
    trending: false,
    category: "kidsPackages",
    entries: [
      { name: "Taniec dla 4–6 latków" },
      { name: "Balet", frequency: "1x/tyg" },
    ],
  },
  {
    title: "Pakiet 13–18 lat + partnerowanie",
    price: "380 zł",
    age: "13–18 lat",
    trending: false,
    category: "modernDancePackages",
    entries: [
      { name: "Taniec współczesny", frequency: "2x/tyg" },
      { name: "Partnerowanie akro", frequency: "1x/tyg" },
    ],
  },
];