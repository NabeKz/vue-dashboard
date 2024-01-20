import { toTypedSchema } from "@vee-validate/zod"
import { useForm } from "vee-validate"
import type { ZodSchema } from "zod"

export const useFormWrapper = <T extends object>(schema: ZodSchema<T>) =>
  useForm<T>({ validationSchema: toTypedSchema(schema) })
