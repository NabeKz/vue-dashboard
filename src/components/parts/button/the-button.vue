<script lang="ts" setup>
export type Kind = "submit"

defineProps<{ kind: Kind }>()
</script>

<template>
  <button class="button pa-8" :class="kind">
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
}
</style>