import { User1 } from "@/constant/imgs";
import Image from "next/image";

const NumberOfLIkes = () => {
  return (
    <div className="flex">
      <Image src={User1} alt="title" className="w-[10px]" objectFit="cover" />
      <Image src={User1} alt="title" className="w-[10px]" objectFit="cover" />
      <Image src={User1} alt="title" className="w-[10px]" objectFit="cover" />
    </div>
  );
};

export default NumberOfLIkes;
