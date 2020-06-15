import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  // user reducer
  user: userReducer,

  //cart reducer
  cart: cartReducer,
});
