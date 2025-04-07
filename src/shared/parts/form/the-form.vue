<script lang="ts" setup>
const id = `form-${crypto.randomUUID()}`
</script>

<template>
  <form @submit.prevent :id="id">
    <slot></slot>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
