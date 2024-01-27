<script lang="ts" setup>
type Kind = "submit" | "caution"

defineProps<{ kind: Kind, disabled?: boolean }>()
</script>

<template>
  <button class="button pa-8" :class="kind" :disabled="disabled ?? false">
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
  width: 100%;

  &.submit {
    background: steelblue;
    color: white;
  }

  &.caution {
    background: firebrick;
    color: white;
  }

  &:disabled {
    background: gray;
    color: white;
  }
}
</style>