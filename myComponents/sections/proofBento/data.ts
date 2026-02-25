export const data = {
  badge: "dlaczego my",
  title: "Dlaczego warto wybrać Hoodmood?",
  description:
    "Jest sporo miejsc, gdzie można „po prostu chodzić na zajęcia”. My chcemy, żebyś miał/miała ekipę, progres i fun, do których chce się wracać.",
};
export type FeatureCard = {
  id: string;
  title: string;
  description: string;
  img: string | null;
  gridClass: string;
};

export const featureCards = [[
  {
    id: "klimat",
    title: "Klimat, nie korpo",
    description:
      "Zero spiny, dużo śmiechu i wsparcia. Na sali czujesz się jak w ekipie, a nie jak „uczeń numer 37 na liście”.",
    img: "/assets/images/bento/klimat.jpg",
    gridClass: "",
  },
  {
    id: "postepy",
    title: "Postępy, które widać",
    description:
      "Od pierwszych kroków po zaawansowane choreografie – uczymy tak, żebyś widział/widziała swój progres z tygodnia na tydzień. Pokazy, nagrywki, zawody – jest gdzie się sprawdzać.",
    img: null,
    gridClass: "",
  }],
  [ {
    id: "wystepy",
    title: "Występy i eventy",
    description:
      "Regularnie bierzemy udział w pokazach i zawodach tanecznych — od lokalnych eventów w Koszalinie po większe sceny w regionie. Wracamy z dobrymi miejscami, ale najważniejsze: nasi kursanci zbierają realne doświadczenie i pewność siebie na parkiecie.",
    img: null,
    gridClass: "",
  },
  {
    id: "instruktorzy",
    title: "Doświadczeni instruktorzy",
    description:
      "U nas uczą ludzie, którzy naprawdę żyją tańcem – mają doświadczenie sceniczne, ale przede wszystkim ogarniają pracę z dzieciakami, młodzieżą i dorosłymi.",
    img: "/assets/images/bento/instruktorzy.jpg",
    gridClass: "",
  }],
  [{
    id: "obozy",
    title: "Obozy i wyjazdy z ekipą",
    description:
      "Organizujemy półkolonie, kolonie i wyjazdy taneczne — zależnie od pory roku i kalendarza eventów. Treningi, integracja i masa dobrej zabawy: wracasz z progresem i wspomnieniami, nie tylko z fotkami.",
    img: "/assets/images/bento/obozy.jpg",
    gridClass: "",
  },
  {
    id: "blisko",
    title: "Blisko i na Twoich zasadach",
    description:
      "Kilka lokalizacji, różne poziomy i godziny zajęć. Wybierasz miejscówkę i grupę tak, żeby taniec dało się ogarnąć obok szkoły, pracy i reszty życia.",
    img: null,
    gridClass: "",
  }]
];
