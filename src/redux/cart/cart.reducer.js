import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;

/* default value of state is hidden : true. So the
 * cart is hidden
 * We use a TOGGLE instead of a SET because our cart component
 * will be either true or false.
  hidden: !state.hidden ->  There is no payload here in this
  * case. If it's true, convert to false, if it's false convert to true */
