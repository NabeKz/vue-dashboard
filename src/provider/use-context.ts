import type { InjectionKey } from "vue"
import { inject, provide } from "vue"

type Context = {
  handleOpen: (value: string) => void
  handleClose: () => void
}

type OverlayContext = <T>(
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
export const useErrorHandler = () => inject(snackbar)
/** @public */
export const useOverlay = () => inject(overlay)
