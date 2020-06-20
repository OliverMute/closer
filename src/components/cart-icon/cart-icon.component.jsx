import React from "react";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

// Redux stuff

import { connect } from "react-redux";

// Reselect stuff

import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className={"cart-icon"} onClick={toggleCartHidden}>
      <ShoppingIcon className={"shopping-icon"} />
      <span className={"item-count"}>{itemCount}</span>
      <div className={"cart-icon-background"} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  /* 1° */
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

/*
we pass 0 as the initial accumulator value
accumulatedQuantity + cartItem.quantity -> it will accumulate
all the number values of the quantities on all the cart items.
*/

/*1°
 we pass our all reducer state into the selector.
 ...suite cart.selectors.js */
