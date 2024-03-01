import { PublicLayout } from "@/components/layout"
import { AuthRepositoryOnMemory } from "@/infra/auth/on-memory"
import { LocalStorage } from "@/infra/auth/storage"

const routes = [
  {
    path: "/login",
    name: "login",
    props: { repository: new AuthRepositoryOnMemory(), storage: new LocalStorage() },
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
