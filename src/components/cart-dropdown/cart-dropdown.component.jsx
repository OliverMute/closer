import React from "react";
import { withRouter } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

// Redux stuff

import { connect } from "react-redux";

// Reselect stuff

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className={"cart-dropdown"}>
      <div className={"cart-items"}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
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

export default withRouter(connect(mapStateToProps)(CartDropdown));

/* withRouter -> all higher order components return components but also take
 * components as their arguments. So withRouter is just taking the component
 * that got returned from our connect call as its component argument */
/*

connect(mapStateToProps) -> connect actually passes dispatch into our
components as a prop if we don't supply a second argument to connect.
So if we don't supply mapDispatchToProps as a second parameter, connect
will pass the dispatch into our dropdown. The reason it does this is because
if we need to make one off action dispatches, there is no reason to write
another mapDispatchToProps
 */
