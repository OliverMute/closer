import React from "react";
import Carousel from "react-elastic-carousel";
import "./carousel.styles.scss";

const CarouselSlide = () => {
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
    <Carousel
      breakPoints={breakPoints}
      enableAutoPlay={true}
      autoPlaySpeed={60}
      showArrows={false}
    >
      <div className="carousel-offers">
        <div className={"carousel-offers-image"}>
          <img src="../../images/offer_10.png" alt="" />
        </div>
      </div>
      <div className="carousel-offers">
        <div className={"carousel-offers-image"}>
          <img src="../../images/offer_9.png" alt="" />
        </div>
      </div>
      <div className="carousel-offers">
        <div className={"carousel-offers-image"}>
          <img src="../../images/offer_10.png" alt="" />
        </div>
      </div>
      <div className="carousel-offers">
        <div className={"carousel-offers-image"}>
          <img src="../../images/offer_9.png" alt="" />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselSlide;
