import { provide, inject } from "vue"
import type { InjectionKey } from "vue"

const key = Symbol() as InjectionKey<string>

provide(key, "foo")
const foo = inject(key)

export const useErrorHandler = () => {
  return {
    foo,
  }
}
