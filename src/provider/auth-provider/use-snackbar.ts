import type { InjectionKey } from "vue"
import { inject, provide } from "vue"

type Context = {
  open: boolean
  handleOpen: () => void
  handleClose: () => void
}

const key = Symbol() as InjectionKey<Context>

export const createContext = (context: Context) => {
  provide(key, context)
}

export const useErrorHandler = () => inject(key)
