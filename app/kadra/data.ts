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
    styles: [
      "Quality Crew (grupa zaawansowana hip-hop)",
      "Taniec dla 4–6 latków",
      "Hip-hop ",
      "Zajęcia taneczne 4–7 lat",
    ],

    description:
      "Talita to doświadczona choreografka, trenerka i artystka sceniczna, której fundamentem jest solidne wykształcenie muzyczno-taneczne. Ukończyła studia licencjackie na kierunku Taniec Nowoczesny na Wydziale Sztuk Scenicznych Akademii Muzycznej w Łodzi. Wcześniej kształciła się w Szkole Muzycznej im. Grażyny Bacewicz w Koszalinie na Wydziale Rytmiki. Brała udział w spektaklu „Projektowanie człowieka” (chor. Maciej Mołdoch / Sheva), stworzyła autorskie spektakle „Halucynacje” i „Gen Z”. Uczestniczyła w licznych warsztatach i programach artystycznych w Polsce i za granicą (m.in. Ateny, Mediolan, Paryż, Londyn). Od ośmiu lat prowadzi grupę Quality Crew, która zdobywa miejsca na turniejach. Jej misją jest przygotowywanie młodych tancerzy do profesjonalnego wejścia na scenę.",
    images: [
      "/assets/images/team/talitaJarzecka.jpg",
      "/assets/images/team/talitaJarzecka.jpg",
      "/assets/images/team/talitaJarzecka.jpg",
    ],
    localizations: ["Koszalin", "Polanów", "Biały Bór"],
    instagram: "https://www.instagram.com/talita_jarzecka/",
  },
  {
    id: "wiktoria-butwicka",
    name: "Wiktoria Butwicka",
    role: "Breakdance",
    styles: [
      "Taniec dla 4–6 latków",
      "Formacja dla dorosłych",
      "Feminine flow",
    ],

    description:
      "Wiktoria Butwicka to tancerka i trenerka specjalizująca się w breakdance. Taniec towarzyszy jej od 2009 roku. Szkoliła się m.in. u instruktorów takich jak Klesia, Nikita czy Pumba. Brała udział w licznych turniejach w Polsce i za granicą (m.in. 2. miejsce w Wielkiej Brytanii, Top 8 breakdance na Tancbudzie). Korzystała też z prywatnych lekcji i warsztatów w różnych stylach. Jako trenerka uczy od trzech lat – prowadzi zajęcia breakdance dla dzieci 3–6 lat, grupy hip-hopowe oraz warsztaty dla młodzieży i dorosłych.",
    images: [
      "/assets/images/team/wiktoriaButwicka.jpg",
      "/assets/images/team/wiktoriaButwicka.jpg",
      "/assets/images/team/wiktoriaButwicka.jpg",
    ],
    localizations: ["Koszalin"],
    instagram:
      "https://www.instagram.com/_._._._wika_._._._?igsh=NWc5Z2w5dW5uNHlu",
  },
  {
    id: "paulina-walikowska",
    name: "Paulina Walikowska",
    role: "Balet",
    styles: ["Balet"],

    description:
      "Paulina Walikowska rozpoczęła swoją przygodę z tańcem w klasie baletowej, gdzie zdobyła solidne podstawy techniczne. Przez 8 lat rozwijała się artystycznie w zespole Quality Crew, doskonaląc się jako tancerka sceniczna i instruktorka. Ma doświadczenie warsztatowe u uznanych trenerów, współtworzyła projekty filmowe (w tym produkcję nominowaną na International Cyprus Dance Film Festival) oraz występowała w spektaklach „Halucynacje” i „Gen Z”. Obecnie prowadzi w studiu zajęcia baletu.",
    images: [
      "/assets/images/team/paulinaWalikowska.jpg",
      "/assets/images/team/paulinaWalikowska.jpg",
      "/assets/images/team/paulinaWalikowska.jpg",
    ],
    localizations: ["Koszalin"],
    instagram:
      "https://www.instagram.com/walikowska?igsh=MWJsazhrcHUxN2k5dA%3D%3D",
  },
  {
    id: "alina-lemanska",
    name: "Alina Lemańska",
    role: "KPOP",
    styles: ["KPOP"],

    description:
      "Na stronie sekcja Aliny Lemańskiej opisuje start zajęć KPOP — dynamiczne choreografie, energetyczną muzykę i przyjazną atmosferę. Zajęcia są skierowane do osób w różnym wieku i na różnym poziomie zaawansowania, z naciskiem na naukę kroków i choreografii do hitów KPOP oraz dobrą zabawę.",
    images: [
      "/assets/images/team/alinaLemanska.jpg",
      "/assets/images/team/alinaLemanska.jpg",
      "/assets/images/team/alinaLemanska.jpg",
    ],
    localizations: ["Koszalin"],
    instagram:
      "https://www.instagram.com/alinka_lem?igsh=MXU3bHE5ZmkwMTMxaQ%3D%3D",
  },
  {
    id: "magdalena-sokolowska-japona",
    name: "Magdalena Sokołowska",
    role: "Hip-hop/House",
    styles: [
      "Young Generation (hip-hop)",
      "The Beat Hunters (hip-hop)",
      "Quality Crew (grupa zaawansowana hip-hop)",
    ],

    description:
      "Pseudonim artystyczny Japona, czyli Magdalena Sokołowska. Z tańcem związana od 14. roku życia. Jest dyplomowanym instruktorem tańca o specjalizacji Hip-hop. Style, w których najlepiej się czuje, to Hip-hop i House. Dla siebie tańczy również waacking i high heels. Na co dzień lubi pracę z młodzieżą.",
    images: [
      "/assets/images/team/magdalenaSokolowska.jpg",
      "/assets/images/team/magdalenaSokolowska.jpg",
      "/assets/images/team/magdalenaSokolowska.jpg",
    ],
    localizations: ["Koszalin"],
    instagram:
      "https://www.instagram.com/japona_sokolowska?igsh=Yzg3aWM1amVleHB0",
  },
  {
    id: "maria-kober",
    name: "Maria Kober",
    role: "The Beat Hunters/Choreo",
    styles: ["The Beat Hunters (hip-hop)"],

    description:
      "Maria Kober to instruktorka i tancerka z dużym doświadczeniem scenicznym i warsztatowym. Od 8 lat trenuje w ekipie Quality Crew, z którą wielokrotnie stawała na podium zawodów w Polsce i za granicą. Ma na koncie warsztaty z wieloma instruktorami, treningi w londyńskich studiach Playground i Base oraz udział w projektach wideo (w tym produkcji nominowanej na International Cyprus Dance Film Festival). Prowadzi treningi dla grupy THE BEAT HUNTERS oraz zajęcia CHOREO.",
    images: [
      "/assets/images/team/mariaKober.jpg",
      "/assets/images/team/mariaKober.jpg",
      "/assets/images/team/mariaKober.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/marysiakober",
  },
  {
    id: "oliwia-piec",
    name: "Oliwia Piec",
    role: "Formacja dla dorosłych",
    styles: ["Young Generation (hip-hop)", "Formacja dla dorosłych"],

    description:
      "Oliwia Piec od lat rozwija się tanecznie w ekipie Quality Crew, gdzie zdobywa doświadczenie jako tancerka sceniczna i instruktorka. Ma doświadczenie warsztatowe u wielu trenerów, współtworzyła projekty filmowe (w tym produkcję nominowaną na International Cyprus Dance Film Festival) oraz występowała w spektaklach „Halucynacje” i „Gen Z”. W studiu prowadzi formację dla dorosłych oraz zajęcia dla dzieci w wieku 4–6 lat.",
    images: [
      "/assets/images/team/oliwiaPiec.jpg",
      "/assets/images/team/oliwiaPiec.jpg",
      "/assets/images/team/oliwiaPiec.jpg",
    ],
    localizations: ["Koszalin"],
    instagram:
      "https://www.instagram.com/liwkaaa._?igsh=MWY2MndtN3psMXd5ZQ%3D%3D",
  },
  {
    id: "aleks-kultys",
    name: "Aleks Kultys",
    role: "Akrobatyka",
    styles: ["Akrobatyka 4–6 latki", "Akrobatyka"],

    description:
      "Poznajcie naszego trenera,akrobatyka to jego pasja i ogromna część naszych treningów. Aleks ukończył dwuczęściowe szkolenie z zakresu metodyki nauczania oraz techniki wykonywania elementów w skokach na ścieżce. Szczególną uwagę poświęca również bezpieczeństwu, posiada wiedzę i umiejętności z zakresu prawidłowego asekurowania oraz podtrzymywania dzieci podczas nauki nowych elementów, dzięki czemu treningi są nie tylko efektywne, ale przede wszystkim bezpieczne i dostosowane do poziomu każdego uczestnika. Swoje doświadczenie zdobywał, pracując z dziećmi na półkoloniach, w playparku oraz prowadząc regularne zajęcia z akrobatyki dla dzieci i młodzieży.",
    images: [
      "/assets/images/team/aleksKultys.jpeg",
      "/assets/images/team/aleksKultys.jpeg",
      "/assets/images/team/aleksKultys.jpeg",
    ],
    localizations: ["Koszalin"],
    instagram:
      "https://www.instagram.com/aleks_pk77?igsh=MXU1enAwODQ1ODRzMQ%3D%3D",
  },
  {
    id: "milena-jasinska",
    name: "Milena Jasińska",
    role: "Taniec współczesny",
    styles: ["Taniec współczesny"],

    description:
      "Milena jest absolwentką szkoły muzycznej na wydziale rytmiki, gdzie przez 12 lat zdobywała solidne wykształcenie muzyczno-ruchowe. Doskonałe wyczucie rytmu, świadomość ciała oraz umiejętność łączenia ruchu z muzyką stanowią fundament jej pracy. Dodatkowo gra na fortepianie, co przekłada się na wyjątkową muzykalność i wrażliwość artystyczną. Przez lata rozwijała się w różnych stylach tanecznych, a obecnie specjalizuje się w tańcu współczesnym oraz pole dance. Regularnie uczestniczy w warsztatach tanecznych, nieustannie podnosząc swoje kwalifikacje i poszerzając warsztat instruktorski. Jej doświadczenie, wykształcenie muzyczno-taneczne oraz wszechstronne podejście do pracy z ruchem doskonale wpisują się w kierunek, w którym chcemy się rozwijać. Jesteśmy przekonani, że wniesie do naszych zajęć nową jakość, świeżą energię i profesjonalizm.",
    images: [
      "/assets/images/team/milenaJasinska.jpg",
      "/assets/images/team/milenaJasinska2.jpg",
      "/assets/images/team/milenaJasinska.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/_m_jasinska?igsh=dDNxamd3N3kyYjN6",
  },
];
