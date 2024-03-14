import { setup, type Preview } from "@storybook/vue3"

import { h } from "vue"
import "../src/assets/main.css"
import { ProtectedLayout, PublicLayout } from "../src/components/layout"
import { AppProvider } from "../src/provider"

setup(app => {
  // RouterViewをmockするため
  PublicLayout.setup = (_, ctx) => () => h("div", { class: "wrapper" }, ctx.slots)
  app.component("PublicLayout", PublicLayout)
  app.component("ProtectedLayout", ProtectedLayout)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    story => ({
      components: { story, AppProvider },
      template: `
        <div id="app">
          <AppProvider>
            <story />
          </AppProvider>
        </div>
      `,
    }),
  ],
}

export default preview
