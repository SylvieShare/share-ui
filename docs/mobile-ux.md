# Мобильный UI

Проверяйте навигацию на телефоне, раскрытом складном экране и в широком окне.
Композицию выбирают по доступной ширине окна. В компактном интерфейсе рядом со
свайпом должна быть доступная кнопка открытия меню с целью касания 48 CSS px
и видимым фокусом. [Адаптивные приложения Android](https://developer.android.com/develop/ui/compose/layouts/adaptive/get-started-with-adaptive-apps)

Пока пользователь ведёт палец, панель и затемнение следуют за движением. При
смене направления или коротком свайпе панель возвращается назад. Для режима
сокращённого движения выключайте переход после отпускания пальца.
[Жесты Apple HIG](https://developer.apple.com/design/human-interface-guidelines/gestures) ·
[Доступность Apple HIG](https://developer.apple.com/design/human-interface-guidelines/accessibility)

Проверяйте начало свайпа возле края на реальном Android. Системная навигация
«Назад» тоже использует движение внутрь экрана от физического края.
[Жестовая навигация Android](https://developer.android.com/develop/ui/views/touch-and-input/gestures/gesturenav) ·
[Predictive Back](https://developer.android.com/design/ui/mobile/guides/patterns/predictive-back)

Репозиторий Google содержит рабочий пример адаптивной навигации, дизайн-файлы и
скриншот-тесты размеров окна. [Now in Android](https://github.com/android/nowinandroid)
