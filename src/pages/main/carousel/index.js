// import { getDefaultNormalizer } from '@testing-library/dom'
import React from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
import carousel1 from "../../../assets/img/carousel-1.jpg";
import carousel2 from "../../../assets/img/carousel-2.png";
import ControlBar from "./controlbar";

function TixCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="MyCarousel">
      <div>
        <Slider {...settings} >
          <div>
            <img src={carousel1} className="carouselImg"></img>
          </div>
          <div>
            <img src={carousel2} className="carouselImg"></img>
          </div>
        </Slider>
      </div>
      <ControlBar />
    </div>
  );
}

export default TixCarousel;
