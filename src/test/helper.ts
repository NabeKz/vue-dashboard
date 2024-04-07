import { ProtectedLayout, PublicLayout } from "@/components/layout"
// eslint-disable-next-line import-access/jsdoc
import { provideAuth } from "@/provider/auth-provider/use-auth"
import { createRouter } from "@/router"
import { fn } from "@storybook/test"
import { defineComponent, getCurrentInstance } from "vue"

export const sleep = (s: number) => new Promise(resolve => setTimeout(resolve, s * 1000))

const mockStorage = { saveToke: fn(), logout: fn() }

export const useMockAuth = () => ({
  setup() {
    provideAuth(mockStorage as any)
  },
  template: `
    <story />
  `,
})

const mockRouter = () => []

export const publicLayout = (name: "login") => () => ({
  components: { PublicLayout },
  setup() {
    const { app } = getCurrentInstance()!.appContext
    const router = createRouter("Memory")
    app.use(router)
    router.push({ name })
  },
  template: `
    <PublicLayout>
      <story />
    </PublicLayout>
  `,
})

const RouterView = defineComponent({
  template: `
    <component :is="$parent.$parent.$slots.default" />
  `,
})

export const protectedLayout = () => () => ({
  components: { ProtectedLayout },
  setup() {
    const { app } = getCurrentInstance()!.appContext
    app.component("RouterView", RouterView)
  },
  template: `
    <ProtectedLayout>
      <story />
    </ProtectedLayout>
  `,
})

export const getErrorField = (el: HTMLElement) => {
  console.debug("test WIP push2")
  return el.nextSibling!
}
