# Публичный API

Все JavaScript-экспорты импортируются только из `@sylvieshare/share-ui`.
Deep imports из `dist/` или `src/` не являются контрактом.

## BaseTile

`outlined` (по умолчанию `true`) управляет нейтральной обводкой независимо от
подложки и радиуса. `:outlined="false"` сохраняет поверхность без контура, включая
hover. Явная цветная рамка `framed` остаётся самостоятельным оформлением.

Базовая поверхность карточки. Props:

- `color` — accent плитки, fallback `var(--accent)`;
- `surface` — `solid` (по умолчанию) или `glass`: фон с opacity 76% и backdrop blur 14 px. Tint, gradient и frame сохраняются; при отсутствии поддержки blur остаётся полупрозрачный фон;
- `tint` — постоянный слабый цветовой tint;
- `framed` — gradient и accent border;
- `frameWidth` — толщина accent border от 1 до 4 px, по умолчанию 1; действует только вместе с `framed`, обычная рамка не меняется;
- `interactive` — pointer и hover feedback.

Контент передаётся default slot, событие `click` пробрасывает исходный event.

## TileAccentStrip, MorphTile и MorphTileHeader

`BaseTile` отвечает только за поверхность: у него нет полосы или заголовка.
`TileAccentStrip` — отдельная декоративная полоса с необязательным `color`;
по умолчанию наследует `--tile-color`. Размещается в позиционированном контейнере.

`MorphTile` оборачивает `BaseTile`, принимает его `color`, `tint`, `framed`, `outlined`,
`interactive`, а также `padding` (по умолчанию `12px`). `embedded` выводит
представление в morph-панели без второй поверхности. Открытие и сохранение
редактора остаются в consumer.

Единый заголовок опционален: `title` либо слот `title`; `showEdit` включает
карандаш. Consumer передаёт локализованный `editLabel`. Нажатие заголовка
вызывает `edit` с исходным событием; при `clickableTitle=false` активен только
карандаш. `editFade` скрывает карандаш и блокирует редактирование в раскрытой
грани. Слот `aside` — независимые действия/метрики справа, `decoration` — полоса
или другая декорация, default — содержимое. Событие `click` сохраняет исходный
DOM event. Заголовок доступен с клавиатуры, aside не запускает редактирование.

`MorphTileHeader` предоставляет тот же контракт заголовка отдельно для
составных представлений. Флаг `compactHeader` у обоих компонентов уменьшает
текст до 9px, карандаш до 12px и минимальную высоту строки до 18px для малых
плиток. Длинное название в компактном режиме сокращается многоточием, сохраняя
полное доступное имя кнопки; карандаш и aside остаются внутри плитки. Заголовок не задаёт внешний отступ снизу: расстояние до содержимого
при необходимости задаёт consumer через gap или отступ содержимого.
Consumer не переопределяет типографику заголовка.

Миграция с 0.20: `<BaseTile strip>` заменяется на
`<BaseTile><TileAccentStrip />…</BaseTile>`; условие `:strip` переносится в
`v-if` полосы. Это удаление публичного prop, релиз 0.21.

## Формы

- `FormField`: `label`, `hint`, `vertical`, default slot.
- `FormTextInput`: named model `v-model:value`, `type`, `placeholder`,
  `maxlength`, `autocomplete`, `mono`, `autofocus`, `invalid`; emits `change`
  и `enter`, expose `focus()`.
- `FormSelect`: named model `v-model:value`, `autofocus`; option elements идут
  в default slot; emits `change`, expose `focus()`.
- `FormTextarea`: named model `v-model:value`, `placeholder`, `rows`,
  `maxlength`.
- `FormNumberInput`: controlled `value`, `min`, `max`, положительный `step`
  (по умолчанию 1). Целый шаг сохраняет целочисленный ввод; дробный шаг
  сохраняет дробную часть без округления к кратному шагу. Шаг передаётся
  input и кнопкам −/+, арифметический шум при нажатиях убирается. Emit
  `change` после ввода или нажатия −/+ с ограничением min/max.
- `FormActionButtons`: тексты, `loading`, `canSubmit`, `disabled`; emits
  `cancel` и `submit`.

Компоненты не содержат validation rules и переводов приложения. Тексты можно
передавать props; field-level ошибки выводит consumer рядом с контролом.

