import React from "react";
import Slider from "react-slick";

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const logos = [
    {
      src: "logo1.png",
      alt: "Logo 1",
    },
    {
      src: "logo2.png",
      alt: "Logo 2",
    },
    {
      src: "logo3.png",
      alt: "Logo 3",
    },
    {
      src: "logo4.png",
      alt: "Logo 4",
    },
  ];

  return (
    <Slider {...settings}>
      {logos.map((logo, index) => (
        <div key={index}>
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </Slider>
  );
};

export default LogoCarousel;
