<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div id="modal-overlay"></div>
</template>

<style scoped>
#modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
}
</style>