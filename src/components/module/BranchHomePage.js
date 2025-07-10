import React from "react";
import CardBranch from "./CardBranch";

export default function BranchHomePage() {
  return (
    <div className=" mt-6 mb-12 ">
      <h4 className="w-full text-center text-h6 md:text-h4 mb-3 md:mb-6"> ترخینه گردی</h4>
      <div className="grid grid-cols-12 md:flex md:flex-wrap justify-evenly items-center gap-2">
        <CardBranch />
        <CardBranch />
        <CardBranch />
        <CardBranch />
      </div>
    </div>
  );
}