## Controls

- `AddButton`: `inline` и `icon` варианты, `block`, `disabled`, слот текста.
- `RemoveButton`: `inline` и `boxed`; доступное имя обязательно передаётся в `label`.
  `icon="trash"` показывает корзину для удаления записей, `icon="cross"`
  (по умолчанию) — крестик для снятия выбора. Оба варианта поддерживают `disabled`
  и передают исходное событие через `click`; подтверждение остаётся у consumer.
- `ToggleSwitch`: boolean `v-model`, optional label/default slot, `disabled`.
- `MultiToggle`: options `{ value, label, disabled? }`, `block`, `neutralValue`;
  поддерживает стрелки, Home и End.
- `CompactCheckbox`: компактный checkbox для строк и таблиц. `size` задаёт размер квадрата в px (по умолчанию 18); галочка масштабируется пропорционально, дополнительная область нажатия сохраняется. В галерее представлены размеры 18 и 24.
- `IconNavigation`: иконки с подписью и единый перемещающийся квадрат выделения.
  `items` — `{ key, label, shortLabel?, ariaLabel?, title?, icon?, disabled?, divider?, dividerLabel?, attrs? }`.
  `modelValue` определяет текущий раздел, `orientation` — horizontal/vertical,
  `size` — сторону кнопки (56 px), `active=false` скрывает выделение при свёрнутой панели,
  `animate=false` отключает перемещение при раскрытии. `pill=true` даёт скруглённое мягкое выделение и акцентную подпись внутри компактной навигационной поверхности; default сохраняет квадрат. `label` задаёт имя navigation.
  Событие `select(key)` приходит и при повторном выборе, `update:modelValue` — при смене.
  Slots `icon`, `label`, `decoration` получают `item`; предметные badges/shortcuts остаются у consumer.
  Tab/Enter работают как у обычных кнопок; стрелки по оси и Home/End перемещают фокус
  без активации. Отключённые элементы пропускаются. Навигация прокручивается по своей оси,
  индикатор учитывает размеры/разделители/scroll и отключает motion при reduced motion.
  Подписи, которые шире доступного места кнопки, автоматически уменьшают шрифт
  до максимального помещающегося размера с точностью 0,01 px. Короткие подписи
  сохраняют размер CSS; при увеличении кнопки текст вырастает обратно. Измеряется
  фактическая ширина глифов, включая дробные px, после загрузки шрифтов, изменения
  текста/размеров и resize. Геометрия кнопок и индикатора не меняется.
  Exposed `element` и `updateIndicator()` доступны измеряющим компоновку adapters.
  Компонент аддитивный; существующие `SlidingTabs` и sidebar primitives не меняются.
- `SlidingTabs`: `variant=underline|chips` (по умолчанию underline), tabs `{ key, title, icon?, disabled?, id?, panelId? }`, icon-slot
  и клавиатурная навигация. `maxTabWidth` ограничивает кнопку и сокращает длинное
  название многоточием. Slot `tab-actions({tab})` размещает отдельные действия
  рядом с вкладкой, вне её кнопки: переименование, закрытие или меню.
  В chips-режиме название и действия объединены капсулой; выбранная капсула
  получает акцентные фон и рамку с плавным переходом. Подчёркивание не выводится.
  Клавиатура, доступные имена и прокрутка одинаковы для обоих вариантов. Состояния
  и доступные подписи задаёт consumer. Индикатор измеряет саму кнопку, реагирует
  на изменение её ширины и учитывает reduced motion.
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

