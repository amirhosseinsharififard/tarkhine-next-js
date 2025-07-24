import About from "../module/home/About";
import BranchHomePage from "../module/home/BranchHomePage";
import MenuResturant from "../module/home/MenuResturant";
import CustomeInput from "../ui/CustomeInput";
import BigSlider from "../module/slider/BigSlider";

export default function HomePage() {
  return (
    <div className="max-w-[1440px] m-auto">
      <BigSlider slider="bigSlider" />

      <div className="flex lg:hidden  justify-center items-center mt-4 mb-6">
        <CustomeInput placeHolder="جستجو ..." width={320} height={32} />
      </div>

      <MenuResturant />

      <About />

      <BranchHomePage />
    </div>
  );
}
