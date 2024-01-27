<script setup lang="ts">
type Space<T extends string = string> = `${T}px` | `${T}%`
const { h, w } = defineProps<{ h?: Space, w?: Space }>()
const width = w ? w : undefined;
const height = h ? h : undefined;
</script>

<template>
  <div class="space-box" :style="{ width, height }">
  </div>
</template>

<style scoped>
.space-box {
  display: flex;
}
</style>