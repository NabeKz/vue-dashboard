import { DateFormatter } from "@/views/__shared__/date-formatter"
import { Book, type BookListQueryService } from "../model"

const d = DateFormatter.parse
export class BookQueryServiceOnMemory implements BookListQueryService {
  async fetch() {
    await new Promise((resolve) => setTimeout(resolve, 1 * 1000))
    return [
      Book({
        id: "abc-1",
        title:
          "hogehogeaaaaaaaaahogehogeaaaaaaaaahogehogeaaaaaaaaahogehogeaaaaaaaaahogehogeaaaaaaaaa",
        borrowDate: d("2020-01-01"),
        returnDate: d("2020-02-01"),
      }),
      Book({
        id: "abc-2",
        title: "fugafuga",
        borrowDate: d("2021-01-01"),
        returnDate: d("2021-03-10"),
      }),
    ]
  }
}
