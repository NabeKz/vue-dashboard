type Close = {
  status: "close"
  explicit: boolean
  ws?: never
  message: string
}

type Connecting = {
  status: "connecting"
  explicit: false
  ws?: never
  message: string
}

type Open = {
  status: "open"
  message: string
  ws: WebSocket
}

export type State = Close | Open | Connecting

export const initState = (): State => ({ status: "close", message: "", explicit: false })

export const toConnecting = (): State => ({
  status: "connecting",
  explicit: false,
  message: "connecting",
})

export const toOpen = (state: Exclude<State, Open>, ws: WebSocket): State => ({
  status: "open",
  ws,
  message: state.message || "open",
})

export const updateMessage = (state: State, message: string): State => ({
  ...state,
  message,
})

export const toClose = (state: State, message?: CLOSE_MESSAGE): State => ({
  status: "close",
  explicit: true,
  message: message ?? state.message,
})

const CLOSE_MESSAGE = {
  explicitClose: "explicit close",
  overRetries: "over retry limit",
  timeout: "timeout",
} as const

type CLOSE_MESSAGE = (typeof CLOSE_MESSAGE)[keyof typeof CLOSE_MESSAGE]
