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

export default function App({ imageData }) {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <>
      {/* کاستوم دکمه‌ها */}
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
      {/* Swiper */}
      <Swiper
        slidesPerView={4}
        spaceBetween={16}
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
        {Array.from({ length: 5 }).map((_, i) => (
          <SwiperSlide
            key={i}
            className="max-w-[64px] max-h-[64px]  object-cover"
          >
            <Image
              src={imageData}
              alt="image Data"
              className="max-w-[64px] max-h-[64px] w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
