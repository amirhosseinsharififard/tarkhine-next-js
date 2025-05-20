import SliderHomeImage from "../../../public/images/SliderHomeImage.png";
import SwiperSlider from "../module/Swiper";
import CustomeInput from "../ui/CustomeInput";

const HomePage = () => {
  return (
    <div className='max-w-screen-xl m-auto' dir='rtl'>
      {/* <SwiperSlider data={SliderHomeImage} /> */}
      <div className='mx-auto lg:hidden flex justify-center items-center mt-16 mb-24'>
     <CustomeInput placeHolder="جستجو" placeHolderColor={true}/>
      </div>
    </div>
  );
};

export default HomePage;
