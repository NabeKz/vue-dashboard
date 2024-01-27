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
    component: () => import("@/views/home/HomeView.vue"),
  },
  {
    path: "form-sample",
    name: "form-sample",
    component: () => import("@/views/form-sample/FormSampleView.vue"),
  },
]
/** @public */
export const protectedRoutes = [
  {
    path: "/",
    component: ProtectedLayout,
    children: routes,
  },
]
