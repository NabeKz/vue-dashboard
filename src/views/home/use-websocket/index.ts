import { computed, ref } from "vue"
import { init } from "./functions"

export const useWebsocket = (url: string) => {
  const ws = ref<WebSocket>()
  const message = ref("")

  const onOpen = (value: WebSocket) => (ws.value = value)
  const onReceiveMessage = (value: string) => (message.value = value)
  const onClose = () => (ws.value = undefined)

  const openWs = () => {
    init(ws.value, url, {
      onOpen,
      onReceiveMessage,
      onClose
    })
  }

  const closeWs = () => {
    ws.value?.close()
  }
  const ask = () => {
    ws.value?.send("ask")
  }
  const bid = () => {
    ws.value?.send("bid")
  }

  const isOpen = computed(() => ws.value?.readyState === WebSocket["OPEN"])

  return {
    isOpen,
    openWs,
    closeWs,
    ask,
    bid,
    message
  }
}
