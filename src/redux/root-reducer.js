import { combineReducers } from "redux";

// redux persist

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
/* get the actual localStorage object on our window
 * browser. Tells Redux that we want localStorage as
 * default storage */

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop-reducer";
import offerReducer from "./offer/offer.reducer";

// Redux persist config

const persistConfig = {
  key: "root",
  /* key: "root" -> define at what point of the reducer we want
  to start storing everything */
  storage,
  whitelist: ["cart"],
  /* an array containing the string names of any of
   * the reducer that we want to store. We don't put user because
   * it's handle by Firebase auth. No reason to persist this.*/
};

// We wrap into our persist reducer call

const rootReducer = combineReducers({
  // user Reducer

  user: userReducer,

  //cart Reducer

  cart: cartReducer,

  // directory Reducer

  directory: directoryReducer,

  // offer Reducer

  offer: offerReducer,

  // shop Reducer

  shop: shopReducer,
});

// redux persist

export default persistReducer(persistConfig, rootReducer);
/* returns this modified version of our rootReducer with this
 * persistConfig on top of it. So it's a modified version of
 * our rootReducer with persistence capabilities */
