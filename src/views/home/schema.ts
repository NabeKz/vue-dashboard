import { z } from "@/views/_shared_/custom-validate"

export const schema = z.object({
  title: z.string.required(),
  content: z.string.required(),
})
