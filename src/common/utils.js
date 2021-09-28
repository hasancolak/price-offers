import { SHOW_ALL } from "@/common/constant";

/**
 * @function filterByOriginAndDestination is filters the data by origin and destination
 * @param  {} state
 * @param  {} payload
 */
export const filterByOriginAndDestination = (state, payload) =>
  state
    .filter(
      item =>
        (payload.selectedOrigin !== SHOW_ALL && payload.selectedOrigin === item.origin) ||
        payload.selectedOrigin === SHOW_ALL
    )
    .filter(
      item =>
        (payload.selectedDestination !== SHOW_ALL &&
          payload.selectedDestination === item.destination) ||
        payload.selectedDestination === SHOW_ALL
    );

export default { filterByOriginAndDestination };
