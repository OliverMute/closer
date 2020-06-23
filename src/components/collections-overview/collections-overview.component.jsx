import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";

// Redux stuff

import { connect } from "react-redux";

// Redux Reselect

import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

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
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);

/* with data normalization, selectCollections selector doesn't
 * work any more. Because we've modified our collections inside of
 * our reducer to now be an object whereas our selectCollection and the
 * component using it still think that's it's an array  */
