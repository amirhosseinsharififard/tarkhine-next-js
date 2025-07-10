import Image from "next/image";
import React from "react";

// image
import aboutImage from "@/public/images/home/about.png";

// custome components
import CustomeButton from "../ui/CustomeButton";

// icon
import person from "@/public/images/svg/user.svg";

export default function About() {
  const map = [0, 1, 2, 3];
  return (
    <div className="relative w-full  min-h-[450px] mx-auto ">
      <Image
        src={aboutImage}
        alt="About Image"
        className="absolute w-full h-full object-cover "
      />
      <div className=" bg-neutral-black opacity-[65%] w-full h-full z-1 absolute top-0 left-0 right-0 "></div>

      <div className="absolute  top-0 left-0 right-0 bottom-0 z-2 flex flex-col md:grid md:grid-cols-4 justify-evenly p-4 text-neutral-white text-captionSM">
        <div className="text-neutral-white text-captionSM md:col-span-2 p-5 md:my-auto">
          <h4 className="text-overlineLG md:text-h4 mb-2 md:mb-6">
            رستوران‌های زنجیره‌ای ترخینه
          </h4>
          <p className="text-captionMD md:text-bodyXL text-justify ">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <div className="flex justify-start mt-2 md:mt-4 ">
            <CustomeButton
              model={"strokeWhite"}
              width="152"
              height="32"
              classname={" ms-auto mt-4"}
            >
              <p className="text-captionMD text-buttonLG">
                اطلاعات بیشتر {"arrow-left"}
              </p>
            </CustomeButton>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-15   md:col-span-2 max-w-[400px] max-h-[280px] mx-auto md:my-auto ">
          {map.map((item) => (
            <div
              key={item}
              className="flex
                flex-col
                justify-center
                items-center
                content-center"
            >
              <Image
                src={person}
                alt="Person Icon"
                className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
              />
              <p className="text-captionMD md:text-bodyLG ">
                پسرنل مجرب و حرفه ای
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
