import z from "zod"
import { required } from "../_shared_/custom-validate"

export const schema = z.object({
  email: z.string().superRefine(required())
})

export type Schema = z.infer<typeof schema>
