<script lang="ts" setup>
import BaseButton, { type Kind } from './the-button.vue';
defineProps<{ type: Kind, disabled?: boolean }>()
</script>

<template>
  <BaseButton :kind="type" :disabled="disabled ?? false">
    <slot></slot>
  </BaseButton>
</template>

<style scoped>
.small {
  width: 60px;
}
</style>