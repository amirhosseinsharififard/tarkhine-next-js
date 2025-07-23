import Image from "next/image";
import CustomeButton from "@/components/ui/CustomeButton";
import { e2p, formatPrice } from "@/utils/replaceNumber";
import { CiHeart } from "react-icons/ci";
import { LiaStarSolid } from "react-icons/lia";
import CardMenuPicture from "@/public/images/menu/CardMenuPicture.png";

export default function CardCategoriesMenu({ loading = false }) {
  const rating = 3;

  if (loading) {
    return (
      <div className="col-span-12 mx-auto border-1 border-neutral-gray4 rounded-4 h-[100px] overflow-hidden sm:w-full sm:col-span-6 sm:h-[160px] sm:shadow-cards lg:col-span-4 animate-pulse">
        <div className="flex h-full text-captionSM font-medium text-neutral-gray8">
          {/* بخش تصویر اسکلتون */}
          <div className="h-full w-[90px] sm:w-1/3 bg-neutral-gray3"></div>

          <div className="m-2 flex flex-col justify-between flex-1">
            <div className="flex justify-between items-center sm:flex-col w-full sm:items-end">
              <div className="sm:flex sm:justify-between sm:w-full sm:items-center">
                {/* عنوان اسکلتون */}
                <div className="h-3 w-20 bg-neutral-gray3 rounded sm:h-4 sm:w-24"></div>
                {/* آیکون قلب اسکلتون */}
                <div className="hidden sm:block w-6 h-6 bg-neutral-gray3 rounded"></div>
              </div>
              {/* قیمت اسکلتون */}
              <div className="flex flex-row-reverse gap-2 sm:hidden">
                <div className="h-3 w-6 bg-neutral-gray3 rounded sm:h-4 sm:w-8"></div>
                <div className="h-3 w-12 bg-neutral-gray3 rounded sm:h-4 sm:w-16"></div>
              </div>
            </div>

            {/* توضیحات اسکلتون */}
            <div className="mt-1 sm:mt-2">
              <div className="h-2 w-full bg-neutral-gray3 rounded mb-1 sm:h-3"></div>
              <div className="h-2 w-3/4 bg-neutral-gray3 rounded sm:h-3"></div>
            </div>

            {/* بخش پایینی اسکلتون */}
            <div className="flex justify-between items-center mt-1 sm:mt-2">
              {/* ستاره‌های اسکلتون */}
              <div className="flex flex-row-reverse gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-neutral-gray3 rounded sm:w-4 sm:h-4"
                  ></div>
                ))}
              </div>

              {/* دکمه اسکلتون */}
              <div className="h-6 w-20 bg-neutral-gray3 rounded sm:h-8 sm:w-24"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto col-start-4  border-1 border-neutral-gray4 rounded-4 h-[100px] overflow-hidden sm:col-span-6 md:w-full md:col-span-8 md:col-start-3 md:h-[160px] md:shadow-cards ">
      <div className="flex text-captionSM font-medium text-neutral-gray8">
        <div className="relative min-w-[90px] h-[100px] md:min-w-[169px] md:h-[158px]">
          <Image
            src={CardMenuPicture}
            alt="img"
            fill
            className="object-cover"
          />
        </div>
        <div className="my-2 px-1  flex flex-col justify-between w-full ">
          <div className="flex justify-between items-center md:flex-col w-full md:items-end">
            <div className="md:flex md:justify-between md:w-full md:items-center">
              <h6 className=" m-0 text-captionMD md:text-h7 md:!font-bold">
                کوفته برنجی
              </h6>
              <span className="hidden md:block">
                <CiHeart className="w-4 md:w-6 h-4 md:h-6" />
              </span>
            </div>
            <div className="flex flex-row-reverse gap-2 md:hidden">
              <span className="text-status-error bg-status-error-eL px-1.5 py-[1px] rounded-8 font-medium md:text-captionMD">
                %{e2p(35)}
              </span>
              <span className="text-neutral-gray5 line-through font-medium md:text-captionLG">
                {formatPrice(180000)}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 md:text-bodySM md:font-medium">
            <p className="text-captionSM !font-light md:text-bodySM md:!font-medium truncate w-0 flex-1 min-w-0">
              برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز
            </p>

            <div className="gap-2 block md:flex flex-col">
              <div className="text-left hidden md:flex flex-row-reverse gap-1">
                <span className="text-status-error bg-status-error-eL px-1.5 py-[1px] rounded-8 font-medium md:text-captionMD">
                  %{e2p(35)}
                </span>
                <span className="text-neutral-gray5 line-through font-medium md:text-captionLG">
                  {formatPrice(180000)}
                </span>
              </div>
              <p className="font-medium text-nowrap md:text-bodyLG">
                {formatPrice(145000)} تومان
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center content-center gap-2">
            <span className="md:hidden">
              <CiHeart className="w-4 h-4" />
            </span>
            <div className="flex flex-row-reverse">
              {Array.from({ length: 5 }).map((_, i) =>
                i < rating ? (
                  <LiaStarSolid
                    key={i}
                    className="w-4 h-4 md:w-6 md:h-6 text-status-warning-l"
                  />
                ) : (
                  <LiaStarSolid
                    key={i}
                    className="w-4 h-4 md:w-6 md:h-6 text-neutral-gray4"
                  />
                )
              )}
            </div>
            <CustomeButton
              height="32"
              classname={
                "text-captionSM !font-light text-nowrap !w-[100px]  md:w-full md:h-40 md:text-bodyXL"
              }
            >
              افزودن به سبد خرید
            </CustomeButton>
          </div>
        </div>
      </div>
    </div>
  );
}
