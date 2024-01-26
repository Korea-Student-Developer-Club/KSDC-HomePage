import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[90px] bg-black/30 flex px-[120px] pb-[20px] pt-[30px] justify-between">
      <div className="flex gap-[12px] justify-center items-center">
        <Image src={"/images/logo.webp"} alt={"logo"} width={40} height={40} />
        <span className="text-[28px] font-extrabold text-white flex items-center justify-center leading-[1.2em]">
          KSDC
        </span>
      </div>
      <div className="flex justify-center items-center gap-[68px]">
        <div className="text-white text-[20px] font-light leading-[1.2em]">
          VISION
        </div>
        <div className="text-white text-[20px] font-light leading-[1.2em]">
          ORGANIZER
        </div>
        <div className="text-white text-[20px] font-light leading-[1.2em]">
          HISTORY
        </div>
        <div className="text-white text-[20px] font-light leading-[1.2em]">
          EVENTS
        </div>
        <div className="text-white text-[20px] font-light leading-[1.2em]">
          C. O. C
        </div>
      </div>
    </div>
  );
};

export default Navbar;
