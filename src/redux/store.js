import { createStore, applyMiddleware } from "redux";

// redux persist

import { persistStore } from "redux-persist";
/* allows our browser to cache our store now depending on certain
configuration options.*/

import logger from "redux-logger";

import rootReducer from "./root-reducer";

// middleware

const middlewares = [logger];

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
