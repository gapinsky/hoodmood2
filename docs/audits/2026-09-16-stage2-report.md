# Hoodmood — drugi etap optymalizacji technicznej

Data: 16.09.2026. Zmiany w kodzie i zasobach zostały wykonane. Nie wdrażano strony na hosting.

## Wynik

- Lokalizacje i kontakt mają wspólne źródło danych; dane rejestrowe są oddzielone.
- Sześć lokalnych stron oferty/grafiku jest statycznie generowanych. Nieznany trener zwraca 404.
- Hero desktop: **30,38 MB → 5,16 MB**, rzeczywisty panoramiczny plik 1600×900.
- Logo: **4,03 MB → 36,2 KB**. Favicon: **231,2 KB → 7,5 KB**.
- PDF nie tworzy tabeli ani nie pobiera bibliotek przed kliknięciem. Sprawdzono eksport dla wszystkich miast, blokadę podwójnego kliknięcia i sprzątanie po błędzie.
- Instagram: cache Next.js 10 minut, wspólny timeout 6 sekund, odróżnienie awarii od pustego feedu i Suspense.
- Mediana mobile LCP: **5,26 s → 5,11 s**. Transfer strony głównej: **5,10 MB → 3,59 MB**. Poprawa transferu jest znaczna, LCP pozostaje do dalszej pracy.

## Baseline i metodologia

Projekt ma `package-lock.json`; używano npm. Next.js 16.3.4, React, TypeScript. `cacheComponents` **nie jest włączone** i nie zostało włączone. Sprawdzono konfigurację Next, metadane, źródła lokalizacji, media, priority/preload/quality, H1, generowanie tras i importy PDF.

Przed zmianami uruchomiono istniejący test SEO oraz trzy Lighthouse mobile na lokalnym buildzie produkcyjnym. Po zmianach wykonano trzy końcowe pomiary bez równoległych testów eksportu PDF. Lighthouse 13.4.1, headless Chrome, domyślny profil mobile z symulacją sieci/CPU. Porównujemy mediany, nie obiecujemy wyniku na produkcji. Wcześniejszy pojedynczy wynik audytu 12,4 s nie jest baseline tej serii.

Pierwsza robocza seria „po” pokazała większy rozrzut i częściowo pokrywała się z testami przeglądarkowymi. Dlatego poniżej użyto końcowej, oddzielnej serii. Są to dane laboratoryjne, nie CrUX ani pomiar INP.

## Lokalizacje i dane firmy

Źródło: `data/locations.ts`:

- Koszalin: ul. Zwycięstwa 115, **75-211 Koszalin**.
- Polanów: ul. Gradowe Wzgórze 5.
- Biały Bór: ul. Tamka 3.
- Kontakt: +48 577 198 599, hoodmood.recepcja@gmail.com.

Dla Polanowa i Białego Boru nie dodawano kodów pocztowych. Linki map są generowane z danych lokalizacji. Nawigacja lokalizacji również korzysta ze wspólnego źródła.

`legalEntity` zachowuje dotychczasową nazwę firmy, adres **ul. Wenedów 18F/5, 75-847 Koszalin**, NIP i REGON. Te dane nie zostały zastąpione adresem studia ani niezależnie potwierdzone w rejestrze. Zmiana adresu studia w regulaminie dotyczyła definicji miejsca zajęć i opisu zajęć, nie siedziby prawnej organizatora. „Zwierzyniecka 115” znajdowała się w `app/regulamin/data.ts`; skorygowano ją na podstawie adresu podanego w wymaganiach. Historycznych PDF-ów prawnych nie edytowano.

W kodzie bieżących danych nie pozostały `75-601` ani `Zwierzyniecka`. Stopka jest podpisana „Adres studia”, aby nie sugerować adresu rejestrowego. JSON-LD opisuje organizację Hoodmood i trzy odrębne obiekty Place/PostalAddress, korzystając z tych samych danych i SITE_URL.

