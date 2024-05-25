import type { RouteRecordRaw } from "vue-router"
import { AuthRepositoryOnMemory } from "@/views/login/infra/on-memory"

const Login = () => import("@/views/login/login-view.vue")

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    props: { repository: new AuthRepositoryOnMemory() },
    component: Login,
  },
]

export const nonAuthRequired = routes.map((route) => {
  route.meta = { layout: "public" }
  return route
})