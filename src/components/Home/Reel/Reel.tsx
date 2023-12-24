import Image from "next/image";

import { IReel } from "@/interfaces";
import { reel } from "@/data";

const Reel = () => {
  return (
    <div className="flex justify-start text-center scrollbar-hide h-20  gap-[15px] overflow-x-scroll">
      {reel.map(({ id, image, name }: IReel) => (
        <div className="cursor-pointer" key={id}>
          <Image
            src={image}
            alt="title"
            className="w-[55px]"
            objectFit="cover"
          />
          <p className="text-[8px] py-[5px] text-dark-extraBold">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Reel;
