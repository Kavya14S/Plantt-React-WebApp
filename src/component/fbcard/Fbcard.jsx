import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feedbackdata from "../../api/Feedbackdata";
import Feedbackcard from "../Feedbackcard/Feedbackcard";



function Fbcard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <div className="slider-container 2xl:container mx-auto overflow-hidden">
      <Slider {...settings}>
        {Feedbackdata.map((items) => {
          return (
            <>
              <Feedbackcard
                profile={items.profile}
                star={items.star}
                starcount={items.starcount}
                feedback={items.feedback}
                name={items.name}
                desinationn={items.desinationn}
              />
            </>
          );
        })}
      </Slider>
    </div>
  );
}

export default Fbcard;
