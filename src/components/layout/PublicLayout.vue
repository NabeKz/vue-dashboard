<script setup lang="ts">
const isStoryBook = import.meta.env.STORYBOOK || import.meta.env.NODE_ENV === "test"
import { RouterView } from "vue-router"
</script>

<template>
  <div class="wrapper">
    <template v-if="isStoryBook">
      <slot></slot>
    </template>
    <template v-else>
      <RouterView />
    </template>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
