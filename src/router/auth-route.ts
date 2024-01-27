import { ProtectedLayout } from "@/components/layout";
import { AnnouncementRepositoryOnMemory } from "@/views/home/repository";

const routes = [
  {
    path: "",
    name: "home",
    props: { repository: new AnnouncementRepositoryOnMemory() },
    component: () => import("@/views/home/home-view.vue"),
  },
  {
    path: "form-sample",
    name: "form-sample",
    component: () => import("@/views/form-sample/form-sample-view.vue"),
  },
];

export const protectedRoutes = [
  {
    path: "/",
    component: ProtectedLayout,
    children: routes,
  },
];