## Trasy statyczne

Build potwierdza prerendering:

- `/oferta/koszalin`, `/oferta/polanow`, `/oferta/bialy-bor`;
- `/grafik/koszalin`, `/grafik/polanow`, `/grafik/bialy-bor`;
- istniejących 14 profili kadry.

Parametry miast pochodzą z `locationList`; `dynamicParams = false` zamyka zbiór. Profile trenerów używają istniejącej tablicy instruktorów zarówno dla lookupu, jak i `generateStaticParams`. Wymagają nowego buildu po zmianie listy. `/kadra/nie-istnieje` zwróciło **HTTP 404** w końcowym teście, bez własnego pseudo-404.

## Hero video

| Parametr | Przed | Po |
|---|---|---|
| Plik | `hero-desktop.mp4` | `hero-desktop-wide.mp4` |
| Rozdzielczość | 2160×3840 | **1600×900**, kwadratowe piksele |
| Kodek | H.264 | H.264 High / yuv420p |
| Długość | ok. 12,63 s | ok. 12,63 s |
| Klatkaż | 30 fps | 30 fps |
| Bitrate pliku | ok. 19,24 Mb/s | ok. **3,27 Mb/s** |
| Waga | 30 382 791 B | **5 157 752 B** |
| Audio | niepotrzebne do tła | brak |

Najpierw przycięto źródłowy pionowy materiał do `2160:1216:0:262`, potem przeskalowano do panoramicznego obrazu. Pionowy offset odpowiada wcześniejszemu `object-position: center 10%` dla kadru bliskiego 16:9. Przy innych proporcjach okna `object-cover` nadal może przycinać boki; nie da się zachować całego pionowego filmu w każdym panoramicznym kadrze.

Porównano warianty 1920×1080/CRF23 (~8,7 MB), 1600×900/CRF25 (~5,2 MB) i 1280×720/CRF27 (~2,9 MB), oglądając klatki w rozmiarze zbliżonym do wyświetlania. Wybrano środkowy wariant, zachowujący więcej detali niż najmniejszy. Dodatkowo sprawdzono kadry w 8. i 12. sekundzie. Kodowanie: libx264, preset medium, CRF25, brak audio i timecode, `faststart`. Wersja mobilna pozostała osobnym plikiem.

Stan hero rozróżnia static/loading/playing/failed. Film nie jest montowany dla reduced motion lub Save Data. Poster znika dopiero po rzeczywistym `playing`. Odrzucone `play()` i błędy mediów zachowują poster. IntersectionObserver pauzuje film poza ekranem; visibilitychange pauzuje go przy ukrytej karcie. MatchMedia, observer, timery i listenery są sprzątane.

Test Chrome potwierdził: brak żądania filmu przy reduced motion, poster przy odrzuconym autoplay, pauzę poza viewportem, wznowienie po powrocie, Save Data oraz reakcję na symulowane visibilitychange. Ostatni test dotyczy handlera zdarzenia, nie fizycznego urządzenia iOS.

## LCP, fonty i JavaScript

Usunięto `hero-enter` i `hero-enter-delay-1` z kontenera H1. H1 nie dostaje już opacity 0, blur ani opóźnienia 140 ms po hydratacji. Pozostałe elementy hero i sekcje niżej zachowują reveal. Animacja przewijanych nazw lokalizacji została jawnie wyłączona dla reduced motion.

Zachowano `next/font/google`: Anton 400 oraz Roboto Condensed 400/700, używane przez aktualny design. Nie zmieniano kroju i nie dodawano nowych font preloadów. Lighthouse nie wskazał oszczędności w audycie font-display. Trzy arkusze CSS nadal są blokujące; nie usuwano ich w ciemno. Około 45–48 KB potencjalnie niewykorzystanego JS pochodzi z istniejących współdzielonych chunków frameworka, nie z bibliotek PDF na pierwszym ekranie.

