import { computed, onMounted, ref } from "vue"
import { createBook, type Book } from "@/features/book"
import { client } from "@/shared/api/client"
import { useCustomForm } from "@/shared/composable/use-custom-form"
import { type Schema, schema } from "@/views/book/list/model"
import type { Props } from "@/views/book/list/types"

export const useInteract = (date: () => Props["date"]) => {
  const books = ref<Book[]>()

  const { defineField } = useCustomForm<Schema>(schema)

  const onChangeDate = async (value: string) => {
    const { data, error } = await client.GET("/books")
    if (error) {
      console.debug(error)
    } else {
      books.value = data.map(createBook(value))
    }
  }

  onMounted(async () => {
    if (!date()) return

    const { data, error } = await client.GET("/books")
    if (error) {
      console.debug(error)
    } else {
      books.value = data.map(createBook(date()))
    }
  })

  return {
    books: computed(() => books.value),
    onChangeDate,
    defineField,
  }
}
