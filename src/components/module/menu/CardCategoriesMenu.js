import Image from "next/image";

// components
import CustomeButton from "@/components/ui/CustomeButton";

// functions
import { e2p, formatPrice } from "@/utils/replaceNumber";

// icons
import { CiHeart } from "react-icons/ci";
import { LiaStarSolid } from "react-icons/lia";

export default function CardCategoriesMenu() {
  const rating = 3;
  return (
    <div className="col-span-12  mx-auto border-1 border-neutral-gray4 rounded-4 max-h-[100px]  overflow-hidden sm:w-full sm:col-span-6">
      <div className="flex text-captionSM font-medium text-neutral-gray8 ">
        <div>
          <Image
            src={""}
            alt="img"
            className="w-[90px] h-full object-cover bg-neutral-gray4"
          />
        </div>
        <div className="m-2 flex flex-col justify-between w-auto">
          <div className="flex justify-between items-center">
            <h6 className="text-captionMD font-bold ">کوفته برنجی</h6>
            <div className="flex flex-row-reverse gap-2">
              <span className="text-status-error bg-status-error-eL px-1.5 py-[1px] rounded-8 font-medium">
                %{e2p(35)}
              </span>
              <span className="text-neutral-gray5 line-through  font-medium">
                {formatPrice(180000)}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <p className=" text-captionSM  truncate w-0 flex-1 min-w-0 ">
              برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز
            </p>
            <p className="font-medium text-nowrap ">{formatPrice(145000)} تومان</p>
          </div>
          <div className="flex justify-between items-center content-center">
            <span>
              <CiHeart className="w-4 h-4" />
            </span>
            <div className="flex flex-row-reverse">
              {Array.from({ length: 5 }).map((_, i) =>
                i < rating ? (
                  <LiaStarSolid
                    key={i}
                    className="w-4 h-4 text-status-warning-l"
                  />
                ) : (
                  <LiaStarSolid
                    key={i}
                    className="w-4 h-4 text-neutral-gray4"
                  />
                )
              )}
            </div>
            <CustomeButton height='32' classname={'text-captionSM font-medium text-nowrap'}>افزودن به سبد خرید</CustomeButton>
          </div>
        </div>
      </div>
    </div>
  );
}
