<script lang="ts" setup>
import { ref } from "vue";
import { createContext } from "../auth-provider/use-snackbar";
import SnackBar from "@/components/layout/SnackBar.vue";

const open = ref(false)
const handleOpen = () => open.value = true
const handleClose = () => open.value = false
createContext({ open: false, handleOpen, handleClose })
</script>

<template>
  <slot></slot>
  <SnackBar :open="open" />
</template>

<style scoped></style>