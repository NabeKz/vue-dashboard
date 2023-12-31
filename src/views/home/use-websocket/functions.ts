import { toOpen, type State, toClose, updateMessage, toConnecting } from "./state"

const RETRY_LIMIT = 1
const RETRY_INTERVAL = 1 * 1000
const OPEN_TIME_OUT = 2 * 1000

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

type Callback = (state: State) => void

const _init = (state: Readonly<State>, url: string, callback: Callback, options = Options()) => {
  console.debug("connect: ", new Date().toISOString())
  if (state.status === "open") return
  if (options.timeout) return callback(toClose(state, "timeout"))

  clearTimer(options)
  setTimer(state.status, options)

  const ws = new WebSocket(url)
  callback(toConnecting())

  ws.onopen = () => {
    callback(toOpen(state, ws))
    clearTimer(options)
  }
  ws.onmessage = ({ data }) => callback(updateMessage(state, data))
  // ws.onerror = (data) => console.debug(data)
  ws.onclose = ({ code, reason }) => {
    console.debug(`code: ${code}, reason: ${reason}`)
    if (state.explicit) return callback(toClose(state, "explicit close"))
    if (options.retryCount >= RETRY_LIMIT) return callback(toClose(state, "over retry limit"))

    options.retryCount++
    setTimeout(() => _init(state, url, callback, options), RETRY_INTERVAL)
  }
}

export const init = (state: State, url: string, callback: Callback) => {
  _init(state, url, callback)
}

export const close = (state: Readonly<State>, callback: Callback) => {
  if (state.status === "close") {
    console.debug("already closed")
  }
  if (state.status === "open") {
    callback(toClose(state))
    state.ws.close()
  }
}
// TODO: parse payload
export const send = (state: State, payload: string) => {
  state.ws?.send(payload)
}
