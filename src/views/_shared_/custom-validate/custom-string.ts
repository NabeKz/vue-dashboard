import { ZodString, z } from "zod"

// TODO: tsdocで仕様書
export class CustomString {
  constructor(readonly value: ZodString) {}

  static optional() {
    return new CustomString(z.string())
  }

  static required() {
    return new CustomString(z.string().min(1, "必須項目です"))
  }

  max(n: number) {
    return new CustomString(this.value.max(n, `${n}桁までにしてください`))
  }
}
