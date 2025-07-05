import MenuResturant from "../module/MenuResturant";
import SwiperSlider from "../module/Swiper";
import CustomeInput from "../ui/CustomeInput";

export default function HomePage() {
  return (
    <div className="max-w-screen-xl m-auto" dir="rtl">
      <SwiperSlider slider="bigSlider" />

      <div className="flex lg:hidden  justify-center items-center mt-4 mb-6">
        <CustomeInput placeHolder="جستجو ..." width={320} height={32} />
      </div>

      <MenuResturant/>
    </div>
  );
}
