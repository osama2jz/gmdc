import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/Landing.vue";
import Dashboard from "../views/Dashboard.vue";
import Inventory from "../views/Inventory.vue";
import ViewCar from "../views/ViewCar.vue";
import ApplyOnline from "../views/ApplyOnline.vue";
import ContactUs from "../views/ContactUs.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Stats from "../views/Stats.vue";
import Settings from "../views/Settings.vue";

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
  },
  {
    path: "/",
    name: "landing",
    component: Landing,
  },
  {
    path: "/dashboard/orders",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard",
    name: "stats",
    component: Stats,
  },
  {
    path: "/dashboard/settings",
    name: "settings",
    component: Settings,
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
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
