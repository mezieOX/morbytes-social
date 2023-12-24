import { User1 } from "@/constant/imgs";
import Image from "next/image";

const Reel = () => {
  return (
    <div className="flex justify-start text-center scrollbar-hide  gap-[14px] overflow-x-scroll">
      <div className="cursor-pointer">
        <Image src={User1} alt="title" className="w-[55px]" objectFit="cover" />
        <p className="text-[8.5px] py-1">User1234</p>
      </div>
    </div>
  );
};

export default Reel;
