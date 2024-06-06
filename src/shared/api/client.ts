import createClient, { type Middleware } from "openapi-fetch"
import type { paths } from "@/shared/api/v1.schema"

/**
 * @see {@link https://openapi-ts.pages.dev/openapi-fetch}
 */
const baseUrl: string = import.meta.env.API_BASE_URL ?? ""

const authMiddleware: Middleware = {
  onRequest: async (req) => {
    const accessToken = localStorage.getItem("token")
    if (accessToken) {
      req.headers.set("Authorization", `Bearer ${accessToken}`)
    }

    return req
  },
}

const instance = createClient<paths>({ baseUrl })
instance.use(authMiddleware)

export const client = {
  GET: instance.GET,
  POST: instance.POST,
  PUT: instance.PUT,
  DELETE: instance.DELETE,
} as const
