import { PublicLayout } from "@/components/layout"
import { AuthRepositoryOnMemory } from "@/lib/infra/auth/on-memory"
import { LocalStorage } from "@/provider/auth-provider/storage"

const routes = [
  {
    path: "/login",
    name: "login",
    props: { repository: new AuthRepositoryOnMemory(), storage: new LocalStorage() },
    component: () => import("@/views/login/LoginView.vue"),
  },
]
/** @public */
export const publicRoutes = [
  {
    path: "/auth",
    component: PublicLayout,
    children: routes,
  },
]
