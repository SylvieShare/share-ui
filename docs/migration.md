# Карта миграции

Документ фиксирует границу между общей библиотекой и приложениями. Он нужен,
чтобы следующий перенос начинался с проверки владельца ответственности, а не с
копирования похожего Vue-файла.

## Что уже общее

| Слой | Публичный контракт `share-ui` | DnD Share | TrenchShare | HavenShare |
|---|---|---|---|---|
| Тема и canvas | `styles.css`, tokens, `.share-app-canvas` | подключено, фиолетовый accent | подключено, зелёный accent | подключено, выбираемый accent |
| Каркас и sidebar | `AppShell`, `AppSidebar`, `Sidebar*` | DnD adapter | router/auth adapter | router/i18n/theme adapter |
| Плитки | `BaseTile` | общий primitive | доступен для поэтапной замены domain tiles | доступен для поэтапной замены domain tiles |
| Формы | `Form*`, toggles, checkbox, editor primitives | подключено | подключено | подключено через локальные adapters там, где UX отличается |
| Overlays и morph | `AppModal*`, dialogs, `MorphSheet`, composables | подключено | подключено | подключено |
| Floating UI | `BasePopover`, `ActionMenu*`, `ValueSelect`, `ColorPresetPicker` | подключено; локален icon adapter | подключено | picker подключён через palette adapter |
| Rich text | `RichTextEditor`, `RichContent`, sanitizer | подключено через DnD adapter | подключено | будет подключаться при появлении сохранённого rich text |
| Сортировка списков | `useSortable`, `reorderByDrop` | подключено | подключено | будет подключаться для сортируемого списка |

`adapter` здесь означает небольшой consumer-компонент: он передаёт props/slots
и преобразует события, но не копирует CSS, overlay lifecycle или pointer logic.

## Что намеренно остаётся в приложениях

- router-конфигурация, маршруты и правила активного пункта;
- авторизация, профиль, logout, HTTP и Pinia stores;
- i18n и продуктовые тексты;
- доменные карточки, формы и правила валидации;
- соответствие domain action names набору иконок;
- server-backed suggest/picker, пока их API нельзя выразить нейтральными props;
- свободный graph/canvas drag с координатами и связями: это не сортировка списка;
- специализированные page/tool headers, которые управляют конкретным workspace.

Общий header следует добавлять только как presentation shell со slots и events.
Он не должен читать route, account store или самостоятельно вызывать API.

## Как переносить следующий компонент

1. Выделить повторяемую визуальную или interaction-ответственность.
2. Убрать из неё router, store, API, i18n и предметные типы.
3. Описать props, events, slots, keyboard/mobile поведение и theme-токены.
4. Добавить экспорт, типы, тесты и запись в `docs/components.md`.
5. Выпустить неизменяемый Git tag и установить его точным URL в consumer.
6. Оставить локальный adapter, только если приложению действительно нужен
   продуктовый controller.
7. Проверить минимум два consumer-сценария до дальнейшего обобщения API.

Не переносить компонент «на будущее», если сейчас существует только один
domain-сценарий. Сначала сохраняется локальная реализация, затем при появлении
второго сценария извлекается минимальный общий контракт.
