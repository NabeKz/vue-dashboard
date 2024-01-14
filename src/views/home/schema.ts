import * as z from "./schema-helper"
import type { ZodSchema } from "./schema-helper"

export const schema = z.object({
  title: z.required(),
  content: z.required()
})

export type Schema = ZodSchema<typeof schema>
