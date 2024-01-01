import z from "@/views/_shared_/custom-validate"

export const schema = z.object({
  email: z.string({ required: true }).max(2).value,
  hoge: z.object({
    fuge: z.string({ required: true }).max(3).value
  })
})
