import { z as zod } from "zod"
import { CustomNumber } from "./custom-number"
import { CustomString } from "./custom-string"
import type { CustomValidate } from "./interface"

const object = <T extends Record<string, CustomValidate>>(record: T) => {
  const fields = Object.entries(record).reduce(
    (acc, [k, v]) => ({ ...acc, [k]: v.value }),
    {} as { [K in keyof T]: T[K]["value"] },
  )
  return zod.object(fields)
}
/** @public */
export const z = {
  object,
  string: {
    required: () => CustomString.required(),
    optional: () => CustomString.optional(),
  },
  number: {
    required: () => CustomNumber.required(),
    optional: () => CustomNumber.required(),
  },
  enum: zod.enum,
}
