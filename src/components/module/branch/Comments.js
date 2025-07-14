import React from "react";
import SwiperSlider from "../Swiper";

export default function Comments() {
  return (
    <div className="mb-6 lg:mb-10">
      <h4 className="text-center text-h6 lg:text-h4 text-neutral-gray8 mb-3 lg:mb-5 mt-20 lg:mt-40">
        نظرات کاربران
      </h4>
      <SwiperSlider slider={"comments"}/>
    
    </div>
  );
}
