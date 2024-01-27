import { PublicLayout } from "@/components/layout";

const routes = [
  {
    path: "login",
    name: "login",
    component: () => import("@/views/login/LoginView.vue"),
  },
];

export const publicRoutes = [
  {
    path: "/auth",
    component: PublicLayout,
    children: routes,
  },
];
