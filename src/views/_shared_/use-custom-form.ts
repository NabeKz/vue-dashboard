import { toTypedSchema } from "@vee-validate/zod"
import { useForm } from "vee-validate"
import type { TypeOf, ZodObject, ZodRawShape } from "zod"

type Schema<T extends ZodObject<ZodRawShape>> = TypeOf<T>
/** @public */
export const useCustomForm = <T extends ZodObject<ZodRawShape>>(schema: T, init?: T) => {
  const { handleSubmit, meta, errors, defineField } = useForm<Schema<T>>({
    validationSchema: toTypedSchema(schema),
    initialValues: init as any,
  })

  return {
    meta,
    handleSubmit,
    errors,
    defineField,
  }
}
