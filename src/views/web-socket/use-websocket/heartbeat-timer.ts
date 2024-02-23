type Options = {
  interval?: number
  timeOut?: number
}
type Callback = {
  timeIn: () => void
  timeOut: () => void
}
const DEFAULT_INTERVAL = 1000
const DEFAULT_TIMEOUT = 1000

export const HeatBeatTimer = (callback: Callback, options: Options = {}) => {
  const timer = Array<NodeJS.Timeout>()

  const resetTimer = () => {
    const timerId = timer.pop()
    clearTimeout(timerId)
  }

  const startTimer = () => {
    const timeout = options.timeOut ?? DEFAULT_TIMEOUT
    const interval = options.timeOut ?? DEFAULT_INTERVAL

    setInterval(() => {
      callback.timeIn()
      if (timer.length > 0) return

      const timerId = setTimeout(callback.timeOut, timeout)
      timer.push(timerId)
    }, interval)
  }

  return {
    resetTimer,
    startTimer,
  }
}
