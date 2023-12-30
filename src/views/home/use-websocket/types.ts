type Ready = {
  status: "close"
}
type Start = {
  status: "open"
  ws: WebSocket
}

export type State = Ready | Start

export type Callback = {
  onOpen: (ws: WebSocket) => void
  onReceiveMessage: (message: string) => void
  onClose: (code: number) => void
}

export type initOption =
  | {
      retry: false
    }
  | {
      retry: true
      count: number
    }

type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>

// https://qiita.com/u83unlimited/items/a7ebcda246ac800897d5
type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>
