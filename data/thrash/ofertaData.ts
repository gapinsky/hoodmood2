import type { CitySlug } from "../locations";

export const offerHeaderData = {
  "bialy-bor": {
    title: "Oferta - Biały Bór",
    description:
      "Wybierz zajęcia dla siebie lub swojego dziecka.",
  },
  koszalin: {
    title: "Oferta - Koszalin",
    description:
      "Wybierz zajęcia dla siebie lub swojego dziecka.",
  },
  polanow: {
    title: "Oferta - Polanów",
    description:
      "Wybierz zajęcia dla siebie lub swojego dziecka.",
  },
} as const;

export type ClassesOfferType = {
  name: string;
  description: string;
  minAge: string;
  maxAge: string;
  instructors: {
    name: string;
    slug: string;
    suffix?: string;
    separatorAfter?: string;
  }[];
  img: string;
  experience: string;
  scheduleSrc: string;
  pricingSrc: string;
};

export const classesOffer: Record<CitySlug, ClassesOfferType[]> = {
  szczecinek: [],
  koszalin: [
    {
      name: "Balet | 7-9 lat",
      description: "Podstawy baletu, rytmika i prawidłowa postawa.",
      minAge: "7",
      maxAge: "9",
      instructors: [
        { name: "Paulina Walikowska", slug: "/kadra/paulina-walikowska" },
      ],
      img: "/assets/images/offer/balet.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "KPOP Kids | 10-12 lat",
      description: "Choreografie z teledysków K-POP, rytm i sceniczna energia.",
      minAge: "10",
      maxAge: "12",
      instructors: [{ name: "Alina Lemańska", slug: "/kadra/alina-lemanska" }],
      img: "/assets/images/offer/kpop.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "KPOP Teens | 13+",
      description: "Choreografie z teledysków K-POP, rytm i sceniczna energia.",
      minAge: "13",
      maxAge: "",
      instructors: [{ name: "Alina Lemańska", slug: "/kadra/alina-lemanska" }],
      img: "/assets/images/offer/kpop.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "KPOP dla dorosłych | 30+",
      description: "Choreografie z teledysków K-POP, rytm i sceniczna energia.",
      minAge: "30",
      maxAge: "",
      instructors: [{ name: "Alina Lemańska", slug: "/kadra/alina-lemanska" }],
      img: "/assets/images/offer/kpop.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "Taniec dla 4-6 latków",
      description: "Pierwsze kroki taneczne, rytm i ruch przez zabawę.",
      minAge: "4",
      maxAge: "6",
      instructors: [
        { name: "Wiktoria Butwicka", slug: "/kadra/wiktoria-butwicka" },
      ],
      img: "/assets/images/offer/taniec4-6.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "Akrobatyka | 4-6 lat",
      description: "Podstawy akrobatyki, równowaga i gibkość przez zabawę.",
      minAge: "4",
      maxAge: "6",
      instructors: [{ name: "Aleks Kultys", slug: "/kadra/aleks-kultys" }],
      img: "/assets/images/offer/akrobatyka4-6.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "Young Generation | 7-9 lat",
      description: "Podstawy hip-hopu, groove i pierwsze choreografie.",
      minAge: "7",
      maxAge: "9",
      instructors: [
        { name: "Wiktoria Butwicka", slug: "/kadra/wiktoria-butwicka" },
        {
          name: "Magdalena Sokołowska",
          slug: "/kadra/magdalena-sokolowska-japona",
        },
      ],
      img: "/assets/images/offer/youngGeneration7-9.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "Akrobatyka | 7-9 lat",
      description: "Technika akrobatyczna, siła, gibkość i kontrola ciała.",
      minAge: "7",
      maxAge: "9",
      instructors: [{ name: "Aleks Kultys", slug: "/kadra/aleks-kultys" }],
      img: "/assets/images/offer/akrobatyka7-9.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "The Beat Hunters | 10-12 lat",
      description: "Hip-hop, choreografie i podstawy freestyle’u.",
      minAge: "10",
      maxAge: "12",
      instructors: [
        { name: "Maria Kober", slug: "/kadra/maria-kober" },
        {
          name: "Magdalena Sokołowska",
          slug: "/kadra/magdalena-sokolowska-japona",
        },
      ],
      img: "/assets/images/offer/theBeatHunters10-12.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "Akrobatyka | 10-13 lat",
      description: "Technika akrobatyczna, siła, gibkość i kontrola ciała.",
      minAge: "10",
      maxAge: "13",
      instructors: [{ name: "Aleks Kultys", slug: "/kadra/aleks-kultys" }],
      img: "/assets/images/offer/akrobatyka10-14.jpg",
      experience: "Średniozaawansowany",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "Taniec współczesny | 6-9 lat",
      description: "Technika tańca współczesnego, improwizacja i ekspresja.",
      minAge: "6",
      maxAge: "9",
      instructors: [
        { name: "Klara Walach", slug: "/kadra/klara-walach" },
        { name: "Nel Głowacka", slug: "/kadra/nel-glowacka" },
      ],
      img: "/assets/images/offer/taniecWspolczesny8-12.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "Taniec współczesny | 10-12 lat",
      description: "Technika tańca współczesnego, improwizacja i ekspresja.",
      minAge: "10",
      maxAge: "12",
      instructors: [
        { name: "Klara Walach", slug: "/kadra/klara-walach" },
        {
          name: "Marianna Stanisławska",
          slug: "/kadra/marianna-stanislawska",
        },
      ],
      img: "/assets/images/offer/taniecWspolczesny8-12.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "Taniec współczesny | 13-18 lat",
      description: "Technika tańca współczesnego, improwizacja i ekspresja.",
      minAge: "13",
      maxAge: "18",
      instructors: [
        { name: "Talita Jarzęcka", slug: "/kadra/talita-jarzecka" },
      ],
      img: "/assets/images/offer/taniecWspolczesny12-18.png",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "HYPE CREW",
      description: "Hip-hop dla średniozaawansowanych: choreografie i przygotowanie do pokazów.",
      minAge: "12",
      maxAge: "99",
      instructors: [
        { name: "Talita Jarzęcka", slug: "/kadra/talita-jarzecka" },
        {
          name: "Maria Kober",
          slug: "/kadra/maria-kober",
        },
        {
          name: "Paulina Kapuścińska",
          slug: "/kadra/paulina-kapuscinska",
        },
      ],
      img: "/assets/images/offer/hype.jpg",
      experience: "grupa średniozaawansowana",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "Lekcje Indywidualne | Bez ograniczeń wiekowych",
      description: "Trening 1:1 dopasowany do Twojego poziomu i celu.",
      minAge: "5",
      maxAge: "99",
      instructors: [{ name: "Dobierany na podstawie zajęć", slug: "/kadra" }],
      img: "/assets/images/offer/indywidualne.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "Feminine Flow | 18+ lat",
      description: "Płynność ruchu, kobieca ekspresja i pewność siebie.",
      minAge: "18",
      maxAge: "99",
      instructors: [
        { name: "Wiktoria Butwicka", slug: "/kadra/wiktoria-butwicka" },
      ],
      img: "/assets/images/offer/feminine.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "Formacja dla dorosłych (Hip-Hop) | 30+",
      description: "Hip-hop w grupie: choreografie, synchronizacja i kondycja.",
      minAge: "30",
      maxAge: "",
      instructors: [
        { name: "Wiktoria Butwicka", slug: "/kadra/wiktoria-butwicka" },
      ],
      img: "/assets/images/offer/formacjaDladoroslych.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "MASTER TRAINERS",
      description: "3-godzinny trening z wybranym trenerem raz w miesiącu.",
      minAge: "7",
      maxAge: "99",
      instructors: [
        {
          name: "Nikola Suchocka",
          slug: "/kadra/nikola-suchocka",
          suffix: " (hip-hop)",
          separatorAfter: ", ",
        },
        {
          name: "Kamila Maik",
          slug: "/kadra/kamila-maik",
          separatorAfter: " / ",
        },
        {
          name: "Joanna Jedynak",
          slug: "/kadra/joanna-jedynak",
          suffix: " (taniec współczesny)",
        },
      ],
      img: "/assets/images/offer/masterTrainer.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "MASTERCLASS",
      description: "1,5-godzinne warsztaty z zaproszonym gościem.",
      minAge: "7",
      maxAge: "99",
      instructors: [{ name: "Gość specjalny", slug: "/kadra" }],
      img: "/assets/images/offer/masterClass.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
    {
      name: "HOODMOOD MASTER PASS",
      description: "Pakiet: 3 godziny MASTER TRAINER + 1,5 godziny MASTERCLASS.",
      minAge: "7",
      maxAge: "99",
      instructors: [{ name: "Gość specjalny", slug: "/kadra" }],
      img: "/assets/images/offer/masterPass.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/koszalin",
      pricingSrc: "/cennik/koszalin/zajecia",
    },
  ],
  "bialy-bor": [
    {
      name: "Zajęcia taneczne | 4-7 lat",
      description: "Rytm, proste choreografie i nauka tańca przez zabawę.",
      minAge: "4",
      maxAge: "7",
      instructors: [
        { name: "Talita Jarzęcka", slug: "/kadra/talita-jarzecka" },
      ],
      img: "/assets/images/offer/zajeciaTaneczneBialyBor.png",
      experience: "Początkujący",
      scheduleSrc: "/grafik/bialy-bor",
      pricingSrc: "/cennik/bialy-bor",
    },
    {
      name: "Hip-hop | 8-13 lat",
      description: "Technika hip-hopu, groove i choreografie grupowe.",
      minAge: "8",
      maxAge: "13",
      instructors: [
        { name: "Talita Jarzęcka", slug: "/kadra/talita-jarzecka" },
      ],
      img: "/assets/images/offer/hipHopBialyBor.png",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/bialy-bor",
      pricingSrc: "/cennik/bialy-bor",
    },
  ],
  polanow: [
    {
      name: "Taniec dla 4-6 latków",
      description: "Pierwsze kroki taneczne, rytm i ruch przez zabawę.",
      minAge: "4",
      maxAge: "6",
      instructors: [
        { name: "Talita Jarzęcka", slug: "/kadra/talita-jarzecka" },
      ],
      img: "/assets/images/offer/taniec4-6.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/polanow",
      pricingSrc: "/cennik/polanow",
    },
    {
      name: "Hip-hop | 7-9 lat",
      description: "Podstawy hip-hopu, dynamika i krótkie choreografie.",
      minAge: "7",
      maxAge: "9",
      instructors: [
        { name: "Talita Jarzęcka", slug: "/kadra/talita-jarzecka" },
      ],
      img: "/assets/images/offer/hipHop7-9Polanow.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/polanow",
      pricingSrc: "/cennik/polanow",
    },
    {
      name: "Hip-hop | 10-14 lat",
      description: "Technika hip-hopu, groove i choreografie grupowe.",
      minAge: "10",
      maxAge: "14",
      instructors: [
        { name: "Talita Jarzęcka", slug: "/kadra/talita-jarzecka" },
      ],
      img: "/assets/images/offer/hipHop10-15Polanow.jpg",
      experience: "Średniozaawansowany",
      scheduleSrc: "/grafik/polanow",
      pricingSrc: "/cennik/polanow",
    },
    {
      name: "Taniec współczesny | 7-11 lat",
      description: "Technika tańca współczesnego, improwizacja i ekspresja.",
      minAge: "7",
      maxAge: "11",
      instructors: [
        {
          name: "Marianna Stanisławska",
          slug: "/kadra/marianna-stanislawska",
        },
      ],
      img: "/assets/images/offer/taniecWspolczesny8-12.jpg",
      experience: "Dla każdego",
      scheduleSrc: "/grafik/polanow",
      pricingSrc: "/cennik/polanow",
    },
  ],
};
