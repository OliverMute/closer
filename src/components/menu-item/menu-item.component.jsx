import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <h2 className="menu-item-title">{title.toUpperCase()}</h2>
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

export default withRouter(MenuItem);

/* withRouter is an higher order component. It's a function that
takes a component as an argument and returns a modified component.
We powering up our MenuItem component to have access to the properties
related to our router. It returns back a super power MenuItem component
*/
