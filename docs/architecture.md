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

- `src/styles` — семантические app-level токены и opt-in классы раскладки.
- `src/components` — props/emits/slots, разметка и визуальное поведение.
- `src/composables` — browser lifecycle и чистые преобразования данных.
- `src/lib` — чистые алгоритмы и нейтральные наборы данных.
- `src/internal` — владельцы глобальных browser-ресурсов; это не public API.
- `src/index.js` — единственная публичная JavaScript-точка входа.
- `src/index.d.ts` — типовой контракт для TypeScript-consumers.

Внутренние файлы не импортируются deep-import'ами. Новый экспорт добавляется
через `src/index.js`, типы и `docs/components.md` одновременно.

## Разрешённые зависимости

Runtime dependency только одна: Vue 3 как `peerDependency`. Запрещены импорты
из consumer-приложений и зависимости от Pinia, vue-router, HTTP-клиентов,
i18n-библиотек и доменных моделей.

Компонент с такой зависимостью сначала делится на:

1. presentation-компонент в `share-ui`;
2. adapter/controller в приложении.

Например, общий header может принимать navigation items, slots и события, но
не может сам читать route, account store или вызывать logout API.

То же правило применяется к меню действий: `ActionMenuItem` принимает icon
component/slot, а соответствие доменных action names и иконок остаётся в
тонком adapter-е приложения. Так библиотека не зависит от конкретного icon set.

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

## Совместимость

Пакет поставляет ESM и поддерживает Vue `^3.5`. Собранный `dist` не зависит от
версии Vite consumer'а, поэтому DnD Share, HavenShare и TrenchShare могут
обновлять свой build tool независимо.

До `1.0.0` API может меняться, но каждая версия фиксируется Git tag и consumers
обновляются явно. Удаление prop/event/export или токена считается breaking
change. Изменение общих визуальных defaults также описывается в release commit.
