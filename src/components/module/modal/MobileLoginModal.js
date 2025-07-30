"use client";
import Image from "next/image";
import logoMobileImage from "@/public/images/login/Vector.png";
import CustomeInput from "../../ui/CustomeInput";
import CustomeButton from "../../ui/CustomeButton";
import { IoClose } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { useState, useEffect } from "react";

export default function MobileLoginModal() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [showToast]);

  return (
    <div className="w-full h-full bg-neutral-white flex md:hidden px-5" dir="ltr">
      <div className="w-full max-w-sm m-auto grid grid-cols-4">
        <div className="flex mt-5 col-span-4 justify-between items-center">
          <IoClose className="w-6 h-6" />
          <GrNext className="w-6 h-6" />
        </div>

        <div className="col-span-4 grid grid-cols-4">
          <Image
            src={logoMobileImage}
            alt="logo Image"
            className="mt-[112px] min-h-[71px] col-span-2 col-start-2"
          />
        </div>

        <div className="col-span-4 text-center text-neutral-gray8 mt-[80px]">
          <h4 className="text-h6">ورود / ثبتنام</h4>
          <p className="mt-6 text-bodySM">شماره همراه خود را وارد کنید</p>
        </div>

        <div className="col-span-4 h-1">
          <CustomeInput
            classname="text-left w-full text-bodyMD text-neutral-gray7 mt-6"
            placeHolder="شماره همراه"
            model="phone"
            height={40}
          />
        </div>

        <div className="col-span-4 mt-25 text-buttonLG flex flex-col">
          {!showToast && (
            <CustomeButton
              onClick={() => setShowToast(true)}
              classname={"w-full"}
              disabled={true}
            >
              تایید
            </CustomeButton>
          )}
          <div
            className={`bg-main-primary text-white mt-2 px-4 py-2 rounded-lg shadow-lg text-captionMD transition-opacity duration-300 ${
              showToast ? "block opacity-100" : "opacity-0 hidden"
            }`}
          >
            عملیات موفق بود!
          </div>
        </div>
      </div>
    </div>
  );
}
