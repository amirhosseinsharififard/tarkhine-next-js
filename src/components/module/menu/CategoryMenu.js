// icons
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function CategoryMenu() {
  return (
    <Link
      href="#"
      className="text-captionSM md:text-overlineLG text-neutral-gray8 flex gap-1 items-center content-center bg-neutral-gray3 py-1 md:py-0 px-2  rounded-8"
    >
      <p>غذاهای ایرانی</p>
      <FaChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
    </Link>
  );
}
