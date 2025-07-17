"use client";
import Image from "next/image";
import Link from "next/link";
// image
import logoMobileImage from "@/public/images/login/Vector.png";
import CustomeInput from "../../ui/CustomeInput";
import CustomeButton from "../../ui/CustomeButton";

// icons
import { IoClose } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import OtpInput from "../../common/OtpInput";
import logoModalSearchBigSize from "@/public/images/search/LogoModalSearchBigSize.svg";

import { e2p } from "@/utils/replaceNumber";

export default function LoginModal() {
  const checkStatus = (status) => {
    return status;
  };

  const handleOtpChange = (val) => {
    console.log("OTP value:", val);
  };

  return (
    <div
      className=" bg-neutral-white w-full h-full md:bg-[rgba(0,0,0,0.6)] md:flex  "
      dir="ltr"
    >
      <div className="grid grid-cols-4 px-5 md:px-4 max-w-sm m-auto bg-neutral-white md:h-[302px] md:w-md md:rounded-8">
        <div className="flex mt-5 md:mt-2 col-span-4 justify-between items-center content-center ">
          <IoClose className="w-6 h-6" />
          <Image
            src={logoModalSearchBigSize}
            alt="logo Image"
            className="hidden md:block md:max-w-[102px] max-h-[32px] col-span-2 col-start-2"
          />
          {checkStatus(true) && <GrNext className="w-6 h-6" />}
        </div>

        <div className="col-span-4 grid grid-cols-4 md:hidden">
          <Image
            src={logoMobileImage}
            alt="logo Image"
            className="mt-[112px] min-h-[71px] col-span-2 col-start-2"
          />
        </div>

        <div className="col-span-4 text-center text-neutral-gray8 mt-[80px] md:mt-4">
          <h4 className="text-h6 md:text-bodyMD">
            {checkStatus(true) && "ورود / ثبتنام"}
          </h4>
          <div className="text-bodySM mt-6 md:mt-0 md:text-captionMD">
            {checkStatus(false) && (
              <p>{` کد تایید پنج‌رقمی به شماره
            ${91728384087}
            ارسال شد.
            `}</p>
            )}
            {checkStatus(true) && (
              <p className="md:hidden">شماره همراه خود را وارد کنید</p>
            )}
            {checkStatus(true) && (
              <p className="hidden md:block">
                با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
              </p>
            )}
          </div>
        </div>

        <div className="col-span-4 h-1">
          {checkStatus(true) && (
            <CustomeInput
              classname="text-left w-full text-bodyMD text-neutral-gray7 mt-6 md:mt-0"
              placeHolder="شماره همراه"
              model={"phone"}
              height={40}
            ></CustomeInput>
          )}
          {checkStatus(false) && (
            <div className="mt-6">
              <OtpInput onChange={handleOtpChange} />
            </div>
          )}

          {checkStatus(false) && (
            <div className="flex justify-between items-center content-center mt-2 px-4 text-neutral-gray7 text-captionSM">
              <Link href="#">
                <p>ویرایش شماره</p>
              </Link>
              <Link href="#">
                <div
                  className="flex
              flex-row-reverse gap-0.5"
                >
                  <span>{e2p("1:19")}</span>
                  <p>دریافت تایم</p>
                </div>
              </Link>
            </div>
          )}
        </div>

        <div className="col-span-4 mt-6 md:mt-4 text-buttonLG flex flex-col ">
          <CustomeButton classname={"w-full"} disabled={true}>
            {checkStatus(true) && " تایید"}
            {checkStatus(false) && "ورود"}
          </CustomeButton>

          {checkStatus(true) && (
            <p className="mt-2 md:mt-4 text-center text-neutral-gray8 text-captionSM ">
              ورود و عضویت در ترخینه به منزله قبول
              <span className="text-main-primary"> قوانین و مقررات</span> است.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
