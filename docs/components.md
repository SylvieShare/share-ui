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

## Controls

- `AddButton`: `inline` и `icon` варианты, `block`, `disabled`, слот текста.
- `RemoveButton`: `inline` и `boxed`; доступное имя обязательно передаётся в `label`.
- `ToggleSwitch`: boolean `v-model`, optional label/default slot, `disabled`.
- `MultiToggle`: options `{ value, label, disabled? }`, `block`, `neutralValue`;
  поддерживает стрелки, Home и End.
- `CompactCheckbox`: компактный checkbox для строк и таблиц.
- `SlidingTabs`: tabs `{ key, title, icon?, disabled?, id?, panelId? }`, icon-slot
  и клавиатурная навигация.
- `AppSlider`: доступный native range с DnD Share visual style.
- `SectionLabel`: общий uppercase label, optional border/actions/alignment.

В библиотеке нет пользовательских переводов: visible strings и доступные имена
передаются consumer через props/slots.

## Editor primitives

`EditorPanel`, `EditorSection`, `EditorSectionTitle` и `EditorTotal` задают общий
ритм небольших форм внутри modal/morph sheet. Они не знают о block schemas,
permissions или конкретном домене приложения.

## Viewport composables

- `useMediaQuery(query)` — reactive matchMedia wrapper;
- `useIsMobile(maxWidth = 768)` — согласованный mobile breakpoint;
- `useFullscreenViewportHeight(scale = 0.94)` — высота с учётом Visual Viewport.

## Overlays

- `AppModal` — низкоуровневое DnD-style окно с Teleport, focus trap,
  topmost Escape, mobile swipe-down и анимацией.
- `AppModalFrame` — header/body/footer shell поверх `AppModal`.
- `ModalShell` — controlled `open`-адаптер для простых окон.
- `ConfirmDialog` поддерживает controlled `open` и условный mount.
- `TextPromptDialog` (`PromptDialog` alias) поддерживает события `confirm` и
  `submit`, чтобы проекты могли мигрировать без промежуточных wrapper-ов.
- `MorphSheet` — container morph из origin element/rect, add-mode, slots
  `head/detail/sub/foot`, optional background blur и swipe-навигация.
- `useSheetSubpages` — controller двухпанельной дорожки MorphSheet.

Все overlay-компоненты используют единый внутренний stack и reference-counted
scroll lock. Поэтому Escape, focus restoration и вложенные окна не конфликтуют.

## Floating UI

- `BasePopover` — teleported anchored surface с placements `bottom-start`,
  `bottom-end`, `right-start`, viewport clamp, outside-click и topmost Escape.
- `ActionMenu` (`RowActionMenu` alias) — меню действий, которое измеряет себя и
  открывается над trigger, когда снизу не хватает места.
- `ActionMenuItem` (`RowActionItem` alias) — нейтральная строка меню с icon
  component/slot, suffix, submenu state и semantic tone.
- `ActionMenuSubmenu` (`RowActionSubmenu` alias) — соседний popover на desktop и
  inline-раскрытие на mobile.
- `ValueSelect` — компактный searchable listbox с disabled options, стрелками,
  Home/End, Enter и Escape. Все видимые тексты передаются props.
- `ColorPresetPicker` — preset/custom/clear picker. Палитра передаётся `colors`,
  тексты — `clearLabel`, `customLabel`, `ariaLabel`; custom text эмитится только
  после проверки hex-формата.

`PRESET_COLORS`, `isValidHexColor`, `randomPreset` и чистая функция
`computeActionMenuPlacement` также публичны. Они позволяют consumer adapter-ам
использовать те же данные и геометрию без копирования Vue-компонента.

В package-компонентах нет словаря `action -> icon`: это доменная часть consumer.
Например, DnD Share оставляет локальный `RowActionItem`-adapter, который только
выбирает Lucide icon и делегирует всю разметку общему `ActionMenuItem`.

## useSortable / reorderByDrop

`useSortable` управляет pointer lifecycle, ghost, placeholder-представлением и
переносом между именованными группами. Consumer предоставляет refs массивов,
`getKey`, ограничения и `onDrop`, а затем сам сохраняет результат.

DOM-контракт:

- container: `data-sortable-container="group-name"`;
- direct item: `data-sortable-key="stable-key"`;
- handle вызывает `startDrag(event, item, groupName, index)`.

После завершения реального drag `suppressNextClick` остаётся `true` 250 мс;
эквивалентная проверка доступна через `shouldSuppressClick()`. Это позволяет
строкам с click-навигацией не открываться после отпускания drag handle.

Алгоритм сейчас вертикальный. Горизонтальный/grid API не добавляется до
появления реального второго сценария.

`reorderByDrop(items, fromIndex, toIndex)` возвращает новый массив и не меняет
исходный. `toIndex` задаётся в координатах массива с уже удалённым source.

## useContainerMorph

Низкоуровневая FLIP-механика раскрытия DOM element из исходного viewport rect и
обратного закрытия. Она не создаёт overlay, не блокирует scroll и не управляет
focus. Эти обязанности остаются у более высокого `MorphSheet`, который будет
перенесён отдельно после обобщения overlay lifecycle.
