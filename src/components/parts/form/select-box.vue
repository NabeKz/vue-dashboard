<script lang="ts">
type OptionItem = {
  value: string
  label: string
};
</script>

<script setup lang="ts">
import { parseTargetValue } from './parse';

type Props = {
  items: OptionItem[]
  modelValue: OptionItem["value"] | undefined
};
defineProps<Props>()
defineEmits<{ 'update:modelValue': [e: string] }>()
const toValue = (e: Event) => parseTargetValue(e, HTMLSelectElement)
</script>

<template>
  {{ modelValue }}
  <select :value="modelValue" @change="$emit('update:modelValue', toValue($event))">
    <option disabled value="">---</option>
    <template v-for="item in items" :key="item.value">
      <option :value="item.value">
        {{ item.label }}
      </option>
    </template>
  </select>
</template>