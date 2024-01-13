<script setup lang="ts">
import FlexBox from '@/components/parts/box/flex-box.vue';
import SmallButton from '@/components/parts/button/small-button.vue';
import { ref } from 'vue';
import { useWebSocket } from './use-websocket';

const open = ref(false)
const onClick = () => {
  open.value = !open.value
}

const { dto, ws, } = useWebSocket("wss://echo.websocket.org")
</script>

<template>
  <FlexBox column>
    home
    <FlexBox column class="gap-8">
      <FlexBox row class="gap-8">
        <SmallButton type="submit" :disabled="dto.disabledOpen" @click="ws.open">open</SmallButton>
        <SmallButton type="submit" :disabled="dto.disabledClose" @click="ws.close">close</SmallButton>
      </FlexBox>
      <FlexBox row class="gap-8">
        <SmallButton type="caution" :disabled="dto.disabledClose" @click="ws.ask">ask</SmallButton>
        <SmallButton type="submit" :disabled="dto.disabledClose" @click="ws.bid">bit</SmallButton>
      </FlexBox>
      message: {{ dto.message }}
      <FlexBox row class="gap-8">
        <SmallButton type="submit" @click="onClick">新規登録</SmallButton>
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