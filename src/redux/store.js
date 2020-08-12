import { createStore, applyMiddleware } from "redux";

// redux persist

import { persistStore } from "redux-persist";
/* allows our browser to cache our store now depending on certain
configuration options.*/

import logger from "redux-logger";

import rootReducer from "./root-reducer";

// middleware

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
  /*set logger middleware only in dev mode. This way we
   * don't see logger messages in production mode
   * push(logger) -> if in development, we push the logger
   * into our array */
}

// make store

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
/*(...middlewares) -> spread  in all of the methods or all
of the values in this array into this function call as
individual arguments*/

// redux persistor

export const persistor = persistStore(store);
/* calls our persistor passing in our store. So this persistor
 is essentially a persisted version of our store*/

export default { store, persistor };
