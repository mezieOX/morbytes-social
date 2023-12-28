import Image from "next/image";

import { Profile34 } from "@/constant/imgs";
import { chats } from "@/data";

const UserMessageScreen = () => {
  return (
    <div className="overflow-y-scroll min-h-screen max-h-screen my-2">
      {chats.map(({ id, name }) => (
        <div
          className="flex mb-[11.5px] pl-[28px] relative  hover:duration-500 rounded-[7.57px] hover:bg-dark-bolder/10"
          key={id}
        >
          <div className="flex items-center gap-2 cursor-pointer py-[5px]">
            <Image
              src={Profile34}
              alt="title"
              className="w-[52px] h-[51px]"
              objectFit="cover"
            />

            <div>
              <p className="text-sm font-black -mt-2">Morbytesuser123435</p>
              <p className="text-[10px] -pt-2 tracking-wide text-dark-lighter/40">
                {name}
              </p>
            </div>
            <div className="w-[6px] h-[6px] bg-primary rounded-full absolute top-[9px] right-[23px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserMessageScreen;
