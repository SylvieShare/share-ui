# Публичный API

Все JavaScript-экспорты импортируются только из `@sylvieshare/share-ui`.
Deep imports из `dist/` или `src/` не являются контрактом.

## BaseTile

Базовая поверхность карточки. Props:

- `color` — accent плитки, fallback `var(--accent)`;
- `strip` — вертикальная accent-полоса;
- `tint` — постоянный слабый цветовой tint;
- `framed` — gradient и accent border;
- `interactive` — pointer и hover feedback.

Контент передаётся default slot, событие `click` пробрасывает исходный event.

## Формы

- `FormField`: `label`, `hint`, `vertical`, default slot.
- `FormTextInput`: named model `v-model:value`, `type`, `placeholder`,
  `maxlength`, `autocomplete`, `mono`, `autofocus`, `invalid`; emits `change`
  и `enter`, expose `focus()`.
- `FormSelect`: named model `v-model:value`, `autofocus`; option elements идут
  в default slot; emits `change`, expose `focus()`.
- `FormTextarea`: named model `v-model:value`, `placeholder`, `rows`,
  `maxlength`.
- `FormNumberInput`: controlled `value`, `min`, `max`; emit `change` после
  ввода или нажатия −/+.
- `FormActionButtons`: тексты, `loading`, `canSubmit`, `disabled`; emits
  `cancel` и `submit`.

Компоненты не содержат validation rules и переводов приложения. Тексты можно
передавать props; field-level ошибки выводит consumer рядом с контролом.

## useSortable / reorderByDrop

`useSortable` управляет pointer lifecycle, ghost, placeholder-представлением и
переносом между именованными группами. Consumer предоставляет refs массивов,
`getKey`, ограничения и `onDrop`, а затем сам сохраняет результат.

DOM-контракт:

- container: `data-sortable-container="group-name"`;
- direct item: `data-sortable-key="stable-key"`;
- handle вызывает `startDrag(event, item, groupName, index)`.

Алгоритм сейчас вертикальный. Горизонтальный/grid API не добавляется до
появления реального второго сценария.

`reorderByDrop(items, fromIndex, toIndex)` возвращает новый массив и не меняет
исходный. `toIndex` задаётся в координатах массива с уже удалённым source.

## useContainerMorph

Низкоуровневая FLIP-механика раскрытия DOM element из исходного viewport rect и
обратного закрытия. Она не создаёт overlay, не блокирует scroll и не управляет
focus. Эти обязанности остаются у более высокого `MorphSheet`, который будет
перенесён отдельно после обобщения overlay lifecycle.
