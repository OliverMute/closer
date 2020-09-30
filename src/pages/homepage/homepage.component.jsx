import React, { Fragment } from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import BestSellings from "../../components/best sellings/best-sellings.component";

const Homepage = () => {
  return (
    <Fragment>
      <div className="homepage">
        <div className={"logo-video-container"}>
          <video
            className={"logo-video"}
            src="../../../video/logo.mp4"
            autoPlay={true}
            muted
            loop
          ></video>
        </div>
        <Directory />

        <div className={"homepage-about-us"}>
          <img src="../images/logo.png" alt="" />
          <div className={"homepage-about-us-wrapper"}>
            <h2>A propos de nous</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium alias aliquam animi aspernatur at debitis est
              excepturi illo incidunt ipsam laboriosam laborum libero maxime
              nihil nisi nobis non numquam odit porro quae quod unde, voluptate
              voluptatem. Accusantium aliquam animi atque debitis deserunt error
              ex exercitationem expedita, explicabo facere ipsa ipsum magnam
              odio praesentium quam repellat rerum saepe temporibus vero
              voluptates.
            </p>
          </div>
        </div>
        <BestSellings />
      </div>
    </Fragment>
  );
};

export default Homepage;
