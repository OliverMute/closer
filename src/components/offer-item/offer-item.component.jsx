import React from "react";
import "./offer-item.styles.scss";

const OfferItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      className={`${size} offer-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <h2 className="offer-item-title">{title.toUpperCase()}</h2>
      <div
        className={"background-image"}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* <div className="content">
        <span className="subtitle">SHOP NOW</span>
      </div>*/}
    </div>
  );
};

export default OfferItem;
