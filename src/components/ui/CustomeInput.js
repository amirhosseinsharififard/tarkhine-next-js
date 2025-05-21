const CustomeInput = ({
  placeHolder = "placeholder",
  height,
  width,
  error,
  disabled,
  textarea,
  search = false,
}) => {
  const heightSize = {
    32: 32,
    40: 40,
    48: 48,
    56: 56,
  };

  const widthClass = width ? "w-[336px]" : "w-[330px]";
  const heightClass = height ? `h-[${heightSize[height]}px]` : "h-[32px]";
  const errorClass = error ? "border-status-error focus:border-status-error" : "";
  const baseClasses = `
    border 
    px-3
    py-2 
    rounded
    border-neutral-gray7
    active:border-main-primary
    focus:border-main-primary
    disabled:border-neutral-gray7
    outline-none
    placeholder-neutral-white
  `;

  const searchClasses = search
    ? "text-neutral-black placeholder:text-neutral-gray8 border-none"
    : "text-neutral-white hover:border-neutral-white";

  switch (true) {
    case textarea:
      return (
        <textarea
          placeholder={placeHolder}
          className={`
            ${baseClasses}
            text-neutral-white
            ${errorClass}
            h-[141px]
            ${width ? "w-[704px]" : "w-[320px]"}
          `}
          disabled={disabled}
        />
      );

    default:
      return (
        <input
          placeholder={placeHolder}
          className={`
            ${baseClasses}
            ${errorClass}
            ${heightClass}
            ${widthClass}
            ${searchClasses}
          `}
          disabled={disabled}
        />
      );
  }
};

export default CustomeInput;
