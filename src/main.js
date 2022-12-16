import { createApp } from "vue";
import App from "./App.vue";
import "mdb-vue-ui-kit/css/mdb.min.css";
import "./styles/app.css";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import View360 from "@egjs/vue3-view360";

const app = createApp(App);
app.use(View360);

createApp(App).use(store).use(router).mount("#app");
