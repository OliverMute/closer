import { createSelector } from "reselect";

const selectOffer = (state) => state.offer;

export const selectOfferSections = createSelector(
  [selectOffer],
  (offer) => offer.offers
);
