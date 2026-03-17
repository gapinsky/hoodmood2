export const data = {
  badge: "kadra",
  title: "Kadra trenerska Hoodmood",
  description:
    "Za naszymi zajęciami stoją ludzie, którzy naprawdę żyją tańcem – od lat na scenie, na sali treningowej i w pracy z dziećmi, młodzieżą i dorosłymi. Sprawdź, kto tworzy ekipę Hoodmood w Koszalinie, Polanowie i Białym Borze.",
};

export type Trainer = {
  id: string;
  name: string;
  role: string;
  styles: string[];
  description: string;
  images: string[];
  localizations: string[];
  instagram?: string;
};

export const instructors: Trainer[] = [
  {
    id: "talita-jarzecka",
    name: "Talita Jarzęcka",
    role: "CEO",
    styles:  ["Heels", "Commercial", "High Heels Basic", "Stretching"],

    description:
      "Talita to doświadczona choreografka, trenerka i artystka sceniczna, której fundamentem jest solidne wykształcenie muzyczno-taneczne. Ukończyła studia licencjackie na kierunku Taniec Nowoczesny na Wydziale Sztuk Scenicznych Akademii Muzycznej w Łodzi. Wcześniej kształciła się w Szkole Muzycznej im. Grażyny Bacewicz w Koszalinie na Wydziale Rytmiki. Brała udział w spektaklu „Projektowanie człowieka” (chor. Maciej Mołdoch / Sheva), stworzyła autorskie spektakle „Halucynacje” i „Gen Z”. Uczestniczyła w licznych warsztatach i programach artystycznych w Polsce i za granicą (m.in. Ateny, Mediolan, Paryż, Londyn). Od ośmiu lat prowadzi grupę Quality Crew, która zdobywa miejsca na turniejach. Jej misją jest przygotowywanie młodych tancerzy do profesjonalnego wejścia na scenę.",
    images: [
      "/assets/images/team/talitaJarzecka.jpg",
      "/assets/images/team/talitaJarzecka.jpg",
      "/assets/images/team/talitaJarzecka.jpg",
    ],
    localizations: ["Koszalin", "Polanów", "Biały Bór"],
  },
  {
    id: "wiktoria-butwicka",
    name: "Wiktoria Butwicka",
    role: "Breakdance",
    styles: ["Breakdance", "Hip-hop", "Freestyle", "Ladies dance"],

    description:
      "Wiktoria Butwicka to tancerka i trenerka specjalizująca się w breakdance. Taniec towarzyszy jej od 2009 roku. Szkoliła się m.in. u instruktorów takich jak Klesia, Nikita czy Pumba. Brała udział w licznych turniejach w Polsce i za granicą (m.in. 2. miejsce w Wielkiej Brytanii, Top 8 breakdance na Tancbudzie). Korzystała też z prywatnych lekcji i warsztatów w różnych stylach. Jako trenerka uczy od trzech lat – prowadzi zajęcia breakdance dla dzieci 3–6 lat, grupy hip-hopowe oraz warsztaty dla młodzieży i dorosłych.",
    images: [
      "/assets/images/team/wiktoriaButwicka.jpg",
      "/assets/images/team/wiktoriaButwicka.jpg",
      "/assets/images/team/wiktoriaButwicka.jpg",
    ],
    localizations: ["Koszalin"],
  },
  {
    id: "paulina-walikowska",
    name: "Paulina Walikowska",
    role: "Balet",
    styles: ["Heels", "Commercial", "High Heels Basic", "Stretching"],

    description:
      "Paulina Walikowska rozpoczęła swoją przygodę z tańcem w klasie baletowej, gdzie zdobyła solidne podstawy techniczne. Przez 8 lat rozwijała się artystycznie w zespole Quality Crew, doskonaląc się jako tancerka sceniczna i instruktorka. Ma doświadczenie warsztatowe u uznanych trenerów, współtworzyła projekty filmowe (w tym produkcję nominowaną na International Cyprus Dance Film Festival) oraz występowała w spektaklach „Halucynacje” i „Gen Z”. Obecnie prowadzi w studiu zajęcia baletu.",
    images: [
      "/assets/images/team/paulinaWalikowska.jpg",
      "/assets/images/team/paulinaWalikowska.jpg",
      "/assets/images/team/paulinaWalikowska.jpg",
    ],
    localizations: ["Koszalin"],
  },
  {
    id: "alina-lemanska",
    name: "Alina Lemańska",
    role: "KPOP",
    styles: ["Heels", "Commercial", "High Heels Basic", "Stretching"],

    description:
      "Na stronie sekcja Aliny Lemańskiej opisuje start zajęć KPOP — dynamiczne choreografie, energetyczną muzykę i przyjazną atmosferę. Zajęcia są skierowane do osób w różnym wieku i na różnym poziomie zaawansowania, z naciskiem na naukę kroków i choreografii do hitów KPOP oraz dobrą zabawę.",
    images: [
      "/assets/images/team/alinaLemanska.jpg",
      "/assets/images/team/alinaLemanska.jpg",
      "/assets/images/team/alinaLemanska.jpg",
    ],
    localizations: ["Koszalin"],
  },
  {
    id: "magdalena-sokolowska-japona",
    name: "Magdalena Sokołowska",
    role: "Hip-hop/House",
    styles: ["Hip-hop", "House", "Waacking", "High Heels"],

    description:
      "Pseudonim artystyczny Japona, czyli Magdalena Sokołowska. Z tańcem związana od 14. roku życia. Jest dyplomowanym instruktorem tańca o specjalizacji Hip-hop. Style, w których najlepiej się czuje, to Hip-hop i House. Dla siebie tańczy również waacking i high heels. Na co dzień lubi pracę z młodzieżą.",
    images: [
      "/assets/images/team/magdalenaSokolowska.jpg",
      "/assets/images/team/magdalenaSokolowska.jpg",
      "/assets/images/team/magdalenaSokolowska.jpg",
    ],
    localizations: ["Koszalin"],
  },
  {
    id: "maria-kober",
    name: "Maria Kober",
    role: "The Beat Hunters/Choreo",
    styles: ["The Beat Hunters", "Choreo"],

    description:
      "Maria Kober to instruktorka i tancerka z dużym doświadczeniem scenicznym i warsztatowym. Od 8 lat trenuje w ekipie Quality Crew, z którą wielokrotnie stawała na podium zawodów w Polsce i za granicą. Ma na koncie warsztaty z wieloma instruktorami, treningi w londyńskich studiach Playground i Base oraz udział w projektach wideo (w tym produkcji nominowanej na International Cyprus Dance Film Festival). Prowadzi treningi dla grupy THE BEAT HUNTERS oraz zajęcia CHOREO.",
    images: [
      "/assets/images/team/mariaKober.jpg",
      "/assets/images/team/mariaKober.jpg",
      "/assets/images/team/mariaKober.jpg",
    ],
    localizations: ["Koszalin"],
  },
  {
    id: "oliwia-piec",
    name: "Oliwia Piec",
    role: "Formacje dla dorosłych",
    styles: ["Formacje dla dorosłych", "Zajęcia dla dzieci 4–6"],

    description:
      "Oliwia Piec od lat rozwija się tanecznie w ekipie Quality Crew, gdzie zdobywa doświadczenie jako tancerka sceniczna i instruktorka. Ma doświadczenie warsztatowe u wielu trenerów, współtworzyła projekty filmowe (w tym produkcję nominowaną na International Cyprus Dance Film Festival) oraz występowała w spektaklach „Halucynacje” i „Gen Z”. W studiu prowadzi formację dla dorosłych oraz zajęcia dla dzieci w wieku 4–6 lat.",
    images: [
      "/assets/images/team/oliwiaPiec.jpg",
      "/assets/images/team/oliwiaPiec.jpg",
      "/assets/images/team/oliwiaPiec.jpg",
    ],
    localizations: ["Koszalin"],
  },
];
