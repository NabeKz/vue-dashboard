<script setup lang="ts">
import ModalContainer from '@/components/modal-container.vue';
import FlexBox from '@/components/parts/box/flex-box.vue';
import SmallButton from '@/components/parts/button/small-button.vue';
import TableContainer from '@/components/parts/table/table-container.vue';
import { ref } from 'vue';
import EditModal from './components/edit-modal.vue';

const open = ref(false)
const onClick = () => {
  open.value = !open.value
}
</script>

<template>
  <FlexBox column>
    home
    <FlexBox row class="gap-8">
      <SmallButton type="submit" @click="onClick">新規登録</SmallButton>
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
</style>