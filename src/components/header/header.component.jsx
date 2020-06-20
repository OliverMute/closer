import React from "react";
import { Link } from "react-router-dom";

// Redux stuff

import { connect } from "react-redux";
/* connect -> higher order component that lets us modify
 * our component to have access to things related to redux*/

import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  /* the state is the root Reducer. */

  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

/* createStructuredSelector -> if we have multiple selectors, it's
* the same as

* const mapStateToProps = (state) => ({

currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state),
});
 */
