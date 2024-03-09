import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "./views/AboutPage.vue";
import HomePage from "./views/HomePage.vue";
import NewsPage from "./views/NewsPage.vue";
import ActionPage from "./views/ActionPage.vue";
import ResourcesPage from "./views/ResourcesPage.vue";
import ListPopup from "./components/ListPopup.vue";

const routes = [
  { path: "/rentersnet", redirect: "/" },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
    children: [
      { path: 'demands', component: ListPopup },
    ],
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/news",
    name: "NewsPage",
    component: NewsPage,
  },
  {
    path: "/actions",
    name: "ActionPage",
    component: ActionPage,
  },
  {
    path: "/resources",
    name: "ResourcesPage",
    component: ResourcesPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

export default router;
