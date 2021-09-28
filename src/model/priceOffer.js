import { get } from "lodash-es";

/**
 * @class PriceOfferModel
 */
class PriceOfferModel {
  /**
   * @param  {} data={}
   */
  constructor(data = {}) {
    this.uuid = get(data, "uuid");
    this.origin = get(data, "origin");
    this.destination = get(data, "destination");
    this.departureDate = get(data, "departureDate");
    this.returnDate = get(data, "returnDate");
    this.seatAvailability = get(data, "seatAvailability");
    this.amount = get(data, "price.amount");
    this.currency = get(data, "price.currency");
    this.offerType = get(data, "offerType");
  }
}

export default PriceOfferModel;
