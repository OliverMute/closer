import { createSelector } from "reselect";
const selectCart = (state) => state.cart;
/* input selector. Returns a piece of the state */

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// show hide cart dropdown

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// total quantity of all products

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    // gives back total quantity of all the cartItems

    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

// total checkout price

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

/*selectCart is an input selector -> Function that gets the whole state
 and just returns a slice of it.
 state.cart -> Here we only want the cart from the reducer */
/* selectCartItems -> select property cartItems of our
 * cart.
 * [selectCart] -> createSelector() takes 2 argument, a shop so
 * an array of input selectors and a function that will return the value
 * we want out of this selector
 * (cartItems) -> we get each output of the input selectors in the array
 * but in the order that those selectors were written
 * Because we use createSelector to make this selectCartItems selector
 * it's now a memorized selector. */
/* 1°
  ... then the selector selectCartItemsCount needs to reference
  [selectCartItems] which references [selectCart]. So it passes
  the state in const selecCart, gets the cart object
  const selectCart = (state) => state.cart;
  which gets passed into the function cart => cart.cartItems which
  passes out the cartItems which are selectCartItemsCount because it's
  relying on the selector passes the cartItems into the function cartItems
  export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
  which finally reduces over and gives us our actual final cartItems
  count which we then pass in as item which we then pass in as itemCount as
  a prop into our cartIcon component in file cart-icon.component.jsx
  const CartIcon = ({ toggleCartHidden, ITEMCOUNT }) =>
  const mapStateToProps = (state) => {
  return {
   ITEMCOUNT: selectCartItemsCount(state),
};
};
 */
