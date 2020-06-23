import React, { Fragment } from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const Homepage = () => {
  return (
    <Fragment>
      <div id="homepage-video"></div>
      <video src="video/adidas3-2.mp4" id={"adidas3"} autoPlay muted loop />
      <video src="video/veste 3.mp4" id={"veste"} autoPlay muted loop />
      <video src="video/closer 3.mp4" id={"closer3"} autoPlay muted loop />
      <div className="homepage">
        <img id="banner" src="images/banner.jpg" alt="" />
        <Directory />
      </div>
    </Fragment>
  );
};

export default Homepage;
