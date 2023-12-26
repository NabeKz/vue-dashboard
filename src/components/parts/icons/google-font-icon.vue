<script setup lang="ts">
defineProps<{ onClick?: () => void }>()
</script>

<template>
  <span class="material-symbols-outlined" :class="[onClick && 'clickable']" @click="onClick">
    <slot></slot>
  </span>
</template>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>