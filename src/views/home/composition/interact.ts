export type State =
  | {
      status: "ready"
      ws?: never
    }
  | {
      status: "start"
      ws: WebSocket
      message: string
    }

export const init = async (state: State, url: string) => {
  if (state.ws) {
    console.debug("already opened")
    return state
  }
  const ws = new WebSocket(url)
  register(ws, callback)
  return
}

export const register = (ws: WebSocket, callback: (state: State) => void) => {
  ws.addEventListener("open", () => {
    console.debug("open")
    callback({ status: "start", ws, message: "" })
  })
  ws.addEventListener("message", ({ data }) => {
    console.debug("message: ", data)
    callback({ status: "start", ws, message: data })
  })
  ws.addEventListener("close", () => {
    console.debug("close")
  })
}

export const close = (state: State): Extract<State, { status: "ready" }> => {
  if (!state.ws) {
    console.debug("already closed")
  }
  state.ws?.close()
  return { status: "ready" }
}

export const getMessage = (state: State) => {
  return state.status === "start" ? state.message : ""
}

export const update = (state: State, values: Partial<State>): State => {
  return Object.assign(state, values)
}
