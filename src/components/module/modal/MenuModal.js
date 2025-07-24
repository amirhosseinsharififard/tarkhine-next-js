import React from "react";
import CardBranch from "../home/CardBranch";

// icons
import { IoMdClose } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

// image
import Image from "next/image";
import bigPicture from "@/public/images/modal/picture.png";

// slider
import SliderModal from "@/components/module/slider/SliderModal";
import Link from "next/link";
import { e2p } from "@/utils/replaceNumber";
import { LiaStarSolid } from "react-icons/lia";

export default function MenuModal() {
  const rating = 3;
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.6)] ">
      {/* full picture homeBranch */}
      <div className="hidden md:grid grid-cols-4 max-w-screen-2xl text-center mx-auto px-5">
        <div className="col-span-4  w-full h-full relative">
          <div className="grid grid-cols-4 max-w-screen-2xl w-full mx-auto  px-5 md:grid-cols-12">
            <div className="col-span-8 grid grid-cols-12 md:col-start-3 w-full bg-neutral-white  m-auto ">
              <div className="col-span-4 col-start-5 my-auto text-h7 text-neutral-gray8 ">
                <p className="font-bold">اطلاعات محصول</p>
              </div>
              <div className="col-span-4  my-auto flex justify-end">
                <Link href={"#"}>
                  <IoMdClose className="w-10 h-10 text-neutral-gray7 ml-6 my-5" />
                </Link>
              </div>
            </div>

            <div className="col-span-8 col-start-3 bg-neutral-50 w-full h-full relative ">
              <Image
                src={bigPicture}
                alt="bigPicture"
                className="w-full h-full object-cover"
              />

              {/* gradiant lenear */}
              <div className="absolute left-0 right-0 bottom-0 h-[70px] w-full bg-gradient-to-b from-transparent to-neutral-black" />

              {/* slider */}
              <div className="absolute left-0 right-0 bottom-5 md:bottom-[32px] h-19 ">
                {true && <SliderModal imageData={bigPicture} />}

                <div className="hidden md:flex col-start-2 col-span-6  gap-32"></div>
              </div>
            </div>

            <div className=" p-4 col-span-8 bg-neutral-white h-full col-start-3 text-neutral-gray8">
              <div className="flex justify-between items-center content-center">
                <h5 className="text-h6 font-bold">کوفته برنجی</h5>
                <div className="flex flex-row-reverse">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < rating ? (
                      <LiaStarSolid
                        key={i}
                        className="w-6 h-6 text-status-warning-l"
                      />
                    ) : (
                      <LiaStarSolid
                        key={i}
                        className="w-6 h-6 text-neutral-gray4"
                      />
                    )
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center content-center text-bodySM">
                <p className=" ">
                  برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز
                </p>
                <span className="text-neutral-gray4">({e2p(75)}) نظر</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
