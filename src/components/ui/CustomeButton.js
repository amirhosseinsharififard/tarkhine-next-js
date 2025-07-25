"use client";

import CustomeSpinner from "./CustomeSpinner";

const CustomeButton = ({
  height = "h-[40px]", // ارتفاع پیش‌فرض
  width = "w-auto", // عرض پیش‌فرض
  selected,
  model,
  disabled = false,
  isLoading = false,
  children,
  onClick,
  classname,
  textSize, // سایز متن پیش‌فرض
}) => {
  const getModelButtonClass = (model, selected, disabled) => {
    switch (model) {
      case "stroke":
        if (disabled)
          return "border border-neutral-gray3 text-neutral-gray4 cursor-not-allowed";
        return `
          border 
          border-main-primary
          hover:border-main-shade2
          hover:text-main-shade3
          ${selected ? "border-main-shade3 text-main-shade3" : ""}
          text-main-primary
        `;

      case "textBtn":
        if (disabled) return "text-neutral-gray4 cursor-not-allowed";
        return `
          hover:text-main-shade3
          ${selected ? "text-main-shade3" : ""}
          text-main-primary
        `;

      case "fillWhite":
        if (disabled) return "text-main-primary cursor-not-allowed";
        return `
          bg-main-tint1
          hover:bg-main-tint2
          ${selected ? "bg-main-tint3" : ""}
          text-main-primary
        `;

      case "strokeWhite":
        if (disabled)
          return "border border-neutral-gray3 text-neutral-gray4 cursor-not-allowed";
        return `
          border 
          border-neutral-white
          hover:border-neutral-gray1
          hover:text-neutral-gray1
          ${selected ? "border-neutral-gray3 text-neutral-gray3" : ""}
          text-neutral-white
        `;

      case "textBtnWhite":
        if (disabled) return "text-neutral-gray4 cursor-not-allowed";
        return `
          text-neutral-white
          hover:text-neutral-gray1
          ${selected ? "text-neutral-gray3" : ""}
        `;

      case "fillBlack":
        if (disabled)
          return "bg-neutral-gray3 text-neutral-gray4 cursor-not-allowed";
        return `
          text-neutral-white 
          bg-neutral-gray7
          hover:bg-neutral-gray8
          ${selected ? "bg-neutral-black" : ""}
        `;

      case "strokeBlack":
        if (disabled)
          return "border border-neutral-gray3 text-neutral-gray4 cursor-not-allowed";
        return `
          border 
          border-neutral-gray7
          hover:border-neutral-gray8
          hover:text-neutral-gray8
          ${selected ? "border-neutral-black text-main-black" : ""}
          text-neutral-gray7
        `;

      case "textBtnBlack":
        if (disabled) return "text-neutral-gray4 cursor-not-allowed";
        return `
          text-neutral-gray7
          hover:text-neutral-gray8
          ${selected ? "text-main-black" : ""}
        `;

      default:
        if (disabled)
          return "bg-neutral-gray3 text-neutral-gray4 cursor-not-allowed";
        return `
          text-neutral-white 
          bg-main-primary
          hover:bg-main-shade2
          ${selected ? "bg-main-shade3" : ""}
        `;
    }
  };

  return (
    <button
      className={`
        py-[4px]
        px-[8px] 
        rounded-4 
        ${textSize}
        cursor-pointer
        ${height}
        ${width}
        ${getModelButtonClass(model, selected, disabled)}
        text-captionMD
        lg:text-buttonLG
        ${classname ?? ''}
      `}
      onClick={onClick}>
      {isLoading ? <CustomeSpinner /> : children}
    </button>
  );
};

export default CustomeButton;
