<script setup lang="ts">
import { FlexBox } from "@/components/parts/box"
import { TheButton } from "@/components/parts/button"
import { ref } from "vue"
import { useWebSocket } from "./use-websocket"

const open = ref(false)
const onClick = () => {
  open.value = !open.value
}

const { dto, ws } = useWebSocket("wss://echo.websocket.org")
</script>

<template>
  <FlexBox class="column">
    home
    <FlexBox class="column">
      <FlexBox class="row">
        <TheButton kind="submit" :disabled="dto.disabledOpen" @click="ws.open">open</TheButton>
        <TheButton kind="submit" :disabled="dto.disabledClose" @click="ws.close">close</TheButton>
      </FlexBox>
      <FlexBox class="row">
        <TheButton kind="caution" :disabled="dto.disabledClose" @click="ws.ask">ask</TheButton>
        <TheButton kind="submit" :disabled="dto.disabledClose" @click="ws.bid">bit</TheButton>
      </FlexBox>
      message: {{ dto.message }}
      <FlexBox class="row">
        <TheButton kind="submit" @click="onClick">新規登録</TheButton>
      </FlexBox>
    </FlexBox>
  </FlexBox>
</template>

<style scoped>
.buttons {
  display: flex;
  gap: 8px;
}
</style>
