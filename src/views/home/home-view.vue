<script setup lang="ts">
import FlexBox from '@/components/box/flex-box.vue';
import TableContainer from '@/components/table/table-container.vue';
import SmallButton from '@/components/button/small-button.vue';
import ModalContainer from '@/components/modal/modal-container.vue';
import EditModal from './components/edit-modal.vue';
import { ref } from 'vue';

const open = ref(false)
const onClick = () => {
  open.value = !open.value
}
</script>

<template>
  <FlexBox column>
    home
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
          <SmallButton type="submit" @click="onClick">登録</SmallButton>
          <SmallButton type="submit" @click="onClick">削除</SmallButton>
        </td>
      </template>
    </TableContainer>
  </FlexBox>

  <ModalContainer title="aaa" :open="open" @close="open = false">
    <EditModal />
  </ModalContainer>
</template>

<style scoped>
.buttons {
  display: flex;
  gap: 8px;
}
</style>