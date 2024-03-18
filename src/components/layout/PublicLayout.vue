<script setup lang="ts">
import { isStoryBook } from "@/views/_shared_/storybook"
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
