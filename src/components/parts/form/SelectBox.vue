<script lang="ts">
type OptionItem = {
  value: string
  label: string
}
</script>

<script setup lang="ts">
type Props = {
  items: OptionItem[]
  modelValue: OptionItem["value"] | undefined
}
defineProps<Props>()
const model = defineModel({ required: true })
</script>

<template>
  {{ modelValue }}
  <select v-model="model">
    <option disabled value="">---</option>
    <template v-for="item in items" :key="item.value">
      <option :value="item.value">
        {{ item.label }}
      </option>
    </template>
  </select>
</template>
