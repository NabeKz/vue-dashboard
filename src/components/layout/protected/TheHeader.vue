<script setup lang="ts">
import { GoogleFontIcon } from "@/components/parts/icons"
import { useAuth } from "@/provider/auth-provider/use-auth"
import { useRouter } from "vue-router"

const router = useRouter()
const { logout } = useAuth()

const onClickLogout = async () => {
  await logout()
  await router.replace({ name: "login" })
}
</script>

<template>
  <header>
    <div class="header-item">header</div>
    <div class="header-item">
      <GoogleFontIcon @click="console.debug('hoge')">notifications</GoogleFontIcon>
    </div>
    <div class="header-item">
      <GoogleFontIcon @click="onClickLogout">logout</GoogleFontIcon>
    </div>
  </header>
</template>

<style>
.header-item {
  &:first-child {
    margin-right: auto;
  }
}
</style>
