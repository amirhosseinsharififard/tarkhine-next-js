import React from "react";
import Image from "next/image";

// image icons
import profileComments from "@/public/images/profileComments.png";
export default function CardComment() {
  return (
    <div
      className="border-1 rounded-8 border-neutral-gray4
      min-w-[252px]
      min-h-[142px]
       w-[65vw] h-[35vw] max-w-[600px] max-h-[202px] lg:w-[40vw] lg:h-[20vw] py-4 px-3 gap-2
       flex 
       mb-7
     "
    >
      <div className="w-full">
        <Image
          src={profileComments}
          alt="image"
          className="w-[15vw] h-[15vw] max-w-[96px] max-h-[96px] rounded-full mx-auto"
        />
        <div className="text-neutral-gray7 text-captionSM md:text-bodySM lg:text-bodyMD mx-auto text-center">
          <p className="text-nowrap">آرزو محمدعلیزاده</p>
          <span className="text-nowrap">23 اسفند 1402</span>
        </div>
      </div>
      <div className="relative">
        <p className="col-span-3 text-neutral-gray8 text-captionSM md:text-bodySM lg:text-bodyMD text-justify ">
          از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
          عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
          تشکر میکنم.
        </p>

        <p className="absolute bottom-0 left-0">
          star
          <span className="text-buttonLG text-neutral-gray8">4</span>
        </p>
      </div>
    </div>
  );
}
