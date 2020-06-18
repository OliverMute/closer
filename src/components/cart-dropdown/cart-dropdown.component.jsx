import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className={"cart-dropdown"}>
      <div className={"cart-items"}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

/*
If we don't destructure ->
  const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

cartItems: selectCartItems(state), -> input selector
Make sure that our cart dropdown component is not getting re rendered
whenever the state changes that's unrelated to the cartItems.
 */

export default connect(mapStateToProps)(CartDropdown);
