type Close = {
  status: "close"
  message: string
}

type Open = {
  status: "open"
  message: string
  ws: WebSocket
}

export type State = Close | Open

export const initState = (): State => ({ status: "close", message: "" })

const update = (prev: State, current: State) => Object.assign(prev, current)

export const toOpen = (state: State, ws: WebSocket): State =>
  update(state, { status: "open", ws, message: state.message || "open" })

export const toClose = (state: State, message?: string): State =>
  update(state, { status: "close", message: message ?? state.message })

export const CLOSE_MESSAGE = {
  overRetries: "over retry limit"
}
