<script setup lang="ts">
import { RouterView } from "vue-router"
import { AuthProvider } from "@/provider/auth-provider"
</script>

<template>
  <AuthProvider>
    <RouterView />
  </AuthProvider>
</template>

<style scoped></style>