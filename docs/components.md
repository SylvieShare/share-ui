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

## Data visualization

`SegmentDonutChart` показывает состав общего значения кольцевой диаграммой и
легендой. Consumer передаёт нейтральные сегменты `{ key?, label?, value, color? }`,
форматирование через `formatValue` и подпись суммы через `totalLabel`. Компонент
сам нормализует доли, игнорирует отрицательные значения и использует
семантическую палитру как fallback. Центральную область можно полностью заменить
слотом `center`; легенда и проценты независимо выключаются props `showLegend` и
`showPercent`.

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
  `head/detail/sub/foot`, optional background blur, настраиваемый `zIndex` для
  вложенных overlay-сценариев и swipe-навигация.
- `useSheetSubpages` — controller двухпанельной дорожки MorphSheet.

Все overlay-компоненты используют единый внутренний stack и reference-counted
scroll lock. Поэтому Escape, focus restoration и вложенные окна не конфликтуют.

## Floating UI

- `BasePopover` — teleported anchored surface с placements `bottom-start`,
  `bottom-end`, `right-start`, viewport clamp, outside-click и topmost Escape.
  `transitionPreset="action-menu"` включает общий enter/leave motion с
  `prefers-reduced-motion`; `none` оставляет поверхность без motion. Сырой
  `transition` остаётся приоритетным escape hatch для специализированного
  Vue Transition name.
- `ActionMenu` (`RowActionMenu` alias) — меню действий, которое измеряет себя и
  открывается над trigger, когда снизу не хватает места.
- `ActionMenuItem` (`RowActionItem` alias) — нейтральная строка меню с icon
  component/slot, suffix, submenu state и semantic tone.
- `ActionMenuSubmenu` (`RowActionSubmenu` alias) — соседний popover на desktop и
  inline-раскрытие на mobile.
- `AccountMenu` — общий trigger профиля для sidebar: avatar, подпись и chevron;
  сами действия передаются consumer-ом через default slot и строятся на
  `ActionMenuItem`. Prop `expanded` переключает rail- и полный варианты.
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

## Rich text

- `RichContent` — единственная точка read-only рендера сохранённого rich HTML;
  перед `v-html` всегда вызывается `sanitizeRichHtml`.
- `RichTextEditor` — contenteditable-редактор с общей типографикой, headings,
  inline formatting и color picker. `paste` и `drop` перехватываются и проходят
  тот же sanitizer до вставки; emit также содержит очищенный HTML.

Sanitizer использует allowlist тегов и атрибутов, удаляет executable/embed
элементы, event handlers, изображения и произвольные styles. Для ссылок
разрешены только HTTP(S), mailto, tel и относительные URL; для inline-style —
только проверенный `color`. Без DOMParser функция возвращает escaped text, то
есть серверный/тестовый fallback остаётся безопасным.

Visible labels редактора передаются через `labels`; палитра — через `colors`.
Публичные чистые функции: `sanitizeRichHtml`, `sanitizeRichTextUrl`,
`sanitizeRichTextColor`, `escapeHtml`, `plainTextToRichHtml`.

## Application chrome

- `AppShell` — layout boundary для sidebar/content/optional rail. Режим `column`
  занимает постоянные 64 px под sidebar, `fixed` даёт такой же content offset.
  По умолчанию shell также применяет общий `.share-app-canvas`; prop
  `canvas=false` оставлен для специальных полноэкранных и печатных экранов.
- `AppSidebar` — DnD-style collapsible sidebar, optional localStorage state,
  fixed/sticky positioning и mobile modes `hide`/`top`.
- `SidebarBrand`, `SidebarNavItem`, `SidebarGroup`, `SidebarToggle` — визуальные
  части панели с единым active marker, icon column и label motion.

Панель не импортирует vue-router и icon library. Consumer передаёт `RouterLink`
в prop `as`, `to` через attrs, active state, icon component/slot и свои auth,
search, account и theme controls через slots. Ширины задают токены
`--share-sidebar-collapsed-w` (64 px) и `--share-sidebar-expanded-w` (224 px).

Breakpoint выбирается из 640/768: DnD Share сохраняет desktop sidebar до 640,
HavenShare скрывает его при своём bottom-nav до 768, TrenchShare переключает
его в горизонтальный `top` mode до 768.

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

## ComponentGallery

Галерея импортируется из отдельного `@sylvieshare/share-ui/gallery` и показывает
в теме consumer-приложения каждый публичный визуальный компонент, включая
интерактивные floating/overlay/morph состояния. Она предназначена для локальной
разработки, визуальной приёмки и закрытых служебных страниц, а не для публичного
пользовательского интерфейса.

Каталог имён и тест покрытия не позволяют добавить компонент в основной API,
не добавив его пример. Aliases (`RowAction*`, `PromptDialog`) считаются тем же
каноническим компонентом и второй одинаковый пример не требуют.

`reorderByDrop(items, fromIndex, toIndex)` возвращает новый массив и не меняет
исходный. `toIndex` задаётся в координатах массива с уже удалённым source.

## useContainerMorph

Низкоуровневая FLIP-механика раскрытия DOM element из исходного viewport rect и
обратного закрытия. Она не создаёт overlay, не блокирует scroll и не управляет
focus. Эти обязанности остаются у более высокого `MorphSheet`, который будет
перенесён отдельно после обобщения overlay lifecycle.
