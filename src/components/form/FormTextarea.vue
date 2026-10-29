<template>
  <textarea
    class="form-textarea"
    :value="value"
    :placeholder="placeholder"
    :rows="rows"
    :maxlength="maxlength"
    @input="$emit('update:value', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  value:       { default: '' },
  placeholder: { type: String, default: '' },
  rows:        { type: Number, default: 3 },
  maxlength:   { default: undefined },
})
defineEmits(['update:value'])
</script>

<style scoped>
.form-textarea {
  background: var(--surface-raised);
  border: var(--control-border-width) solid var(--border-strong);
  border-radius: 8px;
  color: var(--text-1);
  font: inherit;
  font-size: 14px;
  padding: 10px 12px;
  outline: none;
  resize: none;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.15s, border-color 0.15s;
}

.form-textarea:focus { border-color: var(--accent); background: var(--control-focus-bg); }
.form-textarea::placeholder { color: var(--text-muted); }
</style>
