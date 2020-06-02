import React, { Fragment } from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const Homepage = () => {
  return (
    <Fragment>
      <div id={"navbar"}>
          <video src="video/drone 4-3.mp4" id={"drone"} autoPlay muted loop/>
          <video src="video/closer.mp4" id={"closer"} autoPlay muted loop></video>
        <ul id={"homepage-navbar"}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Hats</a>
          </li>
          <li>
            <a href="">Jackets</a>
          </li>
          <li>
            <a href="">Sneakers</a>
          </li>
          <li>
            <a href="">Womens</a>
          </li>
          <li>
            <a href="">Mens</a>
          </li>
        </ul>
      </div>
      <header>
        <img src="../../../images/banner.jpg" alt="" />
      </header>
      <div className="homepage">

        <Directory />
      </div>
    </Fragment>
  );
};

export default Homepage;
