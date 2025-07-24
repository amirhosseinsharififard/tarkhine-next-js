import React from "react";
import Image from "next/image";

// image
import imageCardMenu from "@/public/images/home/imageCardMenu.png";

export default function CardMenuResturant() {
  return (
    <div className="col-span-6 max-w-[152px]  sm:col-span-3 md:max-w-[287px] md:col-span-6 lg:col-span-3 w-full overflow-hidden">
      <div className="relative rounded-4 overflow-hidden -mt-15 md:-mt-25 ">
        <div
          className="absolute inset-0   bg-main-primary opacity-100 max-h-20 md:max-h-[160px] rounded-4 shadow-drop-shadow"
          style={{ top: "50%", zIndex: 1 }}
        />

        <div className="relative z-10 flex justify-center pt-15 md:pt-25">
          <Image
            src={imageCardMenu}
            alt="imageCardMenu"
            className="w-[120px] h-[120px] md:w-[240px] md:h-[240px] rounded-full m-auto shadow-8"
          />
        </div>

        <div className="relative z-10  h-[32px] md:h-12 m-auto flex justify-center items-center w-[60%] rounded-4 text-center shadow-drop-shadow mb-1 text-neutral-gray8 bg-neutral-white">
          <p className="text-captionMD md:text-bodyXL">غذای اصلی</p>
        </div>
      </div>
    </div>
  );
}
