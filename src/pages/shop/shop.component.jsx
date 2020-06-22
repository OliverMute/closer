import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Adidas2 from "../../components/video/adidas2.component";

import "./shop.styles.scss";

const ShopPage = () => {
  return (
    <div className={"shop-page"}>
      <CollectionsOverview />
      <Adidas2 />
    </div>
  );
};

export default ShopPage;
