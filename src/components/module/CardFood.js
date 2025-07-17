import Image from "next/image";
import CustomeButton from "../ui/CustomeButton";
import { CiHeart } from "react-icons/ci";
import { IoStar } from "react-icons/io5";

// function

// image
import FoodImage from "@/public/images/foodPicture.png";
import { formatPrice } from "@/utils/replaceNumber";
const CardFood = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden border-1 rounded-4 md:rounded-8 border-neutral-gray4 pb-8 bg-neutral-white " dir="rtl">
      <div className="w-full h-[110px] sm:h-[147px] md:h-[256px] overflow-hidden relative">
        <Image
          src={FoodImage}
          alt="Image"
          className="h-full w-full object-cover  "
        />
      </div>

      <div className="flex flex-col justify-evenly content-evenly  px-8 pb-8 gap-1 ">
        <h3 className="text-captionMD lg:text-h7 text-center">دلمه بزرگ کلم</h3>
        <div className="flex justify-between ">
          <div className="flex gap-1">
            <CiHeart className="w-16 h-16 cursor-pointer text-neutral-gray5" />
            <p className="hidden lg:block text-captionSM text-neutral-gray5">
              افزودن به علاقه مندی ها
            </p>
          </div>

          <div className="flex text-captionSM gap-[4px]">
            <p className="line-through  text-neutral-gray5">
              {formatPrice(2200000)}
            </p>
            <span className="bg-status-error-eL text-status-error rounded-3xl w-32 h-16">
              {formatPrice(8)}%
            </span>
          </div>
        </div>

        <div className="flex justify-between text-captionSM ">
          <div className="flex gap-1">
            <span className="ml-[2px]">
              <IoStar className="w-16 h-16 text-status-warning-l cursor-pointer" />
            </span>
            <p className="text-captionSM">{formatPrice(5)}</p>
            <p className="hidden lg:block text-neutral-gray5 text-captionSM">{`(${formatPrice(
              53
            )}امتیاز)`}</p>
          </div>

          <div className="flex justify-between text-captionSM lg:text-bodyMD text-neutral-gray8">
            <p>{formatPrice(200000)} تومان</p>
          </div>
        </div>
      </div>
      <div className="px-8">
        <CustomeButton width={"w-full"} textSize={""}>
          افزودن به سبد خرید
        </CustomeButton>
      </div>
    </div>
  );
};

export default CardFood;
