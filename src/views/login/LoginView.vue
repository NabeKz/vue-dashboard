<script setup lang="ts">
import { FlexBox } from "@/components/parts/box";
import { TextInput } from "@/components/parts/form";
import type { AuthRepository } from "@/lib/model/auth/repository";
import { useErrorHandler } from "@/provider/use-context";
import { useRouter } from "vue-router";
import { useLogin } from "./use-login";
import type { TokenStorage } from "@/lib/model/auth/token-storage";
import { TheButton } from "@/components/parts/button";

const { repository, storage } = defineProps<{ repository: AuthRepository; storage: TokenStorage }>()
const handler = useErrorHandler()

const router = useRouter()
const onSuccess = () => router.replace({ name: "home" })
const onFailure = () => handler?.handleOpen("ログインできませんでした")
const { email, password, errors, handleLogin } = useLogin({ onSuccess, onFailure, repository, storage })
</script>

<template>
  <FlexBox class="column" gap="16">
    <div class="header">
      this is header
    </div>
    <h1>Sign in to App</h1>
    <form @submit.prevent>
      <TextInput name="email" label="email" v-model="email" :error-message="errors.email" />
      <TextInput name="password" label="password" v-model="password" :error-message="errors.password" type="password" />
      <TheButton kind="submit" @click="handleLogin">保存</TheButton>
    </form>
  </FlexBox>
</template>


<style scoped>
.header {
  min-height: 100px;
}

h1 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 8px
}
</style>@/provider/auth-provider/use-context