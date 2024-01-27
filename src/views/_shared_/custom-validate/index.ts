import { ZodString, z as zod } from "zod"
import { CustomString } from "./custom-string"
import type { CustomValidate } from "./interface"

const required = () => CustomString.required()
const optional = () => CustomString.optional()

const object = <T extends Record<string, CustomValidate>>(record: T) => {
  const fields = Object.entries(record).reduce(
    (acc, [k, v]) => ({ ...acc, [k]: v.value }),
    {} as Record<keyof T, ZodString>,
  )
  return zod.object(fields)
}
/** @public */
export const z = {
  object,
  string: { required, optional },
  enum: zod.enum,
}
