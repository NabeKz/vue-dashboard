<script lang="ts" setup>
type Props = {
  row?: true;
  column?: true
} & { gap?: "16" | "24" | "32" | "64" }
const props = defineProps<Props>();
const gap = `gap${props.gap ?? 8}`;
</script>

<template>
  <div class="flex-box" :class="[gap, { row, column }]">
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