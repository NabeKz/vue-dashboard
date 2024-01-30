import * as VueRouter from "vue-router"
import { publicRoutes } from "./unauth-route"
import { protectedRoutes } from "./auth-route"

export const createRouter = (type: "Memory" | "Web") => {
  return VueRouter.createRouter({
    history: VueRouter[`create${type}History`](import.meta.env.BASE_URL),
    routes: [...publicRoutes, ...protectedRoutes],
  })
}

const router = createRouter("Web")

export default router
