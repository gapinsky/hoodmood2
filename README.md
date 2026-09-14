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

```sh
npm run typecheck
npm run lint
npm run build
```

`typecheck` sprawdza również nieużywane importy i parametry. Build wymaga dostępu do fontów Google i konfiguracji integracji używanych przez stronę.

Obecna instalacja `eslint-config-next` (0.2.4) nie udostępnia modułów importowanych w `eslint.config.mjs`. Do czasu aktualizacji zależności `npm run lint` zgłasza błąd konfiguracji; nie jest to wynik sprawdzenia kodu.

Weryfikacja refaktoru: `npm run build -- --webpack` przechodzi. Domyślny Turbopack zgłosił w środowisku roboczym błąd uruchamiania procesu (`Operation not permitted`); nie zmieniamy z tego powodu domyślnego bundlera projektu.
