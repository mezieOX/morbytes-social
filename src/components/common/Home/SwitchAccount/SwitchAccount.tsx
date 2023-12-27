import { Button } from "@/components/global/Button";
import { PeopleYouMayKnow } from "./PeopleYouMayKNow";

const SwitchAccount = () => {
  return (
    <div className="min-w-[14.6rem] max-w-[14.6rem] pt-20 min-h-screen max-h-screen pl-6">
      <div className="flex items-center gap-8">
        <div className="flex flex-col font-black tracking-wider text-white first-letter:uppercase text-[15px] flex-grow">
          {"user123"}
          <p className="text-[9.5px] cursor-pointer tracking-normal text-dark-lighter/40 font-extrabold">
            {"Best user in here"}
          </p>
        </div>
        <Button variant="primary" className="-mb-1.5">
          {"Switch"}
        </Button>
      </div>
      <PeopleYouMayKnow />
      <Button
        variant="primary"
        className="my-6 !text-[10px] px-[14px] py-[1.2px] capitalize"
      >
        See all
      </Button>
      <div className="text-[9.5px] cursor-pointer tracking-normal text-dark-lighter/40 font-extrabold -mt-[3px] flex items-center gap-[2px]">
        &copy;{" "}
        <p className="-mt-px">
          {new Date().getFullYear()}
          {"Morbytes"}
        </p>
      </div>
    </div>
  );
};

export default SwitchAccount;
