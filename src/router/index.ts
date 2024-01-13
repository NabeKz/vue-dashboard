import { AnnouncementRepositoryOnMemory } from "@/views/home/repository"
import { createRouter, createWebHistory } from "vue-router"

const Repositories = {
  announcement: new AnnouncementRepositoryOnMemory()
} as const

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      props: { repository: Repositories.announcement },
      component: () => import("@/views/home/home-view.vue")
    },
    {
      path: "/",
      name: "form-sample",
      component: () => import("@/views/form-sample/form-sample-view.vue")
    }
  ]
})

export default router
