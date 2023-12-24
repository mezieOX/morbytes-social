import Image from "next/image";

import { Reel5 } from "@/constant/imgs";

const NumberOfLikes = () => {
  return (
    <div className="flex mt-[.8rem] mb-6">
      <Image src={Reel5} alt="title" className="w-[8px]" objectFit="cover" />
      <Image src={Reel5} alt="title" className="w-[8px]" objectFit="cover" />
      <Image src={Reel5} alt="title" className="w-[8px]" objectFit="cover" />
    </div>
  );
};

export default NumberOfLikes;
