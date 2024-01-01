import { ZodString, z } from "zod"

class ZodStringWrapper {
  constructor(private _value: ZodString) {}

  max(n: number) {
    this._value = this._value.max(n, `${n}桁以下で入力してください`)
    return this
  }
  get value() {
    return this._value
  }
}

const factory = (required: boolean) => {
  const required_error = required ? "必須項目です" : ""
  const value = z.string({ required_error })
  return required ? value.min(1, required_error) : value
}

const string = ({ required }: { required: boolean }) => {
  const value = factory(required)
  return new ZodStringWrapper(value)
}

export default { string, object: z.object }
