import { toTypedSchema } from "@vee-validate/zod"
import { useForm as _useForm, type Path } from "vee-validate"
import type { Ref } from "vue"
import type { TypeOf, ZodObject, ZodRawShape } from "zod"

type Schema<T extends ZodObject<ZodRawShape>> = TypeOf<T>

const parseValues = (schema: object, fn: (key: Path<unknown>) => [Ref<unknown>, unknown]) => {
  const values: Record<string, Ref<string>> = {}
  for (const [k, v] of Object.entries(schema)) {
    Object.assign(values, { [k]: fn(k as Path<unknown>)[0] })
  }
  return values
}
export const useCustomForm = <T extends ZodObject<ZodRawShape>>(schema: T) => {
  const { handleSubmit, errors, defineField } = _useForm<Schema<T>>({
    validationSchema: toTypedSchema(schema),
    validateOnMount: false
  })

  return {
    handleSubmit,
    errors,
    defineField
  }
}
