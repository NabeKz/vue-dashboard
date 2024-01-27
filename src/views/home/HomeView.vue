<script setup lang="ts">
import { FlexBox, SpaceBox } from "@/components/parts/box";
import { TheButton } from "@/components/parts/button";
import { TableContainer } from "@/components/parts/table";
import { ModalContainer } from "@/views/_shared_/components";
import { ref } from "vue";
import { AddModal, EditModal } from "./components";
import type { AnnouncementRepository } from "./repository";
import { useAnnouncement } from "./use-announcement";
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
  <FlexBox class="column">
    home
    <FlexBox class="column">
      <FlexBox class="row">
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
          <TheButton kind="submit" @click="onClick">編集</TheButton>
        </td>
      </template>
    </TableContainer>
  </FlexBox>

  <ModalContainer title="aaa" :open="open" @close="open = false">
    <AddModal @close="open = false" @submit="console.debug" />
  </ModalContainer>
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