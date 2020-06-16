import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
/* 1° */

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
/* 2° */

/*
1°
we don't pass a payload, we don't need one. Payload is an optional property
on our action object
Inside of our reducer, we don't use a payload
 */

/*
2°
const addItem -> it's a function that gets the item that we want to add that
 * array that we just made and what will return is this new action
 * type object where the type is our CartActionTypes.ADD_ITEM which
 * will tell our reducer "hey I'm trying to add this item and the payload
 * will be equal to the item
 * An action can take a type and a payload. The payload can be
 * anything we want it to be. Here we want it to be the item we're trying
 * to add into our cart items array   */
