export const data = {
  badge: "Cennik",
  title: "Cennik - Koszalin",
  description:
    "Sprawdź, ile kosztują zajęcia grupowe, lekcje indywidualne oraz zajęcia w naszych filiach. Płatności rozliczamy w systemie miesięcznym za wyjątkiem lekcji indywidualnych. Chcesz chodzić na więcej niż jedne zajęcia? Sprawdź pakiety promocyjne - zestawy kilku zajęć w promocyjnych cenach!",
};

type PriceItem = {
  name: string;
  price: string; 
  frequency: string; 
  trending: boolean;
  age: string; 
  category:
    | "kidsDance"
    | "ballet"
    | "acrobatics"
    | "breakdance"
    | "partnerAcro"
    | "modernDance"
    | "kpop"
    | "hiphop"
    | "individual"
    | "wedding";
};

export const priceList: PriceItem[] = [
  {
    name: "Taniec dla 4–6 latków",
    price: "170 zł",
    frequency: "miesięcznie",
    trending: false,
    age: "4–6 lat",
    category: "kidsDance",
  },
  {
    name: "Taniec dla 4–6 latków + balet",
    price: "230 zł",
    frequency: "miesięcznie (1x/tyg)",
    trending: false,
    age: "4–6 lat",
    category: "kidsDance",
  },
  {
    name: "Taniec dla 4–6 latków + akrobatyka",
    price: "240 zł",
    frequency: "miesięcznie (1x/tyg)",
    trending: false,
    age: "4–6 lat",
    category: "kidsDance",
  },
  {
    name: "Break Dance",
    price: "170 zł",
    frequency: "miesięcznie",
    trending: false,
    age: "6–8 lat",
    category: "breakdance",
  },
  {
    name: "Balet",
    price: "170 zł",
    frequency: "miesięcznie (1x/tyg)",
    trending: false,
    age: "",
    category: "ballet",
  },
  {
    name: "Akrobatyka",
    price: "180 zł",
    frequency: "miesięcznie",
    trending: false,
    age: "4–6 lat",
    category: "acrobatics",
  },
  {
    name: "Akrobatyka",
    price: "180 zł",
    frequency: "miesięcznie",
    trending: false,
    age: "7–9 lat",
    category: "acrobatics",
  },
  {
    name: "Akrobatyka",
    price: "180 zł",
    frequency: "miesięcznie",
    trending: false,
    age: "10–14 lat",
    category: "acrobatics",
  },
  {
    name: "Partnerowanie akro",
    price: "230 zł",
    frequency: "miesięcznie",
    trending: false,
    age: "",
    category: "partnerAcro",
  },
  {
    name: "Taniec współczesny",
    price: "210 zł",
    frequency: "miesięcznie",
    trending: false,
    age: "8–12 lat",
    category: "modernDance",
  },
  {
    name: "K-POP",
    price: "230 zł",
    frequency: "miesięcznie (2x/tyg)",
    trending: false,
    age: "",
    category: "kpop",
  },

  // --- Indywidualne / godzinowe ---
  {
    name: "Taniec współczesny solo",
    price: "160 zł/h",
    frequency: "za godzinę",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "Taniec współczesny duet",
    price: "100 zł/h od osoby",
    frequency: "za godzinę",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "Hip-hop solo",
    price: "140 zł/h",
    frequency: "za godzinę",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "Hip-hop duet",
    price: "90 zł/h od osoby",
    frequency: "za godzinę",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "Hip-hop trio",
    price: "80 zł/h od osoby",
    frequency: "za godzinę",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "K-pop solo",
    price: "130 zł/h",
    frequency: "za godzinę",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "Akrobatyka",
    price: "160 zł/h",
    frequency: "za godzinę",
    trending: false,
    age: "",
    category: "individual",
  },
  {
    name: "Pierwszy taniec",
    price: "150 zł/h",
    frequency: "za godzinę",
    trending: false,
    age: "",
    category: "wedding",
  },
];
