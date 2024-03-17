import { ZodNumber, z } from "zod"
// TODO: アーキリファクタ
import type { CustomValidate } from "./interface"

const number = () => z.number({ required_error: "必須項目です" })
// TODO: tsdocで仕様書
export class CustomNumber implements CustomValidate {
  constructor(
    readonly value: ZodNumber,
    readonly optional: boolean,
  ) {}

  static optional() {
    return new CustomNumber(number(), false)
  }

  static required() {
    return new CustomNumber(number().min(1, "必須項目です"), false)
  }

  private chain(fn: (value: ZodNumber) => ZodNumber) {
    return new CustomNumber(fn(this.value), this.optional)
  }

  max(n: number) {
    return this.chain(v => v.max(n, `${n}桁までにしてください`))
  }
}
