import { e2p, formatPrice } from "@/utils/replaceNumber";
import SwiperSlider from "./Swiper";

export default function BranchesShop() {
  return (
    <div className="text-center">
      <h4 className="text-neutral-gray8 text-h6 lg:text-h4 mb-3 lg:mb-5 ">
        شعبه اکباتان
      </h4>
      <SwiperSlider slider="bigSlider" branch={true} />
      <div className="relative text-neutral-gray8">
        <div className="flex flex-col p-3 border-1 lg:border-3 border-main-primary w-[320px] mx-auto  absolute top-[-20px] lg:top-[-30px] left-0 right-0 bg-neutral-white z-20  gap-2">
          <div className="flex">
            <span>icon</span>

            <p className="text-captionSM lg:text-bodyMD ">
              شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
            </p>
          </div>
          <div className="flex items-center content-center justify-between">
            <div className="flex">
              <span>icon</span>

              <p className="text-captionSM lg:text-bodyMD ">
                {`${e2p(21)}-${e2p(54891250)}-${e2p(51)}`}
              </p>
            </div>
            <div className="flex">
              <span>icon</span>
              <p className="text-captionSM lg:text-bodyMD ">
                همه‌روزه از ساعت ۱۲ الی ۲۳
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
