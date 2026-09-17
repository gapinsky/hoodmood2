# Mobile LCP strony głównej — 2026-09-16

## Zakres i metoda

Wyłącznie ścieżka krytyczna renderowania strony głównej. Bez zmian SEO, routingu, PDF, Instagrama, danych lokalizacji ani plików wideo.

Lokalny **produkcyjny** build Next.js 16.3.4 (`npm run build -- --webpack`, `npm run start -- --port 3100`), Lighthouse 13.4.1, profil mobile, spowolnienie CPU ×4. Każda seria: trzy osobne uruchomienia Chrome z zimnym cache przeglądarki. Cache optymalizatora obrazów serwera był już rozgrzany. To pomiar laboratoryjny, nie wynik użytkowników produkcji ani pomiar zimnego startu serwera/CDN.

Dwie osobne metody:

- `simulate`: standardowa symulacja Lighthouse, porównywalna z wyjściowym wynikiem około 5,1 s.
- `devtools`: faktyczne ograniczenie sieci/CPU w przeglądarce; umożliwia odczyt rzeczywistej kolejności zdarzeń. Wyników tych metod nie mieszamy.

Ustawienia i wybrane dane wszystkich 15 przebiegów zapisano w [measurements.json](./lcp/measurements.json). Pełne robocze trace/devtoolslog pozostają w `/tmp/hoodmood-lcp` i nie są trwałym archiwum repozytorium.

## Wyniki

| Wariant | Próba 1 | Próba 2 | Próba 3 | Mediana |
| --- | ---: | ---: | ---: | ---: |
| Bazowy — symulacja | 5,483 s | 5,106 s | 5,107 s | **5,107 s** |
| Tylko preload Anton Latin — symulacja (cofnięte) | 5,182 s | 5,106 s | 5,106 s | **5,106 s** |
| Inline CSS — symulacja (pozostawione) | 4,128 s | 3,869 s | 4,807 s | **4,128 s** |
| Bazowy — rzeczywisty throttling | 1,758 s | 1,724 s | 1,720 s | **1,724 s** |
| Inline CSS — rzeczywisty throttling | 0,892 s | 0,894 s | 0,894 s | **0,894 s** |

Spadek mediany: **19,2%** w standardowej symulacji i **48,2%** przy rzeczywistym throttlingu. Preload Anton samodzielnie zmienił medianę o mniej niż 1 ms — brak wykazanego efektu. Rozrzut symulacji po inlining CSS (3,87–4,81 s) pozostaje zauważalny; wszystkie trzy przebiegi były jednak szybsze niż bazowe.


## Rozbicie LCP

