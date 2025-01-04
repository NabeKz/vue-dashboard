let internalId = 0

export const useId = (): string => {
  internalId += 1
  return `:${internalId}:`
}
