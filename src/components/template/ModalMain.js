"use client";
import { useEffect } from "react";
import LoginModal from "../module/modal/LoginModal";
import ModalHome from "../module/modal/ModalHome";
import SearchModal from "../module/modal/SearchModal";

export default function ModalMain({ isOpen = true }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="absolute top-0 right-0 left-0 bottom-0  w-full h-full z-20" dir="rtl">
      {/* <LoginModal /> */}
      {/* <ModalHome /> */}
      {/* <SearchModal /> */}
    </div>
  );
}
