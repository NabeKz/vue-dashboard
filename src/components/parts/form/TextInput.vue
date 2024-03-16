<script setup lang="ts">
type Props = {
  label: string
  name: string
  errorMessage: string | undefined
}
defineProps<Props>()
const model = defineModel<string | undefined>({ required: true })
</script>

<template>
  <div class="input-field">
    <label :for="name">{{ label }}</label>
    <input v-model="model" :id="name" v-bind="$attrs" />
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
