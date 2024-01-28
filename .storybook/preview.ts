import { setup, type Preview } from "@storybook/vue3"

import "../src/assets/main.css"
import { AppProvider } from "../src/provider"
import { ProtectedLayout, PublicLayout } from "../src/components/layout"
import { h } from "vue"

setup(app => {
  app.component("AppProvider", AppProvider)
  // RouterViewをmockするため
  PublicLayout.setup = (_, ctx) => () => h("div", { class: "wrapper" }, ctx.slots)
  app.component("PublicLayout", PublicLayout)
  app.component("ProtectedLayout", ProtectedLayout)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    story => ({
      components: { story },
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
