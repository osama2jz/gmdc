import { createRouter, createWebHistory } from "vue-router";
// import Form from "../components/Form.vue";
import Landing from "../views/Landing.vue";
import Inventory from "../views/Inventory.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing,
  },
  {
    path: "/inventory",
    name: "inventory",
    component: Inventory,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
