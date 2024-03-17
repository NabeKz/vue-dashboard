import type { InjectionKey } from "vue"
import { inject, provide } from "vue"

type Context = {
  handleOpen: (value: string) => void
  handleClose: () => void
}

/** @public */
export type OverlayContext = <T>(
  command: () => Promise<T>,
  onSuccess: (data: T) => Promise<void>,
  onFailure: (e: unknown) => Promise<void>,
) => Promise<void>

const snackbar = Symbol() as InjectionKey<Context>
const overlay = Symbol() as InjectionKey<OverlayContext>
/** @public */
export const createContext = (context: Context, withOverlay: OverlayContext) => {
  provide(snackbar, context)
  provide(overlay, withOverlay)
}
/** @public */
export const useErrorHandler = () => {
  const ctx = inject(snackbar)
  if (ctx === undefined) {
    throw new Error("failed inject")
  }
  return ctx
}
/** @public */
export const useOverlay = () => {
  const ctx = inject(overlay)
  if (ctx === undefined) {
    throw new Error("failed inject")
  }
  return ctx
}
