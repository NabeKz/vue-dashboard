type Close = {
  status: "close"
  message: string
}
type Closing = {
  status: "closing"
  timeout: boolean
  message: string
}
type Retry = {
  status: "retry"
  timeout: boolean
  message: string
}
type Open = {
  status: "open"
  message: string
  ws: WebSocket
}

export type State = Close | Open | Closing | Retry

const update = (prev: State, current: State) => Object.assign(prev, current)

export const initState = (): State => ({ status: "close", message: "" })

export const toOpen = (state: State, ws: WebSocket): State =>
  update(state, { status: "open", ws, message: "open" })

export const updateMessage = (state: State, message: string): State =>
  update(state, { ...state, message })

export const toClose = (state: State): State =>
  update(state, { status: "close", message: state.message })

export const toClosing = (state: State, timeout: boolean): State =>
  update(state, { status: "closing", message: state.message, timeout })

export const toCloseOverRetryLimit = (state: State): State =>
  update(state, { status: "close", message: "over retry limit" })

export const toTimeOut = (state: State): State =>
  update(state, { status: "closing", timeout: true, message: "open connecting time out" })
