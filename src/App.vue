<script setup lang="ts">
import { RouterView } from "vue-router"
import { AuthProvider } from "@/provider/auth-provider"
import { AppProvider } from "@/provider/app-provider"
</script>

<template>
  <AppProvider>
    <AuthProvider>
      <RouterView />
    </AuthProvider>
  </AppProvider>
</template>

<style scoped></style>