import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import Adidas2 from "../../components/video/adidas2.component";

// Redux stuff

import { connect } from "react-redux";

// redux reselect

import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";

import "./shop.styles.scss";

const ShopPage = ({ collections }) => {
  return (
    <div className={"shop-page"}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
      <Adidas2 />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
