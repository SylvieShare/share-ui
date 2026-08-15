<template>
  <div class="share-component-gallery">
    <header class="share-component-gallery__header">
      <div>
        <p class="share-component-gallery__eyebrow">share-ui · {{ componentCount }} компонентов</p>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <span class="share-component-gallery__accent" aria-label="Текущий акцент" />
    </header>

    <section class="share-component-gallery__section">
      <SectionLabel title="Поверхности и действия" border />
      <div class="share-component-gallery__grid">
        <article class="share-component-gallery__card" data-share-gallery="BaseTile SectionLabel">
          <h2>BaseTile</h2>
          <div class="share-component-gallery__tile-row">
            <BaseTile strip tint interactive class="share-component-gallery__tile">
              <strong>Акцентная плитка</strong>
              <span>strip · tint · interactive</span>
            </BaseTile>
            <BaseTile framed class="share-component-gallery__tile">
              <strong>Рамка</strong>
              <span>framed</span>
            </BaseTile>
          </div>
        </article>

        <article class="share-component-gallery__card" data-share-gallery="AddButton RemoveButton">
          <h2>Кнопки элементов</h2>
          <div class="share-component-gallery__row">
            <AddButton label="Добавить элемент" />
            <AddButton label="Добавить" variant="icon" />
            <RemoveButton label="Удалить" />
            <RemoveButton label="Удалить" variant="boxed" />
          </div>
        </article>
      </div>
    </section>

    <section class="share-component-gallery__section">
      <SectionLabel title="Переключатели" border />
      <div class="share-component-gallery__grid">
        <article class="share-component-gallery__card" data-share-gallery="ToggleSwitch CompactCheckbox">
          <h2>Boolean controls</h2>
          <div class="share-component-gallery__stack">
            <ToggleSwitch v-model="switchValue" label="Включить механику" />
            <label class="share-component-gallery__checkbox-row">
              <CompactCheckbox v-model="checkboxValue" label="Выбрать элемент" />
              Выбрать элемент
            </label>
          </div>
        </article>

        <article class="share-component-gallery__card" data-share-gallery="MultiToggle SlidingTabs">
          <h2>Segmented controls</h2>
          <div class="share-component-gallery__stack">
            <MultiToggle v-model="toggleValue" :options="toggleOptions" aria-label="Размер" />
            <SlidingTabs v-model="tabValue" :tabs="tabs" aria-label="Режим просмотра" />
          </div>
        </article>

        <article class="share-component-gallery__card" data-share-gallery="AppSlider">
          <h2>AppSlider</h2>
          <div class="share-component-gallery__slider">
            <AppSlider v-model="sliderValue" :min="0" :max="100" :step="1" label="Значение" />
            <strong>{{ sliderValue }}</strong>
          </div>
        </article>
      </div>
    </section>

    <section class="share-component-gallery__section">
      <SectionLabel title="Формы" border />
      <div class="share-component-gallery__grid">
        <article
          class="share-component-gallery__card share-component-gallery__card--wide"
          data-share-gallery="FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
        >
          <h2>Form primitives</h2>
          <div class="share-component-gallery__form-grid">
            <FormField label="Название" vertical hint="обязательное поле">
              <FormTextInput v-model:value="form.name" placeholder="Название элемента" />
            </FormField>
            <FormField label="Количество" vertical>
              <FormNumberInput :value="form.count" :min="0" :max="20" @change="form.count = $event" />
            </FormField>
            <FormField label="Тип" vertical>
              <FormSelect v-model:value="form.type">
                <option value="base">Основной</option>
                <option value="extra">Дополнительный</option>
              </FormSelect>
            </FormField>
            <FormField label="Описание" vertical>
              <FormTextarea v-model:value="form.description" placeholder="Короткое описание" />
            </FormField>
          </div>
          <FormActionButtons submit-text="Сохранить" @cancel="resetForm" />
        </article>
      </div>
    </section>

    <section class="share-component-gallery__section">
      <SectionLabel title="Выбор значений и floating UI" border />
      <div class="share-component-gallery__grid">
        <article class="share-component-gallery__card" data-share-gallery="ValueSelect ColorPresetPicker">
          <h2>Selectors</h2>
          <div class="share-component-gallery__stack">
            <ValueSelect
              v-model="selectValue"
              :options="selectOptions"
              aria-label="Выбрать редкость"
              searchable
            />
            <ColorPresetPicker v-model="colorValue" inline allow-custom allow-clear />
          </div>
        </article>

        <article class="share-component-gallery__card" data-share-gallery="BasePopover">
          <h2>BasePopover</h2>
          <button ref="popoverAnchor" type="button" class="share-component-gallery__button" @click="popoverOpen = !popoverOpen">
            Открыть popover
          </button>
          <BasePopover
            :open="popoverOpen"
            :anchor="popoverAnchor"
            aria-label="Пример popover"
            @update:open="popoverOpen = $event"
          >
            <span class="share-component-gallery__popover-copy">Headless-позиционирование и закрытие снаружи</span>
          </BasePopover>
        </article>

        <article class="share-component-gallery__card" data-share-gallery="ActionMenu ActionMenuItem ActionMenuSubmenu">
          <h2>ActionMenu</h2>
          <ActionMenu title="Действия">
            <ActionMenuItem tone="accent">Редактировать</ActionMenuItem>
            <ActionMenuSubmenu label="Перемещение">
              <template #trigger="{ open }">
                <ActionMenuItem submenu :submenu-open="open">Переместить</ActionMenuItem>
              </template>
              <ActionMenuItem>В начало</ActionMenuItem>
              <ActionMenuItem>В конец</ActionMenuItem>
            </ActionMenuSubmenu>
            <ActionMenuItem tone="danger">Удалить</ActionMenuItem>
          </ActionMenu>
        </article>

        <article class="share-component-gallery__card" data-share-gallery="AccountMenu">
          <h2>AccountMenu</h2>
          <AccountMenu label="Sylvie" avatar-text="S" expanded>
            <template #default="{ close }">
              <ActionMenuItem @click="close">Настройки</ActionMenuItem>
              <ActionMenuItem tone="danger" @click="close">Выйти</ActionMenuItem>
            </template>
          </AccountMenu>
        </article>
      </div>
    </section>

    <section class="share-component-gallery__section">
      <SectionLabel title="Редакторы и rich text" border />
      <div class="share-component-gallery__grid">
        <article class="share-component-gallery__card" data-share-gallery="RichContent RichTextEditor">
          <h2>Rich text</h2>
          <RichTextEditor v-model="richValue" placeholder="Введите текст…" />
          <div class="share-component-gallery__preview">
            <RichContent :html="richValue" />
          </div>
        </article>

        <article
          class="share-component-gallery__card"
          data-share-gallery="EditorPanel EditorSection EditorSectionTitle EditorTotal"
        >
          <h2>Editor composition</h2>
          <BaseTile>
            <EditorPanel title="Параметры">
              <EditorSection title="Основное">
                <EditorSectionTitle title="Значение">
                  <template #actions><span>12</span></template>
                </EditorSectionTitle>
                <AppSlider v-model="sliderValue" :min="0" :max="100" :step="1" />
              </EditorSection>
              <EditorTotal>Итого: <strong>{{ sliderValue }}</strong></EditorTotal>
            </EditorPanel>
          </BaseTile>
        </article>
      </div>
    </section>

    <section class="share-component-gallery__section">
      <SectionLabel title="Каркас приложения" border />
      <article
        class="share-component-gallery__card share-component-gallery__card--bleed"
        data-share-gallery="AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
      >
        <h2>Navigation composition</h2>
        <div class="share-component-gallery__chrome">
          <AppShell
            class="share-component-gallery__chrome-shell"
            :class="{ 'share-component-gallery__chrome-shell--expanded': sidebarExpanded }"
            content-tag="div"
            :rail-width="88"
          >
            <template #sidebar>
              <AppSidebar v-model="sidebarExpanded" position="sticky" :default-expanded="true" storage-key="">
                <template #brand>
                  <SidebarBrand as="div" label="share-ui">
                    <template #icon><span>◆</span></template>
                  </SidebarBrand>
                </template>
                <SidebarNavItem as="button" label="Главная" active>
                  <template #icon><span>⌂</span></template>
                </SidebarNavItem>
                <SidebarGroup label="Примеры" />
                <SidebarNavItem as="button" label="Компоненты">
                  <template #icon><span>◇</span></template>
                </SidebarNavItem>
              </AppSidebar>
            </template>
            <div class="share-component-gallery__chrome-content">
              <span class="share-component-gallery__chrome-kicker">content</span>
              <strong>AppShell + AppSidebar</strong>
              <span>Фон, точки, раскрываемая навигация и rail образуют общий каркас.</span>
            </div>
            <template #rail><div class="share-component-gallery__rail">rail</div></template>
          </AppShell>
        </div>
      </article>
    </section>

    <section class="share-component-gallery__section">
      <SectionLabel title="Оверлеи и morph" border />
      <article
        class="share-component-gallery__card"
        data-share-gallery="AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
      >
        <h2>Интерактивные примеры</h2>
        <div class="share-component-gallery__row">
          <button type="button" class="share-component-gallery__button" @click="modalOpen = true">AppModal</button>
          <button type="button" class="share-component-gallery__button" @click="frameOpen = true">AppModalFrame</button>
          <button type="button" class="share-component-gallery__button" @click="shellOpen = true">ModalShell</button>
          <button type="button" class="share-component-gallery__button" @click="confirmOpen = true">ConfirmDialog</button>
          <button type="button" class="share-component-gallery__button" @click="promptOpen = true">TextPromptDialog</button>
          <button ref="morphOrigin" type="button" class="share-component-gallery__button" @click="morphOpen = true">MorphSheet</button>
        </div>
      </article>
    </section>

    <AppModal v-if="modalOpen" aria-label="Пример AppModal" @close="modalOpen = false">
      <div class="share-component-gallery__overlay-content">
        <h2>AppModal</h2>
        <p>Низкоуровневый адаптивный overlay.</p>
      </div>
    </AppModal>

    <AppModalFrame v-if="frameOpen" title="AppModalFrame" subtitle="header · body · footer" @close="frameOpen = false">
      <p>Готовая структура редактора поверх AppModal.</p>
      <template #footer><FormActionButtons @cancel="frameOpen = false" @submit="frameOpen = false" /></template>
    </AppModalFrame>

    <ModalShell :open="shellOpen" aria-label="Пример ModalShell" @close="shellOpen = false">
      <div class="share-component-gallery__overlay-content">
        <h2>ModalShell</h2>
        <p>Минимальная оболочка для собственного содержимого.</p>
      </div>
    </ModalShell>

    <ConfirmDialog
      v-model:open="confirmOpen"
      title="Подтвердить действие?"
      message="Проверка визуального состояния опасного действия."
    />

    <TextPromptDialog
      v-model:open="promptOpen"
      title="Новое название"
      label="Название"
      initial="Пример"
    />

    <MorphSheet
      v-if="morphOpen"
      :origin-el="morphOrigin"
      aria-label="Пример MorphSheet"
      show-close
      @close="morphOpen = false"
    >
      <template #head><div class="share-component-gallery__morph-head"><strong>MorphSheet</strong></div></template>
      <div class="share-component-gallery__overlay-content">
        <p>Контейнер раскрывается из исходной кнопки и возвращается обратно.</p>
      </div>
    </MorphSheet>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import BaseTile from '../components/BaseTile.vue'
