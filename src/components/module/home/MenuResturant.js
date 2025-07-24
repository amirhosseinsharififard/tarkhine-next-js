import React from "react";
import CardMenuResturant from "./CardMenuResturant";

export default function MenuResturant() {
  return (
    <div className="mb-10 md:mb-12">
      <h4 className="text-h6 text-center md:text-h5 lg:text-h4 lg:mt-6 lg:mb-8">
        منوی رستوران
      </h4>
      <div className="grid grid-cols-12  place-items-center mx-2 gap-4 ">
        {Array.from({ length: 4 }).map((_,index) => (
          <CardMenuResturant key={index } />
        ))}

      </div>
    </div>
  );
}
