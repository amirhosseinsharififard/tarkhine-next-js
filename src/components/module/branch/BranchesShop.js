import { e2p } from "@/utils/replaceNumber";
import Image from "next/image";

// icons
import call from "@/public/images/svg/call-calling.svg";
import clock from "@/public/images/svg/clock.svg";
import location from "@/public/images/svg/location.svg";
import SwiperSlider from "../Swiper";
export default function BranchesShop() {
  return (
    <div className="text-center mb-15 lg:mb-25">
      <h4 className="text-neutral-gray8 text-h6 lg:text-h4 mb-3 lg:mb-5 ">
        شعبه اکباتان
      </h4>
      <SwiperSlider slider="bigSlider" branch={true} />
      <div className="relative text-neutral-gray8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 p-3 border border-main-primary w-[90%] lg:w-[810px] mx-auto absolute top-[-20px] lg:top-[-30px] left-0 right-0 bg-neutral-white z-20">
          <div className="col-span-2 lg:col-span-1 flex lg:flex-col order-1 lg:order-2">
            <Image
              src={location}
              alt="location"
              className="lg:mx-auto ml-1  w-[16px] h-[16px] lg:w-[32px] lg:h-[32px] "
            />
            <p className="text-captionSM lg:text-bodyMD">
              شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
            </p>
          </div>
          <div className="flex lg:flex-col order-2 lg:order-1">
            <Image
              src={call}
              alt="call"
              className="lg:mx-auto ml-1  w-[16px] h-[16px] lg:w-[32px] lg:h-[32px] "
            />
            <p className="lg:hidden text-captionSM lg:text-bodyMD">
              {`${e2p(21)}-${e2p(54891250)}-${e2p(51)}`}
            </p>
            <p className="hidden lg:block lg:text-bodyMD">
              {`${e2p(21)}-${e2p(33535354)}`}
            </p>
            <p className="hidden lg:block lg:text-bodyMD">
              {`${e2p(21)}-${e2p(33535356)}`}
            </p>
          </div>
          <div className="flex lg:flex-col order-3 lg:order-3">
            <Image
              src={clock}
              alt="clock"
              className="lg:mx-auto ml-1  w-[16px] h-[16px] lg:w-[32px] lg:h-[32px] "
            />
            <p className="text-captionSM lg:text-bodyMD">
              همه‌روزه از ساعت ۱۲ الی ۲۳
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
