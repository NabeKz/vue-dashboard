<script lang="ts" setup>
type Kind = "submit" | "caution"
type Size = "s" | "m" | "l"

defineProps<{ kind: Kind, size?: Size, disabled?: boolean }>()

const SIZE_DICT = {
  s: "small",
  m: "medium",
  l: "large",
} as const
</script>

<template>
  <button class="button pa-8" :class="[kind, size && SIZE_DICT[size]]" :disabled="disabled ?? false">
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
  width: auto;

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

  &.small {
    width: 60px
  }

  &.medium {
    width: 120px
  }

  &.large {
    width: 240px
  }
}
</style>