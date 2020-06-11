import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import "./shop.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview {...otherCollectionProps} />
    ));
  }
}

export default ShopPage;
