<script setup lang="ts">
import { FlexBox, SpaceBox } from "@/components/parts/box"
import { TheButton } from "@/components/parts/button"
import { TableContainer } from "@/components/parts/table"
import { ModalContainer } from "@/views/_shared_/components"
import { onMounted, ref } from "vue"
import { AddModal, EditModal } from "./components"
import type { AnnouncementRepository } from "./repository"
import { useAnnouncement } from "./use-announcement"

const props = defineProps<{
  repository: AnnouncementRepository
}>()

const open = ref(false)
const { announcementList, selected, onCloseEditModal, onOpenEditModal } = useAnnouncement(
  props.repository,
  onMounted,
)
</script>

<template>
  <FlexBox class="column">
    home
    <FlexBox class="column">
      <FlexBox class="row">
        <TheButton kind="submit" @click="open = true">新規登録</TheButton>
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
          <TheButton kind="submit" @click="() => onOpenEditModal(item)">編集</TheButton>
        </td>
      </template>
    </TableContainer>
  </FlexBox>

  <ModalContainer title="aaa" :open="open" @close="open = false">
    <AddModal @submit="console.debug" @close="open = false" />
  </ModalContainer>
  <ModalContainer title="aaa" :open="!!selected" @close="onCloseEditModal">
    <EditModal :model="selected" @submit="console.debug" @close="open = false" />
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