- `AppDrawer` — controlled `v-model` Boolean (default `false`), teleported слева
  поверх страницы. `ariaLabel` задаёт имя `role="dialog"` (default `Drawer`),
  `width: number | string` по умолчанию `288` px и ограничен шириной viewport,
  `zIndex=3000`. Для application navigation consumer может передать `zIndex=100`:
  тогда стандартный `BasePopover` (`200`), `ActionMenu` (`9300`) и обычные modal
  (`3000`) видны поверх drawer без изменения существующих floating defaults.
  Attrs (`id` для `aria-controls`, class, style и другие) передаются на
  `section[role=dialog]`, а не на Teleport/внешний слой.
  Высота всегда равна viewport; panel скользит горизонтально
  слева за `220ms`, scrim одновременно меняет opacity. Reduced motion убирает
  оба перехода. Backdrop, Escape и кнопка закрытия сразу отправляют
  `update:modelValue(false)`; consumer должен применить значение через `v-model`.
  `showClose=true`, `closeLabel='Close'`; `showClose=false` позволяет использовать
  собственную кнопку внутри brand/header. События `opened` и `closed` приходят
  после соответствующего перехода; `requestClose()` доступен через ref.
  Slots `header` (приоритетнее `title`), `title`, default и `footer` получают
  `{ close }`. Header/footer создаются только при наличии slots. Default body
  без padding, занимает всю доступную высоту, прокручивается отдельно; без
  header/footer он занимает 100% panel без ограничения max-height.
  Уходящий слой сразу получает `inert`, `aria-hidden` и `pointer-events:none`.
  До конца leave он удерживает scroll lock и место в overlay stack. При открытии
  фокус переходит на первый видимый control (либо panel); Tab/Shift+Tab и внешний
  focus остаются внутри верхнего drawer, после закрытия фокус возвращается
  инициатору, если он ещё существует и над drawer не открыто другое окно.
  Teleported `BasePopover`/`ActionMenu` входят в общий stack: drawer уступает
  им Escape и focus, включая Tab. Для `BasePopover` внутри drawer consumer
  задаёт `zIndex` выше drawer; `ActionMenu` уже использует `9300`.
  `swipeToClose=false` — opt-in жест влево внутри panel. Распознаётся
  горизонтальное движение с порогом `max(64px, 25% ширины)` и преимуществом
  горизонтали 1.5×; вертикальная прокрутка, taps, правый swipe и multi-touch
  не закрывают panel. Inputs/contenteditable и `[data-share-drawer-no-swipe]`
  исключены. Открытие жестом от края и навигация принадлежат consumer.
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

Overlay-компоненты используют единый внутренний stack и reference-counted
scroll lock. Floating surfaces тоже регистрируются в stack, но сами не
захватывают scroll lock. Escape обрабатывает только верхний владелец.

Полный sidebar внутри drawer (brand/account остаются частью sidebar):

```vue
<AppDrawer v-model="navigationOpen" aria-label="Navigation" :show-close="false" :z-index="100">
  <AppSidebar position="embedded" :model-value="true" :show-toggle="false">
    <template #brand>
      <SidebarBrand as="div" label="Application" />
      <button type="button" aria-label="Close navigation" @click="navigationOpen = false">×</button>
    </template>
    <SidebarNavItem as="button" label="Overview" />
    <template #account><AccountMenu label="Account" expanded /></template>
  </AppSidebar>
</AppDrawer>
```

## Floating UI

- `BasePopover` — teleported anchored surface с placements `bottom-start`,
  `bottom-end`, `right-start`, viewport clamp, outside-click и topmost Escape.
  `transitionPreset="action-menu"` включает общий enter/leave motion с
  `prefers-reduced-motion`; `none` оставляет поверхность без motion. Сырой
  `transition` остаётся приоритетным escape hatch для специализированного
  Vue Transition name.
- `ActionMenu` (`RowActionMenu` alias) — меню действий, которое измеряет себя и
  открывается над trigger, когда снизу не хватает места. Опциональный `anchor`
  задаёт внешний DOM-элемент для программного открытия через `open`/`toggle`:
  меню привязывается к его границам, даже если встроенный trigger скрыт.
  Нажатие на внешний anchor не считается кликом снаружи; без `anchor`
  позиционирование и закрытие используют встроенный trigger как прежде.
  Размеры меню измеряются без масштаба enter-анимации и с учётом рамки,
  чтобы выравнивание по anchor не менялось после появления меню.
- `ActionMenuItem` (`RowActionItem` alias) — нейтральная строка меню с icon
  component/slot, suffix, submenu state и semantic tone.
- `ActionMenuSubmenu` (`RowActionSubmenu` alias) — соседний popover на desktop и
  inline-раскрытие на mobile.
- `AccountMenu` — общий trigger профиля для sidebar: avatar, подпись и chevron;
  сами действия передаются consumer-ом через default slot и строятся на
  `ActionMenuItem`. Prop `expanded` переключает rail- и полный варианты.
- `ValueSelect` — компактный searchable listbox с disabled options, стрелками,
  Home/End, Enter и Escape. Все видимые тексты передаются props.
