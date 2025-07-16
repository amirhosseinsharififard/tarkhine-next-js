import React from "react";
import CardBranch from "../home/CardBranch";

// icons
import { IoMdClose } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

// image
import Image from "next/image";
import bigPicture from "@/public/images/modal/picture.png";

// slider
import SliderModal from "@/components/slider/SliderModal";

export default function ModalHome() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.6)] ">
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
      <div className="grid grid-cols-4 max-w-screen-2xl  mx-auto h-[352px] px-5">
        <div className="col-span-4  w-full h-full relative">
          <div className="grid grid-cols-4 max-w-screen-2xl w-full mx-auto h-[352px] px-5 md:grid-cols-12">
            <div className="col-span-4 md:col-span-8 md:col-start-3 bg-neutral-50 w-full h-full relative rounded-8">
              <Image
                src={bigPicture}
                alt="bigPicture"
                className="w-full h-full object-cover"
              />

              {/* gradiant lenear */}
              <div className="absolute left-0 right-0 bottom-0 h-[70px] w-full bg-gradient-to-b from-transparent to-neutral-black" />

              {/* close icon */}
              <IoCloseSharp className="hidden md:block absolute top-0 left-0 m-24 w-40 h-40 cursor-pointer text-neutral-white" />

              {/* slider */}
              <div className="absolute left-0 right-0 bottom-5 md:bottom-[32px] h-19 ">
                {true && <SliderModal imageData={bigPicture} />}

                <div className="hidden md:flex col-start-2 col-span-6  gap-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