import AddButton from '../components/AddButton.vue'
import AppSlider from '../components/AppSlider.vue'
import CompactCheckbox from '../components/CompactCheckbox.vue'
import MultiToggle from '../components/MultiToggle.vue'
import RemoveButton from '../components/RemoveButton.vue'
import SectionLabel from '../components/SectionLabel.vue'
import SlidingTabs from '../components/SlidingTabs.vue'
import ToggleSwitch from '../components/ToggleSwitch.vue'
import ActionMenu from '../components/floating/ActionMenu.vue'
import ActionMenuItem from '../components/floating/ActionMenuItem.vue'
import ActionMenuSubmenu from '../components/floating/ActionMenuSubmenu.vue'
import BasePopover from '../components/floating/BasePopover.vue'
import ColorPresetPicker from '../components/floating/ColorPresetPicker.vue'
import ValueSelect from '../components/floating/ValueSelect.vue'
import RichContent from '../components/rich-text/RichContent.vue'
import RichTextEditor from '../components/rich-text/RichTextEditor.vue'
import AccountMenu from '../components/navigation/AccountMenu.vue'
import AppShell from '../components/navigation/AppShell.vue'
import AppSidebar from '../components/navigation/AppSidebar.vue'
import SidebarBrand from '../components/navigation/SidebarBrand.vue'
import SidebarGroup from '../components/navigation/SidebarGroup.vue'
import SidebarNavItem from '../components/navigation/SidebarNavItem.vue'
import EditorPanel from '../components/editor/EditorPanel.vue'
import EditorSection from '../components/editor/EditorSection.vue'
import EditorSectionTitle from '../components/editor/EditorSectionTitle.vue'
import EditorTotal from '../components/editor/EditorTotal.vue'
import AppModal from '../components/overlay/AppModal.vue'
import AppModalFrame from '../components/overlay/AppModalFrame.vue'
import ConfirmDialog from '../components/overlay/ConfirmDialog.vue'
import ModalShell from '../components/overlay/ModalShell.vue'
import MorphSheet from '../components/overlay/MorphSheet.vue'
import TextPromptDialog from '../components/overlay/TextPromptDialog.vue'
import FormActionButtons from '../components/form/FormActionButtons.vue'
import FormField from '../components/form/FormField.vue'
import FormNumberInput from '../components/form/FormNumberInput.vue'
import FormSelect from '../components/form/FormSelect.vue'
import FormTextarea from '../components/form/FormTextarea.vue'
import FormTextInput from '../components/form/FormTextInput.vue'
import { COMPONENT_GALLERY_COMPONENTS } from '../lib/componentGalleryCatalog.js'

