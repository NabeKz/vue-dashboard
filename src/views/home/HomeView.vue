<script setup lang="ts">
import { FlexBox, SpaceBox } from "@/components/parts/box"
import { TheButton } from "@/components/parts/button"
import { TableContainer } from "@/components/parts/table"
import { useOverlay } from "@/provider/use-context"
import { ModalContainer } from "@/views/_shared_/components"
import { onMounted } from "vue"
import { AddModal, EditModal } from "./components"
import type { AnnouncementRepository } from "./repository"
import { useInteraction } from "./use-interaction"

const props = defineProps<{
  /** hogehoge */
  repository: AnnouncementRepository
}>()

const withOverlay = useOverlay()

const {
  modalState,
  announcementList,
  refresh,
  update,
  onCloseModal,
  onOpenAddModal,
  onOpenEditModal,
} = useInteraction(props.repository, onMounted, withOverlay)
</script>

<template>
  <FlexBox class="column">
    home
    <FlexBox class="column">
      <FlexBox class="row">
        <TheButton kind="submit" @click="onOpenAddModal">新規登録</TheButton>
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

  <ModalContainer title="登録モーダル" :open="modalState.isAdd" @close="onCloseModal">
    <AddModal @submit="console.debug" @close="onCloseModal" />
  </ModalContainer>

  <ModalContainer title="編集モーダル" :open="modalState.isEdit" @close="onCloseModal">
    <template v-if="modalState.data">
      <EditModal
        :data="modalState.data"
        :update="update"
        @success="refresh"
        @close="onCloseModal"
      />
    </template>
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
