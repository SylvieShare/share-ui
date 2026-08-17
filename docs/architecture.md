# Архитектура

## Назначение

Пакет является общей дизайн-системой семейства SylvieShare, а не framework для
приложений. Он даёт одинаковые поверхности, формы и interaction semantics, но
оставляет приложениям данные, навигацию и бизнес-поведение.

## Слои и направление зависимостей

```text
styles/tokens.css
        ↓
components (Vue presentation)
        ↓
consumer application adapters

composables (headless browser behavior)
        ↓
consumer persistence and API calls
```

- `src/styles` — семантические app-level токены и общий application canvas.
- `src/components` — props/emits/slots, разметка и визуальное поведение.
- `src/composables` — browser lifecycle и чистые преобразования данных.
- `src/lib` — чистые алгоритмы и нейтральные наборы данных.
- `src/internal` — владельцы глобальных browser-ресурсов; это не public API.
- `src/index.js` — основная публичная JavaScript-точка входа.
- `src/index.d.ts` — типовой контракт для TypeScript-consumers.
- `src/gallery.js` — отдельная необязательная точка входа интерактивной
  витрины; она не экспортируется из основного entry point.

Внутренние файлы не импортируются deep-import'ами. Новый экспорт добавляется
через `src/index.js`, типы и `docs/components.md` одновременно. Каждый новый
публичный Vue-компонент также регистрируется и визуально показывается в
`ComponentGallery`; coverage-test проверяет это правило.

## Разрешённые зависимости

Runtime dependency только одна: Vue 3 как `peerDependency`. Запрещены импорты
из consumer-приложений и зависимости от Pinia, vue-router, HTTP-клиентов,
i18n-библиотек и доменных моделей.

Компонент с такой зависимостью сначала делится на:

1. presentation-компонент в `share-ui`;
2. adapter/controller в приложении.

Например, общий header может принимать navigation items, slots и события, но
не может сам читать route, account store или вызывать logout API.

Application chrome следует этому правилу буквально: `AppSidebar` владеет
геометрией и transient expanded state, а consumer adapter вычисляет active route,
передаёт RouterLink/icons и реализует logout/search/account actions.

То же правило применяется к меню действий: `ActionMenuItem` принимает icon
component/slot, а соответствие доменных action names и иконок остаётся в
тонком adapter-е приложения. Так библиотека не зависит от конкретного icon set.

Общие enter/leave motion presets принадлежат базовому floating-примитиву.
`ActionMenu` и программно привязанные `BasePopover` используют один action-menu
preset, поэтому consumer не зависит от CSS, случайно подключённого другим
компонентом.

## Критерии включения

Код включается в пакет, если одновременно выполняются условия:

- есть минимум два реальных или запланированных consumer-сценария;
- API выражается через props/emits/slots либо через нейтральный composable;
- нет знания о сущностях одного продукта;
- внешний вид использует только публичные theme-токены;
- поведение можно проверить независимо от backend.

Если компонент пока не проходит эти условия, он остаётся локальным. Пакет не
является складом всего содержимого `shared/` из одного приложения.

## Владение состоянием

- UI-компонент владеет только краткоживущим визуальным состоянием.
- Consumer владеет серверными данными, optimistic updates и обработкой ошибок.
- Headless composable может сообщить результат действия, но не сохраняет его.
- Глобальные browser-ресурсы (scroll lock, overlay stack, listeners) в будущих
  overlay/floating-компонентах имеют одного владельца и корректный cleanup.
- Сохранённый пользовательский HTML проходит allowlist sanitizer и при вводе,
  и перед построением read-only DOM; доверие к тому, что consumer/backend уже очистил строку,
  не является частью контракта.
- Предметные inline-ссылки хранятся нейтральными атомарными rich nodes. Библиотека
  владеет кодированием, sanitizing, selection и slot-механикой, consumer —
  словарём `kind`, загрузкой payload и действиями клика/hover.

## Совместимость

Пакет поставляет ESM и поддерживает Vue `^3.5`. Собранный `dist` не зависит от
версии Vite consumer'а, поэтому DnD Share, HavenShare и TrenchShare могут
обновлять свой build tool независимо.

До `1.0.0` API может меняться, но каждая версия фиксируется Git tag и consumers
обновляются явно. Удаление prop/event/export или токена считается breaking
change. Изменение общих визуальных defaults также описывается в release commit.
