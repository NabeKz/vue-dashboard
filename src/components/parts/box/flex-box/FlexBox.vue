<script lang="ts" setup>
type Props = {
  row: true;
  column?: never;
} | {
  row?: never;
  column: true
};
defineProps<Props>();
</script>

<template>
  <div class="flex-box" :class="{ row, column }">
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
}
</style>