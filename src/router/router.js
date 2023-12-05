import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../views/Home.vue") },
  {
    path: "/experience",
    name: "experience",
    component: () => import("../views/Experience.vue"),
  },
  {
    path: "/education",
    name: "education",
    component: () => import("../views/Education.vue"),
  },
  {
    path: "/myjourney",
    name: "myjourney",
    component: () => import("../views/MyJourney.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
