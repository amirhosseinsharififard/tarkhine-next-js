
import SwiperSlider from "../module/Swiper";

import CustomeButton from "../ui/CustomeButton";
import CustomeInput from "../ui/CustomeInput";

import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import noteSvg from "../../../public/images/note.svg";
import BranchesShop from "../module/branch/BranchesShop";
import Comments from "../module/branch/Comments";
import SpecialOffers from "../module/branch/SpecialOffers";


const BranchPage = () => {
  return (
    <div className="max-w-screen-2xl m-auto" dir="rtl">
      <SwiperSlider slider="bigSlider" />

      <div className="mx-auto lg:hidden flex justify-between items-center mt-16 mb-24 border-1 w-[320px] rounded-4 pl-2">
        <CustomeInput placeHolder="جستجو" search={true} />
        <button className="cursor-pointer w-16 h-16">
          <IoSearchOutline />
        </button>
      </div>

      <SpecialOffers title={"پیشنهاد ویژه"} />
      <SpecialOffers title={"غذای محبوب"} bg={true} />
      <SpecialOffers title={"غذاهای غیر ایرانی"} />

      <div className="mt-3 mb-4 lg:mt-6 lg:mb-12 w-full flex justify-center">
        <CustomeButton model={"stroke"}>
          <div className="flex justify-center items-center ">
            <Image src={noteSvg} alt="note svg" />
            <p>مشاهده منوی کامل</p>
          </div>
        </CustomeButton>
      </div>

      <BranchesShop />

      <Comments />
      
    </div>
  );
};

export default BranchPage;