- `ColorPresetPicker` — preset/custom/clear picker. `variant="button"` даёт кнопку
  80×40: нейтральная палитра (заменяется слотом `icon`) слева и текущий цвет
  справа. По умолчанию `variant="swatch"`; существующий слот `trigger` сохраняется
  для этого варианта. `inline` всегда выводит саму палитру. Палитра передаётся `colors`,
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
  перед построением DOM всегда вызывается `sanitizeRichHtml`. Атомарные inline-
  узлы передаются consumer-у через scoped slot `node` как
  `{ kind, payload, label }`; без слота показывается нейтральный chip.
- `RichTextEditor` — contenteditable-редактор с общей типографикой, headings,
  inline formatting, color picker и нативными ссылками. Slot `toolbar` получает
  `insertRichNode`, `updateRichNode`, `removeRichNode` и `editor`, поэтому
  приложение добавляет собственные кнопки без fork редактора. Метод
  `editor.openLinkEditor(anchor?)` открывает тот же нативный редактор ссылок из
  consumer-кнопки; prop `showLinkButton=false` скрывает встроенную кнопку, когда
  consumer объединяет её со своей адаптивной группой toolbar. Клик по уже
  вставленному узлу эмитит `node-select` с DOM element и разобранным узлом.
  `paste` и `drop` перехватываются и проходят тот же sanitizer до вставки; emit
  также содержит очищенный HTML.

Sanitizer использует allowlist тегов и атрибутов, удаляет executable/embed
элементы, event handlers, изображения и произвольные styles. Для ссылок
разрешены только HTTP(S), mailto, tel и относительные URL; для inline-style —
только проверенный `color`. Нейтральный узел хранится как атомарный
`span[data-rich-node][data-rich-payload]`; kind ограничен безопасным slug,
payload — небольшим JSON object, label — plain text. Без DOMParser функция возвращает escaped text, то
есть серверный/тестовый fallback остаётся безопасным.

Visible labels редактора передаются через `labels`; палитра — через `colors`.
Публичные чистые функции: `sanitizeRichHtml`, `sanitizeRichTextUrl`,
`sanitizeRichTextColor`, `escapeHtml`, `plainTextToRichHtml`,
`createRichNodeHtml`, `readRichNode`, `encodeRichNodePayload` и
`decodeRichNodePayload`.

## Application chrome

- `AppShell` — layout boundary для sidebar/content/optional rail. Режим `column`
  занимает постоянные 64 px под sidebar, `fixed` даёт такой же content offset.
  По умолчанию shell также применяет общий `.share-app-canvas`; prop
  `canvas=false` оставлен для специальных полноэкранных и печатных экранов.
- `AppSidebar` — DnD-style collapsible sidebar, optional localStorage state,
  positioning `fixed` (default), `sticky`, `embedded` и mobile modes `hide`/`top`.
  `embedded` занимает `width:100%; height:100%` родителя, игнорирует mobile
  hide/top и не позиционируется относительно viewport. Expanded state по-прежнему
  задаётся через `v-model`/`defaultExpanded`; для широких подписей в drawer
  передать `modelValue=true`, для постоянного rail — `modelValue=false`.
  Account прижат к низу и без toggle/tools (`showToggle=false` и нет tools slot).
  Opt-in `elevated=true`
  отделяет панель от canvas через `--surface`, `--border-strong` и короткую
  направленную тень в раскрытом и свёрнутом состоянии; mobile `top` направляет
  тень вниз. По умолчанию сохраняются `--bg` и прежняя expanded-тень.
- `SidebarBrand`, `SidebarNavItem`, `SidebarGroup`, `SidebarToggle` — визуальные
  части панели с единым active marker, icon column и label motion.

Панель не импортирует vue-router и icon library. Consumer передаёт `RouterLink`
в prop `as`, `to` через attrs, active state, icon component/slot и свои auth,
search, account и theme controls через slots. Ширины задают токены
`--share-sidebar-collapsed-w` (64 px) и `--share-sidebar-expanded-w` (224 px).

