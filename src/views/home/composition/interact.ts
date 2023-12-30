type Ready = {
  status: "ready"
  message: string
}
type Start = {
  status: "start"
  ws: WebSocket
  message: string
}
export type State = Ready | Start

export const init = (state: State, url: string, callback: (newState: State) => void) => {
  if (state.status !== "ready") {
    console.debug("already open")
    return
  }

  const ws = new WebSocket(url)
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

export const close = (state: State): Ready => {
  if (state.status === "ready") {
    console.debug("already closed")
  }
  if (state.status !== "ready") {
    state.ws.close()
  }
  return { status: "ready", message: "" }
}

export const getMessage = (state: State) => {
  return state.status === "start" ? state.message : ""
}

export const update = (state: State, values: Partial<State>): State => {
  return Object.assign(state, values)
}

export const send = (state: State, payload: string): void => {
  state.status === "start" && state.ws.send(payload)
}
