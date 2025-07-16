"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperStyle.css";
import CardComment from "../branch/CardComment";


const CommentsSlider = () => {
  return (
    <Swiper
      spaceBetween={16}
      breakpoints={{
        640: { slidesPerView: 1.5 },
        1024: { slidesPerView: 2 },
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      modules={[Pagination, Autoplay]}
      className="card-slider h-full"
    >
      {Array.from({ length: 13 }).map((_, index) => (
        <SwiperSlide key={index}>
          <CardComment />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CommentsSlider;
