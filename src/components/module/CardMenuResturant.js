import React from "react";
import Image from "next/image";

// image
import imageCardMenu from "@/public/images/home/imageCardMenu.png";

export default function CardMenuResturant() {
  return (
    <div className="mb-20 col-span-2 md:col-span-1 w-[clamp(152px,15vw,287px)]">
      <div className="relative grid">
        <Image
          src={imageCardMenu}
          alt="imageCardMenu"
          className="w-[clamp(120px,12vw,240px)] h-[clamp(120px,12vw,240px)] rounded-full z-1 m-auto shadow-8"
        />
        <div
          className="absolute bottom-[clamp(-25px,2vw,-40px)] left-0 right-0 bg-main-primary h-[clamp(80px,6vw,160px)]
            rounded-4"
        >
          <p
            className="absolute bottom-[-20] left-0 right-0  z-2 shadow-4 m-auto 
              h-[clamp(32px,6vw,48px)]
              w-[clamp(96px,9vw,155px)] rounded-4 bg-neutral-gray1 text-captionMD md:text-bodySM lg:text-bodyXL
              flex items-center justify-center"
          >
            غذای اصلی
          </p>
        </div>
      </div>
    </div>
  );
}
