import { ref } from "vue"
import type { Announcement, AnnouncementWithId } from "./model"
import type { AnnouncementRepository } from "./repository"

export const useAnnouncement = (
  repository: AnnouncementRepository,
  onMounted: (action: () => void) => void,
) => {
  const announcementList = ref<AnnouncementWithId[]>([])
  const selected = ref<AnnouncementWithId>()

  const onOpenEditModal = (data: AnnouncementWithId) => (selected.value = data)
  const onCloseEditModal = () => (selected.value = undefined)

  const addAnnouncement = (announcement: Announcement) => {
    repository
      .save(announcement)
      .then(() => repository.list())
      .then(data => (announcementList.value = data))
      .catch(err => console.error(err))
  }

  onMounted(async () => {
    repository
      .list()
      .then(data => (announcementList.value = [...data]))
      .catch(err => console.error(err))
  })

  return {
    announcementList,
    selected,
    addAnnouncement,
    onOpenEditModal,
    onCloseEditModal,
  }
}
