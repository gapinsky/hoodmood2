# Audyt użycia public/assets

Sprawdzono 145 plików. Dla 38 plików (15,98 MB) nie znaleziono odwołań w aktualnym kodzie, danych, stylach ani skryptach. Pozostałe 107 plików ma odwołania w aplikacji. Weryfikacja obejmuje ścieżki URL, importy statyczne oraz wyszukiwanie samych nazw plików. Brak odwołań nie wyklucza zewnętrznych linków do publicznych adresów. Nie usuwano ani nie przenoszono zasobów.

## Brakujący zasób

`myComponents/pages/main/hero/Hero.tsx` wskazuje na `/assets/optimized/hero/hero-mobile.mp4`, którego nie ma w public. Mobilny wariant hero próbuje ładować nieistniejący plik.

## Pliki bez odwołań

| Plik | Rozmiar (kB) |
| --- | ---: |
| `public/assets/svg/sapik-Szczecinek.jpeg` | 20.3 |
| `public/assets/svg/noImage.jpg` | 27.1 |
| `public/assets/svg/contact/white_paperPlane.svg` | 4.3 |
| `public/assets/svg/contact/black_paperPlane.svg` | 4.3 |
| `public/assets/images/static_bg.jpg` | 1033.2 |
| `public/assets/images/static_bg_dark.jpg` | 2486.8 |
| `public/assets/images/offer/taniecWspolczesny13-18.jpg` | 419.1 |
| `public/assets/images/localizations/dworcowaSzcecinek.jpeg` | 72.9 |
| `public/assets/images/localizations/wazowSzczecinek.jpeg` | 100.3 |
| `public/assets/images/enrollmentForm/target.svg` | 8.8 |
| `public/assets/images/enrollmentForm/celebrate.svg` | 15.3 |
| `public/assets/images/enrollmentForm/summary.svg` | 6.8 |
| `public/assets/images/enrollmentForm/contact_details.svg` | 11.7 |
| `public/assets/images/realLife/studioWide.jpeg` | 228.0 |
| `public/assets/images/realLife/cabins.jpeg` | 171.8 |
| `public/assets/images/team/mariaKober/mariaKober.jpg` | 20.5 |
| `public/assets/images/team/paulinaWalikowska/paulinaWalikowska.jpg` | 8.8 |
| `public/assets/images/team/milenaJasinska/milenaJasinska.jpg` | 101.6 |
| `public/assets/images/team/milenaJasinska/milenaJasinska2.jpg` | 94.6 |
| `public/assets/images/team/talitaJarzecka/talitaJarzecka2.jpeg` | 126.6 |
| `public/assets/images/timeline/notReally.jpeg` | 119.9 |
| `public/assets/images/timeline/serious.jpeg` | 118.6 |
| `public/assets/images/timeline/moreLikeThis.jpeg` | 126.6 |
| `public/assets/images/dream/dream.jpeg` | 66.3 |
| `public/assets/videos/lightHeroVid.mp4` | 2183.0 |
| `public/assets/videos/chairRotate.mp4` | 2360.1 |
| `public/assets/videos/chairRotate copy.mp4` | 3415.8 |
| `public/assets/videos/dance.mp4` | 1418.5 |
| `public/assets/videos/vidPoster.png` | 208.8 |
| `public/assets/optimized/home/static-bg-dark.jpg` | 242.9 |
| `public/assets/optimized/home/lightHeroVid-mobile.mp4` | 542.1 |
| `public/assets/optimized/home/static-bg.jpg` | 133.1 |
| `public/assets/optimized/home/hero-poster.jpg` | 8.4 |
| `public/assets/optimized/branding/sapik-transparent.prompt.txt` | 0.8 |
| `public/assets/fonts/roboto-condensed-latin.woff2` | 28.9 |
| `public/assets/fonts/roboto-condensed-latin-ext.woff2` | 12.5 |
| `public/assets/fonts/anton-latin.woff2` | 21.3 |
| `public/assets/fonts/anton-latin-ext.woff2` | 5.2 |

Lokalne fonty nie są podłączone: layout używa `next/font/google`. Plik `sapik-transparent.prompt.txt` to pomocniczy opis generowania obrazu, nie zasób potrzebny stronie. Historyczne raporty audytów nie były traktowane jako użycie przez aplikację.

## Aktualizacja po usunięciu filmów

Po ponownym sprawdzeniu odwołań usunięto `chairRotate.mp4`, `chairRotate copy.mp4` i `dance.mp4` (łącznie 7,19 MB). Powyższa tabela przedstawia stan z chwili audytu. Używany `chairRotate-poster.jpg` pozostaje bez zmian.
