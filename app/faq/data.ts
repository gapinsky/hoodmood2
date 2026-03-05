export const data = {
  badge: "F.A.Q",
  title: "Najczęściej zadawane pytania",
  description:
    "Wiemy, że przed pierwszymi zajęciami w głowie pojawia się milion pytań. Zebraliśmy te najczęstsze - zanim do nas napiszesz sprawdź, czy nie ma tu odpowiedzi.",
};

type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Jak mogę zapisać się na zajęcia?",
    answer:
      "Najprościej przez formularz zapisu na stronie lub kontakt telefoniczny/wiadomość w social mediach. Po zgłoszeniu potwierdzimy dostępność miejsca w grupie i podpowiemy, jakie zajęcia będą najlepsze na start.",
  },
  {
    question: "Czy mogę przyjść na zajęcia próbne?",
    answer:
      "Tak. Zajęcia próbne pozwalają sprawdzić poziom grupy, styl i prowadzenie. Daj znać wcześniej, żebyśmy mogli zarezerwować miejsce i dopasować Cię do odpowiedniej grupy wiekowej/poziomu.",
  },
  {
    question: "Czy trzeba mieć doświadczenie, żeby zacząć?",
    answer:
      "Nie. Prowadzimy grupy od podstaw oraz dla osób bardziej zaawansowanych. Na pierwszych zajęciach wprowadzamy krok po kroku technikę i zasady pracy na sali.",
  },
  {
    question: "Jak dobrać odpowiednią grupę wiekową i poziom?",
    answer:
      "Kierujemy się wiekiem, doświadczeniem i komfortem uczestnika. Jeśli nie masz pewności, podpowiemy po krótkiej rozmowie lub po zajęciach próbnych.",
  },
  {
    question: "Jak wygląda płatność i co obejmuje karnet?",
    answer:
      "Karnet obejmuje udział w zajęciach zgodnie z grafikiem dla danej grupy. Płatność jest miesięczna (lub zgodnie z ofertą w cenniku), a szczegóły kwoty zależą od wybranego rodzaju zajęć i częstotliwości.",
  },
  {
    question: "Co jeśli opuścimy zajęcia z powodu choroby lub wyjazdu?",
    answer:
      "Rozumiemy sytuacje losowe. Napisz do nas — w miarę możliwości zaproponujemy odrobienie w innej grupie lub inne rozwiązanie zgodne z organizacją zajęć i dostępnością miejsc.",
  },
  {
    question: "Czy można dołączyć w trakcie miesiąca?",
    answer:
      "Tak, jeśli są wolne miejsca. Wtedy pomagamy nadrobić podstawy, a w przypadku choreografii podpowiadamy, jak wejść w materiał bez stresu.",
  },
  {
    question: "Jakie rzeczy zabrać na pierwsze zajęcia?",
    answer:
      "Wygodny strój sportowy, buty na zmianę (czyste, na salę), wodę oraz związane włosy (jeśli długie). W niektórych stylach rekomendujemy konkretne obuwie — podpowiemy przed zajęciami.",
  },
  {
    question: "Czy zajęcia odbywają się w butach czy na boso?",
    answer:
      "To zależy od stylu i sali. Najczęściej ćwiczymy w czystych butach sportowych na zmianę, a czasem na boso lub w skarpetkach/halfach. Instruktor poinformuje, co jest najlepsze dla danej grupy.",
  },
  {
    question: "Czy rodzice mogą być obecni na sali podczas zajęć dzieci?",
    answer:
      "Zwykle prosimy, aby rodzice nie przebywali na sali w trakcie zajęć (dla komfortu i samodzielności dzieci). W wyjątkowych sytuacjach ustalamy to indywidualnie.",
  },
  {
    question: "Czy są pokazy, turnieje lub występy?",
    answer:
      "Tak, w ciągu roku organizujemy pokazy i wydarzenia, na których grupy mogą zaprezentować swoje choreografie. Udział zależy od grupy i gotowości uczestników — informujemy o planach z wyprzedzeniem.",
  },
  {
    question: "Czy prowadzicie zajęcia dla dorosłych?",
    answer:
      "Tak. Mamy ofertę dla dorosłych oraz różne poziomy zaawansowania. Jeśli powiesz, jaki styl Cię interesuje i jaki masz poziom, dopasujemy najlepszą grupę.",
  },
  {
    question: "Czy są zajęcia indywidualne i jak wyglądają?",
    answer:
      "Tak. Lekcje 1:1 (lub w duecie/trio) są dopasowane do celu: technika, choreografia, przygotowanie do występu, pierwszy taniec itp. Ustalamy termin i plan treningu indywidualnie.",
  },
  {
    question: "Czym różni się grupa rekreacyjna od formacji?",
    answer:
      "Grupa rekreacyjna to nauka i rozwój w spokojniejszym trybie, bez presji startów. Formacja pracuje bardziej projektowo: nad choreografiami, synchronem i występami, zwykle z większą regularnością.",
  },
  {
    question: "Czy zajęcia są bezpieczne dla dzieci?",
    answer:
      "Tak. Zajęcia są prowadzone z naciskiem na prawidłową technikę, rozgrzewkę i stopniowanie trudności. Dbamy o bezpieczeństwo i dopasowanie ćwiczeń do wieku oraz możliwości uczestników.",
  },
  {
    question:
      "Czy mogę zapisać dziecko, jeśli jest nieśmiałe lub ma trudność z adaptacją?",
    answer:
      "Oczywiście. Wiele dzieci potrzebuje chwili, by poczuć się swobodnie. Instruktorzy dbają o przyjazną atmosferę i wspierają adaptację w grupie bez presji.",
  },
  {
    question: "Jak długo trwają zajęcia?",
    answer:
      "Czas trwania zależy od grupy i stylu (np. 45, 60 lub 90 minut). Dokładny czas jest podany w grafiku przy konkretnej grupie.",
  },
  {
    question: "Czy muszę przychodzić dokładnie na godzinę?",
    answer:
      "Warto być 5–10 minut wcześniej, żeby spokojnie się przebrać i przygotować. Spóźnienia utrudniają wejście w rozgrzewkę, ale jeśli się zdarzą — prosimy o ciche dołączenie.",
  },
  {
    question: "Czy oferujecie zniżki lub pakiety na więcej niż jedne zajęcia?",
    answer:
      "Tak, mamy rozwiązania łączone (np. zajęcia + dodatkowy styl) zgodnie z cennikiem. Jeśli planujesz więcej niż jedne zajęcia w tygodniu, napisz — podpowiemy najbardziej opłacalną opcję.",
  },
  {
    question: "Jak mogę się z Wami skontaktować, jeśli mam pytania?",
    answer:
      "Możesz napisać przez formularz na stronie, wiadomość w social mediach albo zadzwonić. Odpowiadamy najszybciej jak się da i chętnie pomożemy dobrać zajęcia, grafik oraz formę płatności.",
  },
];
