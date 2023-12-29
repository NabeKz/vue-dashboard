import { computed, ref } from "vue"
import { close, getMessage, init, register, type State } from "./interact"

export const useWebsocket = (url: string) => {
  const state = ref<State>({ status: "ready" })

  const openWs = () => {
    if (state.value.ws) return

    init(state.value, url).then((newState) => {
      register(newState, (s) => {
        state.value = s
      })
    })
  }

  const closeWs = () => {
    if (!state.value.ws) return
    state.value = close(state.value)
  }

  const ask = () => {
    state.value.ws?.send("ask")
  }
  const bid = () => {
    state.value.ws?.send("bit")
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
