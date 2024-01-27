<script setup lang="ts">
import { RouterView } from "vue-router";
import SnackBar from "./SnackBar.vue";
</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
  <SnackBar />
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>