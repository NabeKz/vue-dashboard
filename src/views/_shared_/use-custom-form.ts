import { toTypedSchema } from "@vee-validate/zod"
import { useForm as _useForm } from "vee-validate"
import type { TypeOf, ZodObject, ZodRawShape } from "zod"

type Schema<T extends ZodObject<ZodRawShape>> = TypeOf<T>

export const useCustomForm = <T extends ZodObject<ZodRawShape>>(schema: T) => {
  const { handleSubmit, errors, defineField } = _useForm<Schema<T>>({
    validationSchema: toTypedSchema(schema)
  })

  return {
    handleSubmit,
    errors,
    defineField
  }
}
