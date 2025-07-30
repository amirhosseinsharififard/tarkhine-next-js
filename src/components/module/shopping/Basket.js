import CustomeButton from "@/components/ui/CustomeButton";
import CartBasket from "./CartBasket";

// function
import { formatPrice } from "@/utils/replaceNumber";

// icons
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { GoPerson } from "react-icons/go";
export default function Basket() {
  return (
    <div className="p-6 border-1 border-neutral-gray4 rounded-8" dir="rtl">
      <div className="flex flex-col">
        <div
          className="w-full max-h-[187px] scroll-auto overflow-scroll rounded-4"
          dir="ltr"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <CartBasket
              key={i}
              bgColor={i % 2 === 0 ? "bg-neutral-gray1" : "bg-neutral-gray3"}
            />
          ))}
        </div>

        {/* divider */}
        <div className="border-b-1 border-neutral-gray4 my-3" />

        <div className="flex flex-row justify-between text-bodySM text-neutral-gray8">
          <p>تخفیف محصولات</p>
          <p className="text-neutral-gray7">{`${formatPrice(63000)} تومان`}</p>
        </div>

        {/* divider */}
        <div className="border-b-1 border-neutral-gray4 my-3" />

        <div className="gap-2">
          <div className="flex justify-between text-bodySM text-neutral-gray8">
            <p> هزینه ارسال</p>
            <p className="text-neutral-gray7">{`${formatPrice(0)} تومان`}</p>
          </div>
          <div className="text-status-warning flex gap-2 text-captionSM">
            <span>
              <MdOutlineReportGmailerrorred className="w-4 h-4" />
            </span>
            <p className="">
              هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
              محاسبه و به این مبلغ اضافه خواهد شد.
            </p>
          </div>

          <div className="border-b-1 border-neutral-gray4 my-3" />

          <div className="text-bodySM flex justify-between text-neutral-gray8 mb-3">
            <p> مبلغ قابل پرداخت </p>
            <p className="text-main-primary">{`${formatPrice(
              540000
            )} تومان`}</p>
          </div>
          {/* login button */}
          <CustomeButton classname={"w-full flex justify-center items-center gap-1 max-h-[32px]"}>
            <GoPerson className="w-4 h-4"/>
            <p> ورود/ثبتنام</p>
          </CustomeButton>
        </div>
      </div>
    </div>
  );
}
