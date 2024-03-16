<script setup lang="ts">
import { computed } from "vue"

type Props = {
  label: string
  name: string
  errorMessage: string | undefined
  mask?: true
}

const props = defineProps<Props>()
const model = defineModel<string | undefined>({ required: true })
const type = computed(() => (props.mask ? "password" : "text"))
</script>

<template>
  <div class="input-field">
    <label :for="name">{{ label }}</label>
    <input :type="type" v-model="model" :id="name" />
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
