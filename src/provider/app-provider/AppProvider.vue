<script lang="ts" setup>
import LoaderOverlay from "@/components/layout/LoaderOverlay.vue"
import SnackBar from "@/components/layout/SnackBar.vue"
import { ref } from "vue"
// TODO: アーキリファクタ
import { createContext } from "@/provider/use-context"

const message = ref("")
const open = ref(false)
const loading = ref(false)

const handleClose = () => (open.value = false)

const handleOpen = (value: string) => {
  open.value = true
  message.value = value
  setTimeout(handleClose, 2 * 1000)
}

const withOverlay = async <T,>(
  command: () => Promise<T>,
  onSuccess: (data: T) => Promise<void>,
  onFailure: (e: unknown) => Promise<void>,
) => {
  loading.value = true
  try {
    const data = await command()
    await onSuccess(data)
  } catch (e) {
    await onFailure(e)
  } finally {
    loading.value = false
  }
}

createContext({ handleOpen, handleClose }, withOverlay)
</script>

<template>
  <slot></slot>
  <SnackBar :open="open" :message="message" />
  <LoaderOverlay :loading="loading" />
</template>

<style scoped></style>
