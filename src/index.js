import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// redux

import { Provider } from "react-redux";
/* give access to the store and reducers */

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
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
 * can actually pull values ooff of the store and itno our
 * components. */
