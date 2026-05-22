import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img52 from "../image/52.jpg";
import img53 from "../image/53.jpg";
import img54 from "../image/54.jpg";
import img55 from "../image/55.jpg";
import img56 from "../image/56.jpg";
import img57 from "../image/57.jpg";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [img52, img53, img54, img55, img56, img57];

  return (
    <div className="slider-container px-8">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <div className="overflow-hidden rounded-2xl ">
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full  h-72 md:h-96 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
