"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiperStyle.css";
import CategoryMenu from "../menu/CategoryMenu";

// import required modules
export default function MenuSlider() {
  const num = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        slidesOffsetBefore={20}
        className="mySwiper"
      >
        {num.map((item) => (
            <SwiperSlide key={item} className="!w-auto ">
              <CategoryMenu />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
