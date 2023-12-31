import {
  type State,
  updateMessage,
  toClose,
  toOpen,
  toConnecting,
  toCloseOverRetryLimit,
  toClosing
} from "./state"

const RETRY_LIMIT = 3
const RETRY_INTERVAL = 1 * 1000
const EXPLICIT_CLOSE = 4000

type Options = {
  retryCount: number
  force: boolean
}
export const init = (state: State, url: string, options: Options) => {
  if (state.status === "open" || state.status === "connecting") {
    console.debug("already opened")
    return
  }
  const ws = new WebSocket(url)
  toConnecting(state, ws)

  ws.onopen = () => toOpen(state, ws)
  ws.onmessage = ({ data }) => updateMessage(state, data)
  ws.onerror = (data) => {
    console.debug(data)
  }
  ws.onclose = ({ code }) => {
    toClosing(state)
    if (code === EXPLICIT_CLOSE) {
      toClose(state)
      return
    }
    if (options.retryCount >= RETRY_LIMIT) {
      toCloseOverRetryLimit(state)
      return
    }
    options.retryCount++
    const _init = () => init(state, url, options)
    setTimeout(_init, RETRY_INTERVAL)
  }
}

export const close = (state: State) => {
  if (state.status === "close") {
    console.debug("already closed")
  }
  if (state.status === "connecting" || state.status === "open") {
    state.ws.close(EXPLICIT_CLOSE)
  }
}
// TODO: parse payload
export const send = (state: State, payload: string) => {
  state.status === "open" && state.ws.send(payload)
}
