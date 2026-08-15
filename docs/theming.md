# Темизация

## Контракт токенов

Пакет использует семантические app-level CSS variables. Они намеренно задаются
на `:root`: приложения семейства используют дизайн-систему для всего chrome, а
не встраивают её как изолированный widget.

Основные группы:

- surfaces: `--bg`, `--surface`, `--surface-raised`, `--surface-active`,
  `--popover-bg`, `--scrim`;
- lines/text: `--border`, `--border-strong`, `--text-1`, `--text-2`,
  `--text-muted`, `--text-on-accent`;
- product: `--accent`, `--accent-hover`, `--accent-soft`;
- semantic: `--danger`, `--success`, `--warning`, `--info`;
- shape/effects: `--shadow-lg`, `--r-*`;
- canvas: `--app-canvas-*`.

Feature-цвета вроде encounter side, rarity или графиков не входят в библиотеку:
это данные и семантика конкретного приложения.

## Accent приложения

Consumer импортирует `styles.css`, затем задаёт `--accent` в своём theme-файле:

```css
/* DnD Share */
:root { --accent: #7c5ce2; }

/* TrenchShare */
:root { --accent: #2f9367; }
```

`--accent-hover` и `--accent-soft` по умолчанию вычисляются из `--accent` через
`color-mix()`. Если продукту нужны точно заданные оттенки, он может переопределить
их отдельно.

HavenShare может менять accent во время работы:

```js
document.documentElement.style.setProperty('--accent', selectedColor)
```

Значение должно приходить из валидированного color picker/preset. Если разрешены
очень светлые цвета, приложение также выбирает контрастный `--text-on-accent`.
Пользовательский accent сохраняется самим приложением; `share-ui` не знает о
local storage или профиле пользователя.

## Canvas

`AppShell` по умолчанию применяет общий фон с точечной сеткой, основной цвет
текста и UI-шрифт. Это делает canvas частью общего application chrome:

```vue
<AppShell><!-- sidebar и content --></AppShell>
```

Класс `.share-app-canvas` остаётся публичным для приложений, которые пока не
используют `AppShell`, и для локальных page/canvas containers. Цвет, паттерн,
шаг и позиция сетки задаются токенами `--app-canvas-bg`,
`--app-canvas-pattern`, `--app-canvas-dot-size`, `--app-canvas-dot-color` и
`--app-canvas-position`. Печатные и standalone экраны используют
`<AppShell :canvas="false">` либо явно отменяют `background-image`.

Пакет задаёт font stacks, но не загружает web fonts и не делает сетевые запросы.
Consumer сам подключает нужные font assets.
