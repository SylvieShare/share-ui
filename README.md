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

Публичный API уже включает:

- `BaseTile`, controls и editor primitives;
- `FormField`, `FormTextInput`, `FormNumberInput`, `FormSelect`, `FormTextarea`,
  `FormActionButtons`;
- `BasePopover`, action menu, `ValueSelect`, `ColorPresetPicker`;
- modal/morph overlays;
- `useSortable`, `reorderByDrop`, viewport и morph composables;
- базовые theme-токены и класс `.share-app-canvas` из `styles.css`.
- отдельную встраиваемую галерею всех публичных визуальных компонентов.

Подробности: [архитектура](./docs/architecture.md),
[темизация](./docs/theming.md), [публичные компоненты](./docs/components.md),
[галерея компонентов](./docs/gallery.md),
[карта миграции](./docs/migration.md),
[разработка и релизы](./docs/development.md).

## Подключение

До публикации в package registry consumers используют HTTPS-архив неизменяемого
Git tag. Такой install не требует SSH-ключа на build machine:

```bash
npm install --save-exact "https://github.com/SylvieShare/share-ui/archive/refs/tags/v0.1.1.tar.gz"
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

`npm run dev` запускает локальную интерактивную галерею. В приложении она
подключается отдельным entry point, поэтому код витрины не входит в обычный
импорт библиотеки:

```js
import { ComponentGallery } from '@sylvieshare/share-ui/gallery'
```

`dist/` намеренно хранится в Git: текущие consumers устанавливают готовую
сборку по тегу и не должны собирать библиотеку во время собственного `npm ci`.
