const CODE = 4000
export class WebSocketWrapper extends WebSocket {
  override close() {
    super.close(CODE)
  }
}
