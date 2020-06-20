import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import "./shop.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import Adidas2 from "../../components/video/adidas2.component";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className={"shop-container"}>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        <Adidas2 />
      </div>
    );
  }
}

export default ShopPage;
