type Close = {
  status: "close"
  explicit: boolean
  message: string
}
type Closing = {
  status: "closing"
  message: string
}
type TimeOut = {
  status: "timeout"
  message: string
}
type Connecting = {
  status: "connecting"
  message: string
  ws: WebSocket
}
type Open = {
  status: "open"
  message: string
  ws: WebSocket
}

export type State = Close | Connecting | Open | Closing | TimeOut

const update = (prev: State, current: State) => Object.assign(prev, current)

export const initState = (): State => ({ status: "close", explicit: false, message: "" })

export const toOpen = (state: State, ws: WebSocket): State =>
  update(state, { status: "open", ws, message: "open" })

export const toConnecting = (state: State, ws: WebSocket): State =>
  update(state, { status: "connecting", ws, message: "connecting" })

export const updateMessage = (state: State, message: string): State =>
  update(state, { ...state, message })

export const toClose = (state: State): State =>
  update(state, { status: "close", explicit: true, message: state.message })

export const toClosing = (state: State): State =>
  update(state, { status: "closing", message: state.message })

export const toCloseOverRetryLimit = (state: State): State =>
  update(state, { status: "close", explicit: true, message: "over retry limit" })

export const toTimeOut = (state: State): State =>
  update(state, { status: "timeout", message: "open connecting time out" })
