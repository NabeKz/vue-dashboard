export type Announcement = {
  title: string
  content: string
}

export type AnnouncementWithId = {
  id: number
} & Announcement

export const Announcement = () => {}
