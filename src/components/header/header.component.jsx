import React from "react";
import { Link } from "react-router-dom";

// Redux stuff

import { connect } from "react-redux";
/* connect -> higher order component that lets us modify
 * our component to have access to things related to redux*/

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className={"header"}>
    <Link className={"logo-container"} to={"/"}>
      <div className={"logo-container"}>
        <img src="../../images/logo.jpg" alt="" />
      </div>
    </Link>
    <div className={"options"}>
      <Link className={"option"} to={"/shop"}>
        SHOP
      </Link>
      <Link className={"option"} to={"/shop"}>
        CONTACT
      </Link>
      {currentUser ? (
        <div className={"option"} onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className={"option"} to={"/signin"}>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  /* the state is the root Reducer. */

  currentUser: state.user.currentUser,
  /* we get the user from root-reducer.js. It gives
   * us userReducer. Then we get currentUser value from
   * user.reducer.jsx currentUser: action.payload*/
});

export default connect(mapStateToProps)(Header);
