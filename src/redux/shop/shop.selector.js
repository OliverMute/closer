import { createSelector } from "reselect";

// collection id map

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
  /* maps the string value from url to the respective id of
   * the object property
   * ex : /shop/HATS for collections: id:1 title: hats*/
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// collection id map

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
/* find collection.id matching the url parameter of our
 * collection id map */
