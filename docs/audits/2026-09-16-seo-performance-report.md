# Audyt Hoodmood — SEO, wydajność i przypadki brzegowe

Data: 16.09.2026. Audyt aktualnego stanu roboczego projektu, bez wprowadzania poprawek w aplikacji.

## Ocena ogólna

Strona ma dobrą bazę: renderowanie serwerowe, częściowo statyczne podstrony, responsywne komponenty, optymalizację obrazów i działający podstawowy przebieg zapisów. Najpilniejsze problemy nie dotyczą wyglądu. Dotyczą wskazywania właściwych adresów wyszukiwarce, poprawności danych wysyłanych z formularza i dostępności niektórych funkcji na telefonie.

**Najpierw poprawiłbym canonical i metadane, walidację cen oraz telefonu, filtrowanie zajęć dorosłych i menu mobilne. Następnie wagę mediów i czas wyświetlenia głównej treści na mobile.** Nie znalazłem podstaw do ogłaszania awarii całej aplikacji ani potwierdzonego wycieku danych. Nie jest to jednak pełny test penetracyjny.

Priorytety: **P1** — najbliższa seria poprawek; **P2** — kolejny etap; **P3** — usprawnienie. „Potwierdzone” oznacza wynik testu lub jednoznaczny odczyt kodu. Zalecenia wymagające decyzji biznesowej zaznaczam osobno.

## Zakres i wiarygodność pomiarów

- Przegląd routingu, metadanych, sitemap, robots, mediów, formularzy, schematów walidacji, integracji Instagram i generowania PDF.
- Build produkcyjny Next.js 16.3.4 uruchomiony lokalnie na porcie 3100. Testy dotyczą tego buildu, nie serwera deweloperskiego.
- Sprawdzenie HTTP i HTML 36 poprawnych podstron oraz dodatkowych błędnych adresów. Audyt 40 wewnętrznych celów linków.
- Testy przeglądarkowe ośmiu widoków przy szerokościach 320 i 1440 px, dodatkowy test menu przy 390 × 667 px.
- Przejście przez formularz zapisów dla dziecka i dorosłego, bez końcowego wysyłania zgłoszenia.
- Lighthouse 13.4.1: po jednym zimnym pomiarze strony głównej dla mobile i desktopu. Automatyczne sprawdzenia dostępności wybranych widoków.
- TypeScript, produkcyjny build, próba uruchomienia lintowania i audyt zależności.

Nie testowałem doręczenia e-maili, prawdziwych płatności, danych Search Console, ruchu użytkowników, konfiguracji CDN/WAF ani rzeczywistego Safari/iOS. Nie oceniam pozycji strony w Google. Lokalny pomiar nie zastępuje danych z produkcji.

## Wyniki liczbowe

| Pomiar strony głównej | Mobile | Desktop |
|---|---:|---:|
| Lighthouse — wydajność | **73/100** | **99/100** |
| Dostępność | 96/100 | 96/100 |
| Best practices | 100/100 | 100/100 |
| Automatyczne SEO | 100/100 | 100/100 |
| FCP | 2,0 s | 0,4 s |
| LCP | **12,4 s** | 0,9 s |
| TBT | 40 ms | 0 ms |
| CLS | 0 | 0 |
| Zarejestrowany transfer | 5062 KiB, ok. 4,94 MiB | **32 228 KiB, ok. 31,47 MiB** |

Mobile korzysta z symulacji wolniejszej sieci i procesora Lighthouse. LCP 12,4 s jest wynikiem tej symulacji, a nie pomiarem rzeczywistych klientów. Elementem LCP był tekst w hero. Desktopowy wynik 99 nie oznacza małego zużycia transferu: duże wideo ładuje się już po pojawieniu się głównej treści.

