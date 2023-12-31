import { computed, ref } from "vue"
import { close, init, send } from "./functions"
import { initState } from "./state"

export const useWebSocket = (url: string) => {
  const state = ref(initState())

  const ws = {
    open: () => init(state.value, url),
    // close: () => close(state.value),
    close: () => state.value.status === "open" && state.value.ws.close(),
    ask: () => send(state.value, "ask"),
    bid: () => send(state.value, "bid")
  }

  const dto = computed(() => ({
    disabledOpen: state.value.status === "open" || state.value.status === "closing",
    disabledClose: state.value.status === "close" || state.value.status === "closing",
    message: state.value.message
  }))

  window.addEventListener("beforeunload", ws.close)

  return {
    ws,
    dto
  }
}