defineProps({
  title: { type: String, default: 'Компоненты share-ui' },
  description: {
    type: String,
    default: 'Единая интерактивная витрина публичных визуальных компонентов в теме текущего приложения.',
  },
})

const componentCount = COMPONENT_GALLERY_COMPONENTS.length
const switchValue = ref(true)
const checkboxValue = ref(true)
const toggleValue = ref('md')
const tabValue = ref('preview')
const sliderValue = ref(62)
const selectValue = ref('rare')
const colorValue = ref('#7c5ce2')
const richValue = ref('<p><strong>RichContent</strong> показывает очищенный результат редактора.</p>')
const sidebarExpanded = ref(true)
const popoverOpen = ref(false)
const popoverAnchor = ref(null)
const modalOpen = ref(false)
const frameOpen = ref(false)
const shellOpen = ref(false)
const confirmOpen = ref(false)
const promptOpen = ref(false)
const morphOpen = ref(false)
const morphOrigin = ref(null)

const toggleOptions = [
  { value: 'sm', label: 'S' },
  { value: 'md', label: 'M' },
  { value: 'lg', label: 'L' },
]
const tabs = [
  { key: 'preview', title: 'Пример' },
  { key: 'states', title: 'Состояния' },
]
const selectOptions = [
  { value: 'common', label: 'Обычный' },
  { value: 'rare', label: 'Редкий' },
  { value: 'legendary', label: 'Легендарный' },
]
const form = reactive({ name: 'Новый элемент', count: 3, type: 'base', description: '' })

