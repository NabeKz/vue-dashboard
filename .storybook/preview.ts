import { useMockAuth } from "@/test/helper"
import { type Preview } from "@storybook/vue3"
import { AppProvider } from "../src/provider"

import "../src/assets/main.css"

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
    useMockAuth,
    () => ({
      components: { AppProvider },
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
