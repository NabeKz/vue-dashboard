<script setup lang="ts">
type Props = {
  label: string;
  modelValue: string | undefined;
  errorMessage: string | undefined
}
defineProps<Props>()
defineEmits<{ 'update:modelValue': [value: string] }>()

const toValue = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    return e.target.value;
  }
  return ""
}
</script>

<template>
  <div class="input-field">
    <label>{{ label }}</label>
    <input v-bind="$attrs" :value=modelValue @input="$emit('update:modelValue', toValue($event))" />
    <span class="error">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
.input-field {
  display: flex;
  flex-direction: column;
}

.error {
  color: red;
}
</style>