import Image from "next/image";
import React from "react";

// image
import aboutImage from "@/public/images/home/about.png";

// custome components
import CustomeButton from "../../ui/CustomeButton";

// icon
import person from "@/public/images/svg/user.svg";

export default function About() {
  const items = [1, 2, 3, 4];
  return (
    <div className="relative w-full  min-h-[390px] grid col-span-4 ">
      <div className="absolute inset-0">
        <Image
          src={aboutImage}
          alt="About Image"
          fill
          className="object-cover "
        />
        <div className="absolute bg-neutral-black opacity-[65%] w-full h-full z-1   "></div>
      </div>

      <div className="z-10 container mx-auto px-5   grid grid-cols-4 sm:grid-cols-12 sm:m-auto  ">
        <div className="col-span-4 sm:col-span-6 md:col-span-12 lg:col-span-6 p-5 text-neutral-white ">
          <h4 className="text-overlineLG md:text-h4 mb-2">
            رستوران‌های زنجیره‌ای ترخینه
          </h4>
          <p className="text-captionMD md:text-bodyXL mb-2">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <div className="text-left">
            <CustomeButton model="strokeWhite" classname="text-captionMD">
              اطلاعات بیشتر {"arrow-left"}
            </CustomeButton>
          </div>
        </div>

        <div className="col-span-5 sm:col-start-8 md:col-span-12 lg:col-span-5  lg:col-start-8 h-full sm:max-h-[280px] items-center m-auto grid grid-cols-4 gap-x-12 gap-y-4 sm:gap-x-6 sm:gap-y-0 md:gap-x-12 md:gap-y-4  ">
          {items.map((item) => (
            <div
              key={item}
              className="col-span-2 flex flex-col items-center max-w-[184px] max-h-[136px] text-neutral-white"
            >
              <Image
                src={person}
                alt="Person Icon"
                className="w-6 h-6 md:w-12 md:h-12"
              />
              <p className="text-captionMD md:text-bodyLG mt-1">
                پرسنل مجرب و حرفه‌ای
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
