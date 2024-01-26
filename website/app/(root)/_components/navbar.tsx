import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[90px] bg-black/30 flex px-[120px] pb-[20px] pt-[30px] justify-between z-50 ">
      <div className="flex gap-[12px] justify-center items-center">
        <Image src={"/images/logo.webp"} alt={"logo"} width={40} height={40} />
        <span className="text-[28px] font-extrabold text-white flex items-center justify-center leading-[1.2em]">
          KSDC
        </span>
      </div>
      <div className="flex justify-center items-center gap-[68px] mb:hidden">
        <div className="text-white text-[20px] font-light leading-[1.2em]">
          <Link href={"#vision"} className="">
            VISION
          </Link>
        </div>
        <div className="text-white text-[20px] font-light leading-[1.2em]">
          <Link href={"#organizer"}>ORGANIZER</Link>
        </div>
        <div className="text-white text-[20px] font-light leading-[1.2em]">
          <Link href={"#history"}>HISTORY</Link>
        </div>
        <div className="text-white text-[20px] font-light leading-[1.2em]">
          <Link href={"#events"}>EVENTS</Link>
        </div>
        <div className="text-white text-[20px] font-light leading-[1.2em]">
          <Link href={"#coc"}>C. O. C</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
