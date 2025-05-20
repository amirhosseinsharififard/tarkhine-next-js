import Image from "next/image";
import CustomeButton from "../ui/CustomeButton";

const SwiperSliderComponent = ({ data }) => {
  return (
    <div className=' w-full h-auto relative '>
      <Image src={data} alt='SliderHomeImage' />
      <div className='bg-[rgba(0,0,0,55%)] absolute top-0 right-0 h-full w-full'>
        <div className='bg-[rgba(33,64,43,5%)] absolute top-0 right-0 h-full w-full flex flex-col justify-evenly items-center content-evenly'>
          <p className='text-neutral-white text-h6 lg:text-h2 md:text-h6 '>
            تجربه عذای سالم و گیاهی به سبک ترخینه
          </p>

          <CustomeButton model='' disabled={false} isLoading={false}>
            سفارش انلاین غذا
          </CustomeButton>
        </div>
      </div>
    </div>
  );
};

export default SwiperSliderComponent;
