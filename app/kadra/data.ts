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
      "HYPE CREW (grupa średniozaawansowana hip-hop)",
      "Taniec dla 4–6 latków",
      "Hip-hop ",
      "Zajęcia taneczne 4–7 lat",
      "Taniec współczesny - starsza grupa",
    ],

    description:
      "Talita to doświadczona choreografka, trenerka i artystka sceniczna, której fundamentem jest solidne wykształcenie muzyczno-taneczne. Ukończyła studia licencjackie na kierunku Taniec Nowoczesny na Wydziale Sztuk Scenicznych Akademii Muzycznej w Łodzi. Wcześniej kształciła się w Szkole Muzycznej im. Grażyny Bacewicz w Koszalinie na Wydziale Rytmiki. Brała udział w spektaklu „Projektowanie człowieka” (chor. Maciej Mołdoch / Sheva), stworzyła autorskie spektakle „Halucynacje” i „Gen Z”. Uczestniczyła w licznych warsztatach i programach artystycznych w Polsce i za granicą (m.in. Ateny, Mediolan, Paryż, Londyn). Od ośmiu lat prowadzi grupę HYPE CREW, która zdobywa miejsca na turniejach. Jej misją jest przygotowywanie młodych tancerzy do profesjonalnego wejścia na scenę.",
    images: ["/assets/images/team/talitaJarzecka.jpg"],
    localizations: ["Koszalin", "Polanów", "Biały Bór"],
    instagram: "https://www.instagram.com/talita_jarzecka/",
  },
  {
    id: "wiktoria-butwicka",
    name: "Wiktoria Butwicka",
    role: "Hip-hop",
    styles: [
      "Taniec dla 4–6 latków",
      "HIP-HOP 30+",
      "Feminine flow",
      "Young Generation (hip-hop)",
    ],

    description:
      "Wiktoria Butwicka to tancerka i trenerka. Taniec towarzyszy jej od 2009 roku. Szkoliła się m.in. u instruktorów takich jak Klesia, Nikita czy Pumba. Brała udział w licznych turniejach w Polsce i za granicą (m.in. 2. miejsce w Wielkiej Brytanii i Top 8 na Tancbudzie). Korzystała też z prywatnych lekcji i warsztatów w różnych stylach. Jako trenerka uczy od trzech lat – prowadzi grupy hip-hopowe oraz warsztaty dla młodzieży i dorosłych.",
    images: ["/assets/images/team/wiktoriaButwicka.jpg"],
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
      "Paulina Walikowska rozpoczęła swoją przygodę z tańcem w klasie baletowej, gdzie zdobyła solidne podstawy techniczne. Przez 8 lat rozwijała się artystycznie w zespole HYPE CREW, doskonaląc się jako tancerka sceniczna i instruktorka. Ma doświadczenie warsztatowe u uznanych trenerów, współtworzyła projekty filmowe (w tym produkcję nominowaną na International Cyprus Dance Film Festival) oraz występowała w spektaklach „Halucynacje” i „Gen Z”. Obecnie prowadzi w studiu zajęcia baletu.",
    images: ["/assets/images/team/paulinaWalikowska.jpg"],
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
    images: ["/assets/images/team/alinaLemanska.jpg"],
    localizations: ["Koszalin"],
    instagram:
      "https://www.instagram.com/alinka_lem?igsh=MXU3bHE5ZmkwMTMxaQ%3D%3D",
  },
  {
    id: "magdalena-sokolowska-japona",
    name: "Magdalena Sokołowska",
    role: "Hip-hop/House",
    styles: ["Young Generation (hip-hop)", "The Beat Hunters (hip-hop)"],

    description:
      "Magdalena Sokołowska jest związana z tańcem od 14. roku życia. Jest dyplomowaną instruktorką tańca o specjalizacji hip-hop. Style, w których najlepiej się czuje, to hip-hop i house. Dla siebie tańczy również waacking i high heels. Na co dzień lubi pracę z młodzieżą.",
    images: ["/assets/images/team/magdalenaSokolowska.jpg"],
    localizations: ["Koszalin"],
    instagram:
      "https://www.instagram.com/japona_sokolowska?igsh=Yzg3aWM1amVleHB0",
  },
  {
    id: "maria-kober",
    name: "Maria Kober",
    role: "The Beat Hunters/Choreo",
    styles: [
      "The Beat Hunters (hip-hop)",
      "HYPE CREW (grupa średniozaawansowana hip-hop)",
    ],

    description:
      "Maria Kober to instruktorka i tancerka z dużym doświadczeniem scenicznym i warsztatowym. Od 8 lat trenuje w ekipie HYPE CREW, z którą wielokrotnie stawała na podium zawodów w Polsce i za granicą. Ma na koncie warsztaty z wieloma instruktorami, treningi w londyńskich studiach Playground i Base oraz udział w projektach wideo (w tym produkcji nominowanej na International Cyprus Dance Film Festival). Prowadzi treningi dla grup THE BEAT HUNTERS i HYPE CREW oraz zajęcia CHOREO.",
    images: ["/assets/images/team/mariaKober.jpg"],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/marysiakober",
  },
  {
    id: "oliwia-piec",
    name: "Oliwia Piec",
    role: "",
    styles: [],

    description:
      "Oliwia Piec od lat rozwija się tanecznie w ekipie HYPE CREW, gdzie zdobywa doświadczenie jako tancerka sceniczna i instruktorka. Ma doświadczenie warsztatowe u wielu trenerów, współtworzyła projekty filmowe (w tym produkcję nominowaną na International Cyprus Dance Film Festival) oraz występowała w spektaklach „Halucynacje” i „Gen Z”.",
    images: ["/assets/images/team/oliwiaPiec.jpg"],
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
    images: ["/assets/images/team/aleksKultys.jpg"],
    localizations: ["Koszalin"],
    instagram:
      "https://www.instagram.com/aleks_pk77?igsh=MXU1enAwODQ1ODRzMQ%3D%3D",
  },
  {
    id: "milena-jasinska",
    name: "Milena Jasińska",
    role: "Lekcje indywidualne, taniec współczesny",
    styles: ["Lekcje indywidualne, taniec współczesny"],

    description:
      "Milena jest absolwentką szkoły muzycznej na wydziale rytmiki, gdzie przez 12 lat zdobywała solidne wykształcenie muzyczno-ruchowe. Doskonałe wyczucie rytmu, świadomość ciała oraz umiejętność łączenia ruchu z muzyką stanowią fundament jej pracy. Dodatkowo gra na fortepianie, co przekłada się na wyjątkową muzykalność i wrażliwość artystyczną. Przez lata rozwijała się w różnych stylach tanecznych, a obecnie specjalizuje się w tańcu współczesnym oraz pole dance. Regularnie uczestniczy w warsztatach tanecznych, nieustannie podnosząc swoje kwalifikacje i poszerzając warsztat instruktorski. Jej doświadczenie, wykształcenie muzyczno-taneczne oraz wszechstronne podejście do pracy z ruchem doskonale wpisują się w kierunek, w którym chcemy się rozwijać. Jesteśmy przekonani, że wniesie do naszych zajęć nową jakość, świeżą energię i profesjonalizm.",
    images: [
      "/assets/images/team/milenaJasinska.jpg",
      "/assets/images/team/milenaJasinska2.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/_m_jasinska?igsh=dDNxamd3N3kyYjN6",
  },
  {
    id: "kamila-maik",
    name: "Kamila Maik",
    role: "Taniec współczesny",
    styles: ["Taniec współczesny - starsza grupa"],

    description: `Instruktorka tańca współczesnego, choreografka i założycielka Takiego Studia Tańca
Założycielka i serce Takiego Studia.
Absolwentka Ogólnokształcącej Szkoły Baletowej w Gdańsku, gdzie zdobyła dyplom tancerki tańca współczesnego, baletu oraz tańca charakterystycznego. Od najmłodszych lat występowała na deskach Opery Bałtyckiej i Filharmonii Bałtyckiej, zdobywając sceniczne doświadczenie, które dziś przekazuje swoim podopiecznym.
Kamila od zawsze łączy taniec z ruchem w jego najpełniejszej formie – pasjonuje ją akrobatyka, movement, animal flow oraz taniec organiczny, które pomagają jej rozwijać świadomość ciała i poszukiwać nowych jakości w ruchu.
W latach 2014–2021 była choreografem i trenerem grup kadrowych w Klubie Sportowym Kokartka, a w 2018 roku otrzymała prestiżową nagrodę „Sopocka Muza dla Młodego Twórcy”. Obecnie prowadzi grupy turniejowe Takiego Studia, z którymi zdobywa liczne tytuły i nagrody, m.in. Mistrzostwo Polski WADF, II Vice Mistrzostwo Polski PZTAN oraz wysokie miejsca w ligach tanecznych IDO i WADF.
Kamila nie ogranicza się jedynie do sali treningowej – współtworzy produkcje wideo jako tancerka i choreografka oraz aktywnie działa na trójmiejskiej scenie tanecznej. Od 2015-2020 roku była związana z Sopockim Teatrem Tańca, gdzie współtworzyła spektakle taneczne.
Jako instruktorka jest niezwykle charyzmatyczna, wymagająca i inspirująca. Na swoich zajęciach łączy dyscyplinę z empatią – stawia na rozwój techniczny, świadomość ruchu i wzajemne wsparcie w grupie. Pod jej skrzydłami dorasta kolejne pokolenie tancerzy i instruktorów.
Taniec to dla niej wolność i ekspresja – jej motto brzmi:
„Wolność, węże i floorwork!” 🐍
W 2023 roku została wyróżniona tytułem Trener Roku przez Dziennik Bałtycki, co potwierdza jej ogromne zaangażowanie, pasję i nieustanne sukcesy w pracy z młodymi tancerzami.`,
    images: [
      "/assets/images/team/kamilaMaik.jpg",
      "/assets/images/team/kamilaMaik2.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/kamilamaik",
  },
  {
    id: "joanna-jedynak",
    name: "Joanna Jedynak",
    role: "Taniec współczesny",
    styles: ["Taniec współczesny - starsza grupa"],

    description: `Joanna jest instruktorką tańca, trenerką i choreografką w Studio Tańca Joy Dance Szczecin, specjalizującą się w stylach jazz, modern & contemporary, ballet oraz commercial. Jest finalistką, medalistką i stypendystką Global Dance Open oraz finalistką Dance World Cup. Wielokrotnie zdobywała medale i miejsca finałowe Mistrzostw Polski oraz Europy IDO, w tym tytuł Mistrzyni Polski w kategorii show duety oraz II Wicemistrzyni Polski w solo ballet repertoire. Nieustannie rozwija swoje umiejętności pod okiem czołowych choreografów z Polski i świata, a podczas zajęć stawia na technikę, świadomość ciała, muzykalność i rozwój artystyczny każdego tancerza.`,
    images: [
      "/assets/images/team/joannaJedynak.jpg",
      "/assets/images/team/joannaJedynak2.jpg",
      "/assets/images/team/joannaJedynak3.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/joanna.jedynak_",
  },
  {
    id: "nikola-suchocka",
    name: "Nikola Suchocka",
    role: "MASTER TRAINER",
    styles: ["MASTER TRAINER"],
    description: "Nikola Suchocka jest instruktorką programu MASTER TRAINER w Hoodmood.",
    images: ["/assets/images/team/nikolaSuchocka.jpg"],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/nikolasuchocka",
  },
];
