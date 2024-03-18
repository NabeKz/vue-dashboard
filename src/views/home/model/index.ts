/** aaa */
export type Announcement = {
  /** this is title */
  title: string
  /** this is content */
  content: string
}

export type AnnouncementWithId = {
  id: number
} & Announcement

export const Announcement = () => {}
