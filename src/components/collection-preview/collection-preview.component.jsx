import React, { Fragment } from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";


const CollectionPreview = ({ title, items }) => {
  return (
    <Fragment>
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
            .map(({ id, ...otherItemProps }) => (
              <CollectionItem {...otherItemProps} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CollectionPreview;
