import type { ZodType } from "zod"

export interface CustomValidate {
  get value(): ZodType
}
