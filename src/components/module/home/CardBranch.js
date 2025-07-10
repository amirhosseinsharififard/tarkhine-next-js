import Image from "next/image";
import React from "react";

// image
import branchImage from "@/public/images/home/branchImage.png";
export default function CardBranch() {
  return (
    <div className="col-span-12 mx-auto flex md:flex-col min-w-[320px] md:min-w-[288px] max-w-[90%] max-h-[80px] md:max-h-[344px] rounded-4 overflow-hidden border-1 hover:border-main-primary border-neutral-gray4 shadow-cards ">
      <div>
        <Image
          src={branchImage}
          alt="image branch"
          className="object-fill max-w-[144px] md:max-w-[288px] md:max-h-[230px]"
        />
      </div>

      <div className="max-w-[166px] md:max-w-[98%] flex flex-col justify-evenly items-center content-center  md:mt-2 text-justify">
        <h5 className="text-buttonSM md:text-h7 text-neutral-gray8">
          شعبه اکباتان
        </h5>
        <p className="text-captionSM md:text-captionLG text-neutral-gray7 text-center mb-4">
          شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبق سوم
        </p>
      </div>
      
    </div>
  );
}
