<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <RouterView />
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