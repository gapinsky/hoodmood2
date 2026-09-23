# Adaptery danych

Ten folder zawiera funkcje wybierające, łączące i przekształcające wspólne dane
na format potrzebny poszczególnym
częściom strony. Nie jest miejscem do wpisywania cen, terminów ani danych trenerów.

Źródła prawdy:

- `data/classess.ts` — zajęcia, przypisania trenerów i lokalizacji, ceny i terminy.
- `data/trainers.ts` — profile trenerów.
- `data/locations.ts` — lokalizacje, adresy i kontakt.

Pliki w tym folderze:

- `class-offer.ts` — przygotowuje karty oferty.
- `class-pricing.ts` — przygotowuje cennik i etykiety jednostek rozliczenia.
- `class-schedule.ts` — układa grafik według dni i godzin.
- `enrollment-classes.ts` — przygotowuje opcje zapisów, sprawdza dopasowanie
  uczestnika i weryfikuje wybrane zajęcia po stronie serwera.

Zmiany danych wprowadzaj w `data/`. Tutaj zmieniaj sposób ich wybierania,
łączenia i prezentowania. Teksty nagłówków oraz etykiety interfejsu mogą
pozostawać w tym folderze.
