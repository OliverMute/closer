import React from "react";

// redux stuff

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className={"collection-item"}>
      <div
        className={"image"}
        style={{ backgroundImage: `url(${imageUrl})`, width: "100%" }}
      />
      <div className={"collection-footer"}>
        <span className={"name"}>{name}</span>
        <span className={"price"}>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

/* whenever there's an item it will get an item
 * in as the property of this function that will represent
 * the addItem prop that gets passed in and then we will dispatch
 * our addItem action creator passing the item in -> dispatch(addItem(item)
 * So what we are doing here is we are creating this new function that's a
 * prop called addItem that will go into our shop item
 *
 * const CollectionItem = ({ name, price, imageUrl, addItem })
 *
 *  as the addItem function that we need to leverage and then what we do is
 * whenever we actually dispatch or call this function (addItem),
 *
 * ->  ADDITEM:(item)
 *
 * this function will receive the item as the property
 *
 *->  addItem: (ITEM)
 *
 *  pass it into our addItem action creator
 *
 * -> dispatch(ADDITEM(item)),
 *
 * which gives us back that object where the type is equal to addItem
 * and the payload is equal to the item that got passed in
 *
 * -> dispatch(addItem(ITEM))
 *
 * and then we will dispatch that new object into our store and it will
 * go through our redux flow
 *
 * -> DISPATCH(addItem(item))
 *  */
