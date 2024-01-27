import { onMounted, ref } from "vue"
import type { Announcement, AnnouncementRepository, AnnouncementWithId } from "./repository"

export const useAnnouncement = (repository: AnnouncementRepository) => {
  const announcementList = ref<AnnouncementWithId[]>([])

  const addAnnouncement = (announcement: Announcement) => {
    repository
      .save(announcement)
      .then(() => repository.list())
      .then(data => (announcementList.value = data))
      .catch(err => console.error(err))
  }

  onMounted(() => {
    repository
      .list()
      .then(data => (announcementList.value = [...data]))
      .catch(err => console.error(err))
  })

  return {
    announcementList,
    addAnnouncement,
  }
}

export const useFetchData = <T>(fn: () => Promise<T>) => {
  const data = ref<T>()

  onMounted(async () => {
    try {
      data.value = await fn()
    } catch (err) {
      console.debug(err)
    }
  })

  return data
}
