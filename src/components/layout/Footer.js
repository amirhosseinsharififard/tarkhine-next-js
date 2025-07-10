import footerImage from "@/public/images/FooterImage.png";
import Image from "next/image";
import CustomeInput from "../ui/CustomeInput";
import CustomeButton from "../ui/CustomeButton";
import Link from "next/link";

// icons
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";
const Footer = () => {
  return (
    <div className='max-w-screen-2xl mx-auto' dir='rtl'>
      {/* Wrapper with relative for background image */}
      <div className='relative w-full'>
        {/* Background image in a wrapper behind content */}
        <div className='absolute inset-0 -z-10'>
          <Image
            src={footerImage}
            alt='footer'
            fill
            className='object-cover'
            sizes='100vw'
            priority
          />
          {/* dark overlay */}
          <div className='absolute inset-0 bg-[rgba(0,0,0,65%)]' />
        </div>

        {/* Content */}
        <div className='text-neutral-white mx-[20px] lg:mx-[5rem] py-[1rem] lg:py-[2rem] flex '>
          <div className='w-1/2 lg:w-1/4'>
            <h4 className='text-captionMD lg:text-h5 mb-8 lg:mb-16 '>
              دسترسی آسان
            </h4>

            <ul className='text-captionSM lg:text-captionMD space-y-2 gap-[8px] lg:gap-[16px]'>
              <li>
                <Link href='/'>پرسش متداول</Link>
              </li>
              <li>
                <Link href='/'>قوانین ترخینه</Link>
              </li>
              <li>
                <Link href='/'>حریم خصوصی</Link>
              </li>
              <li className='flex gap-2'>
                <Link href={"/"}>
                  <span>
                    <LuTwitter className='w-16 h-16 lg:w-24 lg:h-24 ' />
                  </span>
                </Link>
                <Link href={"/"}>
                  <span>
                    <FaInstagram className='w-16 h-16 lg:w-24 lg:h-24 ' />
                  </span>
                </Link>
                <Link href={"/"}>
                  <span>
                    <TbBrandTelegram className='w-16 h-16 lg:w-24 lg:h-24 ' />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-1/2 lg:w-1/4'>
            <h4 className='text-captionMD lg:text-h5 mb-8 lg:mb-16 '>
              دسترسی آسان
            </h4>
            <ul className='text-captionSM  lg:text-captionMD space-y-2 gap-[8px] lg:gap-[16px]'>
              <li>
                <Link href='/'>شعبه اکباتان</Link>
              </li>
              <li>
                <Link href='/'>شعبه چالوس</Link>
              </li>
              <li>
                <Link href='/'>شعبه اقدسیه</Link>
              </li>
              <li>
                <Link href='/'>شعبه ونک</Link>
              </li>
            </ul>
          </div>
          <form className='hidden lg:block'>
            <h3 className='mb-16 text-h5'>پیام به ترخینه</h3>
            <div className='flex justify-center items-center gap-[26px]'>
              <div className='flex flex-col content-between  gap-[12px]'>
                <CustomeInput placeHolder='نام و نام خانوادگی' height={40} />
                <CustomeInput placeHolder='شماره تماس' height={40} />
                <CustomeInput placeHolder='آدرس ایمیل (اختیاری)' height={40} />
              </div>
              <div>
                <CustomeInput placeHolder='پیام شما' textarea={true} />
              </div>
            </div>
            <div className='flex flex-row-reverse mt-16'>
              <CustomeButton model={"strokeWhite"}>ارسال پیام</CustomeButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
