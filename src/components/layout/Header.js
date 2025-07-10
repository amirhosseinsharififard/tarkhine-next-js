import Link from "next/link";

//  image and svg

import Image from "next/image";
import menu from "../../../public/images/menu.svg";
import profileIcon from "../../../public/images/ProfileIcon.svg";
import logo from "../../../public/images/Logo.png";
import headerIcon from "../../../public/images/HeaderIcon.svg";
import searchIcon from "../../../public/images/Search.svg";
import logoWeb from "../../../public/images/LogoWeb.svg";

const Header = () => {
  return (
    <div className='max-w-screen-2xl m-auto ' dir="ltr">
      <div className='flex justify-between items-center p-[20px] lg:pt-32  mx-auto'>
        <div className='flex items-center'>
          <Link href='/profile'>
            <Image
              src={profileIcon}
              alt='Profile Icon'
              className='w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]'
            />
          </Link>
          <Link href='/header' className='mx-[2px] lg:mx-[4px]'>
            <Image
              src={headerIcon}
              alt='Header Icon'
              className='w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]'
            />
          </Link>
          <Link href='/search' className='hidden lg:block'>
            <Image
              src={searchIcon}
              alt='search Icon'
              className='lg:w-[40px] lg:h-[40px]'
            />
          </Link>
        </div>

        <div>
          <Link href={"/"} className='lg:hidden'>
            <Image src={logo} alt='Logo' width={120} height={40} />
          </Link>
          <ul className='hidden lg:flex flex-row-reverse gap-24 items-center'>
            <li className='text-h5 text-main-primary underline underline-offset-8 decoration-1 '>
              <Link href='/'>صفحه اصلی</Link>
            </li>
            <li className='text-bodyXL'>
              <Link href='/'>شعبه</Link>
            </li>
            <li className='text-bodyXL'>
              <Link href='/'>منو</Link>
            </li>
            <li className='text-bodyXL'>
              <Link href='/'> اعطای نمایندگی</Link>
            </li>
            <li className='text-bodyXL'>
              <Link href='/'>درباره ما</Link>
            </li>
            <li className='text-bodyXL'>
              <Link href='/'>تماس با ما</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link href='/header' className='lg:hidden'>
            <Image src={menu} alt='Menu Icon' width={24} height={24} />
          </Link>

          <Link href='/' className='hidden lg:block'>
            <Image
              src={logoWeb}
              alt='Menu Icon'
              className='w-[155px] h-[51px]'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
