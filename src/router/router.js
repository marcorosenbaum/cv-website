import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: () => import("../views/Welcome.vue"),
  },
  { path: "/home", name: "home", component: () => import("../views/Home.vue") },
  {
    path: "/experience",
    name: "experience",
    component: () => import("../views/Experience.vue"),
  },
  {
    path: "/mywork",
    name: "MyWork",
    component: () => import("../views/MyWork.vue"),
  },
  {
    path: "/myjourney",
    name: "myjourney",
    component: () => import("../views/MyJourney.vue"),
  },
  {
    path: "/gettoknowme",
    name: "gettoknowme",
    component: () => import("../views/GetToKnowMe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
