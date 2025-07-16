"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./swiperStyle.css";
import CardFood from "../CardFood";

const CardSlider = () => {
  const slicedData = [0, 1, 2, 3, 4, 5];

  return (
    <Swiper
      spaceBetween={16}
      breakpoints={{ 0:{slidesPerView:2},
        640: { slidesPerView: 2.5 },
        768: { slidesPerView: 4.3 },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      modules={[Autoplay]}
      className="card-slider h-full"
    >
      {slicedData.map((_, index) => (
        <SwiperSlide
          key={index}
          className="h-[clamp(231px, 25vw,433px)] max-h-[433px]"
        >
          <CardFood />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
