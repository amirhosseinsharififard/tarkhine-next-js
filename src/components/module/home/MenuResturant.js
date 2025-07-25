import React from "react";
import CardMenuResturant from "./CardMenuResturant";
import Image from "next/image";

// image
import imageCardMenu from "@/public/images/home/imageCardMenu.png";

export default function MenuResturant() {
  return (
    <div>
      <h4 className="text-h6 text-center md:text-h5 lg:text-h4 lg:mt-6 lg:mb-8">منوی رستوران</h4>
      <div className="grid grid-cols-4 place-items-center mx-2">
      
        <CardMenuResturant />
        <CardMenuResturant />
        <CardMenuResturant />
        <CardMenuResturant />
          
      </div>
    </div>
  );
}
