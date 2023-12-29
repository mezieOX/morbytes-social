import Image from "next/image";

import { Profile35 } from "@/constant/imgs";
import { Button } from "@/components/global/Button";
import SettingsInfoSidebar from "./SettingsInfoSidebar/SettingsInfoSidebar";

const SettingsInfo = () => {
  return (
    <div className="bg-gray min-w-[41.6rem]  max-w-[41.6rem]  overflow-y-scroll py-6 rounded-[13px] p-[5.1rem] min-h-screen scrollbar-hide">
      <div className="flex items-center text-center  justify-start gap-[15px] cursor-pointer py-[3px] ">
        <Image
          src={Profile35}
          alt="title"
          className="w-[105px] h-[105px]"
          style={{ objectFit: "cover" }}
        />
        <Button
          variant={"primary"}
          className="text-dark !px-[9px] !text-[10px] my-[7px] !py-2  font-black rounded"
        >
          {"Change Profile Photo"}
        </Button>
      </div>
      <SettingsInfoSidebar />
    </div>
  );
};

export default SettingsInfo;
