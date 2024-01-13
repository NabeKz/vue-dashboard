import { expect, it } from "vitest"

const createTable = (obj: object) => {
  return Object.keys(obj)
}

it("table", () => {
  const actual = createTable({ id: "" })
  expect(actual).toEqual(["id"])
})
