import { computed, ref } from "vue"
import { close, getMessage, init, send, type State } from "./interact"

export const useWebsocket = (url: string) => {
  const state = ref<State>({ status: "ready", message: "" })

  const openWs = () => {
    init(state.value, url, (newState) => {
      console.debug(newState)
      state.value = newState
    })
  }

  const closeWs = () => {
    state.value = close(state.value)
  }

  const ask = () => {
    send(state.value, "ask")
  }
  const bid = () => {
    send(state.value, "bid")
  }

  const isOpen = computed(() => state.value.status === "start")
  const isClose = computed(() => !isOpen.value)
  const message = computed(() => getMessage(state.value))

  return {
    isOpen,
    isClose,
    openWs,
    message,
    ask,
    bid,
    closeWs
  }
}
