"use client";
import Image from "next/image";
// image
import logoMobileImage from "@/public/images/login/Vector.png";
import CustomeInput from "../../ui/CustomeInput";
import CustomeButton from "../../ui/CustomeButton";

// icons
import { IoClose } from "react-icons/io5";
import { GrNext } from "react-icons/gr";


import OtpInput from "../../common/OtpInput";
import { e2p } from "@/utils/replaceNumber";
import Link from "next/link";


export default function LoginModal() {
  const checkStatus = (status) => {
    return status;
  };

  const handleOtpChange = (val) => {
    console.log("OTP value:", val);
  };
 
  return (
    <div className=" bg-neutral-white w-full h-full" dir="ltr">

    <div className="grid grid-cols-4 px-5 max-w-sm m-auto   ">

      <div className="flex mt-5 col-span-4 justify-between items-center content-center ">
        <IoClose className="w-6 h-6" />
        {checkStatus(true) && <GrNext className="w-6 h-6" />}{" "}
      </div>

      <div className="col-span-4 grid grid-cols-4">
        <Image
          src={logoMobileImage}
          alt="logo Image"
          className="mt-[112px] min-h-[71px] col-span-2 col-start-2"
          />
      </div>

      <div className="col-span-4 text-center text-neutral-gray8 mt-[80px]">
        <h4 className="text-h6">{checkStatus(false) && "ورود / ثبتنام"}</h4>
        <p className="text-bodySM mt-6">
          {checkStatus(true) &&
            ` کد تایید پنج‌رقمی به شماره
            ${91728384087}
            ارسال شد.
            `}
          {checkStatus(false) && "شماره همراه خود را وارد کنید"}
        </p>
      </div>

      <div className="col-span-4 ">
        {checkStatus(false) && (
          <CustomeInput
          classname="text-left w-full text-bodyMD text-neutral-gray7 mt-6"
          placeHolder="شماره همراه"
          model={"phone"}
          ></CustomeInput>
        )}
        {checkStatus(true) && (
          <div className="mt-6">
            <OtpInput onChange={handleOtpChange} />
          </div>
        )}

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
      </div>

      <div className="col-span-4 mt-6 ">
        <CustomeButton classname={"w-full"} disabled={true}>
          {checkStatus(true) && " تایید"}
          {checkStatus(false) && "ورود"}
        </CustomeButton>

        {checkStatus(false) && (
          <p className="mt-2 text-center text-neutral-gray8 text-captionSM">
            ورود و عضویت در ترخینه به منزله قبول
            <span className="text-main-primary"> قوانین و مقررات</span> است.
          </p>
        )}
      </div>
      </div>
        </div>
  );
}
