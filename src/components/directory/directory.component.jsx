import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import Carousel from "react-elastic-carousel";

import "./directory.styles.scss";

// Redux stuff

import { connect } from "react-redux";

// Redux selector

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import CarouselSlide from "../carousel/carousel.component";

const Directory = ({ sections }) => {
  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 500,
      itemsToShow: 2,
    },
    {
      width: 768,
      itemsToShow: 3,
    },
    {
      width: 1200,
      itemsToShow: 4,
    },
  ];

  return (
    <div className="directory-menu-container">
      {/* <img src="../../../images/banner.jpg" alt="" className={"banner"} />*/}

      <div className="directory-menu-wrapper">
        <div className="directory-menu-wrapper-product">
          <h1>Nos produits</h1>
          <div className={"directory-menu"}>
            {sections.map(({ id, ...otherSectionProps }) => {
              return <MenuItem key={id} {...otherSectionProps} />;
            })}
          </div>
        </div>
        <h1>Nos offres</h1>
        <CarouselSlide />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

/* We create a class because we need to store the
state value of the menu items that we want to pass
and create our menu item with*/
/*
...otherSectionProps -> same as
{this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => {
   return <MenuItem title={title} key={id}
   imageUrl={imageUrl} size={size} linkUrl={linkUrl} />;
*/
