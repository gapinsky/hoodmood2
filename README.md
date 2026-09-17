# Hoodmood

Strona szkoły tańca w Next.js (App Router), React i TypeScript. Style: Tailwind CSS, komponenty bazowe: shadcn/ui i Radix.

## Uruchomienie

```sh
npm ci
npm run dev
```

Serwer deweloperski: `http://localhost:3000`. Konfigurację lokalną trzymaj w `.env.local`; nie dodawaj sekretów do repozytorium.

## Struktura

- `app/` — adresy stron, layouty, loadingi, API i akcje serwerowe. Lokalne `_components` należą do konkretnej trasy (np. formularz zapisów).
- `myComponents/common/headers/` — `PageContent` (h1), `SectionContent` (h2), `PageIntro` (duży nagłówek) i `LocationPageHeader` (nagłówek z wyborem miasta).
- `myComponents/common/navigation/` — wspólna nawigacja lokalizacji.
- `myComponents/common/motion/` — współdzielone style animacji tekstu.
- `myComponents/common/` — pozostałe współdzielone elementy układu i przyciski.
- `myComponents/pages/` — komponenty konkretnych podstron, pogrupowane według funkcji: oferta, cennik, grafik, kadra, aktualności, kolonie.
- `myComponents/sections/` — sekcje strony głównej i ich lokalne dane.
- `myComponents/forms/` — wspólne pola formularzy i style filtrów.
- `components/ui/` — bazowe elementy interfejsu. Bez logiki konkretnej podstrony.
- `lib/hooks/` — współdzielone hooki, w tym `useRevealInView`.
- `lib/` — funkcje pomocnicze, integracje i schematy walidacji. `normalizeText` jest niezależne od komponentów.
- `data/` — dane współdzielone przez strony. Dane używane tylko przez jedną funkcję mogą leżeć obok niej (np. `app/kadra/data.ts`).
- `public/` — obrazy, filmy, ikony i pozostałe pliki statyczne.

## Zasady porządku

Komponent zostaje przy swojej funkcji, dopóki nie jest potrzebny w kilku miejscach. Wtedy przenosimy go do `common`, a czystą funkcję do `lib`. Nie importujemy stylów ani helperów z komponentów obcej podstrony. Nie tworzymy osobnego komponentu dla każdej pojedynczej etykiety.

Nagłówki lokalizacji korzystają z `LocationPageHeader` i tablic z `data/tabs.ts`. Style filtrów są w `myComponents/forms/filterStyles.ts`. Kwoty i stawki członkowskie są w `data/pricingData.ts`; ich wybór następuje przed sortowaniem cennika.

## Sprawdzenie zmian

### Cache plików statycznych

W produkcji pliki pod `/assets/` (zdjęcia, tła, filmy i lokalne fonty) mają
`Cache-Control: public, max-age=3600, must-revalidate`. Przeglądarka może używać
zapisanej kopii przez godzinę; później sprawdza jej aktualność na serwerze.
Nie stosujemy `immutable`, ponieważ nazwy plików nie zawierają wersji.
Przy pilnej podmianie pliku zmień jego nazwę i odwołania, aby od razu użyć nowego URL.
Obrazy przetwarzane przez `next/image` zachowują osobny, domyślny cache Next.js.
Reguła nie obejmuje stron, API ani formularzy i jest wyłączona w `npm run dev`.

### Kontrole

```sh
npm run typecheck
npm run lint
npm run build
```

`typecheck` sprawdza również nieużywane importy i parametry. Build wymaga dostępu do fontów Google i konfiguracji integracji używanych przez stronę.

Obecna instalacja `eslint-config-next` (0.2.4) nie udostępnia modułów importowanych w `eslint.config.mjs`. Do czasu aktualizacji zależności `npm run lint` zgłasza błąd konfiguracji; nie jest to wynik sprawdzenia kodu.

Weryfikacja refaktoru: `npm run build -- --webpack` przechodzi. Domyślny Turbopack zgłosił w środowisku roboczym błąd uruchamiania procesu (`Operation not permitted`); nie zmieniamy z tego powodu domyślnego bundlera projektu.


### SEO i domena produkcyjna

Ustaw `NEXT_PUBLIC_SITE_URL=https://hoodmood.pl` w środowisku builda i hostingu.
To publiczna domena SEO, nie adres lokalnego serwera ani automatyczny adres preview.
Domyślna wartość to `https://hoodmood.pl`. Po zmianie zmiennej wykonaj nowy build.

`lib/seo.ts` buduje canonical, Open Graph i Twitter; `lib/seo-pages.ts` zawiera
metadane statycznych tras współdzielone z sitemapą. Trasy dynamiczne korzystają
z danych miast, kategorii cennika i trenerów. Przy dodawaniu nowej strony uzupełnij
metadane oraz sitemapę. `lastModified` dodawaj wyłącznie na podstawie dat treści.
Domyślny obraz udostępniania to istniejące zdjęcie ekipy, bez generowania nowego pliku.

Po buildzie uruchom `npm run start -- --port 3100`, a następnie:

```sh
node scripts/check-seo.mjs http://localhost:3100
```

Test sprawdza wszystkie strony sitemapy, unikalność metadanych, canonical/OG URL,
obrazy OG/Twitter, robots i niepoprawne parametry dynamicznych tras. Opcjonalny
trzeci argument to oczekiwana domena SEO (domyślnie `https://hoodmood.pl`).

### Lokalizacje, media i eksport

`data/locations.ts` jest źródłem adresów studiów i kontaktu; `legalEntity` zawiera
oddzielne dane rejestrowe. Nie dopisuj kodów pocztowych bez potwierdzenia.
Oferty i grafiki korzystają ze statycznej listy lokalizacji; nowa lokalizacja lub
trener wymaga ponownego buildu (`dynamicParams = false`).

Desktopowe hero to panoramiczny `hero-desktop-wide.mp4` (1600×900, H.264, CRF 25,
bez audio, faststart). Oryginały zachowano lokalnie w ignorowanym `source-assets/`,
poza `public/`; do dalszej obróbki trzeba zachować ich kopię poza deploymentem.
Reduced motion oraz Save Data pozostawiają poster bez pobierania filmu.

Feed Instagram korzysta z Next Data Cache (`unstable_cache`, 600 s) przy wyłączonym
`cacheComponents`. Wewnętrzny fetch ma `no-store`, aby uniknąć dwóch niezależnych
okresów cache. Limit 6 s jest wspólny dla zapytania i jego wariantu fallback.
Błędy są rzucane wewnątrz cache i obsługiwane poza nim, aby nie zastępować poprawnego
wyniku pustą odpowiedzią błędu. Cache nie obejmuje formularzy.

PDF ładuje kod i techniczny DOM dopiero po kliknięciu. Skala 1,5 jest ograniczona
do 8 megapikseli. Stan generowania blokuje kolejne kliknięcia, a `finally` usuwa DOM.

Dodatkowe kontrole po uruchomieniu produkcyjnego serwera na porcie 3100:

```sh
node scripts/check-instagram.cjs
node scripts/check-performance-browser.cjs
AUDIT_WIDTH=390 node scripts/check-performance-browser.cjs
```

Test przeglądarkowy wymaga Chrome (opcjonalnie `CHROME_PATH`), pobiera lokalnie PDF
i zapisuje artefakty w `/tmp/hoodmood-stage2`. Nie wysyła formularzy.
