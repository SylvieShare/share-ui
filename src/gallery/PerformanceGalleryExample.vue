<template>
  <DetailSection label="Переиспользуемые представления" collapsible>
    <StatBar :percent="65" :temp-percent="15" label="Значение" decorated size="large" />
    <StatBar :percent="0" label="Пустое значение" size="small" />
    <StatBar :percent="100" label="Полное значение" />
    <IconPicker v-model="icon" :options="icons" label="Иконка" />
    <IconPicker :options="icons" label="Недоступный выбор" disabled />
    <ContentRow title="Выбираемая строка" subtitle="Дополнительная информация" interactive :selected="selected" @activate="selected = !selected"><template #icon>✦</template><template #trailing>42</template></ContentRow>
    <ContentRow title="Строка просмотра" :show-chevron="false" />
    <SearchMultiSelect v-model="values" :options="options" label="Поиск и выбор" placeholder="Поиск…" :limit="3" allow-create create-label="Добавить" @create="addOption" />
    <OptionList :options="options" label="Варианты" @select="values = [$event.value]" />
    <OptionList :options="[]" label="Пустой список" />
    <button ref="anchor" type="button" @mouseenter="tooltip = true" @mouseleave="tooltip = false" @focus="tooltip = true" @blur="tooltip = false">Подсказка</button>
    <FloatingTooltip v-if="tooltip" :anchor="anchor">Подсказка остаётся внутри видимой области.</FloatingTooltip>
  </DetailSection>
  <DetailSection label="Скрытая секция" collapsible :default-open="false">Содержимое после раскрытия</DetailSection>
</template>
<script setup>
import { h, ref } from 'vue'
import DetailSection from '../components/DetailSection.vue'
import StatBar from '../components/StatBar.vue'
import IconPicker from '../components/IconPicker.vue'
import ContentRow from '../components/ContentRow.vue'
import OptionList from '../components/floating/OptionList.vue'
import SearchMultiSelect from '../components/floating/SearchMultiSelect.vue'
import FloatingTooltip from '../components/floating/FloatingTooltip.vue'
const icon = ref('star'), selected = ref(false), values = ref([]), anchor = ref(null), tooltip = ref(false)
const icons = [{ value: 'star', label: 'Звезда', icon: { render: () => h('span', '✦') } }, { value: 'circle', label: 'Круг', icon: { render: () => h('span', '●') } }]
const options = ref([{ value: 'first', label: 'Первый' }, { value: 'second', label: 'Второй' }])
function addOption(label) { const value = String(options.value.length); options.value.push({ value, label }); values.value = [...values.value, value] }
</script>
