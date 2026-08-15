# Разработка и выпуск

## Локальная проверка

```bash
npm install
npm test
npm run build
npm run check
```

`npm run build` проверяет отсутствие прямых UI-цветов вне `tokens.css`, собирает
ESM в `dist/share-ui.js` и общий CSS в `dist/share-ui.css`. `vue` остаётся
external peer dependency и не дублируется в consumer bundle.

Перед релизом полезно проверить содержимое устанавливаемого архива:

```bash
npm pack --dry-run
```

## Локальная интеграция

До создания release tag consumer можно временно проверить по полному пути:

```bash
npm install /Users/wrz2/MyProjects/share-ui
```

Такую `file:` dependency и абсолютный путь не коммитят. Зафиксированный consumer
всегда использует Git tag либо package registry.

## Выпуск Git-версии

Пока registry не настроен, `dist/` является частью release commit:

1. изменить `version` в `package.json`;
2. выполнить `npm run check`;
3. проверить изменения исходников, документации и `dist/`;
4. создать commit и аннотированный tag `vX.Y.Z`;
5. отправить branch и tag;
6. обновить точную tag-зависимость в consumers и выполнить их проверки.

Тег после публикации не передвигается. Исправление получает новую patch-версию.

## Будущий registry

Переход на npm/GitHub package registry меняет только dependency locator в
consumer `package.json`. Имя пакета, импорты, CSS и SemVer остаются теми же.

## Изменение публичного API

В одном commit обновляются:

- реализация;
- `src/index.js` и `src/index.d.ts`;
- `docs/components.md` и при необходимости `docs/architecture.md`;
- тесты;
- собранный `dist/`.

Локальная копия общего компонента в consumer допустима только для отдельного UX,
который нельзя выразить расширением нейтрального API.
