import $http from "@/service/http";
import PriceOfferModel from "@/model/priceOffer";
import { GET_API_PATH } from "@/common/constant";

/**
 * @function getPriceOffers
 */
export const getPriceOffers = () =>
  $http
    .get(GET_API_PATH)
    .then(data => data.data.map(item => new PriceOfferModel(item)))
    .catch(error => error);

export default { getPriceOffers };
