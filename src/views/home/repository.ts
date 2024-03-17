import type { Announcement, AnnouncementWithId } from "./model"

export interface AnnouncementRepository {
  list(): Promise<AnnouncementWithId[]>
  findById(id: AnnouncementWithId["id"]): Promise<AnnouncementWithId>
  save(announcement: Announcement): Promise<void>
  update(announcement: Announcement): Promise<void>
}
/** @public */
export class AnnouncementRepositoryOnMemory implements AnnouncementRepository {
  _list = [
    { id: 1, title: "aaa", content: "hogehoge" },
    { id: 2, title: "bbb", content: "fugafuga" },
  ]

  async list(): Promise<AnnouncementWithId[]> {
    await new Promise(resolve => setTimeout(resolve, 1 * 1000))
    return [...this._list]
  }

  async save(announcement: Announcement) {
    const id = this._list.length
    this._list.push({ id, ...announcement })
  }

  async update(announcement: AnnouncementWithId) {
    const index = this._list.findIndex(item => item.id === announcement.id)
    if (index < 0) {
      throw new Error("not found")
    }
    this._list.splice(index, 1, announcement)
  }

  async findById(id: AnnouncementWithId["id"]) {
    const target = this._list.find(item => item.id === id)
    if (!target) {
      throw new Error("not found")
    }
    return { ...target }
  }
}
