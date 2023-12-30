import { ref } from "vue"
import { HeatBeatTimer } from "./heatbeat-timer"

type WebSocketStatus = "OPEN" | "CONNECTING" | "CLOSED"

const PING_MESSAGE = "ping"
/**
 * Reactive WebSocket client.
 *
 * @see https://vueuse.org/useWebSocket
 * @param url
 */
export const useWebSocket = <Data>(url: string) => {
  const data = ref<Data | null>(null)
  const status = ref<WebSocketStatus>("CLOSED")
  const wsRef = ref<WebSocket | undefined>()

  let explicitlyClosed = false
  let retried = 0

  const { startTimer, resetTimer } = HeatBeatTimer({
    timeIn: () => send(PING_MESSAGE),
    timeOut: () => (close(), (explicitlyClosed = false))
  })
  // Status code 1000 -> Normal Closure https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
  const close: WebSocket["close"] = (code = 1000, reason) => {
    if (!wsRef.value) return
    explicitlyClosed = true
    resetTimer()
    wsRef.value.close(code, reason)
  }

  // TODO: data defined type
  const send = (data: string) => {
    wsRef.value?.send(data)
  }

  const _init = () => {
    if (explicitlyClosed) return

    const ws = new WebSocket(url)
    wsRef.value = ws
    status.value = "CONNECTING"

    ws.onopen = () => {
      status.value = "OPEN"
      startTimer()
    }

    ws.onclose = () => {
      status.value = "CLOSED"
      wsRef.value = undefined
      // serverが勝手に切断してきたとき
      if (!explicitlyClosed) {
        const retries = -1
        const delay = 1000
        retried += 1

        if (retries < 0 || retried < retries) {
          setTimeout(_init, delay)
        } else {
          alert("failure retry connection")
        }
      }
    }

    ws.onerror = (e) => {
      console.debug(e)
    }

    ws.onmessage = (e: MessageEvent) => {
      resetTimer()
      if (e.data === PING_MESSAGE) return

      data.value = e.data
    }
  }

  window.addEventListener("beforeunload", () => close())

  const open = () => {
    close()
    explicitlyClosed = false
    retried = 0
    _init()
  }

  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef
  }
}
