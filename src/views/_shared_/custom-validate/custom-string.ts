import { ZodString, z } from "zod"
// TODO: アーキリファクタ
// eslint-disable-next-line no-restricted-imports
import type { CustomValidate } from "../interface"

const string = () => z.string({ required_error: "必須項目です" })
// TODO: tsdocで仕様書
export class CustomString implements CustomValidate {
  constructor(
    readonly value: ZodString,
    readonly optional: boolean,
  ) {}

  static optional() {
    return new CustomString(string(), false)
  }

  static required() {
    return new CustomString(string().min(1, "必須項目です"), false)
  }

  private chain(fn: (value: ZodString) => ZodString) {
    return new CustomString(fn(this.value), this.optional)
  }

  max(n: number) {
    return this.chain(v => v.max(n, `${n}桁までにしてください`))
  }

  email() {
    return this.chain(v => v.email("不正なメールアドレスです"))
  }
}
