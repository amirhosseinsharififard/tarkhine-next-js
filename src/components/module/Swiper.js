"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination,Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiperStyle.css";
// data
import SwiperSliderComponent from "./SwiperSliderComponent";
import rectangle from "../../../public/images/Rectangle2.svg";

import Image from "next/image";

const SwiperSlider = ({ data }) => {
  const pagination = {
    clickable: true,
  };
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
         pauseOnMouseEnter: true
      }}
      pagination={pagination}
      loop={true}
      modules={[EffectFade, Navigation, Pagination,Autoplay]}
      onSwiper={(swiper) => console.log(swiper)}>
      {/* محدودیت 5 اسلایدی */}
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
      {/* <div className=' w-30 h-10 absolute left-[43%] bottom-[-1px] z-2 flex justify-center'>
        <Image src={rectangle} alt='rectandle' className='absolute bottom-0 w-full ' />
      </div> */}

      <div className='absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 z-2 flex justify-center w-25 lg:w-30 h-10'>
        <Image
          src={rectangle}
          alt='rectandle'
          className='absolute bottom-0 w-full '
        />
      </div>
    </Swiper>
  );
};

export default SwiperSlider;
