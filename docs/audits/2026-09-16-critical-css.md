# CSS blokujący pierwszy render strony głównej — 2026-09-16

## Wniosek

Bezpiecznie zmniejszono CSS strony głównej z **169 484 do 165 585 B** bez kompresji. Zysk po gzip to tylko **480 B**. Nie znaleziono potwierdzonej, bezpiecznej redukcji CSS, która zastąpiłaby efekt inlineCss: po porządkowaniu mediana standardowa wynosi **5,182 s**, a z inlineCss **4,201 s** (około **18,9% mniej**). Dlatego inlineCss pozostaje. Próby większego podziału CSS zostały zmierzone i cofnięte; nie pozostawiono regresji układu dla poprawienia wyniku audytu.

Zakres prac: wyłącznie dostarczanie i generowanie CSS. Wideo, API, routing, PDF i SEO nie były zmieniane.

## Dokładne arkusze i ich pochodzenie

Rozmiary w bajtach. Gzip poniżej oznacza skompresowany plik, bez nagłówków HTTP. `transferSize` z Lighthouse jest osobną wartością.

| Arkusz przed zmianą | Bez kompresji | Gzip | Pochodzenie |
| --- | ---: | ---: | --- |
| `01933b92a7251704.css` | 163 255 | 25 211 | `app/layout.tsx` → `app/globals.css` → Tailwind, `tw-animate-css`, `shadcn/tailwind.css`, własne globalne reguły |
| `7e2cf4c758f2a718.css` | 5 475 | 873 | `app/layout.tsx` → `next/font/google`: Anton i Roboto Condensed; deklaracje `@font-face`, fallbacki i klasy zmiennych fontów |
| `b2469b9507bbb18e.css` | 754 | 271 | `myComponents/common/motion/TextReveal.module.css` importowany przez komponenty nagłówków i timeline |
| **Łącznie** | **169 484** | **26 355** | Trzy arkusze blokujące render |

W bazowym przebiegu Lighthouse transfer tych trzech odpowiedzi wyniósł odpowiednio **25 603 / 1 255 / 1 087 B**, łącznie **27 945 B**. Różnica względem gzip wynika m.in. z nagłówków i sposobu serwowania bardzo małych odpowiedzi.

Pełne powiązania klas z plikami źródłowymi znajdują się w [source-inventory.json](./css/source-inventory.json). Klasa może występować w wielu plikach; nie przypisuję jej pełnego kosztu bajtowego każdemu komponentowi.

### Arkusz globalny

To przede wszystkim wynik generowania klas dla całej aplikacji, a nie sam ręcznie napisany `globals.css`:

| Część skompilowanego CSS | Bajty bez kompresji |
| --- | ---: |
| Warstwa utilities | 130 665 |
| Warstwa components — m.in. `.ui-*` | 11 915 |
| Warstwa base — m.in. reset i typografia | 4 032 |
| Warstwa theme | 2 617 |
| Warstwa properties | 2 452 |

Pozostałą część stanowią m.in. zmienne `:root`/`.dark`, reguły typografii, keyframes i rejestracje właściwości. Wartości warstw są podziałem pliku, nie szacunkami z zakładki Coverage.

