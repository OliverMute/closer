import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      {/*<video
        className="closer-shop"
        src="../../video/closer.mp4"
        autoPlay
        muted
        loop
      />*/}
      {/*<video
            className="cap-shop"
            src="../../video/casquette.mp4"
            autoPlay
            muted
            loop
        />*/}
      <video
        className="adidas2"
        src="../../video/adidas2.mp4"
        autoPlay
        muted
        loop
      />
      <div className={"collection-preview"}>
        <h1 className={"title"}>{title.toUpperCase()}</h1>
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
