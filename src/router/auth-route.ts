import { AnnouncementRepositoryOnMemory } from "@/views/home/repository";

export const protectedRoutes = [
  {
    path: "/",
    name: "home",
    props: { repository: new AnnouncementRepositoryOnMemory() },
    component: () => import("@/views/home/home-view.vue"),
  },
  {
    path: "/form-sample",
    name: "form-sample",
    component: () => import("@/views/form-sample/form-sample-view.vue"),
  },
];
