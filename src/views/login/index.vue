<script setup lang="ts">
import { AlertDialog } from "@/shared//parts"
import { FlexCol, TheForm } from "@/shared/parts"
import { SubmitButton } from "@/shared/parts/button"
import { TextField } from "@/shared/parts/form"
import { useInteract } from "./composable"

defineOptions({ name: "LoginView", inheritAttrs: false })

const { isOpen, isSubmitting, modal, defineField, onClickSubmit } = useInteract()

const [email, emailAttrs] = defineField("email")
const [password, passwordAttrs] = defineField("password")
</script>

<template>
  <main>
    <FlexCol gap="32">
      <FlexCol class="header">
        <h1>This is Header Area</h1>
      </FlexCol>
      <TheForm id="login-form">
        <TextField
          size="large"
          label="id"
          placeholder="hoge@example.com"
          v-model="email"
          v-bind="emailAttrs"
        />
        <TextField
          type="password"
          size="large"
          label="password"
          placeholder="password"
          v-model="password"
          v-bind="passwordAttrs"
        />
        <SubmitButton :isSubmitting="isSubmitting" @click="onClickSubmit">submit</SubmitButton>
      </TheForm>
    </FlexCol>
  </main>

  <AlertDialog :is-open="isOpen.alert" @close="modal.close">
    <div>ログインに失敗しました</div>
  </AlertDialog>
</template>

<style scoped>
main {
  margin: 0 auto;
}
.header {
  height: 100px;
  place-content: center;
}
</style>
