"use client";
import Image from "next/image";
import logoModalSearchBigSize from "@/public/images/search/LogoModalSearchBigSize.svg";
import CustomeButton from "../../ui/CustomeButton";
import OtpInput from "../../common/OtpInput";
import { IoClose } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import Link from "next/link";
import { e2p } from "@/utils/replaceNumber";
import { useState, useEffect } from "react";

export default function DesktopLoginModal() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [showToast]);

  return (
    <div className="flex bg-[rgba(0,0,0,0.6)] w-full h-full items-center justify-center" dir="ltr">
      <div className="grid grid-cols-5 px-4 bg-neutral-white md:h-[302px] md:w-md md:rounded-8">
        <div className="flex mt-2 col-span-5 justify-between items-center">
          <IoClose className="w-6 h-6" />
          <Image
            src={logoModalSearchBigSize}
            alt="logo Image"
            className="md:max-w-[102px] max-h-[32px] col-span-2 col-start-2"
          />
          <GrNext className="w-6 h-6" />
        </div>

        <div className="col-span-5 text-center text-neutral-gray8 mt-4">
          <h4 className="text-bodyMD">ورود / ثبتنام</h4>
          <p className="text-captionMD mt-0">
            با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
          </p>
        </div>

        <div className="col-span-5 mt-0">
          <OtpInput onChange={(val) => console.log("OTP:", val)} />
          <div className="flex justify-between mt-2 px-4 text-captionSM text-neutral-gray7">
            <Link href="#"><p>ویرایش شماره</p></Link>
            <Link href="#">
              <div className="flex flex-row-reverse gap-0.5">
                <span>{e2p("1:19")}</span>
                <p>دریافت تایم</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-span-5  flex flex-col text-buttonLG">
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
