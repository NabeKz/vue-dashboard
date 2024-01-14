<script setup lang="ts">
import ModalContainer from '@/components/modal-container.vue';
import FlexBox from '@/components/parts/box/flex-box.vue';
import SmallButton from '@/components/parts/button/small-button.vue';
import TableContainer from '@/components/parts/table/table-container.vue';
import { ref } from 'vue';
import EditModal from './components/edit-modal.vue';
import type { AnnouncementRepository } from './repository';
import { useAnnouncement } from './use-announcement';
import { useAnnouncementForm } from './use-announcement-form';
import SpaceBox from '@/components/parts/box/space-box.vue';

const props = defineProps<{ repository: AnnouncementRepository }>()
const open = ref(false)
const onClick = () => open.value = !open.value
const handleAddAnnouncement = () => {
  const form = { title: "test", content: "aaaa" }
  addAnnouncement(form)
}
const { addAnnouncement, announcementList } = useAnnouncement(props.repository)
</script>

<template>
  <FlexBox column>
    home
    <FlexBox column class="gap-8">
      <FlexBox row class="gap-8">
        <SmallButton type="submit" @click="handleAddAnnouncement">新規登録</SmallButton>
      </FlexBox>
    </FlexBox>
    <SpaceBox h="10px" />
    <TableContainer :items="announcementList">
      <template #header>
        <th class="narrow">id</th>
        <th>title</th>
        <th>content</th>
        <th colspan="2"></th>
      </template>
      <template #item="item">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>
          <SmallButton type="submit" @click="onClick">編集</SmallButton>
        </td>
      </template>
    </TableContainer>
  </FlexBox>

  <ModalContainer title="aaa" :open="open" @close="open = false">
    <EditModal @close="open = false" @submit="console.debug" />
  </ModalContainer>
</template>

<style scoped>
.narrow {
  max-width: 50px;
}

buttons {
  display: flex;
  gap: 8px;
}
</style>