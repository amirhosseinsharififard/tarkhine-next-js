// "use client";
// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./Slidermodal.css";
// import Image from "next/image";

// // import required modules

// export default function App({ imageData }) {
//   return (
//     <>
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         centeredSlides={true}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <Image
//             src={imageData}
//             alt="image Data"
//             className="w-[72px] h-[72px] object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src={imageData}
//             alt="image Data"
//             className="w-[72px] h-[72px] object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src={imageData}
//             alt="image Data"
//             className="w-[72px] h-[72px] object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src={imageData}
//             alt="image Data"
//             className="w-[72px] h-[72px] object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src={imageData}
//             alt="image Data"
//             className="w-[72px] h-[72px] object-cover"
//           />
//         </SwiperSlide>
//       </Swiper>

//     </>
//   );
// }

"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function App({ imageData, active = false, test }) {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <div className="md:grid grid-cols-8 h-full w-full" dir="rtl">
      <div className="col-span-6 col-start-2 h-full w-full">

      {/* کاستوم دکمه‌ها */}
      <div className="md:hidden">
        <button
          ref={nextRef}
          className="z-10 absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white text-black flex items-center justify-center shadow mx-4"
        >
          {">"}
        </button>
        <button
          ref={prevRef}
          className="z-10 absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white text-black flex items-center justify-center shadow mx-4"
        >
          {"<"}
        </button>
      </div>
      {/* Swiper */}
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        breakpoints={{
          768: {
            spaceBetween: 32,
            slidesPerView: 6,
            centeredSlides: false,
          },
        }}
        centeredSlides={true}
        loop={false}
        onInit={(swiper) => {
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.params.navigation.prevEl = prevRef.current;

          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <SwiperSlide
            key={i}
            className={`cursor-pointer rounded-4
              max-w-[64px] max-h-[64px]  w-[64px] h-[64px] 
              md:max-w-[72px] md:max-h-[72px] md:w-[72px] md:h-[72px]
              ${
                i === 1
                  ? "border border-neutral-white max-w-[72px] w-[72px] max-h-[72px] h-[72px] md:max-w-[88px] md:max-h-[88px] md:w-[88px]! md:h-[88px]!"
                  : ""
              }
           `}
          >
            <Image
              src={imageData}
              alt={`image-${i}`}
              className={`w-full h-full object-cover rounded-4
                 ${i === 1 ? "md:max-w-[88px] md:max-h-[88px]" : ""}
              `}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

    </div>
  );
}
