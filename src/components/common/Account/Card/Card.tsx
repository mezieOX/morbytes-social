"use client";
import Image from "next/image";

import { User3 } from "@/constant/imgs";
import { Button } from "@/components/global/Button";
import TabComponent from "./Tab/Tab";

const Card = () => {
  return (
    <>
      <div className="rounded-lg w-[98.4%] pr-[70px]">
        <div className="bg-dark self-stretch shadow-[0px_7px_7px_0px_#000000B2] pl-7 pr-[4.5rem] pb-[4.3rem] py-12 rounded-2xl max-md:max-w-full max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[22%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-center mt-[5px] max-md:mt-10">
                <Image
                  src={User3}
                  alt="title"
                  className="aspect-square object-contain object-center w-[158px] -ml-[15px] overflow-hidden rounded-[50%]"
                  objectFit="cover"
                />

                <Button
                  variant={"primary"}
                  className="text-dark !text-[15px] !w-[7.4rem] -ml-1.5 font-semibold leading-5 whitespace-nowrap justify-center items-stretch self-stretch mt-[29px] !px-4 !py-[6.5px] rounded max-md:!px-5"
                >
                  {"Edit Profile"}
                </Button>
              </div>
            </div>
            <div className="flex flex-col -mt-2 items-stretch w-[78%] ml-[25px] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-2 max-md:max-w-full max-md:mt-10">
                <div className="text-white text-3xl font-bold leading-9 max-md:max-w-full">
                  {"Morbytesuser123"}
                </div>
                <div className="text-white text-base leading-5 mt-[3px] max-md:max-w-full text-dark-bolder/60 tracking-wide">
                  {"Morbytesusername123"}
                </div>
                <div className="items-stretch flex justify-between gap-6 mt-3 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-white text-xl font-bold leading-6  whitespace-nowrap">
                    {"50"} <span className="font-normal">{"Posts"}</span>
                  </div>
                  <div className="text-white text-xl font-bold leading-6">
                    {"12.8k"} <span className="font-normal">{"Followers"}</span>
                  </div>
                  <div className="text-white text-xl font-bold pl-1 leading-6 grow whitespace-nowrap">
                    {"2.8k"} <span className="font-normal">{"Following"}</span>
                  </div>
                </div>
                <div className="text-white text-base leading-5 mt-[15px] max-md:max-w-full text-dark-bolder/60 tracking-wider">
                  {"Account Category"}
                </div>
                <div className="text-white text-base leading-[19px]  mt-2.5 max-md:max-w-full text-dark-bolder/60 tracking-[0.03em]">
                  {"Lorem ipsum dolor sit amet consectetur. Quis ut consequat"}
                  <br />
                  {"massa et velit commodo congue. Cras lacus tincidunt arcu"}
                  <br />
                  {"sit fermentum viverra elit eget. Mauris maecenas gravida"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TabComponent />
    </>
  );
};

export default Card;