`AppShell` и `AppSidebar` принимают `mobileBreakpoint: 0 | 600 | 640 | 768 | 1200`
(default `768`); `0` полностью отключает mobile presentation, включая дочерние
labels/groups. Новые `600/1200` используют `max-width:599px/1199px`, поэтому
при ровно `600/1200` уже применяется desktop presentation. Существующие
`640/768` по-прежнему включительны (`max-width:640px/768px`). CSS и
типы используют один набор значений; shell и sidebar должны получать одинаковое
значение. `mobileBreakpoint=600` вместе с `modelValue=false` оставляет
свёрнутый rail на планшете и скрывает его на телефоне при `mobileMode='hide'`.
Прежние defaults, ширины `64/224` и поведение `640/768` сохранены.
DnD Share сохраняет desktop sidebar до 640,
HavenShare скрывает его при своём bottom-nav до 768, TrenchShare переключает
его в горизонтальный `top` mode до 768.

## useSortable / reorderByDrop

`useSortable` управляет pointer lifecycle, ghost, placeholder-представлением и
переносом между именованными группами. Consumer предоставляет refs массивов,
`getKey`, ограничения и `onDrop`, а затем сам сохраняет результат.

DOM-контракт:

- container: `data-sortable-container="group-name"`;
- item or its descendant inside a neutral UI wrapper:
  `data-sortable-key="stable-key"`; nested sortable containers are ignored;
- handle вызывает `startDrag(event, item, groupName, index)`.

После завершения реального drag `suppressNextClick` остаётся `true` 250 мс;
эквивалентная проверка доступна через `shouldSuppressClick()`. Это позволяет
строкам с click-навигацией не открываться после отпускания drag handle.

Группы по умолчанию используют вертикальную сортировку (`layout: 'list'`).
Для сетки задаётся `layout: 'grid'`: каждая занятая и свободная ячейка имеет
`data-sortable-slot="0"` (целый индекс от нуля). Hit testing учитывает обе
координаты и ближайший контейнер; промежутки между ячейками и выход за пределы
контейнера отменяют цель. `toIndex` — точный индекс ячейки, включая занятую;
`displayItems` сетки сохраняет исходный массив без preview-перестановки. Consumer
сам выполняет перенос или обмен и сохраняет позиции. Списки и сетки могут
находиться в одном sortable. Escape и pointercancel отменяют перенос.

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

## SectionList

Общая плитка с заголовком и вертикальным списком. Разделители ставятся между
корневыми элементами default slot, поэтому работают и с обёртками `RowActionMenu`.
Строки задают собственное содержимое и отступы, но не рисуют отдельные плитки.

Props: `title`, `embedded` (группа внутри существующей поверхности без внешних
отступов), `compact`, `transitionName` (Vue TransitionGroup), `listAttrs`
(атрибуты контейнера строк, включая data-атрибуты сортировки).
Slots: default — строки; `header` — полный заголовок; `icon` и `aside` — дополнения
стандартного заголовка; `footer` — добавление/итоги; `body` — замена списка,
например таблицей, загрузкой или пустым состоянием. Сортировка и бизнес-действия
остаются у consumer. Пустой default slot не создаёт разделителей.

## InlineEdit

Однострочное редактирование текста и enum без изменения высоты строки.
`modelValue`, `label`, `displayValue` задают значение, доступное имя и подпись в просмотре;
`options: { value, label, disabled? }[]` включает select с сохранением исходного типа значения.
Карандаш открывает локальный черновик; Enter подтверждает, Escape отменяет. Кнопки находятся внутри поля справа.
`persist(value)` может вернуть Promise: ошибка оставляет черновик открытым, `false` не завершает редактирование.
`update:modelValue` и `confirm` приходят только после успешного сохранения; `cancel` не меняет значение.
`forceOpen` раскрывает поле для общей формы и передаёт изменения сразу, без отдельных кнопок сохранения.
`editable`, `disabled`, `required`, `maxlength`, `placeholder` управляют доступностью.
`editLabel`, `confirmLabel`, `cancelLabel`, `errorLabel` локализуются потребителем.
Высота задаётся через `--inline-edit-height` (32px по умолчанию); ошибка показана под полем поверх потока.
Ширина следует тексту или подписи выбранного enum, обновляется при вводе и включает
68px запаса под рамку, отступы и обе кнопки. Минимум — `--inline-edit-min-width`
(120px), максимум — доступная ширина контейнера. Пустое поле измеряется по
`placeholder`; длинное значение ограничивается контейнером без роста высоты.

