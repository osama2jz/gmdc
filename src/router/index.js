import { createRouter, createWebHistory } from "vue-router";
// import Form from "../components/Form.vue";
import DataTable from "../views/DataTable.vue";
import DataForm from "../views/DataForm";

const routes = [
  {
    path: "/",
    name: "home",
    component: DataTable,
  },
  {
    path: "/dataTable",
    name: "form",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DataForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
