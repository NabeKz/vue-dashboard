type HTMLElementHasValue = HTMLElement & {
  value: string
}

export const parseTargetValue = <T extends HTMLElementHasValue>(
  e: Event,
  cls: new (...args: any) => T,
) => {
  if (e.target instanceof cls) {
    return e.target.value
  }
  return ""
}
