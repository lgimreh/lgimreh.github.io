import { createRouter, createWebHashHistory } from "vue-router";
import BioView from "../views/BioView.vue";

const routes = [
  {
    path: "/",
    redirect: "/bio",
  },
  {
    path: "/bio",
    name: "bio",
    component: BioView,
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
  {
    path: "/renderings",
    name: "renderings",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RenderingsView.vue"),
  },
  {
    path: "/personnal-art",
    name: "personnal-art",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RenderingsView.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
