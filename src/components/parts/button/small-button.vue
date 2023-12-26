<script lang="ts" setup>
import BaseButton, { type Kind } from './the-button.vue';
defineProps<{ type: Kind }>()
</script>

<template>
  <BaseButton :kind="type">
    <slot></slot>
  </BaseButton>
</template>

<style scoped>
.small {
  width: 60px;
}
</style>