import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/store";
import "./registerServiceWorker";

import "@/assets/js/mock";

/* reset.css */
import "@/assets/css/reset.css";
import "@/assets/css/common.styl";
/* vant-ui */
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import { get, post } from "@/api/api";
Vue.prototype.$get = get;
Vue.prototype.$post = post;

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
console.log(app);
