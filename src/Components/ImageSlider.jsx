import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/home.css";
import slider1 from "../Images/slider-scale.jpg";
import slider2 from "../Images/slider-badging.jpg";
import slider3 from "../Images/slider-badag.jpg";
import slider4 from "../Images/slider-scales.jpg";
import Viewers from "./Viewers";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider className="slider" {...settings}>
        <div className="navlink">
          <a >
            <img src={slider1} alt="" />
          </a>
        </div>

        <div className="navlink">
          <a>
            <img className="navlink" src={slider2} alt="" />
          </a>
        </div>
        <div className="navlink">
          <a>
            <img className="navlink" src={slider3} alt="" />
          </a>
        </div>
        <div className="navlink">
          <a>
            <img className="navlink" src={slider4} alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
