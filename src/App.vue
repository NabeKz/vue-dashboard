<script setup lang="ts">
import { AppProvider, AuthProvider } from "@/provider"
import { RouterView } from "vue-router"
</script>

<template>
  <AppProvider>
    <AuthProvider>
      <RouterView />
    </AuthProvider>
  </AppProvider>
</template>

<style scoped></style>
