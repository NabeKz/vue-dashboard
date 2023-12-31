<script setup lang="ts">
import ModalContainer from '@/components/modal-container.vue';
import FlexBox from '@/components/parts/box/flex-box.vue';
import SmallButton from '@/components/parts/button/small-button.vue';
import TableContainer from '@/components/parts/table/table-container.vue';
import { ref } from 'vue';
import EditModal from './components/edit-modal.vue';
import { useWebSocket } from './composition/useWebSocket'

const open = ref(false)
const onClick = () => {
  open.value = !open.value
}

const { message, condition, ws, } = useWebSocket("wss://echo.websocket.org")
</script>

<template>
  <FlexBox column>
    home
    <FlexBox column class="gap-8">
      <FlexBox row class="gap-8">
        <SmallButton type="submit" :disabled="condition.isOpen" @click="ws.open">open</SmallButton>
        <SmallButton type="submit" :disabled="condition.isClose" @click="ws.close">close</SmallButton>
      </FlexBox>
      <FlexBox row class="gap-8">
        <SmallButton type="caution" :disabled="condition.isClose" @click="ws.ask">ask</SmallButton>
        <SmallButton type="submit" :disabled="condition.isClose" @click="ws.bid">bit</SmallButton>
      </FlexBox>
      message: {{ message }}
      <FlexBox row class="gap-8">
        <SmallButton type="submit" @click="onClick">新規登録</SmallButton>
      </FlexBox>
    </FlexBox>
    <TableContainer>
      <template #header>
        <th>name</th>
        <th>title</th>
        <th colspan="2"></th>
      </template>
      <template #record>
        <td>aaa</td>
        <td>bbb</td>
        <td class="buttons">
          <SmallButton type="submit" @click="onClick">編集</SmallButton>
          <SmallButton type="submit" @click="onClick">削除</SmallButton>
        </td>
      </template>
    </TableContainer>
  </FlexBox>

  <ModalContainer title="aaa" :open="open" @close="open = false">
    <EditModal @close="open = false" @submit="console.debug" />
  </ModalContainer>
</template>

<style scoped>
.buttons {
  display: flex;
  gap: 8px;
}
</style>./use-websocket./use-websocket/use-websocket