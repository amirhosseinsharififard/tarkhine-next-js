import Image from "next/image";
import CustomeButton from "../ui/CustomeButton";
import { CiHeart } from "react-icons/ci";
import { IoStar } from "react-icons/io5";

import FoodImage from "@/public/images/foodPicture.png";
const CardFood = () => {
  return (
    <div className='min-w-[168px]  flex flex-col overflow-hidden border-1 rounded-4 border-neutral-gray4 pb-8 '>
      <Image src={FoodImage} alt='Image' className='bg-amber-800 w-fit min-h-[109px] ' />

      <div className='flex flex-col justify-evenly content-evenly  px-8 pb-8 gap-1 '>
        <h3 className='text-captionMD'>دلمه بزرگ کلم</h3>
        <div className='flex justify-between '>
          <span>
            <CiHeart className='w-16 h-16' />
          </span>

          <div className='flex text-captionSM gap-[4px]'>
            <p className='line-through  text-neutral-gray5'>220,000</p>
            <span className='bg-status-error-eL text-status-error rounded-3xl w-32 h-16'>
              8%
            </span>
          </div>
        </div>

        <div className='flex justify-between text-captionSM '>
          <p className='flex'>
            <span className='ml-[2px]'>
              <IoStar className='w-16 h-16 text-status-warning-l' />
            </span>
            5
          </p>

          <div className='flex justify-between text-captionSM'>
            <p>209,000 تومان</p>
          </div>
        </div>
      </div>
      <div className="px-8">
        <CustomeButton width={"w-full"}>افزودن به سبد خرید</CustomeButton>
      </div>
    </div>
  );
};

export default CardFood;
