import {
  toClose,
  toCloseOverRetryLimit,
  toClosing,
  toOpen,
  toTimeOut,
  updateMessage,
  type State
} from "./state"

const RETRY_LIMIT = 3
const RETRY_INTERVAL = 1 * 1000
const EXPLICIT_CLOSE = 4000
const OPEN_TIME_OUT = 1000

type Options = {
  retryCount: number
  timer: NodeJS.Timeout[]
}

const setTimer = (state: State, options: Options) => {
  const timeoutId = setTimeout(() => {
    state.status !== "open" && toTimeOut(state)
  }, OPEN_TIME_OUT)
  options.timer.push(timeoutId)
}

const clearTimer = (options: Options) => {
  const timeoutId = options.timer.pop()
  clearTimeout(timeoutId)
}

export const init = (
  state: State,
  url: string,
  options: Options = { retryCount: 0, timer: [] }
) => {
  setTimer(state, options)

  if (state.status === "open") {
    console.debug("already opened")
    return
  }
  if (state.status === "closing" && state.timeout) {
    toClose(state)
    return
  }
  const ws = new WebSocket(url)
  state.message = "connecting"

  ws.onopen = () => {
    clearTimer(options)
    toOpen(state, ws)
  }
  ws.onmessage = ({ data }) => updateMessage(state, data)
  ws.onerror = (data) => console.debug(data)
  ws.onclose = ({ code }) => {
    toClosing(state, false)
    if (code === EXPLICIT_CLOSE) {
      toClose(state)
      return
    }
    state.message = "connection retry"
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
  if (state.status === "open") {
    state.ws.close(EXPLICIT_CLOSE)
  }
}
// TODO: parse payload
export const send = (state: State, payload: string) => {
  state.status === "open" && state.ws.send(payload)
}
