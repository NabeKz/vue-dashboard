import * as z from "./schema-helper"

export const schema = z.object({
  title: z.required(),
  content: z.required()
})
