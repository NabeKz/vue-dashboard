import { type OverlayContext } from "@/provider/use-context"
import { computed, ref } from "vue"
import type { Announcement, AnnouncementWithId } from "./model"
import type { AnnouncementRepository } from "./repository"

type ModalState =
  | {
      mode: "close"
      data?: never
    }
  | {
      mode: "add"
      data?: never
    }
  | {
      mode: "edit"
      data: AnnouncementWithId
    }

export const useInteraction = (
  repository: AnnouncementRepository,
  onMounted: (action: () => void) => void,
  withOverlay: OverlayContext,
) => {
  const _modalState = ref<ModalState>({ mode: "close" })
  const announcementList = ref<AnnouncementWithId[]>([])

  const modalState = computed(() => ({
    isAdd: _modalState.value.mode === "add",
    isEdit: _modalState.value.mode === "edit",
    data: _modalState.value.data,
  }))

  const onOpenAddModal = () => (_modalState.value = { mode: "add" })
  const onOpenEditModal = async (item: AnnouncementWithId) => {
    await withOverlay(
      () => repository.findById(item.id),
      async data => {
        _modalState.value = { mode: "edit", data }
      },
      async e => console.error(e),
    )
  }
  const onUpdate = (data: Announcement) => repository.update(data)
  const onCloseModal = () => (_modalState.value = { mode: "close" })

  const fetchData = async () => {
    await withOverlay(
      () => repository.list(),
      async data => {
        announcementList.value = [...data]
      },
      async err => console.error(err),
    )
  }

  const refresh = async () => {
    onCloseModal()
    await fetchData()
  }

  onMounted(async () => await fetchData())

  return {
    refresh,
    modalState,
    announcementList,
    onUpdate,
    onCloseModal,
    onOpenAddModal,
    onOpenEditModal,
  }
}
