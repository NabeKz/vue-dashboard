import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/home/home-view.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/form-sample/form-sample-view.vue")
    },
    {
      path: "/",
      name: "form-sample",
      component: () => import("@/views/form-sample/form-sample-view.vue")
    }
  ]
})

export default router
