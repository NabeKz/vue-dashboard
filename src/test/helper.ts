import { ProtectedLayout, PublicLayout } from "@/components/layout"
// eslint-disable-next-line import-access/jsdoc
import { provideAuth } from "@/provider/auth-provider/use-auth"
import { createRouter } from "@/router"
import { fn } from "@storybook/test"
import { getCurrentInstance } from "vue"

export const sleep = (s: number) => new Promise(resolve => setTimeout(resolve, s * 1000))

export const useMockRouter = () => ({
  setup() {
    const { app } = getCurrentInstance()!.appContext
    const router = createRouter("Memory")
    app.use(router)
  },
  template: "<story />",
})

const mockStorage = { saveToke: fn(), logout: fn() }

export const useMockAuth = () => ({
  components: { PublicLayout },
  setup() {
    provideAuth(mockStorage as any)
  },
  template: `
    <story />
  `,
})

export const publicLayout = () => ({
  components: { PublicLayout },
  template: `
    <PublicLayout>
      <story />
    </PublicLayout>
  `,
})

const router = createRouter("Memory")
export const protectedLayout = () => ({
  components: { ProtectedLayout },
  setup() {
    const { app } = getCurrentInstance()!.appContext
    app.use(router)
  },
  template: `
    <ProtectedLayout>
      <story />
    </ProtectedLayout>
  `,
})

export const getErrorField = (el: HTMLElement) => {
  return el.nextSibling!
}
