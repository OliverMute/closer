import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

/*
we don't pass a payload, we don't need one. Payload is an optional property
on our action object
Inside of our reducer, we don't use a payload
 */