Docelowe dobre Core Web Vitals to LCP ≤ 2,5 s, INP ≤ 200 ms i CLS ≤ 0,1, oceniane na 75. percentylu wizyt. TBT z tego raportu nie jest pomiarem INP. [Źródło: Web Vitals](https://web.dev/articles/vitals).

| Weryfikacja projektu | Wynik |
|---|---|
| `npm run typecheck` | Przechodzi |
| `npm run build -- --webpack` | Przechodzi |
| `npm run lint` | **Nie działa — błąd konfiguracji zależności** |
| `npm audit --json` | 0 zgłoszonych znanych podatności w dniu audytu |

## 1. SEO i indeksowanie

### P1 — wszystkie sprawdzone podstrony wskazują canonical strony głównej

**Potwierdzone:** 36 poprawnych podstron HTTP 200 ma canonical `https://hoodmood.vercel.app`. Dotyczy to m.in. oferty, grafiku, cennika, kontaktu i trenerów.

Przyczyna: `app/layout.tsx` definiuje `alternates.canonical: "/"`, a podstrony dziedziczą tę wartość. Podobnie dziedziczony jest główny adres Open Graph.

Skutek: wysyłamy wyszukiwarce sprzeczny sygnał, jakoby różne podstrony były wersjami strony głównej. Nie oznacza to automatycznego usunięcia ich z Google, ale utrudnia prawidłową kanonikalizację. [Zasady Google dotyczące canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

**Poprawka:** każda indeksowalna podstrona powinna wskazywać własny docelowy URL. Domena powinna pochodzić z jednego wspólnego ustawienia. `NEXT_PUBLIC_SITE_URL` nie jest obecnie używany przez kod do budowania tych adresów. Domena Vercel jest wpisana na sztywno również w sitemap, robots i danych strukturalnych. Trzeba potwierdzić docelową domenę produkcyjną przed jej zmianą.

**Warunek odbioru:** canonical, sitemap i Open Graph wskazują spójne adresy właściwych podstron na docelowej domenie.

### P1 — powtarzające się metadane i niepełna sitemap

**Potwierdzone:** 20 z 36 podstron używa tego samego domyślnego tytułu. Brakuje osobnych metadanych m.in. dla lokalnych ofert i grafików. Żadna ze sprawdzonych poprawnych podstron nie ma `og:image`, mimo deklaracji karty Twitter `summary_large_image`.

`app/sitemap.ts` zawiera `/cennik`, który zwraca 404. Brakuje pięciu docelowych stron cennika oraz `/dofinansowanie`. Wszystkie wpisy otrzymują datę `new Date()`, niezależnie od rzeczywistej zmiany treści.

**Poprawka:** unikalny tytuł i krótki opis każdej istotnej strony, osobne metadane lokalizacji, wspólny obraz udostępniania z możliwością nadpisania. Sitemap wyłącznie z docelowymi działającymi stronami. `lastModified` powinien odpowiadać zmianom treści albo zostać pominięty.

Pliki: `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, strony w `app/oferta/[city]`, `app/grafik/[city]`, `app/cennik` i `app/kadra/[trainerSlug]`. Opisy trenerów warto skrócić — pełna biografia nie jest dobrym opisem wyniku wyszukiwania.

### P2 — niespójne informacje lokalne

Adres studia jest zapisany różnie: Zwycięstwa 115 występuje z kodami 75-211 i 75-601, a regulamin w jednym miejscu podaje „Zwierzyniecka 115”. Dane strukturalne strony głównej, stopka, lokalizacje i regulamin wymagają uzgodnienia.

Adres rejestrowy firmy może być inny niż adres studia — tego nie traktuję jako błędu. Należy jasno rozdzielić te dwie informacje i ujednolicić nazwę, adres oraz telefon poszczególnych lokalizacji. Dane strukturalne powinny odzwierciedlać rzeczywistą działalność i docelową domenę. Po zmianach warto zweryfikować je w walidatorze Schema.org i Google Rich Results Test.

### P2 — semantyka grafiku i nieistniejący trener

Trzy strony grafiku mają po dwa nagłówki H1. Drugi pochodzi z tabeli do eksportu PDF, umieszczonej poza ekranem. Cała tabela jest powielona w DOM i nie ma `aria-hidden`.

Pliki: `app/grafik/[city]/DownloadSchedule.tsx`, `myComponents/pages/schedule/SchedulePdfTable.tsx`.

To problem semantyki, dostępności i dodatkowego DOM; sam drugi H1 nie jest dowodem na karę SEO. Eksport warto montować dopiero na żądanie i wyłączyć jego techniczną kopię z drzewa dostępności.

`/kadra/nie-istnieje` pokazuje widok braku strony z `noindex`, ale zwraca HTTP 200 w strumieniowanej odpowiedzi. Nie jest to zwykła indeksowalna strona 200. Warto jednak ujednolicić obsługę nieznanych slugów, np. ograniczając trasę do istniejących trenerów. Inne badane nieistniejące trasy zwracają 404.

## 2. Wydajność i caching

### P1 — desktopowe wideo pozostaje bardzo ciężkie

Plik `public/assets/optimized/hero/hero-desktop.mp4` waży **30 382 791 bajtów, czyli 30,38 MB**. Ma 2160 × 3840 px, 30 kl./s i około 12,6 s długości. Jest pionowym materiałem 4K używanym jako szerokie tło. Poprzednia kompresja zmniejszyła oryginał około 70,95 MB, ale rozmiar nadal jest duży jak na dekoracyjne hero.

**Poprawka:** przygotować wariant dopasowany do rzeczywistego kadru desktopu i potrzebnej rozdzielczości, porównać jakość kilku poziomów kompresji. Nie zwiększać transferu tylko po to, by zachować piksele i tak wycinane przez `object-cover`. Na mobile istnieje osobny plik około 2,36 MB — podział urządzeń już działa.

`myComponents/sections/hero/HeroVideo.tsx` nie uwzględnia preferencji ograniczenia ruchu ani oszczędzania danych. Test z `prefers-reduced-motion` potwierdził dalsze automatyczne odtwarzanie. Poster znika na `canplay`, choć `play()` może zostać odrzucone; brak pełnej obsługi błędu odtwarzania.

**Warunek odbioru:** zdecydowanie mniejszy transfer przy zaakceptowanej jakości, zachowany poster przy błędzie/autoplay blocked, statyczna wersja przy ograniczeniu ruchu. Rozważyć zatrzymanie filmu poza ekranem i w nieaktywnej karcie.

### P1/P2 — mobile LCP wymaga osobnej pracy

LCP dotyczy tekstu hero, więc nie należy przypisywać całych 12,4 s wyłącznie filmowi. Na pierwszym ekranie występują animacje wejścia i opóźnienia tekstu; znaczenie mają także fonty, CSS i kolejność pobierania zasobów. Lighthouse wskazuje m.in. zasoby blokujące renderowanie oraz około 44 KiB niewykorzystanego JavaScriptu.

Najpierw skrócić opóźnienie wyświetlania głównego nagłówka, przejrzeć krytyczne fonty/CSS i dopiero porównać kilka powtarzalnych pomiarów. Animacje sekcji niżej mogą pozostać. Pliki: `myComponents/sections/hero/HeroContent.tsx`, `app/globals.css`, `app/layout.tsx`.

### P2 — ciężkie logo, favicon i niektóre obrazy

- `public/assets/svg/mainLogo/logo.svg` ma **4,03 MB**, mimo wyświetlania w stopce jako niewielkie logo. Należy uprościć SVG albo użyć lekkiej wersji rastrowej. Lazy loading opóźnia koszt, ale go nie usuwa.
- Favicon ma około **230 KB**; można go znacząco zmniejszyć.
- `TeamCard` i galeria trenera używają jakości obrazów 100. Warto porównać niższą jakość wizualnie.
- Pierwszy obraz sekcji życia szkoły ma priorytet ładowania, mimo położenia niżej niż hero; warto ograniczyć konkurencję o transfer na starcie.
- `public` ma około 174,2 MB i 144 pliki. Duże oryginały nie są automatycznie pobierane przez użytkownika, ale zwiększają zasób publikowany z aplikacją. Materiały źródłowe można trzymać poza katalogiem publicznym.

### P2 — caching działa, ale nie jest wykorzystany wszędzie

**Pozytywne:** zasoby `/assets/*` mają na produkcyjnym serwerze `Cache-Control: public, max-age=3600, must-revalidate`. Haszowane pliki frameworka korzystają z cache. Wiele stron jest statycznych, a obrazy korzystają z `next/image`.

Oferty i grafiki trzech stałych miast są renderowane dynamicznie. Warto dodać generowanie znanych parametrów, jeśli treść nadal pochodzi z lokalnych danych. Przykład już istnieje dla trenerów i kategorii cennika.

Aktualności czekają na Instagram pobierany bez cache, bez wyraźnego timeoutu. Awaria zewnętrznego API może opóźniać stronę; pusty wynik nie rozróżnia dobrze braku postów i awarii integracji.

Pliki: `myComponents/pages/news/instagram/instagramApi.ts`, `app/aktualnosci/page.tsx`, `app/api/instagram/route.ts`.

**Poprawka:** krótki cache serwerowy, np. 5–15 minut, timeout, czytelny stan błędu i ewentualne zachowanie poprzedniego poprawnego wyniku. Nie cache’ować zgłoszeń ani danych osobowych formularzy. Nie ma potrzeby zaczynać od service workera.

### P2 — eksport PDF jest kosztowny przed kliknięciem

Kopia tabeli istnieje stale poza ekranem. Komponent eksportu ładuje `html2canvas`, choć użytkownik może nigdy nie pobierać PDF. Renderowanie dużej tabeli w skali 2 może obciążać pamięć telefonu. Brakuje pełnej obsługi błędu i ochrony przed wielokrotnym kliknięciem.

**Poprawka:** import i montowanie na żądanie, stan „generowanie”, blokada kolejnego kliknięcia oraz komunikat błędu. To usprawnienie wydajności i odporności, nie potwierdzona awaria eksportu na każdym urządzeniu.

## 3. Formularze i poprawność danych

### P1 — serwer ufa cenom przesłanym z przeglądarki

`app/zapisz-sie/actions.ts` waliduje kształt danych, a potem sumuje `price` i korzysta z nazw oraz okresu rozliczenia przesłanych przez klienta. Nie odtwarza pozycji z zaufanego katalogu po ID.

Test samego schematu potwierdził akceptację wymyślonej pozycji z ceną 0 oraz powtórzonych pozycji. Nie wysyłałem takich danych do usługi e-mail.

**Skutek:** zgłoszenie i potwierdzenie mogą zawierać nieprawdziwe ceny lub zajęcia. To formularz zapytania, nie płatność — nie stwierdzam obejścia systemu płatniczego.

**Poprawka:** klient wysyła ID i niezbędne opcje, serwer sprawdza istnienie pozycji, lokalizację, dostępność dla uczestnika, duplikaty i wylicza cenę samodzielnie. Status aktywnego kursanta pozostaje deklaracją użytkownika, dopóki nie ma osobnej weryfikacji biznesowej.

### P1 — dorośli nie widzą części przeznaczonych także dla nich zajęć

`lib/data/enrollment-classes.ts` rozpoznaje zajęcia dla dorosłych przez kategorię, fragment nazwy lub minimalny wiek ≥ 18. Zajęcia z szerokim zakresem wieku, np. 7–99, nie przechodzą tego warunku.

W efekcie gałąź dorosłych pokazuje tylko trzy rozpoznane pozycje, a pomija m.in. master, indywidualne i pierwszy taniec, mimo zakresów obejmujących dorosłych.

**Poprawka:** jawnie zdefiniować grupy odbiorców albo filtrować według rzeczywistego przecięcia zakresów wieku. Uzgodnić biznesowo, które pakiety mają być dostępne. Nie usuwać pierwszego tańca — problem leży w dostępności dla właściwej grupy.

### P1 — telefon z +48 jest zmieniany na błędny numer

`lib/schemas/contactSchema.ts` usuwa znaki inne niż cyfry i bierze pierwsze dziewięć cyfr. Potwierdzony przykład:

`+48 577 198 599` → `485771985`, który przechodzi walidację.

Podobne obcinanie występuje w polu telefonu zapisów. **Poprawka:** świadomie obsłużyć prefiks +48 lub walidować format międzynarodowy. Nigdy nie obcinać numeru po cichu. Testy powinny obejmować wklejanie, spacje, myślniki, prefiks i zbyt długi numer.

### P1/P2 — okres rozliczenia nie zawsze odpowiada ofercie

Wszystkie zwykłe pozycje Koszalina dostają `billingPeriod: "monthly"`. Obejmuje to MASTERCLASS opisany jako jednorazowy warsztat. Parser ceny wyciąga tylko liczbę, tracąc informacje takie jak „za godzinę” i „od osoby” przy zajęciach indywidualnych.

**Poprawka:** ceny przechowywać strukturalnie: kwota, waluta, jednostka rozliczenia, wariant kursant/pozostali. Opis nie powinien być źródłem danych liczbowych. Ostateczne jednostki i stawki musi potwierdzić właściciel oferty.

### P2 — walidacja brzegowa i odporność wysyłki

Schematy akceptują imiona złożone ze spacji. Wiek `10abc` i `10.9` może zostać przyjęty przez parsowanie liczby całkowitej. Brakuje rozsądnych maksymalnych długości tekstów i limitu liczby pozycji.

Należy dodać `trim`, pełną walidację wieku, ograniczenia rozmiaru i odrzucanie duplikatów. Normalizacja nazwisk nie powinna usuwać prawidłowych znaków, np. apostrofu.

W kodzie aplikacji nie znalazłem ograniczania częstotliwości wysyłki, ochrony przed automatycznym spamem ani idempotencji. Nie weryfikowałem zabezpieczeń hostingu. Ponowienie zgłoszenia po niejednoznacznym błędzie może prowadzić do duplikatów. Wysyłka oparta wyłącznie na e-mailu nie zapewnia trwałej kolejki zgłoszeń.

Najpierw ograniczenia i deduplikacja; trwały zapis/outbox zależnie od znaczenia biznesowego zapisów. Nie ma potrzeby od razu dodawać uciążliwej CAPTCHA każdemu użytkownikowi.

Polityka prywatności opisuje przede wszystkim kontakt, natomiast zapisy obejmują też wiek, dane opiekuna, wybór zajęć i uwagi z sugestią podania informacji zdrowotnych. Zakres dokumentacji należy porównać z rzeczywistym formularzem i potwierdzić z osobą odpowiedzialną za treść prawną. To obserwacja niespójności zakresu, nie opinia prawna o zgodności.

## 4. Nawigacja, mobile i dostępność

### P1 — rozwinięte menu mobilne ucina zapis

Przy 390 × 667 px i rozwiniętej sekcji menu zawartość ma około 623 px, a kontener około 533 px i `overflow: hidden`. Przycisk zapisów znajduje się poniżej jego granicy i jest ucięty.

Plik: `myComponents/navbar/NavMenuMobile.tsx`.

**Poprawka:** wysokość zależna od dostępnego viewportu i paska nawigacji, wewnętrzne przewijanie, uwzględnienie safe area. Sprawdzić także otwarcie kilku grup i większą czcionkę systemową.

### P1/P2 — trzy uszkodzone cele linków

| Cel | Wynik | Źródło |
|---|---|---|
| `/spotify` | 404 | `myComponents/sections/player/Player.tsx` |
| `/youtube` | 404 | ten sam komponent |
| `/assets/pdf/potwierdzenie-uczestnictwa-w-zajeciach.pdf` | 404 | `myComponents/footer/Footer.tsx` |

Prawdziwe linki społecznościowe istnieją w `myComponents/common/SocialLinks.tsx`. Można użyć jednego źródła adresów. Dokument trzeba przywrócić albo usunąć nieaktualny odnośnik po potwierdzeniu jego przeznaczenia.

### P2 — dostępność wymaga ręcznego domknięcia

Automatyczne wyniki wskazują problemy kontrastu. Przy teksturowanym, warstwowym tle narzędzie część kolorów tła interpretuje jako biel, więc **nie uznaję wszystkich tych wskazań za potwierdzone błędy**. Należy ręcznie zmierzyć kontrast w obu motywach i dla wszystkich stanów przycisków.

Potwierdzona jest natomiast nieuwzględniona preferencja ograniczenia ruchu w hero oraz dodatkowa tabela PDF w drzewie dokumentu. Warto też sprawdzić całą ścieżkę zapisów klawiaturą i czytnikiem ekranu.

Popup sezonowy blokuje pierwszy kontakt z treścią. Zapamiętywanie wizyty w sesji ogranicza powtarzanie, ale warto rozważyć mniej zasłaniający komunikat na telefonie. To rekomendacja UX, nie stwierdzenie kary w Google.

## 5. Routing i utrzymanie

### P1 — nietypowe kategorie cennika powodują HTTP 500

Potwierdzone adresy:

- `/cennik/koszalin/toString`
- `/cennik/koszalin/constructor`
- `/cennik/koszalin/__proto__`

`app/cennik/koszalin/[category]/page.tsx` pobiera pole zwykłego obiektu i sprawdza tylko, czy istnieje wartość. Nazwy odziedziczone z prototypu przechodzą warunek. Rzutowanie TypeScript nie zabezpiecza wejścia w runtime.

**Poprawka:** lista dozwolonych kategorii lub sprawdzenie własnego klucza obiektu. Każda nieznana kategoria powinna zwracać 404, nie 500.

### P1/P2 — linter nie uruchamia się

Zainstalowany `eslint-config-next` 0.2.4 nie dostarcza oczekiwanej konfiguracji `core-web-vitals`; wersje nie są spójne z aktualnym Next i ESLint. To błąd narzędzi, a nie lista ostrzeżeń o klasach CSS.

**Poprawka:** dopasować zależności i format konfiguracji do używanej wersji frameworka. Dopiero działający lint może sprawdzić kod. Typecheck nie zastępuje lintowania.

Nie znalazłem projektu testów regresji ani workflow CI. W pierwszej kolejności dodałbym małe testy dla cen, telefonów, filtrowania grup wiekowych, nieznanych tras i metadanych — nie testy każdej dekoracyjnej klasy.

## 6. Macierz przypadków brzegowych

| Scenariusz | Wynik |
|---|---|
| Osiem widoków przy 320 i 1440 px | Brak wykrytego poziomego overflow; brak uszkodzonych załadowanych obrazów |
| Zapisy: dziecko na 320 px, dorosły na 1440 px | Przejście do podsumowania działa |
| Przejście kontakt → podsumowanie | W testowanej ścieżce bez przedwczesnego wysłania zgłoszenia |
| Cofnięcie i ponowne wejście | Wybrane zajęcia zachowane |
| Usunięcie wybranych zajęć | Działa |
| Brak wymaganej zgody | Odrzucany przez schemat |
| Fałszywa pozycja, cena 0, duplikaty | Schemat je akceptuje — do poprawy |
| Telefon z +48 | Błędnie obcinany — do poprawy |
| Same spacje w nazwisku, niepełny zapis wieku | Zbyt łagodna walidacja |
| Zwykła nieistniejąca strona/miasto/kategoria | 404 |
| Nieistniejący trener | Widok not-found i noindex, ale strumieniowany HTTP 200 |
| Kategorie `constructor`, `toString`, `__proto__` | HTTP 500 |
| Rozwinięte menu 390 × 667 | Ucięty przycisk zapisów |
| Ograniczenie ruchu w systemie | Hero nadal odtwarza wideo |

Do dodatkowej weryfikacji na urządzeniach: iOS Safari, klawiatura ekranowa, obrót telefonu, powiększony tekst, blokada autoplay, wolna/zerwana sieć, błędy Instagram i Resend, wielokrotne kliknięcie wysyłki, rzeczywiste doręczenie oraz zachowanie cache po wdrożeniu nowych mediów. Wyników tych scenariuszy nie dopisuję jako sprawdzonych.

## 7. Zalecana kolejność prac

1. **Poprawność działania i SEO:** canonical/domena, sitemap, tytuły, ceny wyliczane na serwerze, telefon, zajęcia dla dorosłych, nietypowe kategorie 500, menu mobilne, martwe linki.
2. **Szybkość pierwszej wizyty:** nowy wariant hero, lekkie logo/favicon, szybsze pojawienie się H1, ograniczenie priorytetu obrazów poniżej pierwszego ekranu. Powtórzyć pomiary po każdej większej zmianie.
3. **Odporność i koszt działania:** cache/timeout Instagram, statyczne lokalne oferty i grafiki, PDF na żądanie, ograniczenia wysyłki, deduplikacja i monitoring błędów.
4. **Kontrola jakości:** naprawiony lint, mały zestaw regresji w CI, ręczna dostępność i prawdziwe urządzenia. Po wdrożeniu Search Console oraz pomiar CWV z realnych wizyt.

Nie zaczynałbym od przebudowy całej architektury. Największy efekt dadzą konkretne poprawki w istniejących komponentach i wspólnym modelu danych.

## Materiały z audytu

- [HTTP, metadane i nagłówki](2026-09-16-http.json)
- [Weryfikacja linków](2026-09-16-links.json)
- [Wyniki przeglądarkowe i automatyczna dostępność](2026-09-16-browser.json)
- [Pełny Lighthouse mobile](2026-09-16-lighthouse-mobile.json)
- [Pełny Lighthouse desktop](2026-09-16-lighthouse-desktop.json)
- [Podsumowanie audytu zależności](2026-09-16-dependencies.json)

Wysokie automatyczne SEO 100/100 nie unieważnia opisanych błędów: test pojedynczej strony nie ocenia poprawności canonical względem całej struktury serwisu, kompletności sitemap ani prawidłowości oferty i formularzy.
