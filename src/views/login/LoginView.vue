<script setup lang="ts">
import { FlexBox } from "@/components/parts/box/flex-box";
import SmallButton from "@/components/parts/button/small-button.vue";
import { TextInput } from "@/components/parts/form/text-input";
import type { AuthRepository } from "@/lib/model/auth/repository";
import { useRouter } from "vue-router";
import { useLogin } from "./use-login";
import { useErrorHandler } from "@/provider/auth-provider/use-snackbar";

const { repository } = defineProps<{ repository: AuthRepository }>()
const handler = useErrorHandler()

const router = useRouter()
const onSuccess = () => router.replace({ name: "home" })
const onFailure = () => handler?.handleOpen("なんか失敗しました")
const { email, password, errors, handleLogin } = useLogin({ onSuccess, onFailure, repository })
</script>

<template>
  <FlexBox column class="gap-16">
    <div class="header">
      this is header
    </div>
    <h1>Sign in to App</h1>
    <form @submit.prevent>
      <text-input label="email" v-model="email" :error-message="errors.email" autocomplete="off" />
      <text-input type="password" label="password" v-model="password" :error-message="errors.password"
        autocomplete="off" />
      <SmallButton type="submit" @click="handleLogin">保存</SmallButton>
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