export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // if existingCartItem exists

  if (exitingCartItem) {
    return cartItems.map((cartItem) =>
      /* cartItems.map ->  returns a new array */

      // if cartItem.id === cartItemToAdd.id

      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : // if not match return cartItem
          cartItem
    );
  }

  // If the cartItem not found inside of our array

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  /* returns all of the existing cartItems already there and add
   * an object cartItemToAdd with a base quantity to 1*/
};

/*--------------------------
        EXPLANATIONS
* --------------------------*/

/*
we look inside our existing cart items to see if that
 * cart item already exists.
 * cartItems.find() -> returns the first item found in the array
 * based off a condition that we pass in here and the condition is
 * based off of this function where we get each individual cart item and we'll check
 * the cartItems id if it matches the cart item we're trying to add id.
 *
 * cartItem => cartItem.id === cartItemToAdd.id
 *
 * If it matches, it will set the cartItem where this condition is true
 * to our constant existingCartItem. If it doesn't find anything after looping
 * through all of it it will be undefined.
 *
 * { ...cartItem, quantity: cartItem.quantity + 1 } ->  creates a new object with
 * cartItem and quantity + 1
 * */
