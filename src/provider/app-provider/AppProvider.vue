<script lang="ts" setup>
import SnackBar from "@/components/layout/SnackBar.vue";
import LoaderOverlay from "@/components/layout/LoaderOverlay.vue";
import { ref } from "vue";
// TODO: アーキリファクタ
// eslint-disable-next-line no-restricted-imports
import { createContext } from "@/provider/use-context"

const message = ref("")
const open = ref(false)
const loading = ref(false)

const handleClose = () => open.value = false

const handleOpen = (value: string) => {
  open.value = true
  message.value = value
  setTimeout(handleClose, 2 * 1000);
}

const withOverlay = async <T, U>(command: () => Promise<T>, onSuccess: (data: T) => void, onFailure: (error: U) => void) => {
  loading.value = true
  command()
    .then(onSuccess)
    .catch(onFailure)
    .finally(() => loading.value = false)
}

createContext({ handleOpen, handleClose }, withOverlay)
</script>

<template>
  <slot></slot>
  <SnackBar :open="open" :message="message" />
  <LoaderOverlay :loading="loading" />
</template>

<style scoped></style>../auth-provider/use-context