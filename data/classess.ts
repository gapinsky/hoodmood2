import type { CitySlug } from "./locations";
import type { TrainerId } from "./trainers";

export type ClassLevel = "beginner" | "intermediate" | "advanced" | "all";

export type BillingUnit = "month" | "class" | "hour" | "person" | "one-time";

export type PriceVariant = {
  id: string;
  label?: string;
  amount: number;
};

export type ClassPricing = {
  currency: "PLN";
  billingUnit: BillingUnit;
  variants: PriceVariant[];
};

export type ClassScheduleEntry = {
  dayOfWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  startTime: string;
  endTime: string;
  trainerIds?: TrainerId[];
};

export type DanceClass = {
  id: string;
  slug: string;
  name: string;
  shortInfo: string;
  description: string;
  locationId: CitySlug;
  minAge: number;
  maxAge: number | null;
  level: ClassLevel;
  trainerIds: TrainerId[];
  /** Gościnni prowadzący poza standardową obsadą zajęć. */
  specialTrainerIds: TrainerId[];
  schedule: ClassScheduleEntry[];
  pricing: ClassPricing;
  frequency: {
    sessionsPerWeek?: number;
    durationMinutes?: number;
    description?: string;
  };
  image: string;
  active: boolean;
  enrollmentEnabled: boolean;
  sortOrder: number;
};

// Katalog zebrany z ofertaData.ts, pricingData.ts i scheduleData.ts.
// Wartość maxAge: null zastępuje pusty limit lub umowne 99 lat.
// Pusty schedule oznacza brak stałego terminu albo wybór terminów w pakiecie.
// trainerIds: [] oznacza prowadzącego dobieranego indywidualnie, gościa
// albo prowadzących zależnych od wybranych zajęć składowych pakietu.
// Pakiety mają prefiks koszalin-pakiet-; schemat nie zawiera relacji składowych.
// The Beat Hunters: wiek 10–12 z oferty i grafiku; cennik podaje 5–99.
// Goście przy tańcu współczesnym 13–18 pojawiają się 1x/miesiąc,
// więc nie są przypisani jako cotygodniowi prowadzący.
// MASTERCLASS: piątkowy termin z grafiku, wydarzenia nieregularne.
// MASTER TRAINERS rozliczane za trening, MASTER PASS miesięcznie.
// Duety/trio: billingUnit "hour", kwota od osoby wskazana w label.

