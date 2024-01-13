export type WithId<T> = T & { id: number }

export type Announcement = {
  title: string
  content: string
}
export type AnnouncementWithId = WithId<Announcement>

export interface AnnouncementRepository {
  list(): Promise<WithId<Announcement>[]>
  save(announcement: Announcement): Promise<void>
}

export class AnnouncementRepositoryOnMemory implements AnnouncementRepository {
  _list = [
    { id: 1, title: "aaa", content: "hogehoge" },
    { id: 2, title: "bbb", content: "fugafuga" }
  ]

  async list(): Promise<AnnouncementWithId[]> {
    return [...this._list]
  }

  async save(announcement: Announcement) {
    const id = this._list.length
    this._list.push({ id, ...announcement })
  }
}
