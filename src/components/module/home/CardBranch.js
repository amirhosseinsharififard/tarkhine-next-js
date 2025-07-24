import Image from "next/image";
import clsx from "clsx";

// image
import branchImage from "@/public/images/home/branchImage.png";
import CustomeButton from "@/components/ui/CustomeButton";
import galleryIcon from "@/public/images/svg/gallery.svg";

export default function CardBranch({ model }) {
  return (
    <div
      className={`group col-span-12 sm:col-span-6 lg:col-span-3 mx-auto flex md:flex-col overflow-hidden border-1 border-neutral-gray4 hover:border-main-primary 
        ${
          model !== "modal" &&
          " rounded-4  max-w-[90%] max-h-[80px] md:min-h-[344px] lg:w-full hover:shadow-cards"
        }

        ${
          model === "modal" &&
          "rounded-8 max-w-[300px] max-h-[80px] md:w-[20%] md:min-h-[260px]  hover:shadow-cards"
        }
        `}
    >
      <div
        className={`relative
        ${model === "modal" && "w-[60%] md:max-h-[179px] md:h-full md:w-full"}
        
        `}
      >
        <Image
          src={branchImage}
          alt="image branch"
          className={`
            object-fill transition-all duration-300 ease-in-out
           
            ${
              model !== "modal" &&
              "max-w-[144px] md:max-w-[288px] md:max-h-[230px] md:group-hover:max-h-[190px]"
            }
            ${model === "modal" && "h-full md:w-full "}
          `}
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] w-full opacity-0 md:group-hover:opacity-100 z-2 transition-all duration-300 ease-in-out flex justify-between items-center">
          <div className="w-[58px] h-[58px] bg-neutral-white/30 rounded-64 flex justify-center items-center m-auto">
            <div className="w-[42px] h-[42px] bg-neutral-white/20 rounded-64 flex justify-center items-center">
              <Image src={galleryIcon} alt="galleryIcon" className="m-auto" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`  
        ${model !== "modal" && "md:mt-2 py-2 max-w-[166px] md:max-w-[98%]"}
        ${model === "modal" && "pt-2 md:pt-1 w-auto px-3 m-auto"}
        flex flex-col justify-evenly items-center text-justify`}
      >
        <h5
          className={`
            ${model !== "modal" && "text-buttonSM md:text-h7"}
            ${model === "modal" && "text-camptionMD md:text-buttonLG"}
             text-neutral-gray8
          `}
        >
          شعبه اکباتان
        </h5>
        <p
          className={` text-neutral-gray7 text-center mb-1
          ${model !== "modal" && "text-captionSM md:text-captionLG"}
          ${model === "modal" && "text-captionSM md:text-captionMD"}
          `}
        >
          شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبق سوم
        </p>
      </div>

      <CustomeButton
        classname={`
         hidden md:block transition-all duration-300 px-6! mx-auto
          md:opacity-0 md:scale-95 md:pointer-events-none
          md:group-hover:opacity-100 md:group-hover:scale-100 md:group-hover:pointer-events-auto
          ${model === "modal" && "md:hidden"}
        `}
        model="stroke"
        height="32"
      >
        صفحه شعبه {">"}
      </CustomeButton>
    </div>
  );
}
