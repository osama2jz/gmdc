import { createRouter, createWebHistory } from "vue-router";
// import Form from "../components/Form.vue";
import Landing from "../views/Landing.vue";
import Inventory from "../views/Inventory.vue";
import ViewCar from "../views/ViewCar.vue";
import ApplyOnline from "../views/ApplyOnline.vue";

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
  {
    path: "/inventory/car",
    name: "carView",
    component: ViewCar,
  },
  {
    path: "/apply",
    name: "apply",
    component: ApplyOnline,
  },
  {
    path: "/contactus",
    name: "contactus",
    component: ApplyOnline,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
