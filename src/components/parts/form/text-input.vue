<script setup lang="ts">
type Props = {
  label: string;
  modelValue: string;
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
  <div>
    <label>{{ label }}</label>
    <input :value=modelValue @input="$emit('update:modelValue', toValue($event))" />
  </div>
</template>

<style scoped></style>