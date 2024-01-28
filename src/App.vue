<script setup lang="ts">
import { RouterView } from "vue-router"
import { AuthProvider, AppProvider } from "@/provider"
</script>

<template>
  <AppProvider>
    <AuthProvider>
      <RouterView />
    </AuthProvider>
  </AppProvider>
</template>

<style scoped></style>