## LoadingIndicator и SkeletonBlock

`LoadingIndicator` — неопределённая загрузка до получения структуры содержимого:
тонкое кольцо с вращающимся сегментом в цвете `--accent`. Обязательный `label`
задаёт имя `role="status"`; `showLabel` выводит подпись, `size` — `sm` (32px),
`md` (72px, default) или `lg` (104px). Компонент не задаёт высоту страницы:
центрирование в области принадлежит consumer. Подходит для загрузки страницы
и изображения. Не отображает фиктивный процент прогресса.

`SkeletonBlock` — декоративная часть известной структуры. `width` и `height`
принимают CSS-размеры (по умолчанию `100%` и `12px`), `round` даёт круглую форму.
Consumer собирает геометрию реальных строк и задаёт `aria-busy` на секции.
Оба компонента используют semantic tokens; `prefers-reduced-motion` отключает
движение. Без данных о структуре используется LoadingIndicator, а не выдуманный
набор skeleton-блоков.

### Общая область загрузки

`LoadingState` центрирует `LoadingIndicator` с обязательной подписью `label`
и `aria-busy`. Обычный вариант резервирует 180px, `compact` даёт строку
с индикатором 32px и отступом 12px, `fill` занимает доступную область страницы.
Применяется при неизвестной структуре, первой загрузке и поиске; для догрузки
используется compact с сохранением уже показанных результатов.

`LoadingIndicator` также принимает `size="xs"` (16px) или положительное число
пикселей; `inline` располагает подпись рядом с изображением. Loading-состояния
FormActionButtons и ConfirmDialog показывают маленький индикатор рядом с
существующей подписью кнопки. Определённый прогресс по-прежнему показывается
процентом или полосой, а ошибки и пустые результаты не обозначаются загрузкой.

### ActionButton

Нейтральное самостоятельное действие: `variant=primary|secondary|quiet|dashed (пунктирная рамка)`, `type` (по умолчанию button), `disabled`, `loading`, `loadingLabel`. Слот по умолчанию — текст, `icon` — необязательная иконка. Loading отключает нажатие и показывает общий индикатор; click и aria-атрибуты передаются корневой кнопке. Используется для запуска операций и копирования результатов в инструментах consumer-приложений.

`layout="stacked"` помещает иконку над подписью в компактной кнопке высотой
48 px, с минимальной шириной 56 px. Подходит для плавающих панелей инструментов
и действий над превью. Полное доступное имя можно задать через `aria-label`,
если видимая подпись сокращена. По умолчанию остаётся `inline`; `iconOnly`
имеет приоритет и сохраняет прежнюю геометрию.

## GuidedTour и useGuidedTour

`reactive(useGuidedTour({ onFinish }))` передаётся в `GuidedTour` через `tour`.
`start(steps)` запускает массив `{ id, title, body, target?, enter? }`.
`target` возвращает DOM-элемент; после `enter` контроллер ждёт Vue render и
появление цели до 3 секунд. Отсутствующая цель показывает ошибку с retry, а не
ложное завершение. `enter({ signal, onCleanup })` может открывать UI и сразу
регистрирует синхронный rollback. Cleanup выполняется при смене шага, stop и
размонтировании; запоздалые async-результаты игнорируются по AbortSignal.
`onFinish('completed' | 'dismissed')` сохраняет результат в consumer;
отклонённый Promise оставляет ошибку и retry. При ошибке `close` закрывает тур
без записи, поэтому offline не блокирует страницу. `stop()` отменяет без сохранения.
Пропуск во время подготовки отменяет её через AbortSignal и сохраняет dismissal.

Карточка блокирует фон, удерживает фокус, перехватывает Escape/горячие клавиши,
восстанавливает фокус и отслеживает геометрию цели и visual viewport.
`mobile` располагает карточку у края, противоположного цели; `zIndex` по умолчанию
12000, должен быть выше открываемых сценарием окон. `labels` задаёт все подписи
кнопок, сообщения и функцию `progress(current, total)`. Тексты — plain text.

Пакет не выбирает маршруты, источники, пользователей и не хранит прогресс.
Consumer обязан разрешать только безопасные UI-действия, задавать устойчивые
семантические цели, отменять обучение при смене контекста и не запускать два
тура одновременно. Действия записи данных и необратимые клики не входят в тур.

