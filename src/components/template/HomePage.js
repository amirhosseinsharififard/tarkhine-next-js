import SpecialOffers from "../module/SpecialOffers";
import SwiperSlider from "../module/Swiper";
import CustomeInput from "../ui/CustomeInput";

import { IoSearchOutline } from "react-icons/io5";

const HomePage = () => {
  return (
    <div  className='max-w-screen-xl m-auto' dir='rtl'>
      <SwiperSlider slider="bigSlider" />

      <div className='mx-auto lg:hidden flex justify-between items-center mt-16 mb-24 border-1 w-[320px] rounded-4 pl-2'>
        <CustomeInput placeHolder='جستجو' search={true} />
        <button className='cursor-pointer w-16 h-16'>
          <IoSearchOutline />
        </button>
      </div>
        <SpecialOffers title={"پیشنهاد ویژه"} />
        <SpecialOffers title={"غذای محبوب"} bg={true} />
    </div>
  );
};

export default HomePage;
