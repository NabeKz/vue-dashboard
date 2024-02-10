import { test, expect } from "@playwright/test"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { fileURLToPath } from "node:url"

type Data = {
  stories: {
    id: string
    title: string
    name: string
  }[]
}
const storybookDir = fileURLToPath(new URL("../storybook-static", import.meta.url))
const data: Data = JSON.parse(readFileSync(resolve(storybookDir, "stories.json")).toString())

// test.describe.parallel("visual regression testing", () => {
//   Object.values(data.stories).forEach(story => {
//     test(`snapshot test ${story.title}: ${story.name}`, async ({ page }) => {
//       await page.goto(`http://localhost:8080/iframe.html?id=${story.id}`, {
//         waitUntil: "networkidle",
//         timeout: 1 * 1000,
//       })
//       // expect(await page.screenshot({ fullPage: true })).toMatchSnapshot([
//       //   story.title,
//       //   `${story.id}.png`,
//       // ])
//     })
//   })
// })
