export const data = {
  badge: "Regulamin",
  title: "Regulamin korzystania z usług studia tańca Hoodmood",
  description:
    "Niniejszy regulamin określa zasady korzystania z usług Studia Tańca Hoodmood, w tym warunki uczestnictwa w zajęciach, dokonywania zapisów, płatności oraz prawa i obowiązki uczestników.",
};

type Section = {
  title: string;
  points: string[];
};

export const regulations: Section[] = [
  {
    title: "§ 1 Podmiot świadczący usługi",
    points: [
      "Zajęcia taneczne organizowane są przez Talitę Jarzęcką Centrum Rozwoju Dzieci i Młodzieży z siedzibą w Koszalinie przy ul. Wenedów 18F/5, 75-847 Koszalin, NIP: 6692557695, REGON: 38646988.",
    ],
  },
  {
    title: "§ 2 Definicje",
    points: [
      "Centrum – Talita Jarzęcka Centrum Rozwoju Dzieci i Młodzieży z siedzibą w Koszalinie, NIP: 6692557695, REGON: 38646988.",
      "Studio Tańca – Hoodmood Dance Studio, ul. Zwierzyniecka 115, 75-601 Koszalin.",
      "Sezon – okres od dnia pierwszych zajęć tanecznych organizowanych przez centrum we wrześniu do dnia ostatnich zajęć tanecznych w czerwcu.",
      "Uczestnik – osoba wskazana w umowie zawartej z centrum lub potwierdzeniu uczestnictwa w zajęciach tanecznych prowadzonych przez centrum, która upoważniona jest do udziału w określonych zajęciach tanecznych.",
      "Przedsięwzięcia komercyjne – wszelkiego rodzaju odpłatne wystąpienia, w szczególności w reklamach, podczas wydarzeń kulturalnych, w teledyskach, filmach i tym podobne.",
      "Instruktor – osoba prowadząca zajęcia taneczne w Centrum.",
    ],
  },
  {
    title: "§ 3 Zastępstwa. Odwołanie zajęć",
    points: [
      "W przypadku niedyspozycji instruktora z przyczyn losowych, centrum ma prawo wyznaczyć tymczasowe zastępstwo, dostosowane do potrzeb i poziomu zaawansowania danej grupy.",
      "W przypadku niemożności zapewnienia zastępstwa centrum ma prawo do odwołania zajęć tanecznych po wcześniejszym poinformowaniu o tym fakcie klienta.",
      "W przypadku odwołania zajęć z przyczyn podanych wyżej, centrum jest zobowiązane do zorganizowania odwołanych zajęć w innym terminie, w celu ich nadrobienia.",
    ],
  },
  {
    title: "§ 4 Zasady uczestnictwa w zajęciach stacjonarnych",
    points: [
      "Zajęcia taneczne odbywają się w Hoodmood Dance Studio, ul. Zwycięstwa 115, 75-601 Koszalin.",
      "Przed rozpoczęciem zajęć uczestnik zobowiązany jest okazać dokument potwierdzający uiszczenie wpłaty za uczestnictwo w zajęciach, w tym potwierdzenie przelewu, paragon.",
      "Na salę taneczną można wejść tylko w zmienionym obuwiu sportowym lub tanecznym. Uczestnika, który nie ma zmienionego obuwia instruktor może wyprosić z zajęć. Opłata za zajęcia, w których uczestnik nie wziął udziału z uwagi na brak odpowiedniego obuwia nie jest zwracana.",
      "Uczestnicy zobowiązani są do punktualnego stawiania się na zajęcia, pod rygorem odmowy dopuszczenia do zajęć oraz uczestniczenia w nich w sposób, który nie zakłóca ich przebiegu.",
      "Uczestnicy zobowiązani są stosować się do poleceń instruktora.",
      "Po zakończonych zajęciach uczestnik zobowiązany jest zabrać wszystkie swoje rzeczy z siedziby studia.",
    ],
  },
  {
    title: "§ 5 Zasady uczestnictwa w zajęciach zdalnych",
    points: [
      "W przypadku zaistnienia zdarzeń uniemożliwiających prowadzenie zajęć w formie stacjonarnej, centrum zapewnia organizację zajęć w formie zdalnej, które będą prowadzone za pośrednictwem platformy ZOOM. Forma ta obowiązuje do czasu ustania przeszkody, uniemożliwiającej prowadzenie zajęć w formie stacjonarnej.",
      "W przypadku realizacji zajęć w formie zdalnej centrum przekazuje na adresy mailowe podane przez klientów w umowie informację o prowadzeniu zajęć w formie zdalnej, ze wskazaniem nazwy zajęć, terminu ich odbycia, instruktora prowadzącego zajęcia oraz wszystkich informacji technicznych niezbędnych do prawidłowego i niezakłóconego uczestnictwa w zajęciach w formie zdalnej. Informacje te centrum jest zobowiązane przekazać drogą mailową najpóźniej na dzień przed zaistnieniem zdarzenia uzasadniającego prowadzenie zajęć w formie zdalnej, z wyłączeniem zdarzeń nagłych i niemożliwych do przewidzenia.",
    ],
  },
  {
    title: "§ 6 Zasady bezpieczeństwa",
    points: [
      "W przypadku zaistnienia zdarzenia wywołującego szkodę na osobie klienta lub uczestnika, powstałej na terenie studia tańca, fakt ten należy niezwłocznie zgłosić pracownikom centrum. Przedsiębiorca posiada stosowne ubezpieczenie odpowiedzialności cywilnej związane z wykonywaną działalnością. Jednakże centrum nie odpowiada zarówno za szkody materialne, jak i niematerialne powstałe wskutek siły wyższej, wyłącznie z winy poszkodowanego oraz z winy osoby trzeciej, za którą centrum nie ponosi odpowiedzialności.",
      "Klienci i uczestnicy są zobowiązani zgłaszać instruktorowi przed wejściem na salę taneczną wszelkie dolegliwości zdrowotne uczestnika, złe samopoczucie, urazy, kontuzje etc. Z troski o bezpieczeństwo wszystkich uczestników, pracownicy centrum mają prawo do odmowy wstępu uczestnikowi z widocznymi oznakami dolegliwości zdrowotnych.",
      "Przebywanie na sali tanecznej bez instruktora lub innego upoważnionego pracownika centrum jest niedozwolone.",
      "Zabrania się wnoszenia na salę taneczną jedzenia i ciepłych napojów. Zimne napoje mogą być wnoszone i spożywane w miejscu i czasie wskazanym przez instruktora.",
      "Na terenie centrum obowiązuje zakaz palenia tytoniu, spożywania alkoholu oraz środków odurzających. W przypadku stwierdzenia przez pracowników centrum, że dana osoba narusza powyższy zakaz, centrum zastrzega sobie prawo do odmowy świadczenia usług bez prawa do żądania zwrotu ich wartości.",
      "Na terenie centrum obowiązuje całkowity zakaz przebywania osób, których zachowanie uprawdopodabnia przypuszczenie, że są po spożyciu alkoholu lub pod wpływem środków odurzających.",
      "W przypadku stwierdzenia, że zachowanie danej osoby może stanowić zagrożenie dla pozostałych klientów, uczestników lub pracowników, centrum zastrzega prawo odmowy świadczenia usług bez prawa żądania zwrotu ich wartości.",
      "Ewentualne przypadki zagubienia lub uszkodzenia mienia powinny być niezwłocznie zgłaszane instruktorowi lub w recepcji centrum.",
      "Klient ponosi odpowiedzialność materialną za wyrządzone przez siebie oraz uczestnika szkody, w tym szkody powstałe w wyniku niezastosowania się do poleceń instruktora lub pracownika centrum.",
      "Centrum nie odpowiada za rzeczy pozostawione lub zagubione na jego terenie ani pozostawione w szatni. Rzeczy wartościowe należy zabierać na salę taneczną i nie pozostawiać ich bez nadzoru.",
      "Rzeczy znalezione na terenie centrum należy przekazać do recepcji centrum. Rzeczy znalezione wydawane są, po ich identyfikacji przez właściciela, w okresie do trzech tygodni od daty pozostawienia. Po tym czasie przedmioty te zostaną zutylizowane.",
    ],
  },
  {
    title: "§ 7 Reklamacje",
    points: [
      "Klient może złożyć reklamację pisemnie lub drogą mailową na adres hoodmood.recepcja@gmail.com, jeżeli usługi świadczone przez placówkę nie są realizowane bez uzasadnionej przyczyny lub są realizowane niezgodnie z regulaminem lub zawartą z centrum umową uczestnictwa w zajęciach tanecznych.",
      "Centrum oświadcza, iż reklamacje dotyczące wykonywania świadczeń przez centrum mogą być skutecznie zgłaszane w ciągu 30 dni od dnia zakończenia usługi, której reklamacja dotyczy. Po upływie tego okresu klient traci uprawnienie do wniesienia reklamacji dotyczącej konkretnej usługi.",
      "Reklamacja powinna zawierać co najmniej: dane pozwalające na zidentyfikowanie reklamującego, okres, którego reklamacja dotyczy i okoliczności uzasadniające reklamację, a w przypadku reklamacji złożonej w formie pisemnej także podpis reklamującego.",
      "Reklamacja zgłoszona drogą mailową rozpatrywana jest tylko pod warunkiem przesłania jej z adresu e-mail wskazanego w umowie.",
      "W przypadku, gdy informacje zawarte w zgłoszeniu reklamacyjnym wymagają uzupełnienia do skutecznego rozpatrzenia reklamacji, centrum zwróci się do klienta drogą mailową lub za pośrednictwem korespondencji tradycyjnej z prośbą o uzupełnienie zgłoszenia.",
      "Centrum udziela odpowiedzi na reklamację drogą elektroniczną na wskazany przez reklamującego adres poczty elektronicznej lub w formie pisemnej na adres podany przez reklamującego w terminie 14 dni od dnia jej otrzymania.",
    ],
  },
  {
    title: "§ 8 Własność intelektualna",
    points: [
      "Wszelkie prawa do materiałów reklamowych, choreografii, znaków słownych lub graficznych, nazw oraz grafiki (praw własności intelektualnej), wykorzystywanych w ramach zajęć lub prezentowanych podczas innej działalności centrum, przysługują wyłącznie centrum lub jego instruktorom i partnerom, którzy przekazali określone materiały do użytkowania. Korzystanie z usług świadczonych przez centrum nie skutkuje w żadnym zakresie nabyciem przez klienta części lub całości wyżej wymienionych praw własności intelektualnej.",
      "Zabronione jest bez zgody centrum wyrażonej na piśmie: kopiowanie, powielanie lub jakiekolwiek inne wykorzystywanie w całości lub we fragmentach praw własności intelektualnej do treści, o których mowa w ust. 1.",
      "Zabrania się rejestrowania, utrwalania i rozpowszechniania za pomocą fotografii, filmu czy ścieżki dźwiękowej pobytu na terenie centrum bez zgody instruktora lub pracownika centrum.",
      "Instruktor może wyrazić zgodę na wykorzystanie na portalach społecznościowych i w innych publikacjach, wyłącznie dla celów niekomercyjnych, zdjęć oraz materiałów wideo zrobionych albo nagranych w centrum, w trakcie prowadzonych przez siebie zajęć.",
    ],
  },
  {
    title: "§ 9 Pozostałe postanowienia",
    points: [
      "W przypadku powtarzających się incydentów niewywiązywania się uczestnika z obowiązków wynikających z regulaminu i/lub umowy, zachowania utrudniającego prowadzenie zajęć tanecznych, bądź innego zachowania stanowiącego naruszenie dobrych obyczajów lub choćby jednorazowego dopuszczenia się przez niego zachowania niezgodnego z § 6 lub stwarzającego niebezpieczeństwo dla zdrowia lub życia swojego lub innych osób, centrum przysługuje prawo do jednostronnego rozwiązania umowy dotyczącej danego uczestnika bez zachowania okresu wypowiedzenia.",
      "Osoby niepełnoletnie są reprezentowane w zakresie praw i obowiązków przez rodziców, przedstawicieli ustawowych lub opiekunów prawnych.",
      "Centrum zastrzega sobie prawo do zmiany regulaminu. Informacje o wprowadzanych zmianach publikowane są na stronie internetowej www.hoodmood.pl co najmniej na 7 dni przed ich wejściem w życie.",
      "Regulamin wchodzi w życie z dniem 1 września 2024 roku.",
    ],
  },
];