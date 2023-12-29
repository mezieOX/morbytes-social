import Image from "next/image";

import { Profile35 } from "@/constant/imgs";

const MessageBody = () => {
  return (
    <>
      <p className="text-center flex justify-center gap-2.5 my-5 text-xs tracking-wide text-dark-lighter/40">
        {"12/09/23"} <span className="">{"18:30"}</span>
      </p>
      <div className="ml-11 -mt-3 mr-[14px]">
        <div className="flex items-start gap-[10px] py-[5px]">
          <Image
            src={Profile35}
            alt="title"
            className="w-[32px] h-[32px] -mt-[17px]"
            style={{ objectFit: "cover" }}
          />

          <div>
            <p className="text-[10px] -pt-2 tracking-wide max-w-[6.9rem] text-dark py-2 px-[9px] font-black rounded bg-dark-extraBold">
              {"written message"}
            </p>
          </div>
        </div>
        <div>
          {/* Sender */}
          <div className="flex items-start  justify-end w-full  gap-3 py-[1px]">
            <Image
              src={Profile35}
              alt="title"
              className="w-[33px] h-[33px]"
              style={{ objectFit: "cover" }}
            />

            <div className="order-[-1] flex flex-col justify-end gap-2 mt-4">
              <p className="text-[10px] -pt-2 self-end justify-end tracking-wide max-w-[6.9rem] text-dark py-2 px-[9px] font-black rounded bg-[#FFCC68]/70">
                {"written message"}
              </p>
              <p className="text-[10px]  tracking-wide leading-tight text-dark max-w-[15.1rem] py-2.5 pl-5 pr-6 font-black rounded bg-[#FFCC68]/70 text-justify">
                {`A longer written message that can even break into diferent lines
                and paragraphs A longer written message that can even break into
                diferent lines and paragraphs A longer written message that can
                even break into diferent lines and paragraphs A longer written
                message that can even break into diferent lines and paragraphs`}
              </p>
              <p className="ml-auto text-[10px] -mt-[4px] text-dark-lighter/40">
                Seen
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageBody;
