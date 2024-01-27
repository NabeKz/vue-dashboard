<script setup lang="ts">
import { FlexBox } from "@/components/parts/box";
import { TheButton } from "@/components/parts/button";
import { TextInput } from "@/components/parts/form";
import type { AuthRepository } from "@/lib/model/auth/repository";
import { useErrorHandler } from "@/provider/auth-provider/use-snackbar";
import { useRouter } from "vue-router";
import { useLogin } from "./use-login";

const { repository } = defineProps<{ repository: AuthRepository }>()
const handler = useErrorHandler()

const router = useRouter()
const onSuccess = () => router.replace({ name: "home" })
const onFailure = () => handler?.handleOpen("なんか失敗しました")
const { email, password, errors, handleLogin } = useLogin({ onSuccess, onFailure, repository })
</script>

<template>
  <FlexBox class="column" gap="16">
    <div class="header">
      this is header
    </div>
    <h1>Sign in to App</h1>
    <form @submit.prevent>
      <TextInput label="email" v-model="email" :error-message="errors.email" autocomplete="off" />
      <TextInput type="password" label="password" v-model="password" :error-message="errors.password"
        autocomplete="off" />
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
</style>