import { CitySlug } from "./citySlug";

export const offerHeaderData = {
  "bialy-bor": {
    title: "Oferta - Biały Bór",
    description:
      "Wybierz zajęcia dopasowane do wieku, poziomu i charakteru Twojego dziecka – albo Twojego własnego. W Hoodmood znajdziesz grupy dla maluchów, dzieci, młodzieży i dorosłych, zajęcia hip-hop, taniec współczesny, akrobatykę, K-POP oraz grupy turniejowe. Sprawdź, co najlepiej pasuje do Ciebie!",
  },
  koszalin: {
    title: "Oferta - Koszalin",
    description:
      "Wybierz zajęcia dopasowane do wieku, poziomu i charakteru Twojego dziecka – albo Twojego własnego. W Hoodmood znajdziesz grupy dla maluchów, dzieci, młodzieży i dorosłych, zajęcia hip-hop, taniec współczesny, akrobatykę, K-POP oraz grupy turniejowe. Sprawdź, co najlepiej pasuje do Ciebie!",
  },
  polanow: {
    title: "Oferta - Polanów",
    description:
      "Wybierz zajęcia dopasowane do wieku, poziomu i charakteru Twojego dziecka – albo Twojego własnego. W Hoodmood znajdziesz grupy dla maluchów, dzieci, młodzieży i dorosłych, zajęcia hip-hop, taniec współczesny, akrobatykę, K-POP oraz grupy turniejowe. Sprawdź, co najlepiej pasuje do Ciebie!",
  },
} as const;

export type ClassesOfferType = {
  name: string;
  description: string;
  minAge: string;
  maxAge: string;
  instructor: string;
  instructorSlug: string;
  img: string;
  instructorAvatar: string;
  experience: string;
  scheduleSrc: string;
};

