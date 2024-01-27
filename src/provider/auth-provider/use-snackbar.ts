import type { InjectionKey } from "vue"
import { inject, provide } from "vue"

type Context = {
  handleOpen: (value: string) => void
  handleClose: () => void
}

const key = Symbol() as InjectionKey<Context>
/** @public */
export const createContext = (context: Context) => {
  provide(key, context)
}
/** @public */
export const useErrorHandler = () => inject(key)
