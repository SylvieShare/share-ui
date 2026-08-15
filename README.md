# share-ui

Общая Vue 3 дизайн-система приложений DnD Share, HavenShare и TrenchShare:
семантические CSS-токены, визуальные примитивы и не зависящие от предметной
области механики взаимодействия.

Этот README — основной источник правил проекта. Архитектурное изменение,
изменение публичного API, токенов или процесса выпуска обязательно отражается
в `docs/` в том же коммите.

## Границы

`share-ui` владеет единым визуальным языком и браузерными UI-механиками. Пакет
не знает про маршруты, Pinia stores, HTTP API, авторизацию, i18n и сущности
конкретного приложения. Vue — единственная runtime peer dependency.

Первая версия экспортирует:

- `BaseTile`;
- `FormField`, `FormTextInput`, `FormNumberInput`, `FormSelect`, `FormTextarea`,
  `FormActionButtons`;
- `useSortable`, `reorderByDrop`;
- `useContainerMorph`;
- базовые theme-токены и класс `.share-app-canvas` из `styles.css`.

Подробности: [архитектура](./docs/architecture.md),
[темизация](./docs/theming.md), [публичные компоненты](./docs/components.md),
[разработка и релизы](./docs/development.md).

## Подключение

До публикации в package registry consumers используют неизменяемый Git tag:

```bash
npm install --save-exact "git+https://github.com/SylvieShare/share-ui.git#v0.1.0"
```

```js
import '@sylvieshare/share-ui/styles.css'
import { BaseTile, FormTextInput, useSortable } from '@sylvieshare/share-ui'
```

Приложение задаёт свой accent после общего CSS:

```css
:root {
  --accent: #2f9367;
}
```

## Разработка

```bash
npm install
npm test
npm run build
npm run check
```

`dist/` намеренно хранится в Git: текущие consumers устанавливают готовую
сборку по тегу и не должны собирать библиотеку во время собственного `npm ci`.
