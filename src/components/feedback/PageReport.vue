<template>
  <teleport v-if="selecting" to="body">
    <div
      v-show="highlight.visible"
      class="selection-highlight"
      :style="highlightStyle"
      aria-hidden="true"
    />
    <div class="selection-hint" role="status" data-error-report-ignore>
      <div>
        <strong>{{ labels.selectTitle }}</strong>
        <span>{{ labels.selectHint }}</span>
      </div>
      <button type="button" @click="cancelSelection">{{ labels.cancelSelection }}</button>
    </div>
  </teleport>

  <AppModalFrame v-if="formOpen" :title="labels.title" :close-label="labels.close" :dismissible="!submitting" :z-index="9500" wide @opened="onReportModalOpened" @close="closeForm">
    <form id="error-report-form" ref="reportForm" class="report-form" data-error-report-ignore @submit.prevent="submitReport">
      <div class="selected-element">
        <span class="selected-label">{{ labels.element }}</span>
        <span v-if="selectedElement?.text" class="selected-text">{{ selectedElement.text }}</span>
      </div>
      <div class="screenshot-field">
        <span class="selected-label">{{ labels.area }}</span>
        <div class="screenshot-previews">
          <figure class="screenshot-preview-card screenshot-preview-card-element">
            <figcaption>
              <strong>{{ labels.elementPhoto }}</strong>
              <span>{{ labels.elementHelp }}</span>
            </figcaption>
            <div v-if="screenshotCapturing && !screenshotDataURL" class="screenshot-state screenshot-state-inside">
              {{ labels.capturing }}
            </div>
            <div v-else-if="screenshotDataURL" class="screenshot-preview-frame" :style="screenshotFrameStyle">
              <img
                class="screenshot-preview"
                :src="screenshotDataURL"
                alt="Скриншот выбранного элемента"
              />
              <button
                class="screenshot-context-button screenshot-context-button-less"
                type="button"
                :title="labels.lessTitle"
                :aria-label="labels.lessTitle"
                :disabled="screenshotCapturing || screenshotContextLevel === 0"
                @click="changeScreenshotContext(-1)"
              ><span aria-hidden="true">‹</span> {{ labels.less }}</button>
              <span class="screenshot-context-label">{{ screenshotContextLabel }}</span>
              <button
                class="screenshot-context-button screenshot-context-button-more"
                type="button"
                :title="labels.moreTitle"
                :aria-label="labels.moreTitle"
                :disabled="screenshotCapturing || screenshotContextLevel >= maxScreenshotContextLevel"
                @click="changeScreenshotContext(1)"
              >{{ labels.more }} <span aria-hidden="true">›</span></button>
            </div>
            <div v-if="!screenshotCapturing && screenshotError" class="screenshot-state screenshot-state-error screenshot-state-inside">
              {{ screenshotError }} {{ labels.optionalScreenshot }}
            </div>
            <label v-if="options.requireAttachmentConsent && screenshotDataURL" class="report-attachment">
              <input v-model="includeArea" type="checkbox" :disabled="submitting"> {{ labels.addArea }}
            </label>
          </figure>
          <figure v-if="viewportScreenshotDataURL || viewportScreenshotError" class="screenshot-preview-card">
            <figcaption>
              <strong>{{ labels.viewport }}</strong>
              <span>{{ labels.viewportHelp }}</span>
            </figcaption>
            <img v-if="viewportScreenshotDataURL" class="screenshot-viewport-preview"
              :src="viewportScreenshotDataURL" alt="Скриншот экрана приложения" />
            <div v-else class="screenshot-state screenshot-state-error screenshot-state-inside">{{ viewportScreenshotError }}</div>
            <label v-if="options.requireAttachmentConsent && viewportScreenshotDataURL" class="report-attachment">
              <input v-model="includeViewport" type="checkbox" :disabled="submitting"> {{ labels.addViewport }}
            </label>
          </figure>
        </div>
      </div>
      <FormField :label="labels.description" vertical>
        <FormTextarea id="error-report-description" v-model:value="description" :rows="5" maxlength="4000"
          :placeholder="labels.placeholder" :disabled="submitting" />
      </FormField>
      <div class="description-meta">
        <span v-if="submitError" class="submit-error">{{ submitError }}</span>
        <span class="char-count">{{ description.length }} / 4000</span>
      </div>
    </form>
    <template #footer>
      <FormActionButtons :submit-text="labels.send" :loading-text="labels.sending" :cancel-text="labels.cancel" :loading="submitting"
        :can-submit="!screenshotCapturing && !!description.trim()" @cancel="closeForm" @submit="submitReport" />
    </template>
  </AppModalFrame>

  <teleport v-if="toast" to="body">
    <div class="report-toast" role="status" data-error-report-ignore>{{ toast }}</div>
  </teleport>
</template>

<script setup>
import { computed } from 'vue'
import AppModalFrame from '../overlay/AppModalFrame.vue'
import FormActionButtons from '../form/FormActionButtons.vue'
import FormField from '../form/FormField.vue'
import FormTextarea from '../form/FormTextarea.vue'
import { usePageReport } from '../../internal/page-report/usePageReport.js'
import { pageReportLabels } from './pageReportLabels.js'

const props = defineProps({
  options: { type: Object, required: true },
  messages: { type: Object, default: () => ({}) },
})
const labels = computed(() => ({ ...pageReportLabels, ...props.messages }))
const {
  selecting, formOpen, submitting, description,
  submitError, selectedElement, reportForm, toast,
  screenshotDataURL, screenshotCapturing, screenshotError, screenshotContextLevel,
  viewportScreenshotDataURL, viewportScreenshotError,
  highlight, highlightStyle, maxScreenshotContextLevel, screenshotContextLabel,
  screenshotFrameStyle, cancelSelection, closeForm, submitReport,
  changeScreenshotContext, onReportModalOpened,
  includeArea, includeViewport,
} = usePageReport(props.options, labels)
</script>

<style scoped src="./PageReport.css"></style>
