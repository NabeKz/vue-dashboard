<script lang="ts" setup>
import { useId } from "@/shared/composable/use-id"

const id = useId()
defineProps<{
  label: string
}>()

const model = defineModel<string | undefined>({ required: true })
const selected = () => {}
</script>

<template>
  <div class="select">
    <div class="combobox">
      <div :id="id" :aria-label="label">label</div>
    </div>
    <ul role="listbox">
      <li role="option" aria-selected="true"></li>
    </ul>
  </div>
</template>

<style scoped>
.select {
}

ul[role="listbox"] {
  position: absolute;
}

li[role="option"] {
}
</style>
