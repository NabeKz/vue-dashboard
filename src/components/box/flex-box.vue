<script setup lang="ts">
type Props = {
  d: "row" | "column"
}

defineProps<Props>()
</script>

<template>
  <div class="flex-box" :class="[d]"></div>
</template>

<style scoped>
.flex-box {
  display: flex;

  & .row {
    flex-direction: row;
  }

  & .column {
    flex-direction: column;
  }
}
</style>