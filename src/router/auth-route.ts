import { ProtectedLayout } from "@/components/layout"
import { AuthRepositoryOnMemory } from "@/lib/infra/auth/on-memory"
import { AnnouncementRepositoryOnMemory } from "@/views/home/repository"

const Repositories = {
  auth: new AuthRepositoryOnMemory(),
  announcement: new AnnouncementRepositoryOnMemory(),
} as const

const routes = [
  {
    path: "",
    name: "home",
    props: { repository: Repositories.announcement },
    component: () => import("@/views/home/home-view.vue"),
  },
  {
    path: "form-sample",
    name: "form-sample",
    component: () => import("@/views/form-sample/form-sample-view.vue"),
  },
]

export const protectedRoutes = [
  {
    path: "/",
    component: ProtectedLayout,
    children: routes,
  },
]
