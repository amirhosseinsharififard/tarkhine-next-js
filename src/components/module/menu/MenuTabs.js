import Link from "next/link";

export default function MenuTabs({}) {
  const map = [0, 1, 2, 3];
  return (
    <div className=" bg-neutral-gray3">
      <div className="max-w-screen-2xl mx-auto pt-4 px-5  ">
        <ul className="flex  w-full gap-4 ">
          {map.map((item) => {
            return (
              <li key={item}>
                <Link
                  href="#"
                  className={`block ${
                    item == 0
                      ? "text-captionLG md:text-h5 text-main-primary border-b-1 pb-4 border-main-primary"
                      : "text-captionMD md:text-bodyXL text-neutral-gray7"
                  }`}
                >
                  غذای اصلی
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
