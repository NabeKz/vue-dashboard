import { ZodString, z } from "zod"

export class CustomString {
  constructor(readonly value: ZodString) {}

  static optional() {
    return new CustomString(z.string())
  }

  static required() {
    return new CustomString(z.string().min(1, "必須項目です"))
  }
}
