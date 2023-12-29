import Image from "next/image";

import { Profile35 } from "@/constant/imgs";
import { Button } from "@/components/global/Button";
import MessageBody from "./MessageBody/MessageBody";

const MessageScreen = () => {
  return (
    <div className="bg-gray min-w-[64.7%] max-w-[64.7%]  overflow-y-scroll py-6 rounded-[13px]">
      <div className="flex items-center text-center flex-col justify-center gap-2 cursor-pointer py-[10px]">
        <Image
          src={Profile35}
          alt="title"
          className="w-[75px] h-[75px]"
          style={{ objectFit: "cover" }}
        />
        <div>
          <h2 className="text-white text-[22px] font-black">
            {"Morbytesuser123435"}
          </h2>
          <p className="text-xs tracking-wide text-dark-lighter/40">
            {"@Morbytesusername82776376"}
          </p>
          <Button
            variant={"primary"}
            className="text-dark !text-[10px] my-[7px] !py-2  font-black rounded"
          >
            {"view profile"}
          </Button>
        </div>
      </div>
      <MessageBody />
    </div>
  );
};

export default MessageScreen;
