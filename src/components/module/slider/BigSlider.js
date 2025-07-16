"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperStyle.css";

import Image from "next/image";
import rectangle from "@/public/images/Rectangle2.svg";
import SwiperSliderComponent from "./SwiperSliderComponent";

const BigSlider = ({ branch = false }) => {
  const slicedData = [0, 1, 2, 3, 4, 5];

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      pagination={!branch}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      modules={[Navigation, Pagination, Autoplay]}
      className="big-slider h-full"
    >
      {slicedData.map((_, index) => (
        <SwiperSlide key={index}>
          <SwiperSliderComponent branch={branch} />
        </SwiperSlide>
      ))}

      {!branch && (
        <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 z-2 flex justify-center w-25 lg:w-30 h-10">
          <Image
            src={rectangle}
            alt="rectangle"
            className="absolute bottom-0 w-full"
          />
        </div>
      )}

      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
    </Swiper>
  );
};

export default BigSlider;
