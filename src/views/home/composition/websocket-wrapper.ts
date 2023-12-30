export class WebSocketWrapper {
  constructor(
    private state: "close" | "open",
    private ws: WebSocket | undefined
  ) {}

  static valueOf() {
    return new WebSocketWrapper("close", undefined)
  }

  get isClose() {
    return this.state === "close"
  }
  get isOpen() {
    return !this.isClose
  }

  open() {
    return new WebSocketWrapper("open", undefined)
  }

  close() {
    this.ws?.close()
  }

  ask() {
    this.ws?.send("ask")
  }

  bid() {
    this.ws?.send("bid")
  }
}
