import type { AnnouncementWithId } from "@/views/home/model"

export type Props = {
  data: AnnouncementWithId
  update: (data: AnnouncementWithId) => Promise<void>
}

export type Emits = {
  success: []
  failure: []
  close: []
}
