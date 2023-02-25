import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    redirect: "/bio",
  },
  {
    path: "/",
    name: "bio",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectsView.vue"),
  },
  {
    path: "/project/:id",
    name: "project",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SingleProjectView.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
