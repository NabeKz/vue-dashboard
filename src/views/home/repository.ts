import type { Announcement, AnnouncementWithId } from "./model"

export interface AnnouncementRepository {
  list(): Promise<AnnouncementWithId[]>
  save(announcement: Announcement): Promise<void>
}
/** @public */
export class AnnouncementRepositoryOnMemory implements AnnouncementRepository {
  _list = [
    { id: 1, title: "aaa", content: "hogehoge" },
    { id: 2, title: "bbb", content: "fugafuga" },
  ]

  async list(): Promise<AnnouncementWithId[]> {
    return [...this._list]
  }

  async save(announcement: Announcement) {
    const id = this._list.length
    this._list.push({ id, ...announcement })
  }
}
