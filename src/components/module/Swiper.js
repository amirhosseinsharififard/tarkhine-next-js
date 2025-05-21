"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiperStyle.css";
// data
import SwiperSliderComponent from "./SwiperSliderComponent";
import rectangle from "../../../public/images/Rectangle2.svg";

import Image from "next/image";
import CardFood from "./CardFood";

const SwiperSlider = ({ slider = "bigSlider" }) => {
  const slicedData = [0, 1, 2, 3, 4, 5];

  const perView = slider == "cardSlider" ? "auto" : 1;
  const isPaginationFalse = slider == "cardSlider" ? false : true;
  const pagination = {
    clickable: true,
  };
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={perView}
      pagination={isPaginationFalse}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={isPaginationFalse}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      onSwiper={(swiper) => console.log(swiper)}>
      {/* first Slider */}
      {slider == "bigSlieder" &&
        slicedData.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperSliderComponent />
          </SwiperSlide>
        ))}
      {/* first Slider */}
      {slider == "bigSlider" && (
        <div className='absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 z-2 flex justify-center w-25 lg:w-30 h-10'>
          <Image
            src={rectangle}
            alt='rectandle'
            className='absolute bottom-0 w-full '
          />
        </div>
      )}

      {/* second Slider */}
      {slider == "cardSlider" &&
        slicedData.map((item, index) => (
          <SwiperSlide key={index} className='!w-[168px]'>
            <CardFood />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperSlider;
