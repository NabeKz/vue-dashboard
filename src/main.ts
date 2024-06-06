import { app } from "@/app"

const enableMocking = async () => {
  if (import.meta.env.PROD) {
    return
  }

  const { worker } = await import("@/app/mocks/browser")

  return worker.start({ onUnhandledRequest: "bypass" })
}

await enableMocking()
app.mount("#app")
