<script lang="ts" setup>
import SnackBar from "@/components/layout/SnackBar.vue";
import { ref } from "vue";
// TODO: アーキリファクタ
// eslint-disable-next-line no-restricted-imports
import { createContext } from "../auth-provider/use-snackbar";

const message = ref("")
const open = ref(false)

const handleClose = () => open.value = false

const handleOpen = (value: string) => {
  open.value = true
  message.value = value
  setTimeout(() => {
    handleClose()
  }, 2 * 1000);
}

createContext({ handleOpen, handleClose })
</script>

<template>
  <slot></slot>
  <SnackBar :open="open" :message="message" />
</template>

<style scoped></style>