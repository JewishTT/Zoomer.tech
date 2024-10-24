import { createApp } from "vue";
import App from "./app/App.vue";
import router from "./app/router/router";
import { createPinia } from "pinia";
import Axios from "axios";

const app = createApp(App);

app.config.globalProperties.$http = Axios;
app.use(router);

const pinia = createPinia();
app.use(pinia);

app.mount("#app");
