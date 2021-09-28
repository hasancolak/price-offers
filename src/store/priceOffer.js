import { getPriceOffers } from "@/service/priceOffer";
import { filterByOriginAndDestination } from "@/common/utils";

const priceOfferStore = {
  namespaced: true,
  state: {
    priceOffers: [],
    allPriceOffers: []
  },
  actions: {
    async getPriceOffers({ commit, state }) {
      const data = await getPriceOffers(state.filtersData);
      commit("setAllPriceOffers", data);
    }
  },
  mutations: {
    setAllPriceOffers(state, payload) {
      state.allPriceOffers = payload;
      state.priceOffers = payload;
    },
    setPriceOffers(state, payload) {
      state.priceOffers = filterByOriginAndDestination(state.allPriceOffers, payload);
    }
  }
};

export default priceOfferStore;
