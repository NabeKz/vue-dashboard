<script setup lang="ts">
import { RouterView } from 'vue-router'
import { AuthProvider } from "@/provider/auth-provider"
</script>

<template>
  <AuthProvider>
    <RouterView />
  </AuthProvider>
  <div id="modal-overlay"></div>
</template>

<style scoped>
#modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
}
</style>