"use client";
import { useRef, useState } from "react";

const OtpInput = ({ length = 5, onChange ,error = false}) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, "");

    if (!val) return;

    const newOtp = [...otp];
    newOtp[idx] = val[0]; // فقط اولین کاراکتر
    setOtp(newOtp);

    if (idx < length - 1) {
      inputsRef.current[idx + 1].focus();
    }

    if (onChange) {
      onChange(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      e.preventDefault();

      const newOtp = [...otp];

      if (otp[idx]) {
        newOtp[idx] = "";
        setOtp(newOtp);
        if (onChange) onChange(newOtp.join(""));
      } else if (idx > 0) {
        newOtp[idx - 1] = "";
        setOtp(newOtp);
        inputsRef.current[idx - 1].focus();
        if (onChange) onChange(newOtp.join(""));
      }
    }
  };

  return (
    <div className="flex  justify-evenly w-full">
      {otp.map((digit, idx) => (
        <input
          key={idx}
          ref={(el) => (inputsRef.current[idx] = el)}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          className={`
            w-12
            md:w-14
            h-[40px]
            text-center
            text-xl
            border
            border-neutral-gray7
            rounded
            outline-none
            text-neutral-gray8
            text-captionMD
            focus:border-main-primary
            focus:outline-none
            placeholder-transparent
             ${error ? "border-status-error focus:border-status-error" : "border-neutral-gray7 focus:border-main-primary"}
            '}
          `}
          inputMode="numeric"
          dir="ltr"
        />
      ))}
    </div>
  );
};

export default OtpInput;
