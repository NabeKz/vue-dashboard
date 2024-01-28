import { setup, type Preview } from "@storybook/vue3"

import "../src/assets/main.css"
import { AppProvider } from "../src/provider"
import { PublicLayout, ProtectedLayout } from "../src/components/layout"

setup(app => {
  app.component("AppProvider", AppProvider)
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
    () => ({
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
