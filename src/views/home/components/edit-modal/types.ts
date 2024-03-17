import type { AnnouncementWithId } from "@/views/home/model"

export type Props = {
  data: AnnouncementWithId
  onUpdate: (data: AnnouncementWithId) => Promise<void>
}

export type Emits = {
  (e: "success"): () => void
  (e: "failure"): () => void
  (e: "close"): () => void
}
