
// components
import CustomeButton from "@/components/ui/CustomeButton";
import CardCategoriesMenu from "./CardCategoriesMenu";

// icons
import { IoCartOutline } from "react-icons/io5";


export default function CategoriesFoodMenu({ title }) {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="col-span-12 px-5 md:px-2">
      <div className="flex items-center justify-between content-center text-nowrap my-4">
        <h4 className="text-h6 text-neutral-gray8 md:text-h4">{title}</h4>
        <CustomeButton
          model="stroke"
          classname={
            "flex !w-auto text-nowrap gap-2.5 text-captionMD md:text-buttonLG"
          }
        >
          <span><IoCartOutline className="w-4 h-4 md:w-6 md:h-6 text-main-primary"/></span> <p>تکمیل سفارش</p>
        </CustomeButton>
      </div>

      <div className="grid grid-cols-12 gap-3">
        {num.map(item=><CardCategoriesMenu key={item}/>)}
      </div>
    </div>
  );
}
