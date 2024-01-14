import { z as zod, ZodType } from "zod"

export const required = (fns: Function[] = []) => {
  const value = zod.string().min(1, "必須項目です")
  return fns.reduce((acc, fn) => fn(acc), value)
}

export const object = zod.object

export type ZodSchema<T extends ZodType> = zod.TypeOf<T>
