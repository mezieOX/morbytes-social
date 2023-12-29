import { Input } from "@/components/global";
import UserMessageScreen from "./UserMessageScreen/UserMessageScreen";

const Aside = () => {
  return (
    <div className="bg-gray flex-grow rounded-[13px]">
      <div className="py-[7px] mr-4 ml-[18px]">
        <Input
          className="!border-none !py-[13px] !rounded-md placeholder:tracking-wide !px-2.5 placeholder:text-[10px] !text-[10px] !bg-dark-bold/20"
          placeholder="Find a Message..."
          postBtn={false}
        />
        <div className="mx-[7px] my-[2px] grid grid-cols-2 items-start h-min justify-between">
          <p className="text-black flex items-center gap-[13px] bg-white rounded-full text-[11px] px-[23px] py-1 font-black my-2 w-max cursor-pointer">
            {" General"}{" "}
            <span className="text-white bg-red  py-px px-[5px]  rounded-full">
              {"5"}
            </span>
          </p>
          <p className="text-white flex ml-[17px] flex-grow items-center gap-[10px] !bg-dark-bold/20 rounded-full text-[11px] px-[23px] py-1 font-black my-2 w-max cursor-pointer">
            {"Requests"}{" "}
            <span className="text-white bg-red  py-px px-[5px]  rounded-full">
              {"5"}
            </span>
          </p>
        </div>
      </div>
      <div className="py-[2px] ">
        <UserMessageScreen />
      </div>
    </div>
  );
};

export default Aside;
