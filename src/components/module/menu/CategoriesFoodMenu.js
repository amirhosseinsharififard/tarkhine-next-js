// components
import CustomeButton from "@/components/ui/CustomeButton";
import CardCategoriesMenu from "./CardCategoriesMenu";

// icons
import { IoCartOutline } from "react-icons/io5";

export default function CategoriesFoodMenu({ title }) {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="col-span-12 px-5 md:px-2 mt-6 sm:mt-12">
      <div className="flex items-center justify-between content-center text-nowrap my-4 sm:my-6">
        <h4 className="text-h6 text-neutral-gray8 md:text-h4">{title}</h4>
        <CustomeButton
          model="stroke"
          classname={
            "flex !w-auto text-nowrap gap-2.5 text-captionMD sm:text-buttonLG items-center"
          }
        >
          <span>
            <IoCartOutline className="w-4 h-4 sm:w-6 sm:h-6 text-main-primary" />
          </span>{" "}
          <p>تکمیل سفارش</p>
        </CustomeButton>
      </div>

      <div className="grid grid-cols-12 gap-3">
        {num.map((item) => (
          <CardCategoriesMenu key={item} />
        ))}
      </div>
    </div>
  );
}
