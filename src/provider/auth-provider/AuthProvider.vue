<script lang="ts" setup>
import { LocalStorage } from "@/lib/infra/auth/storage";
import router from "@/router";
import { protectedRoutes } from "@/router/auth-route";

const storage = new LocalStorage()

const isAuthenticated = async () => {
  const token = await storage.getToken()
  return !!token
}

const isProtected = (path: string) => {
  return protectedRoutes.some(route => route.path === path)
}

router.beforeEach(async (to, _, next) => {
  if (isProtected(to.path) && !(await isAuthenticated())) {
    next({ name: "login" });
  } else {
    next();
  }
});
</script>

<template>
  <slot></slot>
</template>

<style scoped></style>../../lib/infra/auth/storage