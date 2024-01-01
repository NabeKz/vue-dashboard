import z from "@/views/_shared_/custom-validate"

export const schema = z.object({
  email: z.string({ required: true }).max(3).value,
  hoge: z.object({
    fuga: z.string({ required: true }).value
  })
})
