import footerImage from "@/public/images/FooterImage.png";
import Image from "next/image";
import CustomeInput from "../ui/CustomeInput";

const Footer = () => {
  return (
    <div className='max-w-screen-xl mx-auto' dir='rtl'>
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
            <h4 className='text-captionMD'>دسترسی آسان</h4>
            <ul className='text-captionMD space-y-2'>
              <li>پرسش و پاسخ</li>
              <li>پرسش و پاسخ</li>
              <li>پرسش و پاسخ</li>
              <li className='flex gap-2'>
                <span>icon</span>
                <span>icon</span>
                <span>icon</span>
              </li>
            </ul>
          </div>
          <div className='w-1/2 lg:w-1/4'>
            <h4 className='text-captionMD'>دسترسی آسان</h4>
            <ul className='text-captionMD space-y-2'>
              <li>پرسش و پاسخ</li>
              <li>پرسش و پاسخ</li>
              <li>پرسش و پاسخ</li>
              <li className='flex gap-2'>
                <span>icon</span>
                <span>icon</span>
                <span>icon</span>
              </li>
            </ul>
          </div>
          <form className='hidden lg:block'>
            <h3>پیام به ترخینه</h3>
            <div className='flex jus'>
              <div>
                <CustomeInput />
                <CustomeInput />
                <CustomeInput />
              </div>
              <div>
                <CustomeInput textarea={true} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
