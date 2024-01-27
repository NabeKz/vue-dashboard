import { PublicLayout } from "@/components/layout"
import { AuthRepositoryOnMemory } from "@/lib/infra/auth/on-memory"

const routes = [
  {
    path: "login",
    name: "login",
    props: { repository: new AuthRepositoryOnMemory() },
    component: () => import("@/views/login/LoginView.vue"),
  },
]

export const publicRoutes = [
  {
    path: "/auth",
    component: PublicLayout,
    children: routes,
  },
]
