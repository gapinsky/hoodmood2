import { szczecinekSeo } from "./seo-szczecinek";

// Metadata for static public pages; sitemap uses the same route registry.
export const staticSeoPages = {
  "/": {
    "title": "Szkoła tańca i akrobatyki — Koszalin, Polanów, Biały Bór, Szczecinek",
    "description": "Zajęcia tańca i akrobatyki dla dzieci, młodzieży i dorosłych w Koszalinie, Polanowie, Białym Borze i Szczecinku. Poznaj Hoodmood, sprawdź grafik i zapisz się online."
  },
  "/kontakt": {
    "title": "Kontakt ze szkołą tańca",
    "description": "Skontaktuj się z recepcją Hoodmood. Sprawdź dane kontaktowe i lokalizacje studia, zapytaj o zajęcia taneczne, akrobatykę lub zapisy."
  },
  "/zapisz-sie": {
    "title": "Zapisy na zajęcia tańca i akrobatyki",
    "description": "Zapisz siebie lub dziecko na zajęcia Hoodmood. Wybierz lokalizację i zajęcia, podaj dane kontaktowe i prześlij zgłoszenie do recepcji."
  },
  "/kadra": {
    "title": "Kadra i goście specjalni",
    "description": "Poznaj trenerów i gości specjalnych Hoodmood. Sprawdź ich doświadczenie oraz prowadzone zajęcia tańca i akrobatyki w naszych lokalizacjach."
  },
  "/kolonie": {
    "title": "Kolonie i obozy taneczne",
    "description": "Sprawdź kolonie, obozy i wydarzenia taneczne Hoodmood. Poznaj planowane wyjazdy oraz zobacz, jak wyglądały nasze poprzednie edycje."
  },
  "/aktualnosci": {
    "title": "Aktualności ze studia tańca",
    "description": "Zobacz aktualności Hoodmood: relacje z treningów, wydarzenia i życie naszej tanecznej ekipy. Śledź najnowsze wpisy ze studia."
  },
  "/faq": {
    "title": "FAQ — pytania o zajęcia i zapisy",
    "description": "Odpowiedzi na pytania o zajęcia Hoodmood, zapisy, płatności i przygotowanie do treningu. Sprawdź najważniejsze informacje przed pierwszą wizytą."
  },
  "/dofinansowanie": {
    "title": "Dofinansowanie — Program KLUB 2025",
    "description": "Informacje o dofinansowaniu Klubu Sportowego Hoodmood Dance Studio w Programie KLUB 2025: cel zadania, źródło wsparcia i wartość dotacji."
  },
  "/regulamin": {
    "title": "Regulamin studia tańca",
    "description": "Poznaj regulamin Hoodmood: zasady uczestnictwa w zajęciach, płatności i organizacji treningów oraz definicję aktywnego kursanta."
  },
  "/regulamin-wejscia-probnego": {
    "title": "Regulamin wejścia próbnego za 40 zł",
    "description": "Zasady skorzystania z jednorazowego wejścia próbnego na zajęcia Hoodmood w cenie 40 zł. Sprawdź warunki promocji i sposób zgłoszenia."
  },
  "/polityka-prywatnosci": {
    "title": "Polityka prywatności",
    "description": "Sprawdź politykę prywatności Hoodmood: informacje o administratorze, przetwarzaniu danych osobowych, prawach użytkowników i plikach cookies."
  },
  "/cennik/bialy-bor": {
    "title": "Cennik zajęć — Biały Bór",
    "description": "Sprawdź ceny zajęć Hoodmood w Białym Borze. Poznaj dostępne treningi, ich częstotliwość i koszty uczestnictwa przed zapisaniem się na zajęcia."
  },
  "/cennik/szczecinek": szczecinekSeo.pricing,
  "/cennik/polanow": {
    "title": "Cennik zajęć — Polanów",
    "description": "Sprawdź ceny zajęć Hoodmood w Polanowie. Porównaj dostępne treningi i koszty uczestnictwa, a następnie wybierz zajęcia dla siebie lub dziecka."
  }
} as const;
