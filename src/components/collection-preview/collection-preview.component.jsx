import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";
import { Link } from "react-router-dom";

const CollectionPreview = ({ title, items, collection }) => {
  return (
    <div>
      <div className={"collection-preview"}>
        <Link className={"logo-container"} to={"/shop/hats"}>
          <h1 className={"title"}>{title.toUpperCase()}</h1>
        </Link>
        <div className={"preview"}>
          {items
            .filter((items, index) => index < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
