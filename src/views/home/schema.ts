import { z } from "@/views/_shared_/custom-validate"
import { type TypeOf } from "zod"

export const schema = z.object({
  title: z.string.required(),
  content: z.string.required(),
})

export type Schema = TypeOf<typeof schema>
