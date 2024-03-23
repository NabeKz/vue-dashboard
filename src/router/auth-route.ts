import { ProtectedLayout } from "@/components/layout"
import { AuthRepositoryOnMemory } from "@/infra/auth/on-memory"
import { AnnouncementRepositoryOnMemory } from "@/views/home/repository"
import type { RouteRecordRaw } from "vue-router"

// TODO: implements di-container
const Repositories = {
  auth: new AuthRepositoryOnMemory(),
  announcement: new AnnouncementRepositoryOnMemory(),
} as const

const routes: RouteRecordRaw[] = [
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

export const protectedRoutes = [
  {
    path: "/",
    component: ProtectedLayout,
    children: routes,
  },
]
