import { createRouter, createWebHistory } from "vue-router";
import { publicRoutes } from "./unauth-route";
import { protectedRoutes } from "./auth-route";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, ...protectedRoutes],
});

export default router;
