<script lang="ts" setup>
export type Kind = "submit" | "caution"

defineProps<{ kind: Kind, disabled: boolean }>()
</script>

<template>
  <button class="button pa-8" :class="[kind, disabled && 'disabled']">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;
  border-radius: 4px;

  &.submit {
    background: steelblue;
    color: white;
  }

  &.caution {
    background: firebrick;
    color: white;
  }

  &.disabled {
    background: gray;
    color: white;
  }
}
</style>