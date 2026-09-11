<template>
  <ActionButton ref="button" @click="start">Показать обучение</ActionButton>
  <GuidedTour :tour="tour" :mobile="mobile" />
</template>
<script setup>
import { reactive, ref } from 'vue'
import ActionButton from '../components/ActionButton.vue'
import GuidedTour from '../components/tutorial/GuidedTour.vue'
import { useGuidedTour } from '../composables/useGuidedTour.js'
import { useIsMobile } from '../composables/useMediaQuery.js'
const button = ref(null)
const mobile = useIsMobile(640)
const tour = reactive(useGuidedTour())
function start() {
  tour.start([
    { id: 'welcome', title: 'Знакомство', body: 'Центральная карточка без цели.' },
    { id: 'target', title: 'Выделенный элемент', body: 'Подсветка следует за элементом при прокрутке и изменении окна.', target: () => button.value?.$el },
    { id: 'missing', title: 'Недоступная цель', body: 'Ошибка шага предлагает повторить попытку или завершить обучение.', target: () => null },
  ])
}
</script>
