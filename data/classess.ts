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
  venue?: string;
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
  "szczecinek-lekcje-indywidualne": {
    "id": "szczecinek-lekcje-indywidualne",
    "slug": "szczecinek-lekcje-indywidualne",
    "name": "Lekcje indywidualne",
    "shortInfo": "Indywidualna praca nad tańcem. Termin do ustalenia.",
    "description": "Indywidualna praca nad tańcem. Wypełnij formularz zapisów, a ustalimy szczegóły i termin lekcji w Szczecinku.",
    "locationId": "szczecinek",
    "minAge": 0,
    "maxAge": null,
    "level": "all",
    "trainerIds": [],
    "specialTrainerIds": [],
    "schedule": [],
    "pricing": {
      "currency": "PLN",
      "billingUnit": "hour",
      "variants": [
        {
          "id": "standard",
          "amount": 120
        }
      ]
    },
    "frequency": {
      "durationMinutes": 60
    },
    "image": "/assets/images/offer/indywidualne.jpg",
    "active": true,
    "enrollmentEnabled": true,
    "sortOrder": 350
  },
  "szczecinek-mikrusy": {
    "id": "szczecinek-mikrusy",
    "slug": "szczecinek-mikrusy",
    "name": "Mikrusy",
    "shortInfo": "Pierwsze kroki w tańcu, gimnastyka i podstawy tańca klasycznego.",
    "description": "Zajęcia dla dzieci w wieku 4–6 lat. Najmłodsi poznają ruch przez ćwiczenia gimnastyczne i podstawy tańca klasycznego. Rozwijają świadomość ciała, skupienie i pewność siebie.",
    "locationId": "szczecinek",
    "minAge": 4,
    "maxAge": 6,
    "level": "all",
    "trainerIds": [
      "julia-kaczmarzyk"
    ],
    "specialTrainerIds": [],
    "schedule": [
      {
        "dayOfWeek": 3,
        "startTime": "16:00",
        "endTime": "16:45",
        "venue": "ul. Dworcowa 1"
      },
      {
        "dayOfWeek": 4,
        "startTime": "16:00",
        "endTime": "16:45",
        "venue": "SP 1 — Plac Wazów 1"
      }
    ],
    "pricing": {
      "currency": "PLN",
      "billingUnit": "month",
      "variants": [
        {
          "id": "standard",
          "amount": 120
        }
      ]
    },
    "frequency": {
      "sessionsPerWeek": 2,
      "durationMinutes": 45
    },
    "image": "/assets/images/offer/taniec4-6.jpg",
    "active": true,
    "enrollmentEnabled": true,
    "sortOrder": 300
  },
  "szczecinek-minimki": {
    "id": "szczecinek-minimki",
    "slug": "szczecinek-minimki",
    "name": "Minimki",
    "shortInfo": "Rozwój taneczny, świadomość ciała i praca w grupie.",
    "description": "Zajęcia dla dzieci w wieku 7–9 lat w zespole REBELIA. Nauka tańca łączy ćwiczenia rozwijające świadomość ciała i skupienie z poznawaniem różnych stylów. To przestrzeń do budowania pewności siebie i wspólnego rozwoju.",
    "locationId": "szczecinek",
    "minAge": 7,
    "maxAge": 9,
    "level": "all",
    "trainerIds": [
      "julia-kaczmarzyk"
    ],
    "specialTrainerIds": [],
    "schedule": [
      {
        "dayOfWeek": 3,
        "startTime": "16:45",
        "endTime": "17:30",
        "venue": "ul. Dworcowa 1"
      },
      {
        "dayOfWeek": 5,
        "startTime": "16:00",
        "endTime": "16:45",
        "venue": "ul. Dworcowa 1"
      }
    ],
    "pricing": {
      "currency": "PLN",
      "billingUnit": "month",
      "variants": [
        {
          "id": "standard",
          "amount": 120
        }
      ]
    },
    "frequency": {
      "sessionsPerWeek": 2,
      "durationMinutes": 45
    },
    "image": "/assets/images/offer/balet.jpg",
    "active": true,
    "enrollmentEnabled": true,
    "sortOrder": 310
  },
  "szczecinek-rebelia-3": {
    "id": "szczecinek-rebelia-3",
    "slug": "szczecinek-rebelia-3",
    "name": "Rebelia 3",
    "shortInfo": "Różnorodne style i wszechstronny rozwój taneczny.",
    "description": "Grupa zespołu REBELIA dla dzieci w wieku 10–12 lat. Uczestnicy poznają różnorodne style tańca, rozwijają świadomość ciała i umiejętność pracy w zespole. Regularne treningi pomagają nabierać swobody i pewności w ruchu.",
    "locationId": "szczecinek",
    "minAge": 10,
    "maxAge": 12,
    "level": "all",
    "trainerIds": [
      "julia-kaczmarzyk"
    ],
    "specialTrainerIds": [],
    "schedule": [
      {
        "dayOfWeek": 4,
        "startTime": "16:45",
        "endTime": "17:45",
        "venue": "SP 1 — Plac Wazów 1"
      },
      {
        "dayOfWeek": 5,
        "startTime": "16:45",
        "endTime": "17:45",
        "venue": "ul. Dworcowa 1"
      }
    ],
    "pricing": {
      "currency": "PLN",
      "billingUnit": "month",
      "variants": [
        {
          "id": "standard",
          "amount": 130
        }
      ]
    },
    "frequency": {
      "sessionsPerWeek": 2,
      "durationMinutes": 60
    },
    "image": "/assets/images/offer/taniecWspolczesny8-12.jpg",
    "active": true,
    "enrollmentEnabled": true,
    "sortOrder": 320
  },
  "szczecinek-rebelia-junior": {
    "id": "szczecinek-rebelia-junior",
    "slug": "szczecinek-rebelia-junior",
    "name": "Rebelia Junior",
    "shortInfo": "Taniec współczesny i rozwijanie własnej ekspresji.",
    "description": "Zajęcia zespołu REBELIA dla młodzieży w wieku 13–14 lat. Poznawanie różnych stylów rozwija wszechstronność, świadomość ciała i ekspresję. Wspólna praca na sali jest częścią życia zespołu, który uczestniczy w występach i konkursach.",
    "locationId": "szczecinek",
    "minAge": 13,
    "maxAge": 14,
    "level": "all",
    "trainerIds": [
      "julia-kaczmarzyk"
    ],
    "specialTrainerIds": [],
    "schedule": [
      {
        "dayOfWeek": 3,
        "startTime": "17:30",
        "endTime": "18:30",
        "venue": "ul. Dworcowa 1"
      },
      {
        "dayOfWeek": 5,
        "startTime": "17:45",
        "endTime": "18:45",
        "venue": "ul. Dworcowa 1"
      }
    ],
    "pricing": {
      "currency": "PLN",
      "billingUnit": "month",
      "variants": [
        {
          "id": "standard",
          "amount": 130
        }
      ]
    },
    "frequency": {
      "sessionsPerWeek": 2,
      "durationMinutes": 60
    },
    "image": "/assets/images/offer/taniecWspolczesny13-18.jpg",
    "active": true,
    "enrollmentEnabled": true,
    "sortOrder": 330
  },
  "szczecinek-rebelia": {
    "id": "szczecinek-rebelia",
    "slug": "szczecinek-rebelia",
    "name": "Rebelia",
    "shortInfo": "Taniec współczesny, praca zespołowa i ekspresja sceniczna.",
    "description": "Grupa zespołu REBELIA dla osób od 15. roku życia. Półtoragodzinne treningi dają przestrzeń do rozwijania techniki, wszechstronności i własnej ekspresji. Zespół ma wieloletnią tradycję występów, konkursów i corocznych koncertów w Kinie Wolność.",
    "locationId": "szczecinek",
    "minAge": 15,
    "maxAge": null,
    "level": "all",
    "trainerIds": [
      "julia-kaczmarzyk"
    ],
    "specialTrainerIds": [],
    "schedule": [
      {
        "dayOfWeek": 3,
        "startTime": "18:30",
        "endTime": "20:00",
        "venue": "ul. Dworcowa 1"
      },
      {
        "dayOfWeek": 4,
        "startTime": "17:45",
        "endTime": "19:15",
        "venue": "SP 1 — Plac Wazów 1"
      }
    ],
    "pricing": {
      "currency": "PLN",
      "billingUnit": "month",
      "variants": [
        {
          "id": "standard",
          "amount": 140
        }
      ]
    },
    "frequency": {
      "sessionsPerWeek": 2,
      "durationMinutes": 90
    },
    "image": "/assets/images/offer/taniecWspolczesny12-18.png",
    "active": true,
    "enrollmentEnabled": true,
    "sortOrder": 340
  },
  "koszalin-balet-7-9": {
    id: "koszalin-balet-7-9",
    slug: "koszalin-balet-7-9",
    name: "Balet",
    shortInfo: "Podstawy baletu, rytmika i prawidłowa postawa.",
    description: "Na zajęciach baletu dzieci uczą się podstawowych pozycji, pracy rąk i nóg oraz poruszania się w rytmie muzyki. Ćwiczymy koordynację, równowagę i poprawną postawę ciała. Zajęcia rozwijają wrażliwość muzyczną, koncentrację i estetykę ruchu. Pracujemy w spokojnej atmosferze, dopasowanej do wieku uczestników. Zajęcia są przeznaczone dla dzieci.",
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
    description: "Na zajęciach KPOP dzieci uczą się choreografii inspirowanych popularnymi utworami i teledyskami. Pracujemy nad rytmiką, pamięcią ruchową i dynamiką tańca. Ćwiczymy elementy sceniczne, pewność siebie oraz pracę w grupie. Zajęcia są energiczne i prowadzone w sposób angażujący młodszych uczestników. Zajęcia są przeznaczone dla dzieci.",
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
    description: "Na zajęciach KPOP dzieci uczą się choreografii inspirowanych popularnymi utworami i teledyskami. Pracujemy nad rytmiką, pamięcią ruchową i dynamiką tańca. Ćwiczymy elementy sceniczne, pewność siebie oraz pracę w grupie. Zajęcia są energiczne i prowadzone w sposób angażujący młodszych uczestników. Zajęcia są przeznaczone dla dzieci.",
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
    description: "Na zajęciach KPOP uczestnicy uczą się choreografii inspirowanych popularnymi utworami i teledyskami. Pracujemy nad rytmiką, pamięcią ruchową, dynamiką tańca, elementami scenicznymi i pewnością siebie.",
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
    description: "To zajęcia ruchowo-taneczne dla najmłodszych, które wprowadzają dzieci w świat tańca przez zabawę. Ćwiczymy podstawowe kroki, rytm i prostą koordynację ruchową. Wykorzystujemy muzykę, gry ruchowe i krótkie układy taneczne. Zajęcia wspierają rozwój motoryczny, samodzielność i oswajanie pracy w grupie. Zajęcia są przeznaczone dla dzieci w wieku 4–6 lat.",
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
    description: "Na zajęciach dzieci poznają podstawy akrobatyki w bezpiecznej i zabawowej formie. Ćwiczymy skoczność, równowagę, gibkość oraz wzmacnianie całego ciała. Wprowadzamy proste elementy, takie jak przewroty i ćwiczenia na materacach. Duży nacisk kładziemy na prawidłowe nawyki ruchowe i bezpieczeństwo. Zajęcia są przeznaczone dla dzieci w wieku 4–6 lat.",
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
    description: "To zajęcia hip-hop dla dzieci, które chcą rozwijać swój ruch i poczucie rytmu. Uczymy podstawowych kroków, groove’u i prostych choreografii dopasowanych do wieku. Ćwiczymy koordynację, energię ruchu oraz pracę zespołową. Zajęcia pomagają budować pewność siebie i swobodę na parkiecie. Zajęcia są przeznaczone dla dzieci w wieku 7–9 lat.",
    locationId: "koszalin",
    minAge: 7,
    maxAge: 9,
    level: "all",
    trainerIds: ["magdalena-sokolowska-japona", "wiktoria-butwicka"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 1,
        startTime: "17:00",
        endTime: "18:00"
      },
      {
        dayOfWeek: 2,
        startTime: "17:00",
        endTime: "18:00"
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
    description: "Na zajęciach rozwijamy siłę, gibkość i koordynację poprzez ćwiczenia akrobatyczne dostosowane do wieku uczestników. Uczymy techniki podstawowych elementów i bezpiecznego wykonywania ćwiczeń. Pracujemy nad stabilizacją, mobilnością i świadomością ciała. Zajęcia mają formę aktywną i motywującą, ale z zachowaniem zasad bezpieczeństwa. Zajęcia są przeznaczone dla dzieci w wieku 7–9 lat.",
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
    description: "To grupa hip-hop dla dzieci starszych, w której rozwijamy technikę, rytmikę i pamięć choreograficzną. Uczestnicy uczą się bardziej złożonych kombinacji i pracy z muzyką. Ćwiczymy dynamikę, izolacje oraz elementy freestyle’u na poziomie podstawowym. Zajęcia wzmacniają pewność siebie i umiejętność współpracy w grupie. Zajęcia są przeznaczone dla dzieci w wieku 10–12 lat.",
    locationId: "koszalin",
    minAge: 10,
    maxAge: 12,
    level: "all",
    trainerIds: ["magdalena-sokolowska-japona", "maria-kober"],
    specialTrainerIds: [],
    schedule: [
      {
        dayOfWeek: 2,
        startTime: "18:00",
        endTime: "19:00"
      },
      {
        dayOfWeek: 4,
        startTime: "16:30",
        endTime: "17:30"
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
    description: "Na zajęciach uczestnicy rozwijają sprawność ogólną, siłę i elastyczność potrzebną w akrobatyce. Ćwiczymy technikę elementów akrobatycznych na materacach oraz kontrolę ciała w ruchu. Wprowadzamy stopniowo trudniejsze ćwiczenia, dostosowując poziom do możliwości grupy. Ważna jest dla nas poprawność wykonania i bezpieczeństwo. Zajęcia są przeznaczone dla dzieci i młodzieży w wieku 10–13 lat.",
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
    description: "Na zajęciach tańca współczesnego dzieci poznają podstawy pracy z ruchem, przestrzenią i muzyką. Ćwiczymy płynność, koordynację oraz ekspresję poprzez krótkie kombinacje i choreografie. Zajęcia rozwijają świadomość ciała, kreatywność i wrażliwość artystyczną. Wprowadzamy elementy techniki i improwizacji w przyjaznej atmosferze. Zajęcia są przeznaczone dla dzieci w wieku 6–9 lat.",
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
    description: "Na zajęciach tańca współczesnego dzieci poznają podstawy pracy z ruchem, przestrzenią i muzyką. Ćwiczymy płynność, koordynację oraz ekspresję poprzez krótkie kombinacje i choreografie. Zajęcia rozwijają świadomość ciała, kreatywność i wrażliwość artystyczną. Wprowadzamy elementy techniki i improwizacji w przyjaznej atmosferze. Zajęcia są przeznaczone dla dzieci w wieku 10–12 lat.",
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
    description: "To zajęcia dla młodzieży, które rozwijają technikę tańca współczesnego oraz świadomą pracę z ciałem. Ćwiczymy sekwencje ruchowe, dynamikę, jakość ruchu i ekspresję sceniczną. Pojawiają się także elementy improwizacji i interpretacji muzyki. Zajęcia pomagają budować własny styl i pewność w tańcu. Zajęcia są przeznaczone dla młodzieży w wieku 13–18 lat.",
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
    description: "To średniozaawansowana grupa dla osób, które mają doświadczenie w hip-hopie i chcą rozwijać się intensywniej. Pracujemy nad techniką, choreografią, dokładnością wykonania i jakością ruchu. Ćwiczymy także musicality, pracę formacji oraz przygotowanie do pokazów. Zajęcia są dynamiczne i wymagają regularności oraz zaangażowania. Grupa jest przeznaczona głównie dla dzieci i młodzieży z doświadczeniem.",
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
    description: "To zajęcia 1:1 dopasowane do potrzeb uczestnika i jego poziomu zaawansowania. Możemy pracować nad techniką taneczną, akrobatyką, przygotowaniem choreografii lub rozwojem konkretnych umiejętności. Plan zajęć ustalamy indywidualnie w zależności od celu i wieku uczestnika. Zajęcia pozwalają na szybszy progres dzięki pełnej uwadze instruktora. Lekcje są przeznaczone dla dzieci, młodzieży i dorosłych.",
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
    description: "To zajęcia taneczne dla dorosłych, skupione na płynności ruchu, świadomości ciała i kobiecej ekspresji. Pracujemy nad choreografiami, pewnością siebie oraz estetyką ruchu. Ćwiczymy koordynację, muzykalność i pracę z emocją w tańcu. Zajęcia odbywają się w komfortowej atmosferze, sprzyjającej rozwojowi i swobodzie. Zajęcia są przeznaczone dla osób 18+.",
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
    description: "Na zajęciach uczestnicy uczą się choreografii grupowych i pracy w zespole. Ćwiczymy synchronizację, ustawienia sceniczne oraz dokładność wykonania ruchu. Zajęcia rozwijają kondycję, koordynację i pamięć ruchową. To dobra opcja dla osób, które lubią regularny trening i wspólne przygotowanie układów. Zajęcia są przeznaczone dla dorosłych.",
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
    description: "3 godziny | regularnie, 1x w miesiącu. To stała współpraca z wybranym trenerem, który regularnie pojawia się w naszym grafiku. Dzięki temu możesz trenować z nim przez cały sezon i rozwijać się pod jego okiem.",
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
    description: "1,5 godziny | specjalne wydarzenia. Jednorazowe warsztaty z zaproszonymi choreografami, tancerzami i instruktorami. Różne nazwiska, różne style, różne doświadczenia.",
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
    description: "Pakiet obejmuje 3-godzinny MASTER TRAINER oraz 1,5-godzinny MASTERCLASS.",
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
    description: "Zajęcia ruchowo-taneczne dla dzieci w wieku 4–7 lat, prowadzone w formie zabawy. Dzieci uczą się podstaw rytmiki i koordynacji, prostych kroków oraz krótkich układów tanecznych dopasowanych do wieku. Pracujemy nad ogólną sprawnością, poczuciem rytmu, orientacją w przestrzeni i pewnością siebie. Zajęcia wspierają rozwój motoryczny i uczą pracy w grupie.",
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
    description: "Zajęcia hip-hop dla dzieci i młodzieży w wieku 8–13 lat. Uczestnicy poznają podstawy techniki, groove’u i pracy z muzyką oraz uczą się choreografii dopasowanych do poziomu grupy. Ćwiczymy koordynację, dynamikę, musicality i pamięć ruchową, a także elementy sceniczne i współpracę w zespole. Zajęcia pomagają budować swobodę ruchu i pewność siebie.",
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
    description: "To zajęcia ruchowo-taneczne dla najmłodszych, które wprowadzają dzieci w świat tańca przez zabawę. Ćwiczymy podstawowe kroki, rytm i prostą koordynację ruchową. Wykorzystujemy muzykę, gry ruchowe i krótkie układy taneczne. Zajęcia wspierają rozwój motoryczny, samodzielność i oswajanie pracy w grupie.",
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
    description: "Zajęcia dla dzieci, które chcą rozwijać taneczną pasję i poznawać coraz bardziej złożone elementy hip-hopu. Uczestnicy pracują nad techniką, dynamiką, pamięcią ruchową i interpretacją muzyki, ucząc się krótkich choreografii dopasowanych do wieku i poziomu grupy.",
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
    description: "Treningi skierowane do starszych dzieci i młodzieży, nastawione na rozwój stylu, świadomości ciała i scenicznej ekspresji. Uczestnicy doskonalą technikę, groove, musicality oraz pracę zespołową, a także uczą się bardziej rozbudowanych choreografii i świadomego poruszania się w rytmie muzyki.",
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
    description: "Na zajęciach tańca współczesnego dzieci poznają podstawy pracy z ruchem, przestrzenią i muzyką. Ćwiczymy płynność, koordynację oraz ekspresję poprzez krótkie kombinacje i choreografie. Zajęcia rozwijają świadomość ciała, kreatywność i wrażliwość artystyczną. Wprowadzamy elementy techniki i improwizacji w przyjaznej atmosferze.",
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
