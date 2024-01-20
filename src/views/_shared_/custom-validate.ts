import { ZodString, z as zod } from "zod"
import { CustomString } from "./custom-validate/custom-string"

const makeShape = <T extends Record<string, CustomString>>(record: T) => {
  return Object.entries(record).reduce(
    (acc, [k, v]) => ({ ...acc, [k]: v.value }),
    {} as Record<keyof T, ZodString>,
  )
}

const string = () => CustomString.required()

export const z = {
  object: zod.object,
  string,
  enum: zod.enum,
}
