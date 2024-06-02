import { createSchema, required, type ToSchema } from "@/shared/lib/schema-helper"

export const schema = createSchema({
  title: required.string(["max", 50]),
  borrowDate: required.string(),
  returnDate: required.string(),
})

export type BookWriteModel = ToSchema<typeof schema>