Automatyczne skanowanie obejmowało nie tylko `app`, `myComponents`, `components`, `lib` i `data`, ale też raporty w `docs`, skrypty, tekstowe pliki publiczne i plik „różności przydatne”. Stąd zbędne generowane klasy, np. `rounded-[28px]`, fragmenty dawnych cieni, `before:from-white/25` oraz selektor `[xml:lang]`. Dokumentacja Tailwinda opisuje skanowanie jako analizę tekstu, bez rozumienia, czy dany token jest faktycznie używanym `className`. [Źródła klas Tailwind](https://tailwindcss.com/docs/detecting-classes-in-source-files).

`tw-animate-css` zapewnia używane klasy animacji m.in. dialogów i nawigacji. `shadcn/tailwind.css` definiuje tokeny, keyframes i warianty — nie jest osobnym dużym arkuszem pobieranym z sieci. Nie usuwano tych importów ani resetu, zmiennych motywu, typografii i reguł responsywnych potrzebnych do poprawnego pierwszego renderu.

### CSS sekcji poniżej pierwszego ekranu

Konkretne ścieżki na stronie głównej:

- `app/page.tsx` → sekcje `Offer`, `LifeAtHoodmood`, `Localizations` i kolejne → `SectionContent.tsx` → `TextReveal.module.css`.
- `app/page.tsx` → `HowToJoin.tsx` → `Timeline.tsx` → ten sam moduł CSS.
- `PageContent.tsx` oraz `PreviousEvents.tsx` używają tego modułu na podstronach; nie są powodem jego obecności w hero.

Reguły modułu dotyczą tytułów i opisów z `data-reveal`, a nie H1 hero. Mimo położenia sekcji poniżej ekranu CSS jest dostarczany przed renderem, ponieważ sekcje istnieją w HTML serwera. Samo `next/dynamic` nie gwarantuje odroczenia arkusza przy SSR.

Klasy utility tych sekcji, kart, formularzy i podstron również trafiały do globalnego Tailwinda. Obecność poza pierwszym viewportem nie oznacza, że można je usunąć: są potrzebne przy przewijaniu, różnych rozmiarach ekranu i stanach interfejsu. Nie zastosowano purge na podstawie pojedynczego zrzutu Coverage ani przełączania `media` arkuszy po hydratacji.

## Eksperymenty i decyzje

Każdy zbudowany, oceniany wariant ma trzy pomiary Lighthouse mobile. Metoda: lokalny produkcyjny build Next.js 16.3.4 przez Webpack, Lighthouse 13.4.1, domyślna symulacja mobile, świeża przeglądarka. Cache optymalizatora obrazów serwera był rozgrzany. Przebiegi były sekwencyjne, bez równoległego builda lub testu przeglądarkowego.

| Wariant | Próba 1 | Próba 2 | Próba 3 | Mediana LCP | Decyzja |
| --- | ---: | ---: | ---: | ---: | --- |
| Bazowy standardowy | 5,484 s | 5,107 s | 5,105 s | **5,107 s** | punkt odniesienia |
| Wydzielenie formularzy | 5,483 s | 5,106 s | 5,107 s | **5,107 s** | cofnięte |
| Formularze + połączone animacje | 5,184 s | 5,107 s | 5,032 s | **5,107 s** | cofnięte |
| Bezpieczna redukcja, standardowy CSS | 5,485 s | 5,182 s | 5,106 s | **5,182 s** | wariant porównawczy |
| Bezpieczna redukcja, inlineCss | 4,201 s | 4,805 s | 4,047 s | **4,201 s** | pozostawione |

W poprzednim etapie inlineCss przed tą redukcją miało medianę 4,128 s (3 przebiegi). Obecne 4,201 s nie jest wykazaną poprawą względem tamtego inlineCss; rozrzut przebiegów jest większy niż ta różnica. Bezpieczne odchudzenie CSS nie przyniosło istotnego spadku LCP.


### 1. CSS formularzy przy kontrolkach — cofnięte

Wykluczono ze źródeł globalnego Tailwinda `field`, `input-group`, `input`, `textarea`, `checkbox`, `select`, `label`, `separator`; ich klasy generowano w arkuszu importowanym razem z kontrolkami. Tokeny współdzielono przez `@reference`. Początkowe odwołanie do całego `globals.css` propagowało też źródła skanowania, dlatego oddzielono tokeny od dyrektyw `@source` przed pomiarami.

Globalny arkusz spadł do **144 730 B / 22 254 B gzip**. Kontrolki otrzymały osobny arkusz **27 566 B / 4 837 B gzip**. Nie blokował on pierwszego renderu home, ale był później pobierany przez prefetch nawigacji. W przykładowym przebiegu lokalnym żądanie zaczęło się po 149 ms, po obserwowanym LCP 69 ms. Nie był to więc całkowicie usunięty transfer.

Mediana LCP nie poprawiła się. Co ważniejsze, kontrola wyglądu wykazała regresję kaskady: powielone klasy bazowe w później ładowanym arkuszu potrafiły nadpisywać globalne warianty responsywne. Przykład: `text-base` nadpisywało `md:text-lg`, zmieniając tekst FAQ na desktopie z 18 na 16 px. Wystąpiły też różnice szerokości układów formularzy. Cały podział i dodatkowe importy zostały cofnięte.

### 2. Połączenie modułu animacji z globalnym CSS — cofnięte

W ramach poprzedniego wariantu przeniesiono te same reguły animacji do arkusza globalnego, zachowując selektory o tej samej specyficzności pod unikalnymi nazwami. Liczba blokujących arkuszy spadła z trzech do dwóch, łączny rozmiar do **150 857 B / 23 202 B gzip**.

Trzy pomiary nadal dawały medianę około 5,11 s. Brak mierzalnej korzyści nie uzasadniał utraty izolacji CSS Module i zmian w pięciu komponentach. Przywrócono oryginalny moduł oraz wszystkie importy.

### 3. Ograniczenie źródeł Tailwinda i martwa reguła — pozostawione

`app/globals.css` używa teraz `source(none)` oraz jawnie skanuje runtime: `app`, `myComponents`, `components`, `lib`, `data`. Nadal obejmuje wszystkie podstrony, stany, warianty responsywne i klasy zapisane w danych. Nowy katalog z UI poza tymi źródłami trzeba dopisać do `@source`.

Usunięto też globalną regułę `.ui-link-subtle-icon`, która nie miała użycia w kodzie aplikacji. Zachowano używany `.ui-link-subtle`.

| Arkusz po zmianie | Bez kompresji | Gzip |
| --- | ---: | ---: |
| `28e6a22803c0de67.css` — globalny | 159 356 | 24 731 |
| `7e2cf4c758f2a718.css` — fonty | 5 475 | 873 |
| `b2469b9507bbb18e.css` — animacje | 754 | 271 |
| **Łącznie** | **165 585** | **25 875** |

Redukcja: **3 899 B bez kompresji (2,3%)** i **480 B gzip (1,8%)**. Transfer trzech odpowiedzi w finalnym wariancie standardowym: **27 465 B**. Jest to niewielkie, bezpieczne porządkowanie generowanego CSS, a nie wykazana duża poprawa LCP. Przy okazji nowe raporty audytowe nie będą już zmieniać CSS aplikacji.

## Największe źródło render delay

Dodatkowe pojedyncze przebiegi z rzeczywistym throttlingiem — **nie mediany i nie wartości do mieszania z symulacją**:

| Wariant | TTFB | Load delay | Load duration | Render delay | LCP |
| --- | ---: | ---: | ---: | ---: | ---: |
| pruned-standard | 5.3 ms | 0 ms | 0 ms | 1694.1 ms | 1699.3 ms |
| pruned-inline | 6.6 ms | 0 ms | 0 ms | 906.9 ms | 913.5 ms |

W standardowym wariancie żądania arkuszy zaczęły się około **586 ms** od nawigacji. CSS fontów skończył pobieranie po **1167 ms**, moduł animacji po **1158 ms**, a główny Tailwind po **1612 ms**. Tekstowy LCP nastąpił po **1699 ms**, około 87 ms po ostatnim arkuszu. InlineCss usunęło te osobne blokujące żądania; w analogicznym śladzie LCP wyniosło **914 ms**.


LCP nadal stanowi tekst HOODMOOD. Fazy load delay i load duration **samego tekstowego elementu LCP** wynoszą 0; oczekiwanie na CSS zalicza się do render delay. `lcp-breakdown-insight` dotyczy obserwowanego śladu, a nie symulowanej wartości około 5 s — nie należy sumować jego czasów z wynikiem symulatora. [Fazy LCP](https://web.dev/articles/optimize-lcp).

Duży arkusz z Tailwindem pozostaje ostatnią blokadą CSS. Oszczędność 480 B gzip nie usuwa kosztu odkrycia i pobrania zewnętrznych arkuszy. Mniejszy moduł animacji i deklaracje fontów kończą pobieranie wcześniej. Wynik nie uzasadnia przypisywania pozostałych sekund symulatora samemu parsowaniu CSS albo hydratacji.

## Decyzja o inlineCss i ograniczenia

Pozostawiono inlineCss: trzy pomiary po redukcji CSS wykazały medianę **4,201 s**, wobec **5,182 s** dla tych samych reguł w zewnętrznych arkuszach. Wszystkie trzy przebiegi inline były szybsze niż trzy przebiegi wariantu standardowego. Dodatkowy ślad z faktycznym throttlingiem potwierdza korzyść usunięcia blokujących żądań.

Koszt dokumentu po redukcji CSS: **46 182 B transferu** standardowo i **98 383 B** inline; bez kompresji odpowiednio 417 666 i 753 017 B. W poprzednim etapie dokument inline miał około 99,3 KB transferu. Nie wykazano nowego istotnego zysku LCP względem poprzedniego inlineCss.

To nadal opcja eksperymentalna i globalna. Nie jest to ekstrakcja wyłącznie krytycznych reguł hero: Next umieszcza cały CSS w HTML, także w danych RSC. Zwiększa dokument i ogranicza osobne cache’owanie CSS przy pełnych wejściach na stronę. [Dokumentacja inlineCss](https://nextjs.org/docs/app/api-reference/config/next-config-js/inlineCss).

Nie zmieniano reguł dzielenia chunków Next.js. Domyślne łączenie uwzględnia kolejność i zależności importów; używany plugin Webpack ma też limit 100 KiB przy łączeniu modułów, który główny arkusz przekracza. Samo ręczne manipulowanie importami nie gwarantuje jednego bezpiecznego arkusza. [Dokumentacja cssChunking](https://nextjs.org/docs/app/api-reference/config/next-config-js/cssChunking).

Wyniki dotyczą localhost i zimnego cache przeglądarki, nie docelowego CDN, użytkowników powracających ani danych terenowych. TTFB localhost nie opisuje produkcji. Ślady są w `/tmp/hoodmood-css` (nietrwałe); trwałe podsumowanie i ustawienia pomiarów znajdują się w [measurements.json](./css/measurements.json).

## Weryfikacja

- Produkcyjny `npm run build -- --webpack` — poprawny.
- `npm run typecheck` — poprawny.
- 12 kontroli przeglądarkowych: home, kontakt, zapisy, cennik Koszalin, oferta Koszalin i FAQ, każda przy 390 i 1440 px.
- Porównanie wybranych nagłówków i kontrolek: **0 różnic** względem wersji bazowej w fontach, rozmiarach, paddingach, borderach, wysokościach i szerokościach. **0 poziomych overflow**, **0 wyjątków przeglądarki**.
- Nie oznacza to pełnego wizualnego pokrycia wszystkich stanów aplikacji. Zachowano oryginalne arkusze blokujące render, z wyjątkiem dotychczasowego inlineCss; nie wprowadzono odroczonego aplikowania stylów po hydratacji.
- Wszystkie 8 eksperymentalnie zmienionych kontrolek oraz 5 użytkowników modułu animacji są identyczne z plikami z początku zadania. Dodatkowe arkusze i plik mapowania klas zostały usunięte.
- W kodzie pozostały tylko: ograniczenie źródeł i usunięcie martwej reguły w `app/globals.css` oraz aktualizacja odnośnika do raportu przy zachowanym `inlineCss` w `next.config.ts`.

Odtwarzanie: produkcyjny serwer na porcie 3100 i trzy osobne uruchomienia `lighthouse http://localhost:3100 --only-categories=performance --output=json --save-assets`. Dodatkowe ślady diagnostyczne używały `--throttling-method=devtools`. Pełne ustawienia profilu i wersję Lighthouse zapisano w JSON.
