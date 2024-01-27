<script lang="ts" setup>
import router from "@/router";
import { isAuthenticated } from "./use-auth";
import { protectedRoutes } from "@/router/auth-route";

const isProtected = (path: string) => {
  return protectedRoutes.some(route => route.path === path)
}

router.beforeEach((to, _, next) => {
  if (isProtected(to.path) && !isAuthenticated()) {
    next({ name: "login" });
  } else {
    next();
  }
});
</script>

<template>
  <slot></slot>
</template>

<style scoped></style>