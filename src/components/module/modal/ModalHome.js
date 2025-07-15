import React from "react";

// icons
import { IoMdClose } from "react-icons/io";
import CardBranch from "../home/CardBranch";

// image
import Image from "next/image";
import bigPicture from "@/public/images/modal/picture.png";

// slider
import SliderModal from "@/components/slider/SliderModal";
export default function ModalHome() {
  return (
    <div className="z-10 fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.6)] ">
      {/* chose branch in Home page */}
      {false && (
        <div className="m-auto bg-neutral-white  ">
          <div className="max-md:bg-neutral-gray3 min-h-[57px] grid grid-cols-4 p-4 md:p-24  ">
            <div className="col-span-2 col-start-2 text-center">
              <h3>انتخاب شعبه</h3>
            </div>
            <div className="flex flex-row justify-end">
              <IoMdClose className="w-[24px] h-[24px] cursor-pointer  text-left " />
            </div>
          </div>

          <div className="p-4 md:pt-48 w-full text-center">
            <p className="text-captionMD m-auto mb-4">
              برای دیدن منوی رستوران, لطفا شعبه مدنظر خود را انتخاب کنید
            </p>
            <div className="flex flex-col gap-8 md:flex-row">
              <CardBranch model={"modal"} />
              <CardBranch model={"modal"} />
              <CardBranch model={"modal"} />
              <CardBranch model={"modal"} />
            </div>
          </div>
        </div>
      )}

      {/* full picture homeBranch */}

      <div className="grid grid-cols-4 max-w-screen-2xl w-full mx-auto h-[352px] px-5">
        <div className="col-span-4 bg-neutral-50 w-full h-full relative">
          <Image
            src={bigPicture}
            alt="bigPicture"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-0 right-0 bottom-0 h-[70px] w-full bg-gradient-to-b from-transparent to-neutral-black" />

          <div className="absolute left-0 right-0 bottom-5  h-19">
            <SliderModal imageData={bigPicture} />
          </div>
        </div>
      </div>
    </div>
  );
}
