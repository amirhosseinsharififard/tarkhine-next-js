import Image from "next/image";

// components
import CustomeInput from "../ui/CustomeInput";

// image
import matchNotFound from "@/public/images/search/Match not found.png";
import CardFood from "../module/CardFood";
export default function searchPage() {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div className="grid grid-cols-12 mt-12 m-auto">

      <div className="col-span-4 col-start-5 text-neutral-gray8 text-center">
        {false && (
          <p className="text-bodyXL mb-4">موردی با این مشخصات پیدا نکردیم!</p>
        )}
        {true && (
          <div className="flex flex-row-reverse text-neutral-gray8 text-h4 mb-6">
            <p className="mx-auto">
              نتایج جستجو برای:<span className="text-main-primary">پاستا</span>
            </p>
          </div>
        )}
        <CustomeInput placeHolder="جستجو" classname={"text-captionLG"} />
        {false && (
          <div className="col-span-4 col-start-5 flex justify-center my-12">
            <Image src={matchNotFound} alt="not result" />
          </div>
        )}

      </div>
      
     
      </div>
      <div className="mx-auto flex flex-wrap  mt-12 gap-6 justify-center">
        <CardFood/>
        <CardFood/>
        <CardFood/>
        <CardFood/>
        <CardFood/>
        <CardFood/>
        <CardFood/>
      </div>
    </div>
  );
}
