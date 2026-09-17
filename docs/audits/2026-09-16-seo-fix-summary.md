# Wdrożenie poprawek SEO — 16.09.2026

Zmiany wprowadzono bezpośrednio w kodzie. Lokalny build produkcyjny i test HTTP potwierdzają prawidłowe metadane wszystkich **36 stron** sitemapy. Nie wykonywano wdrożenia na hosting.

## Efekt

- Jedna konfiguracja domeny: `NEXT_PUBLIC_SITE_URL`, domyślnie `https://hoodmood.pl`.
- Lokalną publiczną zmienną zmieniono z localhost na `https://hoodmood.pl`. Tę samą wartość należy ustawić w konfiguracji hostingu przed buildem; plik `.env.local` nie trafia do repozytorium.
- Każda poprawna strona ma własny canonical i `og:url`, unikalny title oraz description. Root layout nie narzuca już canonical strony głównej.
- Dynamiczne strony oferty, grafiku, cennika i trenerów korzystają z `generateMetadata` oraz istniejących danych miasta/kategorii/trenera.
- Opisy normalizują whitespace i są skracane na granicy słowa do maksymalnie 160 znaków dla istniejących treści.
- OG i Twitter mają rzeczywisty wspólny obraz ekipy: `/assets/images/realLife/teamFreaky.jpg` (2048 × 1366). Zachowano istniejący obraz zamiast generować nowy plik 1200 × 630; platformy mogą go kadrować.
- Sitemap zawiera 36 działających, docelowych adresów, bez sztucznych dat aktualizacji.
- Robots publikuje produkcyjny adres sitemap i host.
- JSON-LD korzysta ze wspólnej domeny i jest renderowany w HTML serwera; znaki `<` są bezpiecznie kodowane.
- W kodzie aplikacji nie pozostał adres `hoodmood.vercel.app`. Dawne wyniki audytu zachowują historyczne wartości.
- Nie zmieniono wyglądu ani logiki formularzy. W szablonach e-maili ujednolicono jedynie źródło domeny linków.

## Zmienione pliki

Lista dotyczy tej naprawy, nie wcześniejszych niezacommitowanych zmian użytkownika.

| Plik | Zmiana |
|---|---|
| `lib/seo.ts` | SITE_URL, absolutne adresy, wspólny obraz, skracanie opisów i fabryka metadanych |
| `lib/seo-pages.ts` | Rejestr tytułów i opisów statycznych stron, współdzielony z sitemapą |
| `app/layout.tsx` | metadataBase z konfiguracji; usunięcie odziedziczonego canonical i OG URL; obrazy społecznościowe |
| `app/page.tsx` | Metadane strony głównej; domena JSON-LD i bezpośredni rendering danych strukturalnych |
| `app/oferta/[city]/page.tsx` | Dynamiczne metadane lokalnej oferty, istniejące nazwy miast z nawigacji |
| `app/grafik/[city]/page.tsx` | Dynamiczne metadane lokalnego grafiku |
| `app/cennik/koszalin/[category]/page.tsx` | Metadane z aktualnej kategorii i wspólna walidacja własnych kluczy; nieznane kategorie nie przechodzą przez prototyp obiektu |
| `app/kadra/[trainerSlug]/page.tsx` | Metadane trenera, skrócona biografia i notFound dla nieznanego sluga |
| `app/cennik/bialy-bor/page.tsx` | Własne metadane lokalnego cennika |
| `app/cennik/polanow/page.tsx` | Własne metadane lokalnego cennika |
| `app/kontakt/page.tsx` | Własne metadane kontaktu |
| `app/zapisz-sie/page.tsx` | Własne metadane zapisów |
| `app/kadra/page.tsx` | Własne metadane listy kadry |
| `app/kolonie/page.tsx` | Własne metadane kolonii i obozów |
| `app/aktualnosci/page.tsx` | Własne metadane aktualności |
| `app/faq/page.tsx` | Własne metadane FAQ |
| `app/dofinansowanie/page.tsx` | Własne metadane dofinansowania |
| `app/regulamin/page.tsx` | Własne metadane regulaminu |
| `app/regulamin-wejscia-probnego/page.tsx` | Uzupełnienie metadanych o canonical, OG i Twitter |
| `app/polityka-prywatnosci/page.tsx` | Własne metadane polityki prywatności |
| `app/polityka-prywatnosci/data.ts` | Adres witryny ze wspólnej konfiguracji |
| `lib/email/autoresponders.ts` | Domena wewnętrznych linków ze wspólnej konfiguracji, bez zmiany wysyłki |
| `app/sitemap.ts` | Docelowe trasy z rejestru stron i istniejących danych; usunięcie lastModified |
| `app/robots.ts` | Host i sitemap z SITE_URL, zachowane allow |
| `.env.local` | Wyłącznie NEXT_PUBLIC_SITE_URL ustawione na docelową domenę |
| `scripts/check-seo.mjs` | Powtarzalny test HTTP całej sitemapy, metadanych, obrazów, JSON-LD i błędnych slugów |
| `README.md` | Instrukcja domeny, utrzymywania metadanych i uruchamiania testu |
| `docs/audits/2026-09-16-seo-fixed.json` | Wyniki końcowej weryfikacji 36 stron |
| `docs/audits/2026-09-16-seo-fix-summary.md` | Niniejsze podsumowanie |

