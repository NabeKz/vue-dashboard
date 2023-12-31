import { computed, ref } from "vue"
import { close, init, send } from "./functions"
import { initState, toTimeOut } from "./state"

const TIME_OUT = 1000
export const useWebSocket = (url: string) => {
  const state = ref(initState())
  const options = { retryCount: 0, force: false }

  const _init = () => {
    init(state.value, url, options)
  }
  const ws = {
    open: () => _init(),
    close: () => close(state.value),
    ask: () => send(state.value, "ask"),
    bid: () => send(state.value, "bid")
  }

  const dto = computed(() => ({
    isOpen:
      state.value.status === "open" ||
      state.value.status === "connecting" ||
      state.value.status === "closing",
    isClose: state.value.status === "close" || state.value.status === "closing",
    isNotOpen: state.value.status !== "open",
    message: state.value.message
  }))

  window.addEventListener("beforeunload", ws.close)

  return {
    ws,
    dto
  }
}
