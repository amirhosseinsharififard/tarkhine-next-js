"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./swiperStyle.css";
import CardFood from "../CardFood";

const CardSlider = () => {
  const slicedData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const swiperRef = useRef(null);

  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const updateVisibleSlides = (swiper) => {
    const slidesPerView = Math.floor(swiper.params.slidesPerView);
    const activeIndex = swiper.realIndex; 
    const totalSlides = slicedData.length;
    let visible = [];
    for (let i = 0; i < slidesPerView; i++) {
      visible.push((activeIndex + i) % totalSlides);
    }
    setVisibleIndexes((prev) => {
      const prevStr = prev.join(",");
      const newStr = visible.join(",");
      if (prevStr !== newStr) {
        return visible;
      }
      return prev;
    });
  };

  return (
    <>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 2.5, spaceBetween: 16 },
          640: { slidesPerView: 3.5, spaceBetween: 16 },
          768: { slidesPerView: 4, spaceBetween: 24 },
          1024: { slidesPerView: 4.5, spaceBetween: 24 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        slidesOffsetBefore={60}
        modules={[Autoplay]}
        className="card-slider "
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateVisibleSlides(swiper);
        }}
        onSlideChange={(swiper) => updateVisibleSlides(swiper)}
      >
        {slicedData.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`${
              visibleIndexes.includes(index) ? "opacity-100" : "opacity-50"
            }
            `}
          >
            <CardFood />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlider;