`ActionButton.iconOnly` задаёт кнопку 48×48 без текстовых отступов.
Иконка передаётся в `icon`, доступное имя — `aria-label`; вариант `quiet`
подходит для действий без рамки.

`BasePopover` отслеживает размер содержимого через `ResizeObserver`, чтобы
асинхронная загрузка списков сохраняла позицию в пределах viewport.


## Списки, компактные данные и подсказки (0.23)

- `StatBar`: `percent`, `tempPercent`, `color`, `tempColor`, `size`, `decorated`, `label`. Размеры: `small` — 4 px, `compact` — 6 px, `medium` (по умолчанию) — 14 px, `large` — 22 px. `compact` даёт промежуточную толщину для плотных строк здоровья или прогресса. Значения ограничиваются диапазоном 0–100; `role=meter` описывает основную долю. Подходит для здоровья и прогресса уровня.
- `IconPicker`: `modelValue`, массив `options: { value, label, icon, disabled? }[]`, обязательный `label`. Событие `update:modelValue`, доступные кнопки с `aria-pressed`; consumer поставляет набор иконок. Применяется к счётчикам и настройке категорий.
- `DetailSection`: `label`, `tone=accent|danger`, `collapsible`, `modelValue`, `defaultOpen`. Слоты `icon` и default. Управляемое раскрытие через `update:modelValue`, связь кнопки с содержимым через `aria-controls`. Для разделов характеристик и справочной информации.
- `ContentRow`: одна корневая строка, `title`, `alternateLabel`, `marker`, `markerLabel`, `subtitle`, `nameCenter`, `showChevron`, `interactive`, `selected`. Слоты `icon`, `metric`, `subtitle`, `name-extras`, `trailing`; `activate` по клику, Enter и Space. Интерактивный вариант владеет рамкой строки, consumer — её положением в списке. Применяется к справочникам, каталогам и поиску.
- `OptionList`: `id`, `label`, `options: { value, label, disabled? }[]`, `activeIndex`, `emptyLabel`; события `select(option)`, `active(index)`, `hover({ option, event })`, `leave`. Слоты `option`, `empty`, `footer`. Роли listbox/option, прокрутка; фокус и клавиатурный ввод принадлежат controller. В option-слоте можно добавить отдельное действие, остановив его click.
- `SearchMultiSelect`: `modelValue` — массив значений, `options` как у OptionList, `limit` (0 без лимита), `label`, `placeholder`, `emptyLabel`, `removeLabel`, `createLabel`, `allowCreate`, `creating`, `disabled`, `zIndex`. События `update:modelValue` и `create(text)`. Ввод, выбранные теги и BasePopover; стрелки/Enter выбирают, Escape/Tab закрывают. Создание и загрузка опций выполняются consumer. Подходит для тегов и выбора нескольких навыков.
- `FloatingTooltip`: `anchor` (DOM-элемент) либо `x`, `top`/`bottom`, `width`, `minWidth`, `maxWidth`, `zIndex`. Слот default; Teleport, анимация появления с reduced motion, ограничение viewport, пересчёт при resize/scroll и изменение размеров содержимого. Добавляет собственный id в `aria-describedby` якоря и удаляет его при закрытии. Подсказка неинтерактивна и не перехватывает focus/Escape у модального окна. Consumer определяет hover/touch-условия и содержание.

`ActionMenu.related=true` отмечает телепортированное меню как часть родительского
поповера: взаимодействие с ним не закрывает `BasePopover`.

`ActionMenu.triggerAttrs` передаёт дополнительные DOM-атрибуты/стили корневому trigger без внешней обёртки.

### useVirtualList

`useVirtualList(items, container, { key, estimateSize, threshold = 80, overscan = 6 })` принимает ref/getter строк и ref прокручиваемого DOM-контейнера. `key(item)` обязателен; `estimateSize(item)` возвращает предполагаемую высоту (по умолчанию 70px). Контейнер должен иметь ограниченную высоту. Строки могут быть разной высоты: ResizeObserver учитывает размеры и вертикальные margins.

