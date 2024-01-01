import { toTypedSchema } from "@vee-validate/zod"
import { useForm as _useForm, type Path } from "vee-validate"
import type { TypeOf, ZodObject, ZodRawShape } from "zod"

type Schema<T extends ZodObject<ZodRawShape>> = TypeOf<T>

const getNames = <T extends ZodObject<ZodRawShape>>(_values: Schema<T>) => {
  const values = {} as Record<Path<Schema<T>>, string>
  for (const k of Object.keys(_values)) {
    Object.assign(values, { [k]: k })
  }
  console.debug(values)
  return values
}
export const useCustomForm = <T extends ZodObject<ZodRawShape>>(schema: T) => {
  const { handleSubmit, errors, values, defineField } = _useForm<Schema<T>>({
    validationSchema: toTypedSchema(schema)
  })

  const names = getNames(values)

  return {
    names,
    handleSubmit,
    values,
    errors,
    defineField
  }
}
