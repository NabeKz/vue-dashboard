import { toTypedSchema } from "@vee-validate/zod"
import { useForm } from "vee-validate"
import type { ZodSchema } from "zod"

type TValues = Record<string, unknown>

export const useFormWrapper = <T extends TValues>(schema: ZodSchema<T>, values: T) => {
  return useForm<T>({
    validationSchema: toTypedSchema(schema),
    // PartialDeep<T>の推論を突破できないのでanyにcast(ちゃんと突破したい)
    initialValues: values as any
  })
}
