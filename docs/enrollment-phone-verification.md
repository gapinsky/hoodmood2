# Weryfikacja zapisów i telefonu — 17.09.2026

## Zakres i stan zastany

Załączone wymagania kończyły się na początku punktu 7 (`app/cennik/koszalin`). Zrealizowano punkty 1–6; w punkcie 7 sprawdzono walidację kategorii trasy.

- `submitEnrollmentForm` już odtwarzał dane wybranych zajęć przez `resolveEnrollmentSelection` przed wysłaniem obu maili. Cena, opis, lokalizacja i okres rozliczenia pochodziły z katalogu. Nie było potrzeby przebudowy mechanizmu cen ani maili.
- Katalog już filtrował `active` oraz `enrollmentEnabled`, a resolver odrzucał nieznane ID, powtórzone wiersze i niezgodną lokalizację.
- `isPricingCategory` już używał jawnej listy trzech kategorii. Strona i `generateMetadata` wywołują wspólny `getContent`, który uruchamia `notFound()` przed odczytem danych dla nieprawidłowej kategorii. `__proto__`, `constructor` i `toString` nie przechodzą walidacji. Kod pozostał bez zmian.

## Poprawki

- Osobny schemat żądania zapisów: klient przesyła jedynie `selectedClasses: [{ classId }]` oraz pola wprowadzone przez użytkownika. `classId` jest stabilnym ID wiersza katalogu, uwzględniającym wariant ceny. Serwer usuwa dodatkowe pola z payloadu i odtwarza komplet danych biznesowych przed obliczeniem sum oraz wygenerowaniem maili.
- Duplikaty odrzucane są również wtedy, gdy klient wybierze różne warianty tych samych zajęć. Frontend blokuje dodanie kolejnego wariantu już wybranych zajęć.
- Oba formularze używają `phoneCountry: CountryCode` i `phone: string`, wspólnego komponentu oraz wspólnego helpera. Domyślny kraj: PL. Pełna lista krajów i prefiksów pochodzi z biblioteki; nazwy z `Intl.DisplayNames` w locale PL; flagi z kodów ISO. Klikalna flaga i prefiks znajdują się wewnątrz pola numeru. Otwierają listę krajów z wyszukiwaniem po nazwie, ISO lub prefiksie, opartą o dostępny Radix Popover. Nazwa kraju jest widoczna tylko na liście i w etykiecie dla czytników ekranu.
- Brak obcinania cyfr. Akcje serwerowe normalizują numer do E.164 przed użyciem go w obu mailach. Wklejony numer międzynarodowy działa dla zgodnego kraju; niezgodny kraj i rozszerzenia numerów są odrzucane. W podsumowaniu zapisów również widoczny jest E.164.
- Użyto `libphonenumber-js/max`, aby sprawdzać plan numeracyjny, a nie tylko długość. Dokumentacja: https://github.com/catamphetamine/libphonenumber-js#min-vs-max-vs-mobile-vs-core
- Dorośli podają rzeczywisty wiek. Wspólny filtr sprawdza `age >= minAge && (maxAge === null || age <= maxAge)`, bez rozpoznawania nazw ani kategorii. Schemat odrzuca ułamki, tekst zamiast wieku oraz sprzeczność wieku z grupą uczestnika. Dane biznesowe MASTER TRAINERS, MASTERCLASS, MASTER PASS, lekcji indywidualnych i pierwszego tańca pozostały bez zmian.
- Status aktywnego kursanta pozostaje deklaracją użytkownika; serwer dobiera odpowiadającą mu cenę z katalogu. Projekt nie ma źródła umożliwiającego potwierdzenie członkostwa.

## Weryfikacja

- `npm run test:enrollment-phone`: PASS. PL zwykły/ze spacjami/z prefiksem, DE, numery puste/krótkie/długie/niezgodne z planem, błędny kraj, oba schematy, sfałszowane dane biznesowe, ID, duplikaty, aktywność, zapisy, lokalizacja, granice wieku i nietypowe kategorie. Sprawdzone również zakresy wieku każdego dostępnego wiersza aktualnego katalogu.
- Test akcji serwerowych zastępuje Resend atrapą: nie wysyła prawdziwych maili. Weryfikuje brak wysyłki dla nieznanego ID i duplikatu oraz zaufaną cenę i znormalizowany telefon w mailu zgłoszenia i potwierdzeniu.
- `npm run typecheck`: PASS.
- `git diff --check`: PASS.
- ESLint: blokada istniejącej konfiguracji — brak modułu `eslint-config-next/core-web-vitals`. Nie zmieniano zależności lintera w tym zadaniu.
- Standardowy build Turbopack: blokada środowiska (`Operation not permitted` przy tworzeniu procesu/wiązaniu portu). Pierwsza próba bez dostępu sieciowego zatrzymała się na pobieraniu Google Fonts.
- `npm run build -- --webpack`: PASS — kompilacja, TypeScript i wygenerowanie 42 stron. Konfiguracja domyślnego bundlera pozostała bez zmian.
- Nie wykonano ręcznego testu UI w przeglądarce ani rzeczywistej wysyłki e-maili.
