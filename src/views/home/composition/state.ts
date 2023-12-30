type State =
  | {
      status: "close"
      explicit: boolean
    }
  | {
      status: "connecting"
    }
  | {
      status: "open"
    }