| Mediana 3 pomiarów mobile | Przed | Po |
|---|---:|---:|
| Performance | 79 | 80 |
| LCP | 5,26 s | 5,11 s |
| FCP | 1,96 s | 1,96 s |
| TBT | 6 ms | 7 ms |
| Transfer | 5,10 MB | 3,59 MB |
| Potencjalnie niewykorzystany JS | 45,0 KB | 47,5 KB |

Spadek transferu to około 29,6%. Różnica TBT jest minimalna; nie należy interpretować jej jako realnej regresji interaktywności. LCP poprawił się tylko około 3% i nadal nie osiąga dobrego progu 2,5 s. Nie przedstawiam tej zmiany jako rozwiązania wszystkich problemów CWV. [Definicje Web Vitals](https://web.dev/articles/vitals).

## Obrazy i public/

| Asset | Przed | Po | Redukcja |
|---|---:|---:|---:|
| Desktop hero | 30 382 791 B | 5 157 752 B | **83,02%** |
| Logo SVG → WebP | 4 028 970 B | 36 190 B | **99,10%** |
| Favicon ICO | 231 179 B | 7 527 B | **96,74%** |

SVG był opakowaniem bitmapy PNG 2045×1655, a nie użytecznym wektorem. Wyodrębniono tę samą bitmapę i przygotowano WebP 480 px szerokości, wystarczający dla logo w stopce i awatarów. Sprawdzono zgodność wyglądu. Nie instalowano biblioteki runtime do optymalizacji. ICO zawiera teraz rzeczywiste warianty 16, 32 i 48 px; obejrzano najmniejsze ikony.

TeamCard i TrainerGallery używają jakości 85 zamiast 100. Dla przykładowego zdjęcia o szerokości 660 px porównano WebP 75/85/100: około 14/21/63 KiB. Wybrano 85. To porównanie jednego zdjęcia, nie gwarantowany współczynnik dla każdego obrazu. Konfiguracja Next dopuszcza 85. Galeria preloaduje wyłącznie pierwszy obraz. Below-fold zdjęcia życia szkoły i obraz dofinansowania nie mają priority/preload. Rozmiary `sizes` kafli życia szkoły odpowiadają ich udziałom w siatce; przegląd komponentów Image fill nie znalazł brakujących `sizes`.

`public/`: **174 152 057 B → 59 374 126 B**  137 plików. Po zmianach jedynym plikiem ponad 5 MB jest nowe hero; brak plików ponad 10 MB i duplikatów identycznych bajtowo.

Do ignorowanego `source-assets/` przeniesiono oryginalny film 70,95 MB, poprzednią wersję hero 30,38 MB, oryginalne logo i kopię favicon, dwa duże nieużywane zdjęcia bento oraz cztery nieużywane kopie zdjęć `groupPhotos` identyczne z używanymi zdjęciami timeline. Najpierw sprawdzono referencje runtime i hashe. Pliki pozostają lokalnie, ale trzeba przechowywać ich backup poza deploymentem/repozytorium.

## Instagram

Przy wyłączonym cacheComponents użyto **Next Data Cache poprzez unstable_cache**, z revalidate 600 s dla poprawnego, zweryfikowanego wyniku. Wewnętrzny fetch ma no-store, aby uniknąć dwóch niezależnych cache wydłużających świeżość do kolejnych okresów TTL. Nie zbudowano własnej bazy ani cache w pamięci.

Dwa warianty zapytania (z licznikami i fallback) współdzielą jeden `AbortSignal.timeout(6000)`, zamiast dostawać po 6 sekund każdy. Błędny status, nieprawidłowy payload lub błąd sieci powodują wyjątek wewnątrz funkcji cache; obsługa błędu odbywa się poza nią. Dzięki temu nie zapisujemy pustego błędu zamiast poprawnego feedu; mechanizm Next może zachować poprzedni wynik przy nieudanym odświeżeniu. [Next.js unstable_cache](https://nextjs.org/docs/app/api-reference/functions/unstable_cache).

UI odróżnia success z pustą listą od error. Endpoint paginacji zwraca 503 dla awarii, zachowując istniejące posty w interfejsie. Suspense pozwala wyrenderować resztę aktualności podczas oczekiwania. Cache dotyczy wyłącznie publicznego feedu, nie formularzy ani e-maili.

Testy z kontrolowanymi odpowiedziami obejmują pusty poprawny feed, post i kursor, awarię sieci, błędny JSON o nieprawidłowym kształcie, brak konfiguracji, fallback i wspólny timeout oraz ustawienie TTL. Nie wyłączano prawdziwego Instagrama na produkcji ani nie czekano 10 minut na realną awarię rewalidacji — zachowanie stale opiera się na mechanizmie Next, nie na własnym magazynie danych.

## PDF i dostępność

`DownloadSchedule` jest małym Client Component z przyciskiem. Kliknięcie dynamicznie importuje moduł eksportu, a następnie html2canvas-pro i jsPDF. Dopiero wtedy montowana jest tabela w odizolowanym hoście `aria-hidden` + `inert`, bez focusowalnych kontrolek. Normalny DOM stron grafiku ma jeden H1 i nie zawiera `pdf-root`.

Eksport czeka na fonty z limitem czasu, rasteryzację wykonuje w skali **1,5** z limitem 8 megapikseli. Obejrzano render tabel wszystkich trzech miast; tekst jest czytelny. Typowy Koszalin daje 2400×1507 px. Skala 2 tworzyłaby około 78% więcej pikseli przy tych samych wymiarach tabeli, dlatego nie wybrano jej bez potrzeby.

Przycisk jest disabled i pokazuje „Generowanie PDF…”. Ref blokuje także dwa kliknięcia zanim React zdąży odmalować UI. try/catch/finally obsługuje błąd, resetuje stan, usuwa techniczny DOM i zwalnia canvas; unmount sygnalizuje anulowanie. Komunikat błędu ma role=status. PDF jest kompresowany bez utraty jakości obrazu PNG.

Końcowe pliki: Koszalin około 233 KiB, Polanów 78 KiB, Biały Bór 51 KiB. Przed włączeniem kompresji w tej serii eksporty miały około 10/8,6/5,5 MiB. Zapis pliku sprawdzono rzeczywiście w Chrome, nie tylko mockiem. Testy obejmowały 1440 px oraz 390 px i wymuszenie wyjątku canvas; DOM był usuwany także po błędzie. W sieci nie było bibliotek PDF przed kliknięciem; pojawiały się dopiero podczas eksportu.

## Build i weryfikacja

- `npm run typecheck`: OK.
- `git diff --check`: OK.
- `npm run build`: nadal zatrzymuje się na błędzie środowiska Turbopack `binding to a port / Operation not permitted` podczas istniejącego CSS.
- **`npm run build -- --webpack`: OK** — kompilacja, TypeScript, prerendering i finalizacja zakończone poprawnie. Nie zmieniono domyślnego bundlera projektu.
- Test SEO całej sitemapy: **36 stron OK**.
- Wymagane trasy: poprawne strony HTTP 200, nieznany trener HTTP 404; grafiki po jednym H1.
- Test przeglądarkowy: trzy eksporty, double click, błędy i cleanup, reduced motion, Save Data, autoplay failure, viewport oraz symulowane visibilitychange: OK.
- Test Instagram: OK dla kontrolowanych scenariuszy.
- Lighthouse: trzy baseline i trzy końcowe pomiary mobile.

## Zmienione pliki

Poniżej pliki zmienione w tym etapie; nie obejmuje to wcześniejszych niezacommitowanych zmian niezwiązanych z zadaniem.

### Lokalizacje, kontakt, dane strukturalne i statyczne trasy

- `data/locations.ts`
- `data/tabs.ts`
- `app/page.tsx`
- `app/oferta/[city]/page.tsx`
- `app/grafik/[city]/page.tsx`
- `app/kadra/[trainerSlug]/page.tsx`
- `app/kontakt/page.tsx`
- `app/kontakt/actions.ts`
- `app/zapisz-sie/actions.ts`
- `app/polityka-prywatnosci/data.ts`
- `app/regulamin/data.ts`
- `app/regulamin-wejscia-probnego/page.tsx`
- `lib/email/autoresponders.ts`
- `myComponents/common/AnyQuestionsContact.tsx`
- `myComponents/footer/Footer.tsx`
- `myComponents/sections/localizations/data.ts`

### Hero, obrazy i konfiguracja

- `myComponents/sections/hero/Hero.tsx`
- `myComponents/sections/hero/HeroVideo.tsx`
- `app/globals.css`
- `app/favicon.ico`
- `app/dofinansowanie/page.tsx`
- `myComponents/pages/team/TeamCard.tsx`
- `myComponents/pages/team/TrainerGallery.tsx`
- `myComponents/sections/lifeAtHoodmood/LifeAtHoodmood.tsx`
- `myComponents/sections/lifeAtHoodmood/imageSrcs.ts`
- `next.config.ts`

### Instagram

- `app/aktualnosci/page.tsx`
- `app/api/instagram/route.ts`
- `myComponents/pages/news/LatestInstagramPosts.tsx`
- `myComponents/pages/news/instagram/InstagramFeed.tsx`
- `myComponents/pages/news/instagram/InstagramPostCard.tsx`
- `myComponents/pages/news/instagram/instagramApi.ts`
- `myComponents/pages/news/instagram/types.ts`

### PDF

- `app/grafik/[city]/DownloadSchedule.tsx`
- `myComponents/pages/schedule/DownloadSchedulePdf.tsx`
- `myComponents/pages/schedule/SchedulePdfTable.tsx`

### Testy i dokumentacja

- `scripts/check-instagram.cjs`
- `scripts/check-performance-browser.cjs`
- `.gitignore`
- `README.md`
- `docs/audits/2026-09-16-stage2-report.md`
- `docs/audits/stage2/`

### Nowe media runtime

- `public/assets/optimized/hero/hero-desktop-wide.mp4`
- `public/assets/optimized/branding/logo.webp`

### Przeniesione poza public

- `public/assets/videos/heroDesktop.mp4`
- `public/assets/optimized/hero/hero-desktop.mp4`
- `public/assets/svg/mainLogo/logo.svg`
- `public/assets/images/bento/instruktorzy.jpg`
- `public/assets/images/bento/obozy.jpg`
- `public/assets/images/groupPhotos/group.jpg`
- `public/assets/images/groupPhotos/group2.jpg`
- `public/assets/images/groupPhotos/group3.jpg`
- `public/assets/images/groupPhotos/group4.jpg`

## Pozostałe ograniczenia

Mobile LCP nadal wynosi około 5,1 s w symulacji. Kolejny etap powinien opierać się na pomiarach publicznego wdrożenia, krytycznej ścieżce CSS/fontów i rzeczywistych urządzeniach; nie ma dowodu, że dalsze obniżanie jakości zdjęć rozwiąże ten problem.

Nie weryfikowano rejestrowych identyfikatorów firmy ani nie przepisywano historycznych PDF-ów prawnych. Nie wykonano zewnętrznego Rich Results Test ani testów na fizycznym Safari/iOS. Są to granice wykonanej weryfikacji, a nie twierdzenie o potwierdzonej zgodności wszystkich przeglądarek. Format danych strukturalnych oraz zgodność adresów sprawdzono w kodzie i HTML.

Materiały: [Lighthouse](stage2/lighthouse-summary.json), [trasy HTTP](stage2/routes.json), [testy browser](stage2/browser-results.json), [assety](stage2/public-assets.json), [SEO](stage2/seo-results.json), [chunki PDF](stage2/pdf-chunks.json).
