import Image from "next/image";

import { Profile34 } from "@/constant/imgs";

const MessageBody = () => {
  return (
    <div>
      <p className="text-center flex justify-center gap-4">
        12/09/23 <span>18:30</span>
      </p>
      <div>
        <div className="flex items-center gap-2 cursor-pointer py-[5px]">
          <Image
            src={Profile34}
            alt="title"
            className="w-[52px] h-[51px]"
            objectFit="cover"
          />

          <div>
            <p className="text-[10px] -pt-2 tracking-wide text-dark p-2 font-black rounded bg-dark-extraBold">
              written messages
            </p>
          </div>
        </div>
        <div>
          {/* Sender */}
          <div className="flex items-start  justify-end w-full  gap-2 cursor-pointer py-[5px]">
            <Image
              src={Profile34}
              alt="title"
              className="w-[52px] h-[51px]"
              objectFit="cover"
            />

            <div className="order-[-1] flex flex-col justify-end gap-2">
              <p className="text-[10px]  -pt-2 tracking-wide text-dark ml-auto p-2 w-max font-black rounded bg-dark-extraBold">
                written messages
              </p>
              <p className="text-[10px]  tracking-wide text-dark max-w-[12rem] p-2 font-black rounded bg-dark-extraBold">
                A longer written message that can even break into diferent lines
                and paragraphs A longer written message that can even break into
                diferent lines and paragraphs A longer written message that can
                even break into diferent lines and paragraphs A longer written
                message that can even break into diferent lines and paragraphs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBody;
