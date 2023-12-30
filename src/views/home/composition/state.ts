export type State =
  | {
      status: "close"
      explicit: true
    }
  | {
      status: "close"
      explicit: false
    }
  | {
      status: "connecting"
      ws: WebSocket
    }
  | {
      status: "open"
      ws: WebSocket
    }

export const initState = (): State =>
  ({
    status: "close",
    explicit: false
  }) as const

export const toClose = (explicit: boolean) =>
  ({
    status: "close",
    explicit
  }) as const

export const toConnecting = (ws: WebSocket) =>
  ({
    status: "connecting",
    ws
  }) as const
export const toOpen = (ws: WebSocket) =>
  ({
    status: "open",
    ws
  }) as const
