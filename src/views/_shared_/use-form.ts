import { toTypedSchema } from "@vee-validate/zod"
import { useForm as _useForm } from "vee-validate"
import type { ZodObject, ZodRawShape } from "zod"

export const useForm = <T extends object>(schema: ZodObject<ZodRawShape>) => {
  const { handleSubmit, values, errors, defineField } = _useForm<T>({
    validationSchema: toTypedSchema(schema),
    validateOnMount: false
  })

  return {
    handleSubmit,
    errors,
    values,
    defineField
  }
}
