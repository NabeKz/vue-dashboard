import { expect, test } from "@playwright/test"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { fileURLToPath } from "node:url"

type Data = {
  entries: {
    id: string
    title: string
    name: string
    type: string
  }[]
}
const storybookDir = fileURLToPath(new URL("../storybook-static", import.meta.url))
const data: Data = JSON.parse(readFileSync(resolve(storybookDir, "index.json")).toString())

test.describe.parallel("visual regression testing", () => {
  const stories = Object.values(data.entries).filter(story => story.type === "story")

  stories.forEach(story => {
    test(`snapshot test ${story.title}: ${story.name}`, async ({ page }) => {
      await page.goto(`http://localhost:8080/iframe.html?id=${story.id}`, {
        waitUntil: "networkidle",
        timeout: 3 * 1000,
      })

      expect(
        // await page.screenshot({ path: dir.concat(story.title, ".png"), fullPage: true }),
        await page.screenshot({ fullPage: true }),
      ).toMatchSnapshot([story.title, `${story.title}.png`])
    })
  })
})
