import { toTypedSchema } from "@vee-validate/zod"
import { useForm } from "vee-validate"
import type { TypeOf, ZodObject, ZodRawShape } from "zod"

// TODO: initを型安全にする
/** @public */
export const useCustomForm = <T extends ZodObject<ZodRawShape>>(schema: T, init?: any) => {
  const { handleSubmit, meta, errors, defineField } = useForm<TypeOf<T>>({
    validationSchema: toTypedSchema(schema),
    initialValues: init,
  })

  return {
    meta,
    handleSubmit,
    errors,
    defineField,
  }
}
