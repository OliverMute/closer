import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";

// Redux stuff

import { connect } from "react-redux";

// Redux Reselect

import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className={"collections-overview"}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
