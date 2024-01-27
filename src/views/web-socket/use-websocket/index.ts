import { computed, ref } from "vue"
import { close, init, send } from "./functions"
import { initState, type State } from "./state"

export const useWebSocket = (url: string) => {
  const state = ref(initState())

  const callback = (newState: State) => Object.assign(state.value, newState)

  const ws = {
    open: () => init(state.value, url, callback),
    close: () => close(state.value, callback),
    ask: () => send(state.value, "ask"),
    bid: () => send(state.value, "bid"),
  }

  const dto = computed(() => ({
    disabledOpen: state.value.status === "open" || state.value.status === "connecting",
    disabledClose: state.value.status === "close" || state.value.status === "connecting",
    message: state.value.message,
  }))

  window.addEventListener("beforeunload", ws.close)

  return {
    ws,
    dto,
  }
}
