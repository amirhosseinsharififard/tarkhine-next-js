import Link from "next/link";
import React from "react";

//  image and svg
import Image from "next/image";
import menu from "../../../public/images/menu.svg";
import logo from "../../../public/images/Logo.png";
import logoWeb from "../../../public/images/LogoWeb.svg";

// icons
import { IoIosArrowDown } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { CiLogout } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const dropDownHoverList = {
  branches: ["اکباتان", "چالوس", "اقدسیه", "ونک"],
  menu: ["غذای اصلی", "پیش غذا", "دسر", "نوشیدنی"],
  profile: [
    { title: "پروفایل", icon: <GoPerson /> },
    { title: "پیگیری سفارش", icon: <IoWalletOutline /> },
    { title: "علاقه مندی ها", icon: <CiHeart /> },
    { title: "آدرس های من", icon: <TfiLocationPin /> },
    { title: "خروج از حساب", icon: <CiLogout /> },
  ],
};

const Header = () => {
  const login = true;
  return (
    <div className="w-full shadow-cards" dir="ltr">
      <div className="max-w-[1224px] flex justify-between items-center p-[20px] lg:pt-32  mx-auto ">
        <div className="flex items-center">
          <div className="group">
            <Link
              href="/profile"
              className={`mx-[2px] lg:mx-[4px] w-[24px] h-[24px] lg:w-[58px]  lg:h-[40px] rounded-4 flex justify-center items-center ${
                false
                  ? "bg-main-primary text-neutral-white"
                  : "bg-main-tint1 text-main-primary"
              }
              ${login && 'px-1 w-[34px] lg:px-2'}
              `}

            >
              {login && <IoIosArrowDown className="group-hover:rotate-180 duration-300"/>}
              <GoPerson className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] m-auto" />
            </Link>

            <ul className="absolute mt-1  bg-neutral-white z-[-10] group-hover:opacity-100 opacity-0  group-hover:z-10 w-[144px] shadow-[0_0_10px_rgba(0,0,0,0.15)] text-right duration-300 rounded-4">
              {login && dropDownHoverList.profile.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <li className=" w-full text-bodySM">
                      <Link href="#" className="block p-2  ">
                        <div className="flex justify-end items-center content-center gap-1">
                          <p>{item.title}</p>
                          <span className="text-lg">{item.icon}</span>
                        </div>
                      </Link>
                    </li>
                    <div className="mx-auto h-0.5 w-[90%] bg-[rgba(0,0,0,.1)]" />
                  </React.Fragment>
                );
              })}
            </ul>
          </div>

          <Link
            href="/header"
            className={`mx-[2px] lg:mx-[4px] w-[24px] h-[24px] lg:w-[40px] lg:h-[40px] rounded-4 flex justify-center items-center ${
              true
                ? "bg-main-primary text-neutral-white"
                : "bg-main-tint1 text-main-primary"
            }`}
          >
            <AiOutlineShoppingCart className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] m-auto" />
          </Link>
          <Link
            href="/search"
            className={` hidden  mx-[2px] lg:mx-[4px] w-[24px] h-[24px] lg:w-[40px] lg:h-[40px] rounded-4 md:flex justify-center items-center ${
              false
                ? "bg-main-primary text-neutral-white"
                : "bg-main-tint1 text-main-primary"
            }`}
          >
            <CiSearch className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] m-auto" />
          </Link>
        </div>

        <div>
          <Link href={"/"} className="lg:hidden">
            <Image src={logo} alt="Logo" width={120} height={40} />
          </Link>
          <ul className="hidden lg:flex flex-row-reverse gap-24 items-center">
            <li className="text-h5 text-main-primary underline underline-offset-8 decoration-1 ">
              <Link href="/">صفحه اصلی</Link>
            </li>

            <li className="text-bodyXL group relative ">
              <Link
                href="/branch"
                className="flex flex-row-reverse justify-center items-center"
              >
                <p>شعبه</p>
                <IoIosArrowDown className="group-hover:rotate-180 duration-300" />
              </Link>
              {/* shadow-[0_0_10px_rgba(0,0,0,0.15)] its dropShadow to hover list */}
              <ul className="absolute mt-1  bg-neutral-white z-[-10] group-hover:opacity-100 opacity-0  group-hover:z-10 w-[144px] shadow-[0_0_10px_rgba(0,0,0,0.15)] text-right duration-300 rounded-4">
                {dropDownHoverList.branches.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li className=" w-full text-bodySM">
                        <Link href="#" className="block p-2">
                          {item}
                        </Link>
                      </li>
                      <div className="mx-auto h-0.5 w-[90%] bg-[rgba(0,0,0,.1)]" />
                    </React.Fragment>
                  );
                })}
              </ul>
            </li>

            <li className="text-bodyXL group">
              <Link
                href="/menu"
                className="flex flex-row-reverse justify-center items-center"
              >
                <p>منو</p>
                <IoIosArrowDown className="group-hover:rotate-180 duration-300" />
              </Link>
              <ul className="absolute mt-1  bg-neutral-white z-[-10] group-hover:opacity-100 opacity-0  group-hover:z-10 w-[144px] shadow-[0_0_10px_rgba(0,0,0,0.15)] text-right duration-300 rounded-4">
                {dropDownHoverList.menu.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li className=" w-full text-bodySM">
                        <Link href="#" className="block p-2">
                          {item}
                        </Link>
                      </li>
                      <div className="mx-auto h-0.5 w-[90%] bg-[rgba(0,0,0,.1)]" />
                    </React.Fragment>
                  );
                })}
              </ul>
            </li>
            <li className="text-bodyXL">
              <Link href="/"> اعطای نمایندگی</Link>
            </li>
            <li className="text-bodyXL">
              <Link href="/about-us">درباره ما</Link>
            </li>
            <li className="text-bodyXL">
              <Link href="/contact-us">تماس با ما</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link href="/header" className="lg:hidden">
            <Image src={menu} alt="Menu Icon" width={24} height={24} />
          </Link>

          <Link href="/" className="hidden lg:block">
            <Image
              src={logoWeb}
              alt="Menu Icon"
              className="w-[155px] h-[51px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
