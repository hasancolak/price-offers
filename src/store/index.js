import Vue from "vue";
import Vuex from "vuex";
import priceOfferStore from "./priceOffer";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    priceOfferStore
  },
  state: {},
  mutations: {},
  actions: {}
});

export default store;
