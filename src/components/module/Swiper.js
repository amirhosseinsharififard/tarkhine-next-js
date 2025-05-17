"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// data
import Image from "next/image";
import SwiperSliderComponent from "./SwiperSliderComponent";

const SwiperSlider = ({ data }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
        <SwiperSliderComponent data={data} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSliderComponent data={data} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSliderComponent data={data} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSliderComponent data={data} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSliderComponent data={data} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
