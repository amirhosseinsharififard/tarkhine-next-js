import Link from "next/link";

// icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";
import { AiOutlineShoppingCart } from "react-icons/ai";

// images
import { FaRegCheckSquare } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
export default function StatusShopping({ step = 0 }) {
  return (
    <>
      <div className=" flex justify-between items-center content-center text-neutral-gray8  md:hidden">
        <Link href={"#"}>
          <TfiTrash className="w-4 h-4 text-neutral-gray4" />
        </Link>
        <h3 className="text-h6 ">سبد خرید</h3>
        <Link href={"#"}>
          <MdOutlineKeyboardArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="hidden md:flex flex-row-reverse justify-evenly items-center content-center col-span-8 col-start-3 text-nowrap gap-2">
        <div
          className={`flex justify-center items-center content-center gap-1 ${
            step >= 0
              ? "text-main-primary text-h6"
              : "text-neutral-gray4 text-bodySM"
          } `}
        >
          <p> سبد خرید</p>
          <span>
            <AiOutlineShoppingCart />
          </span>
        </div>

        <div className="w-full h-0.5 flex">
          <div
            className={`w-1/2 border-t border-dashed 
                ${step == 0 && "border-neutral-gray4"}
                ${step !== 0 && "border-main-primary"}
                
                `}
          />
          <div className={`w-1/2 border-t border-dashed border-main-primary`} />
        </div>

        <div
          className={`flex justify-center items-center content-center gap-1 ${
            step >= 1
              ? "text-main-primary text-h6"
              : "text-neutral-gray4 text-bodySM"
          } `}
        >
          <p> تکمیل اطلاعات</p>
          <span>
            <FaRegCheckSquare />
          </span>
        </div>

        <div className="w-full h-0.5 flex">
          <div
            className={`w-1/2 border-t border-dashed 
                ${step <= 1 && "border-neutral-gray4"}
                ${step >= 1 && "border-main-primary"}
                
                `}
          />
          <div
            className={`w-1/2 border-t border-dashed
                ${step <= 0 && "border-neutral-gray4"}
                ${step >= 1 && "border-main-primary"}`}
          />
        </div>

        <div
          className={`flex justify-center items-center content-center gap-1 ${
            step == 2
              ? "text-main-primary text-h6"
              : "text-neutral-gray4 text-bodySM"
          } `}
        >
          <p> پرداخت</p>
          <span>
            <IoWalletOutline />
          </span>
        </div>
      </div>
    </>
  );
}