Elementem LCP jest tekst **HOODMOOD**, `span` wewnątrz H1 hero. Nie jest nim film ani poster. Dla tekstu fazy pobierania samego elementu wynoszą 0; oczekiwanie na CSS i fonty wchodzi do render delay. [Definicja faz LCP](https://web.dev/articles/optimize-lcp).

Poniżej fazy **konkretnych przebiegów odpowiadających medianom** rzeczywistego throttlingu (bez sumowania median osobnych faz):

| Wariant | TTFB | Load delay | Load duration | Render delay | LCP |
| --- | ---: | ---: | ---: | ---: | ---: |
| Bazowy — rzeczywisty throttling | 5.5 ms | 0 ms | 0 ms | 1718.6 ms | 1724.1 ms |
| Inline CSS — rzeczywisty throttling | 6.0 ms | 0 ms | 0 ms | 887.6 ms | 893.6 ms |


Ważne: `lcp-breakdown-insight` w raporcie Lighthouse opisuje obserwowany ślad. Przy metodzie `simulate` nie sumuje się do symulowanego wyniku około 5,1 s. Nie przypisuję różnicy „hydratacji”. Dla bazowej mediany symulacja daje około 452 ms TTFB i 4655 ms pozostałego czasu, ale to model, nie zmierzony czas wykonywania Reacta.

TTFB pochodzi z localhost. Nie określa czasu odpowiedzi serwera produkcyjnego.

## Faktyczna ścieżka krytyczna

W początkowym diagnostycznym przebiegu z faktycznym throttlingiem:

| Zdarzenie | Czas od nawigacji |
| --- | ---: |
| Start pobierania trzech blokujących CSS | około 582 ms |
| Koniec największego CSS | około 1635 ms |
| FCP i LCP tekstu | około 1721 ms |
| Pobieranie fontów Latin wykrytych przez CSS | około 1704–2956 ms |
| Pobranie chunka JS strony głównej | około 4544–5196 ms |
| Start żądania filmu hero | około 8183 ms |

Trzy zewnętrzne arkusze miały łącznie około 27,9 KB transferu. Pierwszy render następował krótko po zakończeniu ostatniego blokującego arkusza. Kontrolna zmiana dostarczania CSS skróciła LCP także przy rzeczywistym throttlingu — to potwierdzenie przyczynowe, nie wyłącznie rekomendacja z audytu.

### HeroContent, Server/Client Components i hydratacja

`Hero.tsx` jest Server Component, a jego treść przekazywana jest jako `children` do klienckiego `HeroContent`. H1 jest obecne w HTML serwera. Selektory animacji `.hero-enter` nie obejmują H1. Nie czeka ono na `useEffect`, IntersectionObserver ani stan `revealed`.

Kontrola przeglądarkowa przy wyłączonym JavaScript: H1 widoczne (`opacity: 1`), poprawny rozmiar i brak poziomego overflow przy szerokościach 390 i 1440 px. Po włączeniu JS animacje i odtwarzanie hero nadal działały. Nie ma uzasadnienia, by przebudowywać te granice komponentów w ramach tej optymalizacji.

### Font H1

Anton z `next/font` ma `font-display: swap`. Preload dotyczył `latin-ext`, natomiast napis HOODMOOD korzysta z pliku Latin. Przetestowano zmianę preładowanego subsetu Anton na Latin w izolacji. Trzy pomiary nie wykazały poprawy mediany, więc zmiana została cofnięta. W śladzie z ograniczoną siecią tekst może pojawić się fontem zastępczym przed zakończeniem pobierania Anton.

### Hero video i dekodowanie

Źródło filmu jest początkowo puste; jest ustawiane dopiero z efektu klienta, po dodatkowych 1200 ms. W przebiegach z throttlingiem pobieranie zaczyna się około 8,2–8,4 s od nawigacji, długo po tekstowym LCP. Nie ma wcześniejszego żądania MP4 hero.

Ślad Lighthouse nie udostępnił osobnego znacznika rozpoczęcia dekodowania wideo. Nie podaję więc wymyślonego czasu dekodera: dekodowanie tego filmu nie może poprzedzać udostępnienia źródła i pobrania jego danych. W tych przebiegach nie blokowało pierwszego renderu tekstu. Poster był analizowany osobno jako obraz i nie był elementem LCP. Ładowania, kompresji ani opóźnienia filmu nie zmieniono.

## Pozostawiona zmiana i koszt

`next.config.ts`: `experimental.inlineCss: true`. CSS trafia do HTML, co usuwa oczekiwanie pierwszego renderu na osobne żądania arkuszy. Nie zmienia reguł stylowania ani animacji.

To opcja **eksperymentalna i globalna**, a nie mechanizm inline tylko dla krytycznych reguł hero. Dokumentacja Next.js nie rekomenduje jej bezwarunkowo do produkcji. Pozostawiona ze względu na potwierdzony efekt w obu metodach pomiaru; wycofanie polega na usunięciu tego jednego ustawienia. [Dokumentacja inlineCss](https://nextjs.org/docs/app/api-reference/config/next-config-js/inlineCss).

Koszty:

- HTML po kompresji rośnie z 46 179 do 99 287 bajtów; bez kompresji z 417 666 do 760 822 bajtów. Next umieszcza CSS także w danych RSC.
- CSS przy pełnym wejściu na stronę nie korzysta z osobnego cache przeglądarki. Nie zmierzono bilansu transferu i LCP dla powracających użytkowników ani wszystkich podstron.
- Flaga wpływa na dostarczanie CSS w całej aplikacji. Zakres pomiarów wydajności w tym zadaniu obejmuje wyłącznie stronę główną.
- Wynik symulowany nadal jest powyżej progu dobrego LCP. Nie oznaczam celu 2,5 s jako osiągniętego na produkcji. Po wdrożeniu potrzebna jest weryfikacja na docelowym hostingu i realnych urządzeniach.

## Weryfikacja i odtwarzanie

- `npm run build -- --webpack` — zakończony poprawnie.
- `npm run typecheck` — zakończony poprawnie.
- Chrome: H1 widoczne bez JavaScriptu przy 390 i 1440 px, brak poziomego overflow.
- Chrome po hydratacji: `hero-stage` widoczne, film odtwarzany, font załadowany.
- Eksperyment z fontem cofnięty; `app/layout.tsx`, `HeroContent.tsx` i `HeroVideo.tsx` identyczne jak na początku tego zadania.
- Końcowy build po dodaniu raportu wygenerował CSS większy o 69 bajtów bez kompresji (skanowanie treści przez Tailwind); nie traktowano tego jako istotnej zmiany optymalizacji.

Pomiary (powtórzyć trzy razy dla każdego wariantu, bez równoległego builda lub innego testu przeglądarkowego):

```sh
lighthouse http://localhost:3100 \
  --chrome-flags='--headless --no-sandbox' \
  --only-categories=performance --save-assets \
  --output=json --output-path=/tmp/lcp-run-1.json
```

Dla drugiej metody dodać `--throttling-method=devtools`. Porównywać mediany wyłącznie między przebiegami tej samej metody i na tej samej wersji narzędzi. Konfigurację urządzenia i throttlingu zachowano w JSON.
