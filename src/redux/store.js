import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// middleware

const middlewares = [logger];

// make store

const store = createStore(rootReducer, applyMiddleware(...middlewares));
/*(...middlewares) -> spread  in all of the methods or all
of the values in this array into this function call as
individual arguments*/

export default store;
