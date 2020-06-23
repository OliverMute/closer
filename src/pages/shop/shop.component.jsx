import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { Route } from "react-router-dom";

import Adidas2 from "../../components/video/adidas2.component";

import "./shop.styles.scss";

const ShopPage = ({ match }) => {
  /*console.log(match);*/
  return (
    <div className={"shop-page"}>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      {/* path={`${match.path}`} -> display current path we are on which is "/shop"*/}
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      <Adidas2 />
    </div>
  );
};

export default ShopPage;

/* const ShopPage = ({ match }) -> we have access to the {match}
object because in App.js our component={ShopPage} is nested in
a <Route> ->
<Route path={"/shop"} component={ShopPage}/>
<Route> automatically passes those 3 objects into our
component as props : match, location and history

path={`${match.path}/:categoryId`} -> ex :
/shop/hats
${match.path} -> /shop
:categoryId -> allows us to access this categoryId as a
parameter on the match object when we're inside of our
collection page.
/hats -> the route name is a parameter.
*/