export const classesOffer: Record<CitySlug, ClassesOfferType[]> = {
  koszalin: [
    {
      name: "Balet",
      description:
        "Na zajęciach baletu dzieci uczą się podstawowych pozycji, pracy rąk i nóg oraz poruszania się w rytmie muzyki. Ćwiczymy koordynację, równowagę i poprawną postawę ciała. Zajęcia rozwijają wrażliwość muzyczną, koncentrację i estetykę ruchu. Pracujemy w spokojnej atmosferze, dopasowanej do wieku uczestników. Zajęcia są przeznaczone dla dzieci.",
      minAge: "7",
      maxAge: "9",
      instructor: "Talita Jarzęcka",
      instructorSlug: "/kadra/talita-jarzecka",
      img: "/assets/images/offer/balet.jpg",
      instructorAvatar: "/assets/images/team/talitaJarzecka.jpg",
      experience: "Średniozaawansowani",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "KPOP",
      description:
        "Na zajęciach KPOP dzieci uczą się choreografii inspirowanych popularnymi utworami i teledyskami. Pracujemy nad rytmiką, pamięcią ruchową i dynamiką tańca. Ćwiczymy elementy sceniczne, pewność siebie oraz pracę w grupie. Zajęcia są energiczne i prowadzone w sposób angażujący młodszych uczestników. Zajęcia są przeznaczone dla dzieci.",
      minAge: "7",
      maxAge: "9",
      instructor: "Alina Lemańska",
      instructorSlug: "/kadra/alina-lemanska",
      img: "/assets/images/offer/kpop.jpg",
      instructorAvatar: "/assets/images/team/alinaLemanska.jpg",
      experience: "Zaawansowani",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Taniec dla 4–6 latków",
      description:
        "To zajęcia ruchowo-taneczne dla najmłodszych, które wprowadzają dzieci w świat tańca przez zabawę. Ćwiczymy podstawowe kroki, rytm i prostą koordynację ruchową. Wykorzystujemy muzykę, gry ruchowe i krótkie układy taneczne. Zajęcia wspierają rozwój motoryczny, samodzielność i oswajanie pracy w grupie. Zajęcia są przeznaczone dla dzieci w wieku 4–6 lat.",
      minAge: "7",
      maxAge: "9",
      instructor: "Magdalena Sokołowska",
      instructorSlug: "/kadra/magdalena-sokolowska",
      img: "/assets/images/offer/taniec4-6.jpg",
      instructorAvatar: "/assets/images/team/magdalenaSokolowska.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Akrobatyka 4–6 latki",
      description:
        "Na zajęciach dzieci poznają podstawy akrobatyki w bezpiecznej i zabawowej formie. Ćwiczymy skoczność, równowagę, gibkość oraz wzmacnianie całego ciała. Wprowadzamy proste elementy, takie jak przewroty i ćwiczenia na materacach. Duży nacisk kładziemy na prawidłowe nawyki ruchowe i bezpieczeństwo. Zajęcia są przeznaczone dla dzieci w wieku 4–6 lat.",
      minAge: "7",
      maxAge: "9",
      instructor: "Oliwia Piec",
      instructorSlug: "/kadra/oliwia-piec",
      img: "/assets/images/offer/akrobatyka4-6.jpg",
      instructorAvatar: "/assets/images/team/oliwiaPiec.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Young Generation (hip-hop 7–9 lat)",
      description:
        "To zajęcia hip-hop dla dzieci, które chcą rozwijać swój ruch i poczucie rytmu. Uczymy podstawowych kroków, groove’u i prostych choreografii dopasowanych do wieku. Ćwiczymy koordynację, energię ruchu oraz pracę zespołową. Zajęcia pomagają budować pewność siebie i swobodę na parkiecie. Zajęcia są przeznaczone dla dzieci w wieku 7–9 lat.",
      minAge: "7",
      maxAge: "9",
      instructor: "Maria Kober",
      instructorSlug: "/kadra/maria-kober",
      img: "/assets/images/offer/youngGeneration7-9.jpg",
      instructorAvatar: "/assets/images/team/mariaKober.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Akrobatyka 7–9 lat",
      description:
        "Na zajęciach rozwijamy siłę, gibkość i koordynację poprzez ćwiczenia akrobatyczne dostosowane do wieku uczestników. Uczymy techniki podstawowych elementów i bezpiecznego wykonywania ćwiczeń. Pracujemy nad stabilizacją, mobilnością i świadomością ciała. Zajęcia mają formę aktywną i motywującą, ale z zachowaniem zasad bezpieczeństwa. Zajęcia są przeznaczone dla dzieci w wieku 7–9 lat.",
      minAge: "7",
      maxAge: "9",
      instructor: "Paulina Walikowska",
      instructorSlug: "/kadra/paulina-walikowska",
      img: "/assets/images/offer/akrobatyka7-9.jpg",
      instructorAvatar: "/assets/images/team/paulinaWalikowska.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "The Beat Hunters (hip-hop 10–12 lat)",
      description:
        "To grupa hip-hop dla dzieci starszych, w której rozwijamy technikę, rytmikę i pamięć choreograficzną. Uczestnicy uczą się bardziej złożonych kombinacji i pracy z muzyką. Ćwiczymy dynamikę, izolacje oraz elementy freestyle’u na poziomie podstawowym. Zajęcia wzmacniają pewność siebie i umiejętność współpracy w grupie. Zajęcia są przeznaczone dla dzieci w wieku 10–12 lat.",
      minAge: "7",
      maxAge: "9",
      instructor: "Wiktoria Butwicka",
      instructorSlug: "/kadra/wiktoria-butwicka",
      img: "/assets/images/offer/theBeatHunters10-12.jpg",
      instructorAvatar: "/assets/images/team/wiktoriaButwicka.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Akrobatyka 10–14 lat",
      description:
        "Na zajęciach uczestnicy rozwijają sprawność ogólną, siłę i elastyczność potrzebną w akrobatyce. Ćwiczymy technikę elementów akrobatycznych na materacach oraz kontrolę ciała w ruchu. Wprowadzamy stopniowo trudniejsze ćwiczenia, dostosowując poziom do możliwości grupy. Ważna jest dla nas poprawność wykonania i bezpieczeństwo. Zajęcia są przeznaczone dla dzieci i młodzieży w wieku 10–14 lat.",
      minAge: "7",
      maxAge: "9",
      instructor: "Talita Jarzęcka",
      instructorSlug: "/kadra/talita-jarzecka",
      img: "/assets/images/offer/akrobatyka10-14.jpg",
      instructorAvatar: "/assets/images/team/talitaJarzecka.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Taniec Współczesny 8–12 lat",
      description:
        "Na zajęciach tańca współczesnego dzieci poznają podstawy pracy z ruchem, przestrzenią i muzyką. Ćwiczymy płynność, koordynację oraz ekspresję poprzez krótkie kombinacje i choreografie. Zajęcia rozwijają świadomość ciała, kreatywność i wrażliwość artystyczną. Wprowadzamy elementy techniki i improwizacji w przyjaznej atmosferze. Zajęcia są przeznaczone dla dzieci w wieku 8–12 lat.",
      minAge: "7",
      maxAge: "9",
      instructor: "Magdalena Sokołowska",
      instructorSlug: "/kadra/magdalena-sokolowska",
      img: "/assets/images/offer/taniecWspolczesny8-12.jpg",
      instructorAvatar: "/assets/images/team/magdalenaSokolowska.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Taniec Współczesny 13–18 lat",
      description:
        "To zajęcia dla młodzieży, które rozwijają technikę tańca współczesnego oraz świadomą pracę z ciałem. Ćwiczymy sekwencje ruchowe, dynamikę, jakość ruchu i ekspresję sceniczną. Pojawiają się także elementy improwizacji i interpretacji muzyki. Zajęcia pomagają budować własny styl i pewność w tańcu. Zajęcia są przeznaczone dla młodzieży w wieku 13–18 lat.",
      minAge: "7",
      maxAge: "9",
      instructor: "Wiktoria Butwicka",
      instructorSlug: "/kadra/wiktoria-butwicka",
      img: "/assets/images/offer/taniecWspolczesny13-18.jpg",
      instructorAvatar: "/assets/images/team/wiktoriaButwicka.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Quality Crew (grupa zaawansowana hip-hop)",
      description:
        "To grupa zaawansowana dla osób, które mają doświadczenie w hip-hopie i chcą rozwijać się intensywniej. Pracujemy nad techniką, choreografią, dokładnością wykonania i jakością ruchu. Ćwiczymy także musicality, pracę formacji oraz przygotowanie do pokazów. Zajęcia są dynamiczne i wymagają regularności oraz zaangażowania. Grupa jest przeznaczona głównie dla dzieci i młodzieży z doświadczeniem.",
      minAge: "7",
      maxAge: "9",
      instructor: "Oliwia Piec",
      instructorSlug: "/kadra/oliwia-piec",
      img: "/assets/images/offer/qualityCrew.jpg",
      instructorAvatar: "/assets/images/team/oliwiaPiec.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Partnerowanie Akro",
      description:
        "Na zajęciach uczymy współpracy w parach i podstaw partnerowania w akrobatyce. Ćwiczymy zaufanie, komunikację, stabilizację oraz bezpieczne wejścia i zejścia z figur. Zajęcia rozwijają siłę, równowagę i kontrolę ciała w pracy z partnerem. Poziom ćwiczeń jest dobierany do umiejętności uczestników. Zajęcia są przeznaczone dla dzieci, młodzieży i dorosłych.",
      minAge: "7",
      maxAge: "9",
      instructor: "Maria Kober",
      instructorSlug: "/kadra/maria-kober",
      img: "/assets/images/offer/partnerowanieAkro.jpg",
      instructorAvatar: "/assets/images/team/mariaKober.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Lekcje Indywidualne",
      description:
        "To zajęcia 1:1 dopasowane do potrzeb uczestnika i jego poziomu zaawansowania. Możemy pracować nad techniką taneczną, akrobatyką, przygotowaniem choreografii lub rozwojem konkretnych umiejętności. Plan zajęć ustalamy indywidualnie w zależności od celu i wieku uczestnika. Zajęcia pozwalają na szybszy progres dzięki pełnej uwadze instruktora. Lekcje są przeznaczone dla dzieci, młodzieży i dorosłych.",
      minAge: "7",
      maxAge: "9",
      instructor: "Alina Lemańska",
      instructorSlug: "/kadra/alina-lemanska",
      img: "/assets/images/offer/indywidualne.jpg",
      instructorAvatar: "/assets/images/team/alinaLemanska.jpg",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Feminine Flow 18+",
      description:
        "To zajęcia taneczne dla dorosłych, skupione na płynności ruchu, świadomości ciała i kobiecej ekspresji. Pracujemy nad choreografiami, pewnością siebie oraz estetyką ruchu. Ćwiczymy koordynację, muzykalność i pracę z emocją w tańcu. Zajęcia odbywają się w komfortowej atmosferze, sprzyjającej rozwojowi i swobodzie. Zajęcia są przeznaczone dla osób 18+.",
      minAge: "18",
      maxAge: "99",
      instructor: "Anna Kowalska",
      instructorSlug: "/kadra/anna-kowalska",
      img: "/assets/images/offer/indywidualne.jpg",
      instructorAvatar: "",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Formacja dla Dorosłych",
      description:
        "Na zajęciach uczestnicy uczą się choreografii grupowych i pracy w zespole. Ćwiczymy synchronizację, ustawienia sceniczne oraz dokładność wykonania ruchu. Zajęcia rozwijają kondycję, koordynację i pamięć ruchową. To dobra opcja dla osób, które lubią regularny trening i wspólne przygotowanie układów. Zajęcia są przeznaczone dla dorosłych.",
      minAge: "18",
      maxAge: "99",
      instructor: "Anna Kowalska",
      instructorSlug: "/kadra/anna-kowalska",
      img: "/assets/images/offer/indywidualne.jpg",
      instructorAvatar: "",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Partnerowanie Akro",
      description:
        "Na zajęciach uczymy współpracy w parach i podstaw partnerowania w akrobatyce. Ćwiczymy zaufanie, komunikację, stabilizację oraz bezpieczne wejścia i zejścia z figur. Zajęcia rozwijają siłę, równowagę i kontrolę ciała w pracy z partnerem. Poziom ćwiczeń jest dobierany do umiejętności uczestników. Zajęcia są przeznaczone dla dzieci, młodzieży i dorosłych.",
      minAge: "0",
      maxAge: "99",
      instructor: "Anna Kowalska",
      instructorSlug: "/kadra/anna-kowalska",
      img: "/assets/images/offer/indywidualne.jpg",
      instructorAvatar: "",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
    {
      name: "Lekcje Indywidualne",
      description:
        "To zajęcia 1:1 dopasowane do potrzeb uczestnika i jego poziomu zaawansowania. Możemy pracować nad techniką taneczną, akrobatyką, przygotowaniem choreografii lub rozwojem konkretnych umiejętności. Plan zajęć ustalamy indywidualnie w zależności od celu i wieku uczestnika. Zajęcia pozwalają na szybszy progres dzięki pełnej uwadze instruktora. Lekcje są przeznaczone dla dzieci, młodzieży i dorosłych.",
      minAge: "0",
      maxAge: "99",
      instructor: "Anna Kowalska",
      instructorSlug: "/kadra/anna-kowalska",
      img: "/assets/images/offer/indywidualne.jpg",
      instructorAvatar: "",
      experience: "Początkujący",
      scheduleSrc: "/grafik/koszalin",
    },
  ],
  "bialy-bor": [
    {
      name: "Zajęcia taneczne (4–7 lat)",
      description:
        "Zajęcia ruchowo-taneczne dla dzieci w wieku 4–7 lat, prowadzone w formie zabawy. Dzieci uczą się podstaw rytmiki i koordynacji, prostych kroków oraz krótkich układów tanecznych dopasowanych do wieku. Pracujemy nad ogólną sprawnością, poczuciem rytmu, orientacją w przestrzeni i pewnością siebie. Zajęcia wspierają rozwój motoryczny i uczą pracy w grupie. Koszt: 80 zł/miesiąc.",
      minAge: "4",
      maxAge: "7",
      instructor: "Talita Jarzęcka",
      instructorSlug: "/kadra/talita-jarzecka",
      img: "/assets/images/offer/taniec4-6.jpg",
      instructorAvatar: "/assets/images/team/talitaJarzecka.jpg",
      experience: "Zaawansowani",
      scheduleSrc: "/grafik/bialy-bor",
    },
    {
      name: "Hip-hop (8–13 lat)",
      description:
        "Zajęcia hip-hop dla dzieci i młodzieży w wieku 8–13 lat. Uczestnicy poznają podstawy techniki, groove’u i pracy z muzyką oraz uczą się choreografii dopasowanych do poziomu grupy. Ćwiczymy koordynację, dynamikę, musicality i pamięć ruchową, a także elementy sceniczne i współpracę w zespole. Zajęcia pomagają budować swobodę ruchu i pewność siebie. Koszt: 80 zł/miesiąc.",
      minAge: "8",
      maxAge: "13",
      instructor: "Talita Jarzęcka",
      instructorSlug: "/kadra/talita-jarzecka",
      img: "/assets/images/offer/qualityCrew.jpg",
      instructorAvatar: "/assets/images/team/talitaJarzecka.jpg",
      experience: "Zaawansowani",
      scheduleSrc: "/grafik/bialy-bor",
    },
  ],
  polanow: [
    {
      name: "Taniec dla 4–6 latków",
      description:
        "To zajęcia ruchowo-taneczne dla najmłodszych, które wprowadzają dzieci w świat tańca przez zabawę. Ćwiczymy podstawowe kroki, rytm i prostą koordynację ruchową. Wykorzystujemy muzykę, gry ruchowe i krótkie układy taneczne. Zajęcia wspierają rozwój motoryczny, samodzielność i oswajanie pracy w grupie. Koszt: 120 zł/miesiąc.",
      minAge: "4",
      maxAge: "6",
      instructor: "Talita Jarzęcka",
      instructorSlug: "/kadra/talita-jarzecka",
      img: "/assets/images/offer/taniec4-6.jpg",
      instructorAvatar: "/assets/images/team/talitaJarzecka.jpg",
      experience: "Zaawansowani",
      scheduleSrc: "/grafik/polanow",
    },
    {
      name: "Hip-hop (7–14 lat)",
      description:
        "Zajęcia hip-hop dla dzieci i młodzieży w wieku 7–14 lat. Uczestnicy uczą się podstaw techniki, groove’u i pracy z muzyką oraz choreografii dopasowanych do wieku i poziomu grupy. Ćwiczymy koordynację, dynamikę, musicality i pamięć ruchową, a także elementy sceniczne i współpracę w zespole. Koszt: 150 zł/miesiąc.",
      minAge: "7",
      maxAge: "14",
      instructor: "Talita Jarzęcka",
      instructorSlug: "/kadra/talita-jarzecka",
      img: "/assets/images/offer/theBeatHunters10-12.jpg",
      instructorAvatar: "/assets/images/team/talitaJarzecka.jpg",
      experience: "Zaawansowani",
      scheduleSrc: "/grafik/polanow",
    },
  ],
};
