import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VeeValidadePlugin from "./includes/validation";

import "./assets/base.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VeeValidadePlugin);

app.mount("#app");
