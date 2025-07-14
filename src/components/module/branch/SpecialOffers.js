import SwiperSlider from "../Swiper";

const SpecialOffers = ({title,bg=false}) => {
  return (
    <div className={`pr-5 m-6 py-6 ${bg && "bg-main-primary text-neutral-white"} m-auto`}>
      <div className='max-w-screen-xl m-auto'>

      <h4 className='text-h6h lg:text-h4 mb-6'>{title}</h4>
      <SwiperSlider slider='cardSlider'/>
      </div>
    </div>
  );
};

export default SpecialOffers;
