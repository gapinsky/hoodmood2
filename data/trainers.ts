export type Trainer = {
  id: string;
  slug: string;
  image: string;
  active: boolean;
  specialGuest: boolean;
  name: string;
  role: string;
  styles: string[];
  bio: string;
  images: string[];
  localizations: string[];
  instagram?: string;
};

export const trainers = {
  "julia-kaczmarzyk": {
    id: "julia-kaczmarzyk",
    slug: "julia-kaczmarzyk",
    active: true,
    specialGuest: false,
    name: "Julia Kaczmarzyk",
    role: "Taniec współczesny — REBELIA",
    styles: ["Mikrusy (4–6 lat)", "Minimki (7–9 lat)", "Rebelia 3 (10–12 lat)", "Rebelia Junior (13–14 lat)", "Rebelia (15+ lat)"],
    bio: "Julia Kaczmarzyk prowadzi Zespół Tańca Współczesnego REBELIA w Szczecinku. Pracuje z grupami Mikrusy, Minimki, Rebelia 3, Rebelia Junior i Rebelia.\nProfil w przygotowaniu. Zdjęcie, pełną biografię i więcej informacji o doświadczeniu Julii dodamy wkrótce. Już teraz możesz sprawdzić prowadzone przez nią grupy i grafik zajęć w Szczecinku.",
    image: "",
    images: [],
    localizations: ["Szczecinek"],
  },
  "talita-jarzecka": {
    id: "talita-jarzecka",
    slug: "talita-jarzecka",
    active: true,
    specialGuest: false,
    name: "Talita Jarzęcka",
    role: "CEO",
    styles: [
      "CEO",
      "HYPE CREW (grupa średniozaawansowana hip-hop)",
      "Taniec dla 4–6 latków",
      "Hip-hop ",
      "Zajęcia taneczne 4–7 lat",
      "Taniec współczesny - starsza grupa",
    ],
    bio:
      "Talita to doświadczona choreografka, trenerka i artystka sceniczna, której fundamentem jest solidne wykształcenie muzyczno-taneczne. Ukończyła studia licencjackie na kierunku Taniec Nowoczesny na Wydziale Sztuk Scenicznych Akademii Muzycznej w Łodzi. Wcześniej kształciła się w Szkole Muzycznej im. Grażyny Bacewicz w Koszalinie na Wydziale Rytmiki. Brała udział w spektaklu „Projektowanie człowieka” (chor. Maciej Mołdoch / Sheva), stworzyła autorskie spektakle „Halucynacje” i „Gen Z”. Uczestniczyła w licznych warsztatach i programach artystycznych w Polsce i za granicą (m.in. Ateny, Mediolan, Paryż, Londyn). Przez 9 lat prowadziła grupę Quality CREW, przygotowując tancerzy do licznych zawodów i projektów artystycznych w Polsce i za granicą. Pod jej opieką zawodnicy reprezentowali studio na międzynarodowych scenach i turniejach, a grupa wzięła również udział w produkcji nominowanej na International Cyprus Dance Film Festival, której pokaz odbył się w teatrze Rialto. Talita przygotowywała również zawodniczki do startów w Mistrzostwach Świata WDA International Championships w Budapeszcie w kategorii Street Dance Solo, osiągając miejsca na podium oraz w ścisłej czołówce międzynarodowej rywalizacji. W 2026 roku wystąpiła w kampanii reklamowej Apple Music, zdobywając doświadczenie również na planie międzynarodowej produkcji komercyjnej.",
    image: "/assets/images/team/talitaJarzecka/talitaJarzeckaProfile.jpg",
    images: [
      "/assets/images/team/talitaJarzecka/talitaJarzeckaProfile.jpg",
      "/assets/images/team/talitaJarzecka/talitaJarzecka.jpg",
      "/assets/images/team/talitaJarzecka/talitaJarzecka3.jpg",
      "/assets/images/team/talitaJarzecka/talitaBack.jpg",
    ],
    localizations: ["Koszalin", "Polanów", "Biały Bór"],
    instagram: "https://www.instagram.com/talita_jarzecka/",
  },
  "wiktoria-butwicka": {
    id: "wiktoria-butwicka",
    slug: "wiktoria-butwicka",
    active: true,
    specialGuest: false,
    name: "Wiktoria Butwicka",
    role: "Hip-hop",
    styles: [
      "Taniec dla 4–6 latków",
      "HIP-HOP 30+",
      "Feminine flow",
      "Young Generation (hip-hop)",
    ],
    bio:
      "Wiktoria Butwicka to tancerka i trenerka. Taniec towarzyszy jej od 2009 roku. Szkoliła się m.in. u instruktorów takich jak Klesia, Nikita czy Pumba. Brała udział w licznych turniejach w Polsce i za granicą (m.in. 2. miejsce w Wielkiej Brytanii i Top 8 na Tancbudzie). Korzystała też z prywatnych lekcji i warsztatów w różnych stylach. Jako trenerka uczy od trzech lat – prowadzi grupy hip-hopowe oraz warsztaty dla młodzieży i dorosłych.",
    image: "/assets/images/team/wiktoriaButwicka/wiktoriaButwickaProfile.jpg",
    images: [
      "/assets/images/team/wiktoriaButwicka/wiktoriaButwickaProfile.jpg",
      "/assets/images/team/wiktoriaButwicka/wiktoriaButwicka.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/_._._._wika_._._._",
  },
  "paulina-walikowska": {
    id: "paulina-walikowska",
    slug: "paulina-walikowska",
    active: true,
    specialGuest: false,
    name: "Paulina Walikowska",
    role: "Balet",
    styles: ["Balet"],
    bio: `Paulina Walikowska swoją przygodę z tańcem rozpoczęła w klasie baletowej, gdzie zdobyła solidne podstawy techniczne. 8 lat rozwijała się artystycznie w zespole Quality Crew, w którym doskonaliła się zarówno jako tancerka sceniczna, jak i instruktorka. Wraz z ekipą wielokrotnie sięgała po najwyższe miejsca na prestiżowych turniejach tanecznych w Polsce i za granicą.
 Do jej doświadczeń należą m.in.:
• udział w wielu warsztatach z uznanymi trenerami z kraju takimi jak Zosia Kędziora, Darek Bujnowski, Marta Pasta, Ola Goździk, Łukasz Ludwiczak, Jessica Ali, Mania Rogowska i inni,
• współtworzenie projektów filmowych, w tym produkcji prezentowanej w teatrze Rialto i nominowanej na International Cyprus Dance Film Festival,
• występy w spektaklach „Halucynacje” (Akademia Muzyczna w Łodzi) oraz „Gen Z” (Teatr Muzyczny Adria).
Obecnie Paulina dzieli się swoją pasją i wiedzą, prowadząc w naszym studiu zajęcia baletu.`,
    image: "/assets/images/team/paulinaWalikowska/paulinaWalikowskaProfile.jpg",
    images: [
      "/assets/images/team/paulinaWalikowska/paulinaWalikowskaProfile.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/walikowska",
  },
  "alina-lemanska": {
    id: "alina-lemanska",
    slug: "alina-lemanska",
    active: true,
    specialGuest: false,
    name: "Alina Lemańska",
    role: "KPOP",
    styles: ["KPOP"],

    bio:
      "Na stronie sekcja Aliny Lemańskiej opisuje start zajęć KPOP — dynamiczne choreografie, energetyczną muzykę i przyjazną atmosferę. Zajęcia są skierowane do osób w różnym wieku i na różnym poziomie zaawansowania, z naciskiem na naukę kroków i choreografii do hitów KPOP oraz dobrą zabawę.",
    image: "/assets/images/team/alinaLemanska/alinaLemanskaProfile.jpg",
    images: [
      "/assets/images/team/alinaLemanska/alinaLemanskaProfile.jpg",
      "/assets/images/team/alinaLemanska/alinaLemanska.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/alinka_lem",
  },
  "magdalena-sokolowska-japona": {
    id: "magdalena-sokolowska-japona",
    slug: "magdalena-sokolowska-japona",
    active: true,
    specialGuest: false,
    name: "Magdalena Sokołowska",
    role: "Hip-hop/House",
    styles: ["Young Generation (hip-hop)", "The Beat Hunters (hip-hop)"],
    bio:
      "Magdalena Sokołowska jest związana z tańcem od 14. roku życia. Jest dyplomowaną instruktorką tańca o specjalizacji hip-hop. Style, w których najlepiej się czuje, to hip-hop i house. Dla siebie tańczy również waacking i high heels. Na co dzień lubi pracę z młodzieżą.",
    image: "/assets/images/team/magdalenaSokolowska/magdalenaSokolowskaProfile.jpg",
    images: [
      "/assets/images/team/magdalenaSokolowska/magdalenaSokolowskaProfile.jpg",
      "/assets/images/team/magdalenaSokolowska/magdalenaSokolowska.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/japona_sokolowska",
  },
  "maria-kober": {
    id: "maria-kober",
    slug: "maria-kober",
    active: true,
    specialGuest: false,
    name: "Maria Kober",
    role: "The Beat Hunters",
    styles: [
      "The Beat Hunters (hip-hop)",
      "HYPE CREW (grupa średniozaawansowana hip-hop)",
    ],
    bio: `Maria Kober 
 to nie tylko instruktorka to tancerka z ogromnym doświadczeniem scenicznym i warsztatowym.
Od 8 lat trenuje w ekipie Quality Crew, z którą wielokrotnie stawała na podium prestiżowych zawodów w Polsce i za granicą.
 Na swoim tanecznym koncie ma m.in.:
udział w warsztatach i zajęciach u takich instruktorów, jak Zosia Kędziora, Darek Bujnowski, Marta Pasta, Ola Goździk, Łukasz Ludwiczak, Jessica Ali , Mania Rogowska, Ida Kurowska i wiele więcej. 
-wyjazd do Londynu, gdzie trenowała w legendarnych studiach Playground i Base, biorąc lekcje m.in. u Kelly Sweeney (LA) i Tyresse Hare
– udział w projektach wideo, w tym w produkcji nominowanej na International Cyprus Dance Film Festival, której pokaz odbył się w teatrze Rialto.
Maria prowadzi treningi dla grupy THE BEAT HUNTERS.  
Co Cię czeka na jej zajęciach? 
Wszechstronny rozwój taneczny i świetna atmosfera, bo Marysia łączy wymagający trening z ogromną dawką fanu.`,
    image: "/assets/images/team/mariaKober/mariaKoberProfile.jpg",
    images: ["/assets/images/team/mariaKober/mariaKoberProfile.jpg"],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/marysiakober",
  },
  "nel-glowacka": {
    id: "nel-glowacka",
    slug: "nel-glowacka",
    active: true,
    specialGuest: false,
    name: "Nel Głowacka",
    role: "Taniec współczesny",
    styles: ["Taniec współczesny (6–9 lat)"],
    bio: `Tańczy od 13 lat, nieustannie rozwijając się w różnych stylach i poszerzając swój warsztat. Swoją przygodę z tańcem rozpoczęła jako dziecko od baletu, który do dziś pozostaje ważną częścią jej tanecznego fundamentu. Przez wiele lat trenowała również taniec towarzyski, a obecnie skupia się przede wszystkim na tańcu współczesnym i jazzie.
Jednym z jej największych osiągnięć było zdobycie 3. miejsca na Mistrzostwach WADF, dzięki czemu została II Wicemistrzynią Polski. Na przestrzeni lat brała udział w licznych zawodach i turniejach tanecznych, a także miała okazję występować na deskach teatru.
Taniec jest dla niej nie tylko techniką i ruchem, ale przede wszystkim sposobem wyrażania emocji. Dlatego rozwija się również w aktorstwie, które pomaga jej jeszcze lepiej budować sceniczne historie i przekazywać emocje poprzez ruch. Ma za sobą liczne występy i przedstawienia, a każde z tych doświadczeń pozwala jej spojrzeć na taniec z nowej perspektywy.`,
    image: "/assets/images/team/nelGlowacka/nelGlowackaProfile.jpg",
    images: ["/assets/images/team/nelGlowacka/nelGlowackaProfile.jpg"],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/_nelglowacka/",
  },
  "klara-walach": {
    id: "klara-walach",
    slug: "klara-walach",
    active: true,
    specialGuest: false,
    name: "Klara Walach",
    role: "Taniec współczesny",
    styles: ["Taniec współczesny (6–9 lat)", "Taniec współczesny (10–12 lat)"],
    bio: `Klara swoją przygodę z tańcem rozpoczęła już w wieku 3 lat. Od 14 lat nieustannie rozwija swoje umiejętności, zdobywając doświadczenie w różnych stylach i poznając kolejne oblicza tańca. Najbliższe są jej jazz oraz modern, style, które pozwalają jej wyrażać siebie, rozwijać kreatywność i muzykalność, a jednocześnie pracować nad techniką oraz świadomością własnego ciała.
W ubiegłym sezonie Klara brała udział w licznych zawodach organizowanych przez WDF i PFT, wielokrotnie stając na podium. Osiągnięcia te są dla niej nie tylko powodem do dumy, ale przede wszystkim motywacją do dalszego rozwoju.
Taniec nauczył ją systematyczności, wytrwałości i odpowiedzialności, a także pracy pod presją oraz pokonywania własnych ograniczeń. Dziś chce dzielić się swoją pasją i doświadczeniem z innymi, pokazując, że taniec to nie tylko technika, ale również sposób na wyrażanie siebie i budowanie pewności siebie.`,
    image: "/assets/images/team/klaraWalach/klaraWalachProfile.jpg",
    images: ["/assets/images/team/klaraWalach/klaraWalachProfile.jpg"],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/klarawalach/",
  },
  "marianna-stanislawska": {
    id: "marianna-stanislawska",
    slug: "marianna-stanislawska",
    active: true,
    specialGuest: false,
    name: "Marianna Stanisławska",
    role: "Taniec współczesny",
    styles: [
      "Taniec współczesny (10–12 lat)",
      "Taniec współczesny (7–11 lat) – Polanów",
    ],
    bio: `Marianna swoją taneczną przygodę rozpoczęła już w wieku 5 lat. Początkowo rozwijała się w hip-hopie, jednak z czasem pokochała również taniec współczesny. Przez lata zdobywała doświadczenie i liczne sukcesy zarówno w występach solowych, jak i grupowych.
Jest wykwalifikowaną instruktorką tańca i nieustannie rozwija swoje umiejętności, regularnie uczestnicząc w treningach, warsztatach oraz zawodach tanecznych. Dzięki temu stale poszerza swoją wiedzę, poznaje nowe techniki i czerpie inspirację od innych tancerzy i choreografów.
Marianna ma również doświadczenie w pracy z dziećmi,była opiekunką na koloniach oraz prowadziła animacje. Na swoich zajęciach stawia przede wszystkim na dobrą atmosferę, wzajemny szacunek i radość z tańca. Zależy jej na tym, aby każde dziecko czuło się swobodnie, mogło rozwijać swoje umiejętności i przede wszystkim czerpało przyjemność z ruchu.`,
    image: "/assets/images/team/mariannaStanislawska/mariannaStanislawskaProfile.jpg",
    images: [
      "/assets/images/team/mariannaStanislawska/mariannaStanislawskaProfile.jpg",
    ],
    localizations: ["Koszalin", "Polanów"],
    instagram: "https://www.instagram.com/m.a.r.i.a.n.n.a.009/",
  },
  "paulina-kapuscinska": {
    id: "paulina-kapuscinska",
    slug: "paulina-kapuscinska",
    active: true,
    specialGuest: false,
    name: "Paulina Kapuścińska",
    role: "Hip-hop",
    styles: ["HYPE CREW (grupa średniozaawansowana hip-hop)"],
    bio: `Paulina Kapuścińska to tancerka i instruktorka, która swoją przygodę z tańcem rozpoczęła około 13 lat temu. Przez 9 lat była częścią formacji Quality Crew, z którą brała udział w licznych zawodach tanecznych, wielokrotnie stając na podium. To właśnie lata spędzone w Quality Crew dały jej ogromne doświadczenie zarówno w rywalizacji, jak i pracy zespołowej oraz występach na scenie.
Przez cały ten czas nieustannie rozwijała swoje umiejętności, biorąc udział w licznych warsztatach prowadzonych przez czołowych tancerzy z Polski i zagranicy. Ma również na swoim koncie udział w projektach wideo i teledyskach. Obecnie tańczy także w Teatrze Muzycznym Adria.
Paulina ma doświadczenie również jako instruktorka. Przez rok prowadziła grupę dzieci w wieku 7–11 lat, pracując z nimi nad formacjami, duetami oraz solówkami. Jej podopieczne wielokrotnie zdobywały miejsca na podium.
W tym sezonie Paulina dołącza do kadry HoodMood, gdzie poprowadzi grupę Hype Crew. Na jej zajęciach możecie spodziewać się dużej dawki energii, charakteru, muzykalności i przede wszystkim dobrej zajawki na taniec`,
    image: "/assets/images/team/paulinaKapuscinska/paulinaKapuscinskaProfile.jpg",
    images: [
      "/assets/images/team/paulinaKapuscinska/paulinaKapuscinskaProfile.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/pauilna_/",
  },
  "aleks-kultys": {
    id: "aleks-kultys",
    slug: "aleks-kultys",
    active: true,
    specialGuest: false,
    name: "Aleks Kultys",
    role: "Akrobatyka",
    styles: ["Akrobatyka 4–6 latki", "Akrobatyka"],
    bio:
      "Poznajcie naszego trenera,akrobatyka to jego pasja i ogromna część naszych treningów. Aleks ukończył dwuczęściowe szkolenie z zakresu metodyki nauczania oraz techniki wykonywania elementów w skokach na ścieżce. Szczególną uwagę poświęca również bezpieczeństwu, posiada wiedzę i umiejętności z zakresu prawidłowego asekurowania oraz podtrzymywania dzieci podczas nauki nowych elementów, dzięki czemu treningi są nie tylko efektywne, ale przede wszystkim bezpieczne i dostosowane do poziomu każdego uczestnika. Swoje doświadczenie zdobywał, pracując z dziećmi na półkoloniach, w playparku oraz prowadząc regularne zajęcia z akrobatyki dla dzieci i młodzieży.",
    image: "/assets/images/team/aleksKultys/aleksKultysProfile.jpg",
    images: [
      "/assets/images/team/aleksKultys/aleksKultysProfile.jpg",
      "/assets/images/team/aleksKultys/aleksKultys.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/aleks_pk77",
  },
  "kamila-maik": {
    id: "kamila-maik",
    slug: "kamila-maik",
    active: true,
    specialGuest: true,
    name: "Kamila Maik",
    role: "Master Trainer",
    styles: ["Master Trainer"],
    bio: `Instruktorka tańca współczesnego, choreografka i założycielka Takiego Studia Tańca
Założycielka i serce Takiego Studia.
Absolwentka Ogólnokształcącej Szkoły Baletowej w Gdańsku, gdzie zdobyła dyplom tancerki tańca współczesnego, baletu oraz tańca charakterystycznego. Od najmłodszych lat występowała na deskach Opery Bałtyckiej i Filharmonii Bałtyckiej, zdobywając sceniczne doświadczenie, które dziś przekazuje swoim podopiecznym.
Kamila od zawsze łączy taniec z ruchem w jego najpełniejszej formie – pasjonuje ją akrobatyka, movement, animal flow oraz taniec organiczny, które pomagają jej rozwijać świadomość ciała i poszukiwać nowych jakości w ruchu.
W latach 2014–2021 była choreografem i trenerem grup kadrowych w Klubie Sportowym Kokartka, a w 2018 roku otrzymała prestiżową nagrodę „Sopocka Muza dla Młodego Twórcy”. Obecnie prowadzi grupy turniejowe Takiego Studia, z którymi zdobywa liczne tytuły i nagrody, m.in. Mistrzostwo Polski WADF, II Vice Mistrzostwo Polski PZTAN oraz wysokie miejsca w ligach tanecznych IDO i WADF.
Kamila nie ogranicza się jedynie do sali treningowej – współtworzy produkcje wideo jako tancerka i choreografka oraz aktywnie działa na trójmiejskiej scenie tanecznej. Od 2015-2020 roku była związana z Sopockim Teatrem Tańca, gdzie współtworzyła spektakle taneczne.
Jako instruktorka jest niezwykle charyzmatyczna, wymagająca i inspirująca. Na swoich zajęciach łączy dyscyplinę z empatią – stawia na rozwój techniczny, świadomość ruchu i wzajemne wsparcie w grupie. Pod jej skrzydłami dorasta kolejne pokolenie tancerzy i instruktorów.
Taniec to dla niej wolność i ekspresja – jej motto brzmi:
„Wolność, węże i floorwork!” 🐍
W 2023 roku została wyróżniona tytułem Trener Roku przez Dziennik Bałtycki, co potwierdza jej ogromne zaangażowanie, pasję i nieustanne sukcesy w pracy z młodymi tancerzami.`,
    image: "/assets/images/team/kamilaMaik/kamilaMaik.jpg",
    images: [
      "/assets/images/team/kamilaMaik/kamilaMaik.jpg",
      "/assets/images/team/kamilaMaik/kamilaMaik2.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/kamilamaik",
  },
  "joanna-jedynak": {
    id: "joanna-jedynak",
    slug: "joanna-jedynak",
    active: true,
    specialGuest: true,
    name: "Joanna Jedynak",
    role: "Master Trainer",
    styles: ["Master Trainer"],
    bio: `Joanna jest instruktorką tańca, trenerką i choreografką w Studio Tańca Joy Dance Szczecin, specjalizującą się w stylach jazz, modern & contemporary, ballet oraz commercial. Jest finalistką, medalistką i stypendystką Global Dance Open oraz finalistką Dance World Cup. Wielokrotnie zdobywała medale i miejsca finałowe Mistrzostw Polski oraz Europy IDO, w tym tytuł Mistrzyni Polski w kategorii show duety oraz II Wicemistrzyni Polski w solo ballet repertoire. Nieustannie rozwija swoje umiejętności pod okiem czołowych choreografów z Polski i świata, a podczas zajęć stawia na technikę, świadomość ciała, muzykalność i rozwój artystyczny każdego tancerza.`,
    image: "/assets/images/team/joannaJedynak/joannaJedynak.jpg",
    images: [
      "/assets/images/team/joannaJedynak/joannaJedynak.jpg",
      "/assets/images/team/joannaJedynak/joannaJedynak2.jpg",
      "/assets/images/team/joannaJedynak/joannaJedynak3.jpg",
    ],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/joanna.jedynak_",
  },
  "nikola-suchocka": {
    id: "nikola-suchocka",
    slug: "nikola-suchocka",
    active: true,
    specialGuest: true,
    name: "Nikola Suchocka",
    role: "MASTER TRAINER",
    styles: ["MASTER TRAINER"],
    bio: `Nikola Suchocka to jedna z czołowych tancerek polskiej sceny hip-hopowej. Tancerka, choreografka, instruktorka tańca i trenerka specjalizująca się w hip-hopie. Aktywnie działa również jako sędzia zawodów tanecznych, łącząc doświadczenie zdobywane na parkiecie z pracą artystyczną i rozwojem innych tancerzy.
Jest członkinią zespołu tanecznego SÓL, z którym regularnie rywalizuje na zawodach w całej Polsce, wielokrotnie stając na podium. Zespół SÓL miał również okazję otwierać finały Red Bull Dance Your Style w Teatrze Szekspirowskim w Gdańsku.
Na swoim koncie ma liczne sukcesy na zawodach tanecznych. W tym sezonie zwyciężyła 🥇 Tancbuda Challenge oraz 🥇 Infinite Force w kategorii Hip-Hop 1 vs 1 18+.
Jej doświadczenie wykracza poza scenę zawodów,obejmuje projekty komercyjne, produkcje reklamowe, teledyski, choreografię, pracę zespołową oraz sędziowanie zawodów tanecznych. Dzięki temu swobodnie porusza się zarówno w świecie rywalizacji tanecznej, jak i profesjonalnych realizacji scenicznych, medialnych i komercyjnych.
W tańcu łączy sportową determinację, wyjątkową muzykalność, mocny charakter i indywidualny styl. Jako trenerka i instruktorka przekazuje swoje doświadczenie kolejnym pokoleniom tancerzy, jednocześnie nieustannie rozwijając własny język ruchu i artystyczną tożsamość.`,
    image: "/assets/images/team/nikolaSuchocka/nikolaSuchocka.jpg",
    images: ["/assets/images/team/nikolaSuchocka/nikolaSuchocka.jpg"],
    localizations: ["Koszalin"],
    instagram: "https://www.instagram.com/nikolasuchocka",
  },
} satisfies Record<string, Trainer>;

export type TrainerId = keyof typeof trainers;

export const activeTrainers: Trainer[] = Object.values(trainers).filter(
  (trainer) => trainer.active,
);
