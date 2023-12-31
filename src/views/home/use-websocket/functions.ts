import { toOpen, type State, toClose } from "./state"

const RETRY_LIMIT = 3
const RETRY_INTERVAL = 1 * 1000
const EXPLICIT_CLOSE = 4000
const OPEN_TIME_OUT = 1000

type Options = {
  retryCount: number
  timeout: boolean
  timer: NodeJS.Timeout[]
}

const Options = (): Options => ({ retryCount: 0, timeout: false, timer: [] })

const setTimer = (status: State["status"], options: Options) => {
  const timeoutId = setTimeout(() => {
    status !== "open" && (options.timeout = true)
  }, OPEN_TIME_OUT)
  options.timer.push(timeoutId)
}

const clearTimer = (options: Options) => {
  const timeoutId = options.timer.pop()
  clearTimeout(timeoutId)
}

const _init = (state: State, url: string, options = Options()) => {
  console.debug("connect: ", new Date().toISOString())
  if (state.status === "open") return

  setTimer(state.status, options)

  const ws = new WebSocket(url)
  ws.onopen = () => (toOpen(state, ws), clearTimer(options))
  ws.onmessage = ({ data }) => (state.message = data)
  // ws.onerror = (data) => console.debug(data)
  ws.onclose = ({ code, reason }) => {
    console.debug("code: ", code, " reason: ", reason)
    if (code === EXPLICIT_CLOSE) return toClose(state)
    if (options.retryCount >= RETRY_LIMIT) return toClose(state, "over retry limit")

    options.retryCount++
    setTimeout(() => _init(state, url, options), RETRY_INTERVAL)
  }
}

export const init = (state: State, url: string) => {
  _init(state, url)
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
