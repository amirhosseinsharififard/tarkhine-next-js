// components
import CustomeButton from "@/components/ui/CustomeButton";
import CardCategoriesMenu from "./CardCategoriesMenu";

// icons
import { IoCartOutline } from "react-icons/io5";

export default function CategoriesFoodMenu({ title }) {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="col-span-12  px-2 md:px-5 mt-3 ">
      <div className="flex items-center justify-between content-center text-nowrap my-4 sm:my-6">
        <h4 className="text-h6 text-neutral-gray8 md:text-h4">{title}</h4>
        <CustomeButton
          model="stroke"
          classname={
            "flex !w-auto  text-nowrap gap-1 text-captionMD sm:text-buttonLG items-center !h-[32px]"
          }
        >
          <span>
            <IoCartOutline className="w-4 h-4 sm:w-6 sm:h-6 text-main-primary" />
          </span>
          <p className="text-captionMD">تکمیل سفارش</p>
        </CustomeButton>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3  ">
        {num.map((item) => (
          <CardCategoriesMenu key={item} />
        ))}
      </div>
    </div>
  );
}
