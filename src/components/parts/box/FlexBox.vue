<script lang="ts" setup>
type Props = {
  class: `row${string}` | `column${string}`
  gap?: "16" | "24" | "32" | "64"
}

defineProps<Props>();
</script>

<template>
  <div class="flex-box" :class="[$props.class, `gap${gap ?? 8}`]">
    <slot></slot>
  </div>
</template>

<style scoped>
.flex-box {
  display: flex;

  &.row {
    flex-direction: row;
  }

  &.column {
    flex-direction: column;
  }

  &.gap8 {
    gap: 8px
  }

  &.gap16 {
    gap: 16px
  }

  &.gap24 {
    gap: 24px
  }

  &.gap32 {
    gap: 32px
  }

  &.gap64 {
    gap: 64px
  }
}
</style>