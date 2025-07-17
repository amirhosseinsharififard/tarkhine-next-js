import CardSlider from "@/components/module/slider/CardSlider";

const SpecialOffers = ({ title, bg = false }) => {
  return (
    <div
      className={`  py-6 ${
        bg && "bg-main-primary text-neutral-white"
      } m-auto`}
    >
      <div className="max-w-screen-2xl m-auto  relative ">
        <h4 className="text-h6h lg:text-h4 mb-6 mr-5 md:mr-[108px]">{title}</h4>

        <CardSlider slider="cardSlider" />
      </div>
    </div>
  );
};

export default SpecialOffers;
