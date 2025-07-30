import { formatPrice } from "@/utils/replaceNumber";
import { TfiTrash } from "react-icons/tfi";

export default function CartBasket({ bgColor }) {
  return (
    <div>
      <div
        className={`flex justify-between  ${bgColor} py-3 px-2 items-center max-h-[55px]`}
      >
        <div className="min-w-14 max-h-[32px] bg-main-tint1 flex items-center justify-evenly rounded-4 gap-1 text-main-primary">
          <button className=" cursor-pointer p-1 ">
            <TfiTrash className="w-4 h-4 " />
          </button>
          <p className="text-bodySM">{1}</p>
          <button className="text-bodyXL cursor-pointer p-1 ">+</button>
        </div>
        <div dir="rtl" className="text-captionMD text-neutral-gray8">
          <p>پاستا</p>
          <p className="text-captionSM text-neutral-gray7">
            {`${formatPrice(140000)} تومان`}
          </p>
        </div>
      </div>
    </div>
  );
}
