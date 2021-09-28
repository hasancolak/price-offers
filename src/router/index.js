import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const PageNotFound = () => import("@/views/PageNotFound");
const PriceOffer = () => import("@/views/PriceOffer");

const routes = [
  {
    path: "/",
    name: "PriceOffer",
    component: PriceOffer
  },
  {
    path: "*",
    name: "page-not-found",
    component: PageNotFound
  }
];

/**
 * @param  {"history"} mode
 * @param  {process.env.BASE_URL} base
 * @param  {} routes
 */
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
