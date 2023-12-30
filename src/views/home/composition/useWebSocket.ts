import { computed, onMounted, ref } from "vue"
import { HeatBeatTimer } from "./heartbeat-timer"
import { toClose, initState, toOpen } from "./state"

const PING_MESSAGE = "ping"
const EXPLICIT_CLOSE = 4000
const RETRY_DELAY = 1000
const RETRY_LIMIT = 3
type Options = {
  heartBeat: boolean
}
/**
 * Reactive WebSocket client.
 * @param url
 */
export const useWebSocket = (url: string, { heartBeat }: Options = { heartBeat: false }) => {
  const data = ref("")
  const state = ref(initState())

  const { startTimer, resetTimer } = HeatBeatTimer({
    timeIn: () => _send(PING_MESSAGE),
    timeOut: () => close()
  })

  const close = () => {
    if (state.value.status === "close") return
    resetTimer()
    state.value.ws.close(EXPLICIT_CLOSE)
  }

  // TODO: data defined type
  const _send = (data: string) => {
    if (state.value.status === "open") {
      state.value.ws.send(data)
    }
  }

  const ask = () => _send("ask")
  const bid = () => _send("bid")

  const _init = (retryCount = 0) => {
    if (state.value.status === "close" && state.value.explicit) return

    const ws = new WebSocket(url)

    ws.onopen = () => {
      state.value = toOpen(ws)
      heartBeat && startTimer()
    }

    ws.onclose = ({ code }) => {
      const newState = toClose(code === EXPLICIT_CLOSE)
      if (newState.explicit) {
        state.value = newState
        return
      }

      if (retryCount < RETRY_LIMIT) {
        setTimeout(() => _init(retryCount + 1), RETRY_DELAY)
      } else {
        alert("failure retry connection")
      }
    }

    ws.onerror = (e) => {
      console.debug("error: ", e)
    }

    ws.onmessage = (e: MessageEvent) => {
      resetTimer()
      if (e.data === PING_MESSAGE) return

      data.value = e.data
    }
  }

  onMounted(() => {
    window.addEventListener("beforeunload", close)
  })

  const open = () => {
    close()
    _init()
  }

  const isClose = computed(() => state.value.status === "close")
  const isOpen = computed(() => state.value.status === "open")

  return {
    message: data,
    isOpen,
    isClose,
    ws: {
      close,
      ask,
      bid,
      open
    }
  }
}
