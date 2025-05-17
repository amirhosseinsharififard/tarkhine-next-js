import SwiperSlider from "../module/Swiper";

import SliderHomeImage from "../../../public/images/SliderHomeImage.png";

const HomePage = () => {
  return (
    <div className='max-w-screen-xl m-auto'>
      <SwiperSlider data={SliderHomeImage} />
    </div>
  );
};

export default HomePage;
