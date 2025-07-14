"use client";
import { useDispatch, useSelector } from "react-redux";
import About from "../module/home/About";
import BranchHomePage from "../module/home/BranchHomePage";
import MenuResturant from "../module/home/MenuResturant";
import SwiperSlider from "../module/Swiper";
import CustomeInput from "../ui/CustomeInput";


export default function HomePage() {
  return (
    <div className="max-w-screen-2xl m-auto" >
      <SwiperSlider slider="bigSlider" />

      <div className="flex lg:hidden  justify-center items-center mt-4 mb-6">
        <CustomeInput placeHolder="جستجو ..." width={320} height={32} />
      </div>

      <MenuResturant />

      <About />
      
      <BranchHomePage />

    </div>
  );
}
