import type { Announcement, AnnouncementWithId } from "./model"

/** fugafuga */
export interface AnnouncementRepository {
  /** aaa */
  list(): Promise<AnnouncementWithId[]>
  findById(id: AnnouncementWithId["id"]): Promise<AnnouncementWithId>
  save(announcement: Announcement): Promise<void>
  update(announcement: Announcement): Promise<void>
}

/** @public */
export class AnnouncementRepositoryOnMemory implements AnnouncementRepository {
  private sleepSec: 0 | 1 | 2

  constructor({ sleepSec }: { sleepSec?: 1 | 2 } = {}) {
    this.sleepSec = sleepSec ?? 0
  }

  _list = [
    { id: 1, title: "aaa", content: "hogehoge" },
    { id: 2, title: "bbb", content: "fugafuga" },
  ]

  private async sleep(extra = 0) {
    await new Promise(resolve => setTimeout(resolve, (this.sleepSec + extra) * 1000))
  }

  async list(): Promise<AnnouncementWithId[]> {
    await this.sleep()
    return [...this._list]
  }

  async save(announcement: Announcement) {
    await this.sleep()
    const id = this._list.length
    this._list.push({ id, ...announcement })
  }

  async update(announcement: AnnouncementWithId) {
    await this.sleep()
    const index = this._list.findIndex(item => item.id === announcement.id)
    if (index < 0) {
      throw new Error("not found")
    }
    this._list.splice(index, 1, announcement)
  }

  async findById(id: AnnouncementWithId["id"]) {
    await this.sleep()
    const target = this._list.find(item => item.id === id)
    if (!target) {
      throw new Error("not found")
    }
    return { ...target }
  }
}
