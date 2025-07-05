import React from "react";
import Image from "next/image";

// image
import imageCardMenu from "@/public/images/home/imageCardMenu.png";

export default function CardMenuResturant() {
  return (
    <div className="mb-20 col-span-2 md:col-span-1 w-[152px]">
      <div className="relative grid">
        <Image
          src={imageCardMenu}
          alt="imageCardMenu"
          className="w-[120px] h-[120px] rounded-full z-1 m-auto shadow-8"
        />
        <div className="absolute bottom-[-20] left-0 right-0 bg-main-primary h-[80px] rounded-4">
          <p
            className="absolute bottom-[-22] left-0 right-0  z-2 shadow-4 m-auto 
            w-[96px] h-[32px] rounded-4 bg-neutral-gray1 text-captionMD 
             flex items-center justify-center"
          >
            غذای اصلی
          </p>
        </div>
      </div>
    </div>
  );
}
