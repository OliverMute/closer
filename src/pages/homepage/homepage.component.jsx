import React, { Fragment } from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const Homepage = () => {
  return (
    <Fragment>
      <div id="homepage-video">
        <video src="video/veste 3.mp4" id={"veste"} autoPlay muted loop />
        <video src="video/closer.mp4" id={"closer"} autoPlay muted loop />
      </div>
      {/*<div id={"navbar"}>
        <ul id={"homepage-navbar"}>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Womens</a>
          </li>
          <li>
            <a href="/">Mens</a>
          </li>
          <li>
            <a href="/">Checkout</a>
          </li>
        </ul>
      </div>
*/}
      <div className="homepage">
        <img id="banner" src="../../images/banner.jpg" alt="" />

        <Directory />
      </div>
    </Fragment>
  );
};

export default Homepage;