function resetForm() {
  form.name = ''
  form.count = 0
  form.type = 'base'
  form.description = ''
}
</script>

<style scoped>
.share-component-gallery {
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: clamp(20px, 4vw, 48px);
  box-sizing: border-box;
  color: var(--text-1);
  font-family: var(--font-ui);
}

.share-component-gallery__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 42px;
}

.share-component-gallery__eyebrow {
  margin: 0 0 8px;
  color: var(--accent-soft);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .11em;
  text-transform: uppercase;
}

.share-component-gallery__header h1 {
  margin: 0;
  color: var(--text-1);
  font-family: var(--font-display);
  font-size: clamp(30px, 5vw, 48px);
  line-height: 1;
}

.share-component-gallery__header p:last-child {
  max-width: 680px;
  margin: 14px 0 0;
  color: var(--text-2);
  line-height: 1.55;
}

.share-component-gallery__accent {
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  border: 6px solid color-mix(in srgb, var(--accent) 24%, transparent);
  border-radius: 50%;
  background: var(--accent);
  background-clip: padding-box;
}

.share-component-gallery__section + .share-component-gallery__section { margin-top: 38px; }
.share-component-gallery__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }

.share-component-gallery__card {
  min-width: 0;
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  background: color-mix(in srgb, var(--surface) 94%, transparent);
  box-shadow: 0 12px 32px color-mix(in srgb, var(--app-canvas-bg) 44%, transparent);
}

