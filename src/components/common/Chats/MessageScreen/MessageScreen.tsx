import Image from "next/image";

import { Profile34 } from "@/constant/imgs";
import { Button } from "@/components/global/Button";
import MessageBody from "./MessageBody/MessageBody";

const MessageScreen = () => {
  return (
    <div className="bg-gray min-w-[64.7%] max-w-[64.7%]  overflow-y-scroll py-6 rounded-[15px]">
      <div className="flex items-center text-center flex-col justify-center gap-2 cursor-pointer py-[5px]">
        <Image
          src={Profile34}
          alt="title"
          className="w-[52px] h-[51px]"
          objectFit="cover"
        />
        <div>
          <h2 className="text-white text-xl font-bold leading-9 max-md:max-w-full">
            Morbytesuser123435
          </h2>
          <p>@Morbytesuser123435</p>
          <Button
            variant={"primary"}
            className="text-dark !text-[15px] !w-[7.4rem] -ml-1.5 font-semibold leading-5 whitespace-nowrap justify-center items-stretch self-stretch mt-[29px] !px-4 !py-[6.5px] rounded max-md:!px-5"
          >
            {"view Profile"}
          </Button>
        </div>
      </div>
      <MessageBody />
    </div>
  );
};

export default MessageScreen;
