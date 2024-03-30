# Mateusz Miszczak, zadanie rekrutacyjne - React

Przygotować w `React` interfejs użytkownika przeglądarki tagów udostępnianych przez `API StackOverflow (https://api.stackexchange.com/docs)`.

## Założenia projektu

1. Stworzyć stronicowaną tabelę lub listę tagów wraz liczbą powiązanych postów (pole count)

2. Liczba elementów na stronie jest konfigurowalna przez pole liczbowe nad tabelą/ listą

3. Wybór pola i kierunku sortowania przez element UI własnego wyboru/ projektu

4. Przygotować odpowiednie stany dla etapu ładowania danych i błędów przy pobieraniu

5. Wykorzystać gotową bibliotekę komponentów UI, np. MUI

6. Wykorzystać gotowe biblioteki do zarządzania stanem i pobierania danych (wybór wedle uznania, stosownie do stopnia komplikacji projektu i z myślą o jak najszybszej realizacji zadania)

7. Przygotować Storybook do prezentacji wykorzystanych komponentów składowych aplikacji

8. Rozwiązanie opublikować w repozytorium GitHub

9. Całość powinna się uruchamiać wyłącznie po wykonaniu komend "npm ci", "npm start", "npm run storybook"

## Podsumowanie projektu

### Czas na realizację zadania:

`26.03.2024 - 04.04.2024`

### Zadanie zrealizowane w terminie:

`26.03.2024 - 30.03.2024`

### Użyte technologie:

- React Vite
- TypeScript
- Recoil
- Tanstack React-query
- Axios
- Material UI
- Tailwind CSS
- Storybook
- GitHub

### Wykonane zadania:

Na 9 wytycznych jakie dostałem w zadaniu udało mi się zrealizować wszystkie.

1. Utworzyłem komponent StackOverflowTable.tsx wykorzystujący `MUI` do prezentacji danych w tabeli wraz z liczbą powiązanych postów.

2. Komponent TablePagination z MUI, który został wykorzystany, zapewnia możliwość konfiguracji liczby elementów nad tabelą.

3. Zaimplementowałem sortowanie na dwóch kolumnach w komponencie TableHeaderCell.tsx. Pozwala on na wybór kierunku sortowania po nazwie i liczbie.

4. Przygotowałem wymagane stany dla etapu ładowania danych i błędów przy pobieraniu.

5. Cała aplikacja korzysta z biblioteki komponentów MUI.

6. Wykorzystałem `Recoil`'a do zarządzania stanem danych, ładowania i błędów. `Tanstack React-query` wraz z `Axios`'em został użyty do fetchowania danych z zawartego w treści zadania `API StackOverflow`.

7. Przygotowałem `Storybook` do prezentacji użytych/ wykonanych komponentów.

8. Rozwiązanie zostało zamieszczone w repozytorium `GitHub`.

9. Skonfigurowałem projekt, żeby spełniał wymogi co do działania komend: `npm ci`, `npm start` i `npm run storybook`.

## Instrukcja Uruchomienia:

1. Sklonować repozytorium: `git clone git@github.com:MateuszMiszczak/recruitmentTaskApiTable.git`

2. Zainstalować zależności: `npm ci`

3. Uruchomić aplikację: `npm start`

4. Uruchomić Storybooka: `npm run storybook`