.share-component-gallery__card--wide,
.share-component-gallery__card--bleed { grid-column: 1 / -1; }
.share-component-gallery__card--bleed { overflow: hidden; }

.share-component-gallery__card > h2 {
  margin: 0 0 16px;
  color: var(--text-2);
  font-size: 13px;
  font-weight: 700;
}

.share-component-gallery__row,
.share-component-gallery__tile-row,
.share-component-gallery__slider {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.share-component-gallery__stack { display: flex; flex-direction: column; align-items: flex-start; gap: 16px; }
.share-component-gallery__tile-row { align-items: stretch; }
.share-component-gallery__tile { display: flex; min-width: 150px; padding: 16px; flex: 1; flex-direction: column; gap: 5px; }
.share-component-gallery__tile span { color: var(--text-muted); font-size: 12px; }
.share-component-gallery__slider strong { width: 28px; text-align: right; }
.share-component-gallery__slider :deep(.share-slider) { flex: 1; }

.share-component-gallery__checkbox-row { display: inline-flex; align-items: center; gap: 14px; color: var(--text-2); font-size: 13px; }
.share-component-gallery__form-grid { display: grid; grid-template-columns: minmax(0, 2fr) minmax(120px, 1fr); gap: 14px; margin-bottom: 14px; }
.share-component-gallery__preview { min-height: 42px; margin-top: 12px; padding: 12px; border: 1px solid var(--border); border-radius: var(--r-md); background: var(--surface-raised); }

.share-component-gallery__button {
  min-height: 36px;
  padding: 8px 13px;
  border: 1px solid var(--border-strong);
  border-radius: var(--r-sm);
  background: var(--surface-raised);
  color: var(--text-1);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  transition: border-color .14s, background .14s, transform .1s;
}

.share-component-gallery__button:hover { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, var(--surface-raised)); }
.share-component-gallery__button:active { transform: scale(.97); }
.share-component-gallery__popover-copy { display: block; max-width: 250px; padding: 5px; color: var(--text-2); font-size: 13px; line-height: 1.45; }

.share-component-gallery__chrome { overflow: hidden; border: 1px solid var(--border); border-radius: var(--r-md); }
.share-component-gallery__chrome-shell {
  height: 380px;
  min-height: 0;
  max-height: 380px;
  overflow: hidden;
}
.share-component-gallery__chrome-shell--expanded {
  --share-sidebar-collapsed-w: var(--share-sidebar-expanded-w);
}
.share-component-gallery__chrome :deep(.share-app-sidebar) { height: 100%; }
.share-component-gallery__chrome-content { display: flex; min-width: 0; padding: 30px; flex-direction: column; align-items: flex-start; justify-content: center; gap: 10px; }
.share-component-gallery__chrome-content > span { max-width: 440px; color: var(--text-2); font-size: 13px; }
.share-component-gallery__chrome-content > .share-component-gallery__chrome-kicker { color: var(--accent-soft); font-size: 10px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.share-component-gallery__rail { display: grid; height: 100%; border-left: 1px solid var(--border); background: var(--surface); color: var(--text-muted); font-size: 11px; place-items: center; writing-mode: vertical-rl; }

.share-component-gallery__overlay-content { display: flex; padding: 24px; flex-direction: column; gap: 10px; }
.share-component-gallery__overlay-content h2,
.share-component-gallery__overlay-content p { margin: 0; }
.share-component-gallery__overlay-content p { color: var(--text-2); }
.share-component-gallery__morph-head { padding: 18px 22px; border-bottom: 1px solid var(--border); }

@media (max-width: 768px) {
  .share-component-gallery { padding: 20px 14px 40px; }
  .share-component-gallery__grid,
  .share-component-gallery__form-grid { grid-template-columns: 1fr; }
  .share-component-gallery__card--wide,
  .share-component-gallery__card--bleed { grid-column: auto; }
  .share-component-gallery__chrome-shell { height: 320px; max-height: 320px; }
  .share-component-gallery__rail { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .share-component-gallery__button { transition: none; }
}
</style>
