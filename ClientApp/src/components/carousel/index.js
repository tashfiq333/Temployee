import React, { Component } from "react";
import Slider from "react-slick";
import sa from "../../images/slidera.png";
import sb from "../../images/sliderb.png";
import sc from "../../images/sliderc.png";
import sd from "../../images/sliderd.png";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import "./carousel.css";

const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <>
      <div>
        <h2>Featured Catagories of Skills</h2>
        <Slider {...settings}>
          <div>
            <img className="sliderimg" src={sa} alt="" />
          </div>
          <div>
            <img className="sliderimg" src={sb} alt="" />
          </div>
          <div>
            <img className="sliderimg" src={sc} alt="" />
          </div>
          <div>
            <img className="sliderimg" src={sd} alt="" />
          </div>
          <div>
            <img className="sliderimg" src={sa} alt="" />
          </div>
          <div>
            <img className="sliderimg" src={sc} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