Возвращает `visibleItems` (`{ item, key, index, gap }`), `paddingAfter`, `totalSize`, `setItemRef(key, elementOrComponent)`. Consumer размещает gap перед соответствующей строкой и завершающий spacer, передаёт ref реального корня строки. Заголовки групп входят в общий массив. Данные, фильтры, группировка и пагинация принадлежат consumer; composable ограничивает только DOM. Строка с фокусом остаётся смонтированной при прокрутке, listeners/observers освобождаются при unmount.

## DatePicker

Нейтральный календарь для даты без времени: `modelValue` / `update:modelValue` —
`YYYY-MM-DD` или пустая строка. Значения сохраняются в локальном календаре без
преобразования в UTC. `locale` форматирует месяц, дни недели и выбранную дату;
продукт передаёт `placeholder`, `ariaLabel`, `previousLabel`, `nextLabel`,
`monthLabel`, `yearLabel`, `todayLabel`, `clearLabel`.
`weekStartsOn` — первый день недели (0 — воскресенье, по умолчанию 1),
`min`/`max` ограничивают выбор, `disabled` блокирует открытие,
`allowClear` добавляет очистку, `zIndex` управляет слоем popover (4000).
Календарь показывает соседние дни, выделяет сегодня и выбранную дату.
Месяц и год выбираются отдельно. Стрелки перемещают фокус по дням,
Home/End — внутри недели, PageUp/PageDown — по месяцам, с Shift — по годам.
Enter/Space выбирают день; Escape возвращает фокус к полю; Tab остаётся внутри
открытого календаря. Первый запланированный consumer использует компонент для
встреч кампании, второй — для календарных дат личного дневника.

## TimelineGroup и линия SectionLabel

`TimelineGroup` — нейтральная композиция ленты, выделенная из хроники DnD Share
и используемая также дневником. Слот `identity` содержит иконку или подпись
субъекта слева от вертикального цветного соединителя, основной слот — событие
справа. `footer` занимает обе колонки и позволяет разместить полный редактор.
Компонент не знает об авторах, типах событий, API и правах.

Props: `color` (accent), `railWidth` (40px), `compactRailWidth` (32px, до 600px
viewport), `gap` (12), `compactGap` (8), `paddingBlock` (16), `sticky` (false)
и `separated` (true — тонкий разделитель снизу). Числовые размеры — в px;
ширины rail принимают CSS grid-track, включая `minmax`. Sticky identity
располагается в 12px от верха scroll-контейнера. Внешний вид использует semantic
tokens; контент, редактор и порядок остаются у consumer.

`SectionLabel.line` (false по умолчанию) добавляет горизонтальную линию между
названием и слотом `actions`, например счётчиком. Старые состояния компонента
не меняются. Для заголовка используйте `role="heading"` / `aria-level` через attrs.


### IconToggleButton

Нейтральная кнопка 40×40 на ActionButton: `modelValue`, обязательный `label`,
`color` (CSS color/token), `disabled`; emit `update:modelValue`, slot `icon`.
Состояние выключения рисуется одной постоянной SVG-линией поверх иконки:
stroke-dashoffset плавно меняется в обе стороны. Линия проходит от (2,2) до (22,22);
основная иконка выключенной кнопки имеет opacity .4, включённой — 1. Цвет и рамка также анимированы;
`prefers-reduced-motion` отключает transitions. Иконка остаётся у consumer;
компонент не зависит от icon library и не хранит серверное состояние.

SectionLabel поддерживает `borderPosition="before"` для линии над текстом
и `inset` (number px либо CSS length) для горизонтальных отступов содержимого.
`spaceAfter` (number px либо CSS length) задаёт margin-bottom заголовка.
`size="small"` сохраняет шрифт 10px по умолчанию; `size="medium"` увеличивает его до 12px.
Default `after` и отсутствие inset/spaceAfter сохраняют прежнюю геометрию.

## StarRating

Нейтральный выбор оценки. modelValue — число, max — целое 1–10 (по умолчанию5),
label — имя группы, optionLabels — локализованные имена вариантов. Изменения
идут через update:modelValue. Стрелки/Home/End выбирают значение и перемещают
фокус; кнопки работают с Enter/Space. readonly показывает дробную заливку и
один доступный образ с valueLabel, disabled блокирует изменения. Цвет берётся
из warning, coarse pointer увеличивает цель нажатия, reduced motion убирает
переходы. HTTP, разрешения, среднее число и подписи количества остаются consumer.
