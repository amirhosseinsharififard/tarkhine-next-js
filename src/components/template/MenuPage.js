import CategoriesFoodMenu from "../module/menu/CategoriesFoodMenu";
import MenuTabs from "../module/menu/MenuTabs";
import BigSlider from "../module/slider/BigSlider";
import MenuSlider from "../module/slider/MenuSlider";
import CustomeInput from "../ui/CustomeInput";

export default function MenuPage() {
  return (
    <div className="" dir="rtl">
      <div className="max-w-screen-2xl m-auto">
        <BigSlider />
      </div>

      <MenuTabs />

      <div className="max-w-[1224px] my-2 mx-auto md:my-4 grid grid-cols-4 md:grid-cols-12 ">
        <div className="col-span-4 md:col-span-8">
          <MenuSlider />
        </div>
        <div className="hidden md:block md:col-span-4 px-2">
          <CustomeInput placeHolder="جستجو " classname={"!border-neutral-gray4"} />
        </div>
      
      <CategoriesFoodMenu title={"غذای های ایرانی"}/>
      <CategoriesFoodMenu title={"غذای های ایرانی"}/>

      </div>


    </div>
  );
}
