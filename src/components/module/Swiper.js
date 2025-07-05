"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiperStyle.css";
import "swiper/css/navigation";

// data
import SwiperSliderComponent from "./SwiperSliderComponent";
import rectangle from "../../../public/images/Rectangle2.svg";

import Image from "next/image";
import CardFood from "./CardFood";
import CardComment from "./CardComment";

const SwiperSlider = ({ slider, branch }) => {
  const slicedData = [0, 1, 2, 3, 4, 5];

  const getBreakpoints = () => {
    if (slider === "comments") {
      return {
        640: { slidesPerView: 1.5 },
        1024: { slidesPerView: 2 },
      };
    }
    return {
      640: { slidesPerView: 1 },
      1024: { slidesPerView: "auto" },
    };
  };
  const pagination = {
    clickable: true,
  };
  const breakpoints = getBreakpoints();
  const isPaginationFalse = slider == "cardSlider" ? false : true;

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={breakpoints}
      pagination={isPaginationFalse && !branch}
      className={`${
        slider === "bigSlider" ? "big-slider" : "card-slider"
      } h-full`}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        640: {
          slidesPerView: slider === "comments" ? 2 : 1,
        },
        1024: {
          slidesPerView: slider === "comments" ? 2 : "auto",
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* first Slider */}
      {slider === "bigSlider" &&
        !branch &&
        slicedData.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperSliderComponent />
          </SwiperSlide>
        ))}
      {/* first Slider */}
      {slider == "bigSlider" && !branch && (
        <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 z-2 flex justify-center w-25 lg:w-30 h-10">
          <Image
            src={rectangle}
            alt="rectandle"
            className="absolute bottom-0 w-full "
          />
        </div>
      )}

      {/* second Slider */}
      {slider == "cardSlider" &&
        slicedData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-[clamp(168px,25vw,288px)] max-w-[288px] h-[clamp(231px, 25vw,433px)] max-h-[433px]"
          >
            <CardFood />
          </SwiperSlide>
        ))}

      {slider === "bigSlider" &&
        branch &&
        slicedData.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperSliderComponent branch={branch} />
          </SwiperSlide>
        ))}

      {slider === "comments" && (
        <>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
          <SwiperSlide>
            <CardComment />
          </SwiperSlide>
        </>
      )}

      {slider === "bigSlider" && (
        <>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </>
      )}
    </Swiper>
  );
};

export default SwiperSlider;
