const Input = ({
  placeHolder = "placeholder",
  height,
  width,
  error,
  disabled,
  textarea ,
}) => {
  const haightSize = {
    32: 32,
    40: 40,
    48: 48,
    56: 56,
  };
  const widthSize = {
    336: 336,
  };

  return (
    <>
      {textarea ? (
        <textarea
          placeholder={placeHolder}
          className={`
            border 
            px-3
            py-2 
            rounded
            border-neutral-gray7
            hover:border-neutral-white
            active:border-main-primary
            focus:border-main-primary
            disabled:border-neutral-gray7
            text-neutral-white
            placeholder-neutral-white
            ${error && "border-status-error focus:border-status-error"}
            outline-none  
            h-[141px]
            ${width ? "w-[704px]" : "w-[320px]"}
            `}
          disabled={disabled}
        />
      ) : (
        <input
          placeholder={placeHolder}
          className={`
            border 
            px-3
            py-2 
            rounded
            border-neutral-gray7
            hover:border-neutral-white
            active:border-main-primary
            focus:border-main-primary
            disabled:border-neutral-gray7
            text-neutral-white
            placeholder-neutral-white
            ${error && "border-status-error focus:border-status-error"}
            outline-none  
            h-[${(height && haightSize[height]) || 32}px]
            w-[${(width && "336") || 330}px]
            `}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default Input;
