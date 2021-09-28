import Vue from "vue";
import infiniteScroll from "vue-infinite-scroll";
import NProgress from "nprogress";
import SvgIcon from "vue-svgicon";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { getRequestLoading, getResponseLoading } from "./service/http";
import "./registerServiceWorker";
import "@babel/polyfill";
import "@/assets/scss/index.scss";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

getRequestLoading(() => NProgress.start());
getResponseLoading(() => NProgress.done());

// in development mode
Vue.config.productionTip = false;

Vue.use(infiniteScroll);

Vue.use(SvgIcon, {
  tagName: "svg-icon"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