## Zmiany sitemapy

Dodane adresy:

- `/dofinansowanie`
- `/cennik/bialy-bor`
- `/cennik/polanow`
- `/cennik/koszalin/zajecia`
- `/cennik/koszalin/pakiety-zajec`
- `/cennik/koszalin/zajecia-indywidualne`

Usunięty adres: `/cennik` (404). Nie dodano `/cennik/koszalin`, ponieważ jest przekierowaniem. Zachowano pozostałe istniejące strony, sześć lokalnych ofert/grafików i czternaście profili kadry. Wszystkie adresy sitemapy używają `https://hoodmood.pl` i zwracają HTTP 200 w lokalnym buildzie.

## Przykładowe rzeczywiste metadane z odpowiedzi HTTP

### `/`

- Canonical: `https://hoodmood.pl`
- Title: Szkoła tańca i akrobatyki — Koszalin, Polanów, Biały Bór | Hoodmood
- Description: Zajęcia tańca i akrobatyki dla dzieci, młodzieży i dorosłych w Koszalinie, Polanowie i Białym Borze. Poznaj Hoodmood, sprawdź grafik i zapisz się online.

### `/oferta/koszalin`

- Canonical: `https://hoodmood.pl/oferta/koszalin`
- Title: Oferta zajęć tanecznych — Koszalin | Hoodmood
- Description: Poznaj ofertę zajęć Hoodmood — Koszalin. Zobacz dostępne treningi i wybierz zajęcia tańca lub akrobatyki dla siebie lub swojego dziecka.

### `/grafik/koszalin`

- Canonical: `https://hoodmood.pl/grafik/koszalin`
- Title: Grafik zajęć tanecznych — Koszalin | Hoodmood
- Description: Sprawdź aktualny grafik zajęć Hoodmood — Koszalin. Zobacz dni i godziny treningów tańca i akrobatyki oraz zaplanuj swój udział w zajęciach.

### `/kadra/talita-jarzecka`

- Canonical: `https://hoodmood.pl/kadra/talita-jarzecka`
- Title: Talita Jarzęcka – CEO | Hoodmood
- Description: Talita to doświadczona choreografka, trenerka i artystka sceniczna, której fundamentem jest solidne wykształcenie muzyczno-taneczne. Ukończyła studia…

## Walidacja

- `npm run typecheck`: **OK**.
- `git diff --check`: **OK**.
- `npm run build`: Turbopack zatrzymuje się na ograniczeniu środowiska `binding to a port: Operation not permitted`, podczas przetwarzania istniejącego CSS. Nie jest to błąd typów/metadanych; domyślnego bundlera nie zmieniano.
- `npm run build -- --webpack`: **OK**, kompilacja, TypeScript, prerendering i finalizacja buildu zakończone poprawnie.
- `node scripts/check-seo.mjs http://localhost:3100`: **OK** dla wszystkich 36 stron, robots, sitemapy, obrazka społecznościowego i JSON-LD.
- Sprawdzono siedem niepoprawnych dynamicznych adresów: brak indeksowalnej strony i brak canonical. Test dopuszcza strumieniowane 200 wyłącznie z `noindex`, zgodnie z zachowaniem App Routera.
- Pomocniczo sprawdzono fallback domeny, zmianę domeny przez zmienną środowiskową, normalizację whitespace i skracanie opisu.

Test HTTP sprawdza także unikalność title i description, zgodność tytułów/opisów OG oraz Twitter, dokładnie jeden prawidłowy canonical i brak przekierowań w sitemapie. Testy nie wysyłają formularzy ani wiadomości.

[Pełne wyniki metadanych](2026-09-16-seo-fixed.json). Implementacja korzysta ze standardowego [Metadata API Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-metadata).

Po wdrożeniu warto ponownie uruchomić test przeciwko publicznemu adresowi, a następnie zgłosić sitemapę w Search Console. Zmiana kodu nie jest potwierdzeniem ponownego zindeksowania stron przez Google.
