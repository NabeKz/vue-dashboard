import { ProtectedLayout, PublicLayout } from "@/components/layout"
import { createRouter } from "@/router"
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

export const publicLayout = () => ({
  components: { PublicLayout },
  template: `
    <PublicLayout>
      <story />
    </PublicLayout>
  `,
})

export const protectedLayout = () => ({
  components: { ProtectedLayout },
  template: `
    <ProtectedLayout>
      <story />
    </ProtectedLayout>
  `,
})

export const getErrorField = (el: HTMLElement) => {
  return el.nextSibling!
}
