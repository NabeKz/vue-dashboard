import * as z from "./schema-helper"

export const schema = z.object({
  title: z.required(),
  content: z.required()
})

export type Schema = z.ZodSchema<typeof schema>
