import { type Callback, type State, type initOption } from "./types"

export const CLOSE_NOT_RETRY = 4000

export const initState = (): State => ({ status: "close" })

export const init = (
  _ws: WebSocket | undefined,
  url: string,
  callback: Callback,
  option: initOption = { retry: false },
  count = 0
) => {
  if (_ws !== undefined) {
    console.debug("already opened")
  }

  const ws = new WebSocket(url)
  ws.onopen = () => callback.onOpen(ws)
  ws.onmessage = ({ data }) => callback.onReceiveMessage(data)
  ws.onerror = (data) => console.debug(data)
  ws.onclose = ({ code }) => {
    if (!option.retry) {
      callback.onClose(code)
      return
    }
    if (option.count > count) {
      return
    }
    setTimeout(() => init(undefined, url, callback, option, count + 1), 1000)
  }
}

export const close = (state: State): State => {
  if (state.status === "close") {
    console.debug("already closed")
  }
  if (state.status === "open") {
    state.ws.close(CLOSE_NOT_RETRY)
  }
  return { status: "close" }
}

export const send = (state: State, payload: string): void => {
  state.status === "open" && state.ws.send(payload)
}
