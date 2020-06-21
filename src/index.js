import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// Redux

import { Provider } from "react-redux";
/* give access to the store and reducers */

// Redux persist

import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
      {/* 1° */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
/* gives our app all the functionalities of routing that this library provides*/

/* <Provider> -> component that is the parent of everything
 * inside of our app. It allows to get access to all of the things
 * related to the store. Once passed the store object
 * it will give that Redux store context to the rest of the
 * application so we can dispatch action to that store or we
 * can actually pull values off of the store and into our
 * components. */

/* 1°
 persistor -> the one we wrote in store.js. The persisted
 version of our store.

 <PersistGate persistor={persistor}>
    <App />
 </PersistGate>
 We wrap the <App> into the <PersistGate> because we want have our application
  to always have access to the persistence flow itself. It will allow the <PersistGate>
  to receive the store but also fire off actions that will rehydrate the state
  whenever our application refreshes.
  */
