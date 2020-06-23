import { createSelector } from "reselect";

// collection id map

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// convert object into array

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
  /* 1° */
);

// data normalization

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
/* find collection.id matching the url parameter of our
 * collection id map
 * pb : .find() is passing the function on every element in the
 * array from left to right. So not good if thousands items
 *
 * data normalization
 *
 *
 *
 * instead of
 *
 *
 * collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
 *
 *  */

/* 
1°
gets us all of the keys of an object that we pass into it
   * and gives it to us in an array format
   * keys(collections) -> we get the keys off of our collections. So
   * now we will have all of the values that the object has :
   * hats, jackets, mens, sneakers, womens
   * .map() -> we map over this array of keys we have and what will
   * return with the key is we will give our collections at that key value
   * We want to get all the keys and then map over that array of keys so we
   * get the value of our collecdtions object at the key which will give us
   * an array of our items that we're trying to get.
 */
