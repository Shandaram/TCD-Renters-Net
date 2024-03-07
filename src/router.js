import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/HomePage.vue"),
  },
  {
    path: "/about",
    component: () => import("./views/AboutPage.vue"),
  },
  {
    path: "/demands",
    component: () => import("./views/DemandsPage.vue"),
  },
  {
    path: "/news",
    component: () => import("./views/NewsPage.vue"),
  },
  {
    path: "/actions",
    component: () => import("./views/ActionPage.vue"),
  },
  {
    path: "/resources",
    component: () => import("./views/ResourcesPage.vue"),
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
