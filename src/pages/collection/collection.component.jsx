import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";

// Redux stuff

import { connect } from "react-redux";

// Redux selector

import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className={"collection-page"}>
      <h2 className={"title"}>{title}</h2>
      <div className={"items"}>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
/* ownProps -> props of the component that we are wrapping
 * in our connect */

export default connect(mapStateToProps)(CollectionPage);

/* const CategoryPage = ({ match }) ->we have access to { match }
object because CategoryPage component is inside <Route />
in shop.component.jsx
match.params.categoryId -> gives string params on url "hats" or
"sneakers" if we write /shop/hats or /shop/sneakers in url*/
