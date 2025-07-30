import Image from "next/image";
import Link from "next/link";

// icons

// images
import EmptyPage from "@/public/images/shopping/Empty-page.png";
import CustomeButton from "@/components/ui/CustomeButton";

import StatusShopping from "./StatusShopping";
export default function EmptyShop() {
  return (

     
      <div className="w-full border-1 border-neutral-gray4 min-h-[375px] rounded-8 relative flex justify-center items-center content-center md:col-span-12 md:mt-10">
        <Image
          src={EmptyPage}
          alt=" EmptyPage"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="w-full z-[2] flex flex-col justify-center items-center gap-4 text-captionMD md:text-bodyXL text-neutral-gray7">
          <p dir="rtl">{"شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!"}</p>
          <CustomeButton model={"stroke"} classname={"!w-[150px] text-buttonLG"} height="32">
            منوی رستوران
          </CustomeButton>
        </div>
      </div>
  );
}
