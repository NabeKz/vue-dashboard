<script setup lang="ts">
defineProps<{ onClick?: () => void }>()
defineEmits<{ click: [] }>()
</script>

<template>
  <span class="material-symbols-outlined" :class="[onClick && 'clickable']" @click="$emit('click')">
    <slot></slot>
  </span>
</template>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>