export const classes = {
  "koszalin-balet-7-9": {
    id: "koszalin-balet-7-9",
    slug: "koszalin-balet-7-9",
    name: "Balet",
    shortInfo: "Podstawy baletu, rytmika i prawidłowa postawa.",
    description: "Podstawy baletu, rytmika i prawidłowa postawa.\n\nPodstawy baletu: postawa, praca stóp, koordynacja i lekkość ruchu.",
    locationId: "koszalin",
    minAge: 7,
    maxAge: 9,
    level: "beginner",
    trainerIds: ["paulina-walikowska"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 2,
        startTime: "16:00",
        endTime: "17:00",
        trainerIds: ["paulina-walikowska"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 180
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 60
    },
    image: "/assets/images/offer/balet.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 10
  },
  "koszalin-kpop-kids-10-12": {
    id: "koszalin-kpop-kids-10-12",
    slug: "koszalin-kpop-kids-10-12",
    name: "KPOP Kids",
    shortInfo: "Choreografie z teledysków K-POP, rytm i sceniczna energia.",
    description: "Choreografie z teledysków K-POP, rytm i sceniczna energia.\n\nChoreografie inspirowane K-popem: precyzja, energia, synchron i performance.",
    locationId: "koszalin",
    minAge: 10,
    maxAge: 12,
    level: "all",
    trainerIds: ["alina-lemanska"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 3,
        startTime: "16:00",
        endTime: "17:00",
        trainerIds: ["alina-lemanska"]
      },
      {
        dayOfWeek: 4,
        startTime: "18:30",
        endTime: "19:30",
        trainerIds: ["alina-lemanska"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 240
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 2,
      durationMinutes: 60
    },
    image: "/assets/images/offer/kpop.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 20
  },
  "koszalin-kpop-teens-13-plus": {
    id: "koszalin-kpop-teens-13-plus",
    slug: "koszalin-kpop-teens-13-plus",
    name: "KPOP Teens",
    shortInfo: "Choreografie z teledysków K-POP, rytm i sceniczna energia.",
    description: "Choreografie z teledysków K-POP, rytm i sceniczna energia.\n\nChoreografie inspirowane K-popem: precyzja, energia, synchron i performance.",
    locationId: "koszalin",
    minAge: 13,
    maxAge: null,
    level: "all",
    trainerIds: ["alina-lemanska"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 3,
        startTime: "17:00",
        endTime: "18:00",
        trainerIds: ["alina-lemanska"]
      },
      {
        dayOfWeek: 4,
        startTime: "19:30",
        endTime: "20:30",
        trainerIds: ["alina-lemanska"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 240
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 2,
      durationMinutes: 60
    },
    image: "/assets/images/offer/kpop.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 30
  },
  "koszalin-kpop-dorosli-30-plus": {
    id: "koszalin-kpop-dorosli-30-plus",
    slug: "koszalin-kpop-dorosli-30-plus",
    name: "KPOP dla dorosłych",
    shortInfo: "Choreografie z teledysków K-POP, rytm i sceniczna energia.",
    description: "Choreografie z teledysków K-POP, rytm i sceniczna energia.\n\nChoreografie inspirowane K-popem dla dorosłych: technika, synchron i performance.",
    locationId: "koszalin",
    minAge: 30,
    maxAge: null,
    level: "all",
    trainerIds: ["alina-lemanska"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 4,
        startTime: "20:30",
        endTime: "21:30",
        trainerIds: ["alina-lemanska"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 190
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 60
    },
    image: "/assets/images/offer/kpop.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 40
  },
  "koszalin-taniec-4-6": {
    id: "koszalin-taniec-4-6",
    slug: "koszalin-taniec-4-6",
    name: "Taniec dla 4-6 latków",
    shortInfo: "Pierwsze kroki taneczne, rytm i ruch przez zabawę.",
    description: "Pierwsze kroki taneczne, rytm i ruch przez zabawę.\n\nZajęcia taneczne dla najmłodszych, rozwijające rytmikę, koordynację i swobodę ruchu.",
    locationId: "koszalin",
    minAge: 4,
    maxAge: 6,
    level: "beginner",
    trainerIds: ["wiktoria-butwicka"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 1,
        startTime: "16:15",
        endTime: "17:00",
        trainerIds: ["wiktoria-butwicka"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 180
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 45
    },
    image: "/assets/images/offer/taniec4-6.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 50
  },
  "koszalin-akrobatyka-4-6": {
    id: "koszalin-akrobatyka-4-6",
    slug: "koszalin-akrobatyka-4-6",
    name: "Akrobatyka",
    shortInfo: "Podstawy akrobatyki, równowaga i gibkość przez zabawę.",
    description: "Podstawy akrobatyki, równowaga i gibkość przez zabawę.\n\nAkrobatyka dla najmłodszych: mobilność, siła, równowaga i bezpieczna nauka elementów.",
    locationId: "koszalin",
    minAge: 4,
    maxAge: 6,
    level: "beginner",
    trainerIds: ["aleks-kultys"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 5,
        startTime: "17:00",
        endTime: "18:00",
        trainerIds: ["aleks-kultys"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 190
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 60
    },
    image: "/assets/images/offer/akrobatyka4-6.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 60
  },
  "koszalin-young-generation-7-9": {
    id: "koszalin-young-generation-7-9",
    slug: "koszalin-young-generation-7-9",
    name: "Young Generation",
    shortInfo: "Podstawy hip-hopu, groove i pierwsze choreografie.",
    description: "Podstawy hip-hopu, groove i pierwsze choreografie.\n\nHip-hop dla dzieci: podstawowe kroki, choreografie, muzykalność i praca w grupie.\n\nHip-hop dla dzieci: podstawy techniki, choreografie, muzykalność i swoboda ruchu.",
    locationId: "koszalin",
    minAge: 7,
    maxAge: 9,
    level: "all",
    trainerIds: ["wiktoria-butwicka", "magdalena-sokolowska-japona"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 1,
        startTime: "17:00",
        endTime: "18:00",
        trainerIds: ["wiktoria-butwicka"]
      },
      {
        dayOfWeek: 2,
        startTime: "17:00",
        endTime: "18:00",
        trainerIds: ["magdalena-sokolowska-japona"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 240
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 2,
      durationMinutes: 60
    },
    image: "/assets/images/offer/youngGeneration7-9.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 70
  },
  "koszalin-akrobatyka-7-9": {
    id: "koszalin-akrobatyka-7-9",
    slug: "koszalin-akrobatyka-7-9",
    name: "Akrobatyka",
    shortInfo: "Technika akrobatyczna, siła, gibkość i kontrola ciała.",
    description: "Technika akrobatyczna, siła, gibkość i kontrola ciała.\n\nAkrobatyka: mobilność, siła, równowaga i bezpieczna nauka elementów.",
    locationId: "koszalin",
    minAge: 7,
    maxAge: 9,
    level: "all",
    trainerIds: ["aleks-kultys"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 3,
        startTime: "18:00",
        endTime: "19:00",
        trainerIds: ["aleks-kultys"]
      },
      {
        dayOfWeek: 5,
        startTime: "18:00",
        endTime: "19:00",
        trainerIds: ["aleks-kultys"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 280
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 2,
      durationMinutes: 60
    },
    image: "/assets/images/offer/akrobatyka7-9.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 80
  },
  "koszalin-the-beat-hunters-10-12": {
    id: "koszalin-the-beat-hunters-10-12",
    slug: "koszalin-the-beat-hunters-10-12",
    name: "The Beat Hunters",
    shortInfo: "Hip-hop, choreografie i podstawy freestyle’u.",
    description: "Hip-hop, choreografie i podstawy freestyle’u.\n\nHip-hop: izolacje, dynamika, koordynacja i choreografie dopasowane do poziomu.\n\nHip-hop: technika, dynamika, koordynacja i choreografie dopasowane do poziomu.",
    locationId: "koszalin",
    minAge: 10,
    maxAge: 12,
    level: "all",
    trainerIds: ["maria-kober", "magdalena-sokolowska-japona"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 2,
        startTime: "18:00",
        endTime: "19:00",
        trainerIds: ["magdalena-sokolowska-japona"]
      },
      {
        dayOfWeek: 4,
        startTime: "16:30",
        endTime: "17:30",
        trainerIds: ["maria-kober"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 290
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 2,
      durationMinutes: 60
    },
    image: "/assets/images/offer/theBeatHunters10-12.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 90
  },
  "koszalin-akrobatyka-10-13": {
    id: "koszalin-akrobatyka-10-13",
    slug: "koszalin-akrobatyka-10-13",
    name: "Akrobatyka",
    shortInfo: "Technika akrobatyczna, siła, gibkość i kontrola ciała.",
    description: "Technika akrobatyczna, siła, gibkość i kontrola ciała.\n\nAkrobatyka: technika, siła, stabilizacja i łączenie elementów w sekwencje.",
    locationId: "koszalin",
    minAge: 10,
    maxAge: 13,
    level: "intermediate",
    trainerIds: ["aleks-kultys"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 3,
        startTime: "19:00",
        endTime: "20:00",
        trainerIds: ["aleks-kultys"]
      },
      {
        dayOfWeek: 5,
        startTime: "19:00",
        endTime: "20:00",
        trainerIds: ["aleks-kultys"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 280
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 2,
      durationMinutes: 60
    },
    image: "/assets/images/offer/akrobatyka10-14.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 100
  },
  "koszalin-taniec-wspolczesny-6-9": {
    id: "koszalin-taniec-wspolczesny-6-9",
    slug: "koszalin-taniec-wspolczesny-6-9",
    name: "Taniec współczesny",
    shortInfo: "Technika tańca współczesnego, improwizacja i ekspresja.",
    description: "Technika tańca współczesnego, improwizacja i ekspresja.\n\nTaniec współczesny: koordynacja, płynność, praca z podłogą i ekspresja ruchowa.",
    locationId: "koszalin",
    minAge: 6,
    maxAge: 9,
    level: "all",
    trainerIds: ["klara-walach", "nel-glowacka"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 5,
        startTime: "16:00",
        endTime: "17:00",
        trainerIds: ["nel-glowacka", "klara-walach"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 180
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 60
    },
    image: "/assets/images/offer/taniecWspolczesny8-12.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 110
  },
  "koszalin-taniec-wspolczesny-10-12": {
    id: "koszalin-taniec-wspolczesny-10-12",
    slug: "koszalin-taniec-wspolczesny-10-12",
    name: "Taniec współczesny",
    shortInfo: "Technika tańca współczesnego, improwizacja i ekspresja.",
    description: "Technika tańca współczesnego, improwizacja i ekspresja.\n\nTaniec współczesny: technika, płynność, praca z podłogą i ekspresja ruchowa.",
    locationId: "koszalin",
    minAge: 10,
    maxAge: 12,
    level: "all",
    trainerIds: ["klara-walach", "marianna-stanislawska"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 2,
        startTime: "19:00",
        endTime: "20:00",
        trainerIds: ["klara-walach", "marianna-stanislawska"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 210
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 60
    },
    image: "/assets/images/offer/taniecWspolczesny8-12.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 120
  },
  "koszalin-taniec-wspolczesny-13-18": {
    id: "koszalin-taniec-wspolczesny-13-18",
    slug: "koszalin-taniec-wspolczesny-13-18",
    name: "Taniec współczesny",
    shortInfo: "Technika tańca współczesnego, improwizacja i ekspresja.",
    description: "Technika tańca współczesnego, improwizacja i ekspresja.\n\nTaniec współczesny: technika, płynność, praca z podłogą i ekspresja ruchowa.",
    locationId: "koszalin",
    minAge: 13,
    maxAge: 18,
    level: "all",
    trainerIds: ["talita-jarzecka"],
    specialTrainerIds: ["kamila-maik", "joanna-jedynak"],
    schedule: [
      {
        dayOfWeek: 1,
        startTime: "19:30",
        endTime: "20:30",
        trainerIds: ["talita-jarzecka"]
      },
      {
        dayOfWeek: 2,
        startTime: "20:00",
        endTime: "21:00",
        trainerIds: ["talita-jarzecka"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 300
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 2,
      durationMinutes: 60,
      description: "Kamila Maik / Joanna Jedynak — gościnnie 1x w miesiącu; regularne zajęcia prowadzi Talita Jarzęcka."
    },
    image: "/assets/images/offer/taniecWspolczesny12-18.png",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 130
  },
  "koszalin-hype-crew": {
    id: "koszalin-hype-crew",
    slug: "koszalin-hype-crew",
    name: "HYPE CREW",
    shortInfo: "Hip-hop dla średniozaawansowanych: choreografie i przygotowanie do pokazów.",
    description: "Hip-hop dla średniozaawansowanych: choreografie i przygotowanie do pokazów.\n\nTrening grupowy z naciskiem na choreografię, technikę i performance.",
    locationId: "koszalin",
    minAge: 12,
    maxAge: null,
    level: "intermediate",
    trainerIds: ["talita-jarzecka", "maria-kober", "paulina-kapuscinska"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 1,
        startTime: "18:00",
        endTime: "19:30",
        trainerIds: ["talita-jarzecka"]
      },
      {
        dayOfWeek: 4,
        startTime: "17:30",
        endTime: "18:30",
        trainerIds: ["maria-kober", "paulina-kapuscinska"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 300
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 2,
      description: "grupa średniozaawansowana"
    },
    image: "/assets/images/offer/hype.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 140
  },
  "koszalin-lekcje-indywidualne": {
    id: "koszalin-lekcje-indywidualne",
    slug: "koszalin-lekcje-indywidualne",
    name: "Lekcje Indywidualne",
    shortInfo: "Trening 1:1 dopasowany do Twojego poziomu i celu.",
    description: "Trening 1:1 dopasowany do Twojego poziomu i celu.",
    locationId: "koszalin",
    minAge: 5,
    maxAge: null,
    level: "all",
    trainerIds: [],
    specialTrainerIds: [],
    schedule: [],
    pricing: {
      currency: "PLN",
      billingUnit: "hour",
      variants: [
        {
          id: "taniec-wspolczesny-solo",
          label: "Taniec współczesny solo — za godzinę",
          amount: 170
        },
        {
          id: "taniec-wspolczesny-duet",
          label: "Taniec współczesny duet — za godzinę od osoby",
          amount: 110
        },
        {
          id: "hip-hop-solo",
          label: "Hip-hop solo — za godzinę",
          amount: 150
        },
        {
          id: "hip-hop-duet",
          label: "Hip-hop duet — za godzinę od osoby",
          amount: 100
        },
        {
          id: "hip-hop-trio",
          label: "Hip-hop trio — za godzinę od osoby",
          amount: 90
        },
        {
          id: "kpop-solo",
          label: "K-pop solo — za godzinę",
          amount: 140
        },
        {
          id: "akrobatyka",
          label: "Akrobatyka — za godzinę",
          amount: 170
        },
        {
          id: "pierwszy-taniec",
          label: "Pierwszy taniec — za godzinę",
          amount: 160
        }
      ]
    },
    frequency: {
      durationMinutes: 60,
      description: "Jednorazowe uczestnictwo w zajęciach. Termin i prowadzący dobierani na podstawie zajęć. Ceny duetów i trio podane za godzinę od osoby."
    },
    image: "/assets/images/offer/indywidualne.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 150
  },
  "koszalin-feminine-flow-18-plus": {
    id: "koszalin-feminine-flow-18-plus",
    slug: "koszalin-feminine-flow-18-plus",
    name: "Feminine Flow",
    shortInfo: "Płynność ruchu, kobieca ekspresja i pewność siebie.",
    description: "Płynność ruchu, kobieca ekspresja i pewność siebie.\n\nPłynny, kobiecy styl, świadomość ciała i praca z choreografią.",
    locationId: "koszalin",
    minAge: 18,
    maxAge: null,
    level: "all",
    trainerIds: ["wiktoria-butwicka"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 1,
        startTime: "20:30",
        endTime: "21:30",
        trainerIds: ["wiktoria-butwicka"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 190
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 60
    },
    image: "/assets/images/offer/feminine.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 160
  },
  "koszalin-hip-hop-dorosli-30-plus": {
    id: "koszalin-hip-hop-dorosli-30-plus",
    slug: "koszalin-hip-hop-dorosli-30-plus",
    name: "Formacja dla dorosłych (Hip-Hop)",
    shortInfo: "Hip-hop w grupie: choreografie, synchronizacja i kondycja.",
    description: "Hip-hop w grupie: choreografie, synchronizacja i kondycja.\n\nPraca nad choreografią, synchronem, techniką i scenicznością.",
    locationId: "koszalin",
    minAge: 30,
    maxAge: null,
    level: "all",
    trainerIds: ["wiktoria-butwicka"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 3,
        startTime: "20:00",
        endTime: "21:30",
        trainerIds: ["wiktoria-butwicka"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 210
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 90
    },
    image: "/assets/images/offer/formacjaDladoroslych.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 170
  },
  "koszalin-master-trainers": {
    id: "koszalin-master-trainers",
    slug: "koszalin-master-trainers",
    name: "MASTER TRAINERS",
    shortInfo: "3-godzinny trening z wybranym trenerem raz w miesiącu.",
    description: "3-godzinny trening z wybranym trenerem raz w miesiącu. Nikola Suchocka (hip-hop), Kamila Maik / Joanna Jedynak (taniec współczesny).",
    locationId: "koszalin",
    minAge: 7,
    maxAge: null,
    level: "all",
    trainerIds: ["nikola-suchocka", "kamila-maik", "joanna-jedynak"],
    specialTrainerIds: [],
    schedule: [],
    pricing: {
      currency: "PLN",
      billingUnit: "class",
      variants: [
        {
          id: "member",
          label: "Aktywni kursanci HOODMOOD",
          amount: 60
        },
        {
          id: "non-member",
          label: "Osoby spoza HOODMOOD",
          amount: 180
        }
      ]
    },
    frequency: {
      durationMinutes: 180,
      description: "3 godziny | regularnie, 1x w miesiącu. To stała współpraca z wybranym trenerem, który regularnie pojawia się w naszym grafiku. Dzięki temu możesz trenować z nim przez cały sezon i rozwijać się pod jego okiem."
    },
    image: "/assets/images/offer/masterTrainer.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 180
  },
  "koszalin-masterclass": {
    id: "koszalin-masterclass",
    slug: "koszalin-masterclass",
    name: "MASTERCLASS",
    shortInfo: "1,5-godzinne warsztaty z zaproszonym gościem.",
    description: "1,5-godzinne warsztaty z zaproszonym gościem.\n\nIntensywne zajęcia rozwijające technikę, choreografię i performance.",
    locationId: "koszalin",
    minAge: 7,
    maxAge: null,
    level: "all",
    trainerIds: [],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 5,
        startTime: "20:00",
        endTime: "21:30",
        trainerIds: []
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "class",
      variants: [
        {
          id: "member",
          label: "Aktywni kursanci HOODMOOD",
          amount: 90
        },
        {
          id: "non-member",
          label: "Osoby spoza HOODMOOD",
          amount: 120
        }
      ]
    },
    frequency: {
      durationMinutes: 90,
      description: "1,5 godziny | specjalne wydarzenia. Jednorazowe warsztaty z zaproszonymi choreografami, tancerzami i instruktorami. Różne nazwiska, różne style, różne doświadczenia."
    },
    image: "/assets/images/offer/masterClass.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 190
  },
  "koszalin-master-pass": {
    id: "koszalin-master-pass",
    slug: "koszalin-master-pass",
    name: "HOODMOOD MASTER PASS",
    shortInfo: "Pakiet: 3 godziny MASTER TRAINER + 1,5 godziny MASTERCLASS.",
    description: "Pakiet: 3 godziny MASTER TRAINER + 1,5 godziny MASTERCLASS.",
    locationId: "koszalin",
    minAge: 7,
    maxAge: null,
    level: "all",
    trainerIds: [],
    specialTrainerIds: [],
    schedule: [],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "member",
          label: "Aktywni kursanci HOODMOOD",
          amount: 140
        },
        {
          id: "non-member",
          label: "Osoby spoza HOODMOOD",
          amount: 290
        }
      ]
    },
    frequency: {
      description: "3-godzinny MASTER TRAINER + 1,5-godzinny MASTERCLASS"
    },
    image: "/assets/images/offer/masterPass.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 200
  },
  "bialy-bor-taniec-4-7": {
    id: "bialy-bor-taniec-4-7",
    slug: "bialy-bor-taniec-4-7",
    name: "Zajęcia taneczne",
    shortInfo: "Rytm, proste choreografie i nauka tańca przez zabawę.",
    description: "Rytm, proste choreografie i nauka tańca przez zabawę.\n\nZajęcia ogólnorozwojowe z tańcem: rytm, koordynacja, proste kroki i zabawy ruchowe. Nauka pracy w grupie.",
    locationId: "bialy-bor",
    minAge: 4,
    maxAge: 7,
    level: "beginner",
    trainerIds: ["talita-jarzecka"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 4,
        startTime: "16:15",
        endTime: "17:00",
        trainerIds: ["talita-jarzecka"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 90
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 45
    },
    image: "/assets/images/offer/zajeciaTaneczneBialyBor.png",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 10
  },
  "bialy-bor-hip-hop-8-13": {
    id: "bialy-bor-hip-hop-8-13",
    slug: "bialy-bor-hip-hop-8-13",
    name: "Hip-hop",
    shortInfo: "Technika hip-hopu, groove i choreografie grupowe.",
    description: "Technika hip-hopu, groove i choreografie grupowe.\n\nHip-hop dla dzieci: groove, podstawowe kroki i technika, krótkie choreografie oraz praca w grupie. Rozwój muzykalności i pewności siebie.",
    locationId: "bialy-bor",
    minAge: 8,
    maxAge: 13,
    level: "all",
    trainerIds: ["talita-jarzecka"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 4,
        startTime: "17:00",
        endTime: "18:00",
        trainerIds: ["talita-jarzecka"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 90
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 60
    },
    image: "/assets/images/offer/hipHopBialyBor.png",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 20
  },
  "polanow-taniec-4-6": {
    id: "polanow-taniec-4-6",
    slug: "polanow-taniec-4-6",
    name: "Taniec dla 4-6 latków",
    shortInfo: "Pierwsze kroki taneczne, rytm i ruch przez zabawę.",
    description: "Pierwsze kroki taneczne, rytm i ruch przez zabawę.\n\nZajęcia ogólnorozwojowe z tańcem: rytm, koordynacja, proste kroki i zabawy ruchowe. Nauka pracy w grupie.",
    locationId: "polanow",
    minAge: 4,
    maxAge: 6,
    level: "beginner",
    trainerIds: ["talita-jarzecka"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 3,
        startTime: "16:00",
        endTime: "16:45",
        trainerIds: ["talita-jarzecka"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 140
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 45
    },
    image: "/assets/images/offer/taniec4-6.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 10
  },
  "polanow-hip-hop-7-9": {
    id: "polanow-hip-hop-7-9",
    slug: "polanow-hip-hop-7-9",
    name: "Hip-hop",
    shortInfo: "Podstawy hip-hopu, dynamika i krótkie choreografie.",
    description: "Podstawy hip-hopu, dynamika i krótkie choreografie.\n\nHip-hop dla dzieci i młodzieży: groove, podstawowe kroki i technika, krótkie choreografie oraz praca w grupie. Rozwój muzykalności i pewności siebie.",
    locationId: "polanow",
    minAge: 7,
    maxAge: 9,
    level: "beginner",
    trainerIds: ["talita-jarzecka"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 3,
        startTime: "16:45",
        endTime: "17:45",
        trainerIds: ["talita-jarzecka"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 150
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 60
    },
    image: "/assets/images/offer/hipHop7-9Polanow.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 20
  },
  "polanow-hip-hop-10-14": {
    id: "polanow-hip-hop-10-14",
    slug: "polanow-hip-hop-10-14",
    name: "Hip-hop",
    shortInfo: "Technika hip-hopu, groove i choreografie grupowe.",
    description: "Technika hip-hopu, groove i choreografie grupowe.\n\nHip-hop dla dzieci i młodzieży: groove, podstawowe kroki i technika, krótkie choreografie oraz praca w grupie. Rozwój muzykalności i pewności siebie.",
    locationId: "polanow",
    minAge: 10,
    maxAge: 14,
    level: "intermediate",
    trainerIds: ["talita-jarzecka"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 3,
        startTime: "17:45",
        endTime: "19:15",
        trainerIds: ["talita-jarzecka"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 180
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 90
    },
    image: "/assets/images/offer/hipHop10-15Polanow.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 30
  },
  "polanow-taniec-wspolczesny-7-11": {
    id: "polanow-taniec-wspolczesny-7-11",
    slug: "polanow-taniec-wspolczesny-7-11",
    name: "Taniec współczesny",
    shortInfo: "Technika tańca współczesnego, improwizacja i ekspresja.",
    description: "Technika tańca współczesnego, improwizacja i ekspresja.\n\nTaniec współczesny: technika, płynność, praca z podłogą i ekspresja ruchowa.",
    locationId: "polanow",
    minAge: 7,
    maxAge: 11,
    level: "all",
    trainerIds: ["marianna-stanislawska"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 3,
        startTime: "19:15",
        endTime: "20:15",
        trainerIds: ["marianna-stanislawska"]
      }
    ],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 150
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 1,
      durationMinutes: 60
    },
    image: "/assets/images/offer/taniecWspolczesny8-12.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 40
  },
  "koszalin-pakiet-taniec-4-6-wspolczesny-6-9": {
    id: "koszalin-pakiet-taniec-4-6-wspolczesny-6-9",
    slug: "koszalin-pakiet-taniec-4-6-wspolczesny-6-9",
    name: "Taniec dla 4-6 latków + Taniec współczesny 6-9 lat",
    shortInfo: "Pakiet zajęć",
    description: "Taniec dla 4-6 latków: 1 raz w tygodniu. Taniec współczesny 6-9 lat: 1 raz w tygodniu.",
    locationId: "koszalin",
    minAge: 4,
    maxAge: 6,
    level: "all",
    trainerIds: [],
    specialTrainerIds: [],
    schedule: [],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 320
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 2,
      description: "Taniec dla 4-6 latków: 1 raz w tygodniu. Taniec współczesny 6-9 lat: 1 raz w tygodniu. Terminy, poziom i prowadzący zgodnie z wybranymi zajęciami składowymi."
    },
    image: "/assets/images/offer/taniec4-6.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 210
  },
  "koszalin-pakiet-balet-wspolczesny-6-9": {
    id: "koszalin-pakiet-balet-wspolczesny-6-9",
    slug: "koszalin-pakiet-balet-wspolczesny-6-9",
    name: "Balet + Taniec współczesny 6-9 lat",
    shortInfo: "Pakiet zajęć",
    description: "Balet: 1 raz w tygodniu. Taniec współczesny 6-9 lat: 1 raz w tygodniu.",
    locationId: "koszalin",
    minAge: 7,
    maxAge: 9,
    level: "all",
    trainerIds: [],
    specialTrainerIds: [],
    schedule: [],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 320
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 2,
      description: "Balet: 1 raz w tygodniu. Taniec współczesny 6-9 lat: 1 raz w tygodniu. Terminy, poziom i prowadzący zgodnie z wybranymi zajęciami składowymi."
    },
    image: "/assets/images/offer/balet.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 220
  },
  "koszalin-pakiet-taniec-4-6-akrobatyka": {
    id: "koszalin-pakiet-taniec-4-6-akrobatyka",
    slug: "koszalin-pakiet-taniec-4-6-akrobatyka",
    name: "Taniec dla 4-6 latków + Akrobatyka",
    shortInfo: "Pakiet zajęć",
    description: "Taniec dla 4-6 latków: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu.",
    locationId: "koszalin",
    minAge: 4,
    maxAge: 6,
    level: "all",
    trainerIds: [],
    specialTrainerIds: [],
    schedule: [],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 330
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 2,
      description: "Taniec dla 4-6 latków: 1 raz w tygodniu. Akrobatyka: 1 raz w tygodniu. Terminy, poziom i prowadzący zgodnie z wybranymi zajęciami składowymi."
    },
    image: "/assets/images/offer/taniec4-6.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 230
  },
  "koszalin-pakiet-the-beat-hunters-kpop": {
    id: "koszalin-pakiet-the-beat-hunters-kpop",
    slug: "koszalin-pakiet-the-beat-hunters-kpop",
    name: "The Beat HUNTERS + KPOP 1x w tygodniu",
    shortInfo: "Pakiet zajęć",
    description: "The Beat HUNTERS: 2 razy w tygodniu. KPOP: 1 raz w tygodniu.",
    locationId: "koszalin",
    minAge: 5,
    maxAge: null,
    level: "all",
    trainerIds: [],
    specialTrainerIds: [],
    schedule: [],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 450
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 3,
      description: "The Beat HUNTERS: 2 razy w tygodniu. KPOP: 1 raz w tygodniu. Terminy, poziom i prowadzący zgodnie z wybranymi zajęciami składowymi."
    },
    image: "/assets/images/offer/theBeatHunters10-12.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 240
  },
  "koszalin-pakiet-the-beat-hunters-akrobatyka": {
    id: "koszalin-pakiet-the-beat-hunters-akrobatyka",
    slug: "koszalin-pakiet-the-beat-hunters-akrobatyka",
    name: "The Beat HUNTERS + Akrobatyka 1x w tygodniu",
    shortInfo: "Pakiet zajęć",
    description: "The Beat HUNTERS: 2 razy w tygodniu. Akrobatyka: 1 raz w tygodniu.",
    locationId: "koszalin",
    minAge: 5,
    maxAge: null,
    level: "all",
    trainerIds: [],
    specialTrainerIds: [],
    schedule: [],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 440
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 3,
      description: "The Beat HUNTERS: 2 razy w tygodniu. Akrobatyka: 1 raz w tygodniu. Terminy, poziom i prowadzący zgodnie z wybranymi zajęciami składowymi."
    },
    image: "/assets/images/offer/theBeatHunters10-12.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 250
  },
  "koszalin-pakiet-hype-crew-kpop": {
    id: "koszalin-pakiet-hype-crew-kpop",
    slug: "koszalin-pakiet-hype-crew-kpop",
    name: "HYPE CREW + KPOP 1x w tygodniu",
    shortInfo: "Pakiet zajęć",
    description: "HYPE CREW: 2 razy w tygodniu. KPOP: 1 raz w tygodniu.",
    locationId: "koszalin",
    minAge: 12,
    maxAge: null,
    level: "intermediate",
    trainerIds: [],
    specialTrainerIds: [],
    schedule: [],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 460
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 3,
      description: "HYPE CREW: 2 razy w tygodniu. KPOP: 1 raz w tygodniu. Terminy, poziom i prowadzący zgodnie z wybranymi zajęciami składowymi."
    },
    image: "/assets/images/offer/hype.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 260
  },
  "koszalin-pakiet-hype-crew-akrobatyka": {
    id: "koszalin-pakiet-hype-crew-akrobatyka",
    slug: "koszalin-pakiet-hype-crew-akrobatyka",
    name: "HYPE CREW + Akrobatyka 1x w tygodniu",
    shortInfo: "Pakiet zajęć",
    description: "HYPE CREW: 2 razy w tygodniu. Akrobatyka: 1 raz w tygodniu.",
    locationId: "koszalin",
    minAge: 12,
    maxAge: null,
    level: "intermediate",
    trainerIds: [],
    specialTrainerIds: [],
    schedule: [],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 450
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 3,
      description: "HYPE CREW: 2 razy w tygodniu. Akrobatyka: 1 raz w tygodniu. Terminy, poziom i prowadzący zgodnie z wybranymi zajęciami składowymi."
    },
    image: "/assets/images/offer/hype.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 270
  },
  "koszalin-pakiet-wspolczesny-6-9-akrobatyka": {
    id: "koszalin-pakiet-wspolczesny-6-9-akrobatyka",
    slug: "koszalin-pakiet-wspolczesny-6-9-akrobatyka",
    name: "Taniec współczesny 6-9 lat + Akrobatyka 1x w tygodniu",
    shortInfo: "Pakiet zajęć",
    description: "Taniec współczesny 6-9 lat: 1 raz w tygodniu. Akrobatyka 1x w tygodniu.",
    locationId: "koszalin",
    minAge: 6,
    maxAge: 9,
    level: "all",
    trainerIds: [],
    specialTrainerIds: [],
    schedule: [],
    pricing: {
      currency: "PLN",
      billingUnit: "month",
      variants: [
        {
          id: "standard",
          amount: 330
        }
      ]
    },
    frequency: {
      sessionsPerWeek: 2,
      description: "Taniec współczesny 6-9 lat: 1 raz w tygodniu. Akrobatyka 1x w tygodniu. Terminy, poziom i prowadzący zgodnie z wybranymi zajęciami składowymi."
    },
    image: "/assets/images/offer/taniecWspolczesny8-12.jpg",
    active: true,
    enrollmentEnabled: true,
    sortOrder: 280
  }
} satisfies Record<string, DanceClass>;

export type ClassId = keyof typeof classes;

export const classList: DanceClass[] = Object.values(classes);
