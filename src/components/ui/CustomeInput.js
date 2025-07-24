"use client";
import { useState } from "react";
import clsx from "clsx";

const CustomeInput = ({
  placeHolder = "placeholder",
  height,
  width,
  error,
  errorText = "",
  disabled,
  textarea,
  search = false,
  classname,
  model,
}) => {
  const heightSize = {
    32: 32,
    40: 40,
    48: 48,
    56: 56,
  };

  const widthClass = width ? "w-[336px]" : "w-full";
  const heightClass = height ? `h-[${heightSize[height]}px]` : "h-[32px]";
  const errorClass = error
    ? "border-status-error focus:border-status-error"
    : "";
  const baseClasses = `
  border 
  px-3
  py-2 
  rounded
  ${error ? "border-status-error" : "border-neutral-gray7"}
  ${error ? "focus:border-status-error" : "focus:border-main-primary"}
  active:border-main-primary
  disabled:border-neutral-gray7
  outline-none
  placeholder-transparent
  text-neutral-gray8
  text-captionSM
  peer
`;

  const searchClasses = search
    ? "text-neutral-black placeholder-transparent border-none"
    : " text-neutral-gray8 hover:border-neutral-gray8 ";

  const [value, setValue] = useState("");

  const handleInput = (e) => {
    let val = e.target.value;

    if (model === "phone") {
      // فقط عدد
      val = val.replace(/[^0-9]/g, "");

      // محدودیت طول به 11 رقم
      if (val.length > 11) {
        val = val.slice(0, 11);
      }

      // اجازه بده اول فقط با 0 یا 09 شروع بشه
      if (val.length === 1 && val !== "0") {
        val = "";
      } else if (val.length > 1 && !val.startsWith("09")) {
        val = val.slice(0, 2);
      }
    }

    setValue(val);
  };

  if (textarea) {
    return (
      <div className={`${widthClass} ${classname ? classname : ""}`}>
        <textarea
          placeholder={placeHolder}
          className={`
            ${baseClasses}
            text-neutral-white
            ${errorClass}
            h-[141px]
            ${width ? "w-[704px]" : "w-[320px]"}
            ${classname ? classname : ""}
            placeholder-neutral-gray8
          `}
          disabled={disabled}
          dir="rtl"
          value={value}
          onChange={handleInput}
        />
        {error && errorText && (
          <p className="text-status-error text-xs mt-1">{errorText}</p>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${widthClass} ${classname ? classname : ""}`}>
      <input
        type="text"
        id={model}
        name={model}
        placeholder=" "
        className={clsx(
          baseClasses,
          errorClass,
          heightClass,
          widthClass,
          searchClasses,
          classname // اینجا کلاس سفارشی آخر می‌آید و اولویت دارد
        )}
        disabled={disabled}
        dir={model === "phone" ? "ltr" : "rtl"}
        inputMode={model === "phone" ? "numeric" : "text"}
        value={value}
        onChange={handleInput}
      />
      <label
        htmlFor={model}
        className={`
          absolute
          right-3
          top-0
          text-captionSM
          duration-200
          transform
          -translate-y-3
          scale-75
          origin-[0]
          pointer-events-none
          peer-placeholder-shown:translate-y-2
          peer-placeholder-shown:scale-100
          peer-focus:-translate-y-2
          peer-focus:scale-75
          peer-focus:text-main-primary
          px-1
        `}
      >
        {placeHolder}
      </label>
      {error && errorText && (
        <p className="text-right text-status-error text-xs mt-1 absolute left-0 bottom-[-20px] w-full text-captionSM">
          !{errorText}
        </p>
      )}
    </div>
  );
};

export default CustomeInput;
