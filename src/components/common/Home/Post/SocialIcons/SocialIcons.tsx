import { LikesIcon, MessageIcon, ReTweetIcon, ShareIcon } from "@/assets/icons";

const SocialIcons = () => {
  return (
    <div>
      <div className="flex gap-6 items-center mt-[1px]">
        <LikesIcon className="fill-current w-[22px] cursor-pointer" />
        <MessageIcon className="fill-current w-[19px] cursor-pointer" />
        <ReTweetIcon className="fill-current w-7 cursor-pointer" />
        <ShareIcon className="fill-none w-5 cursor-pointer" />
      </div>
      <div className="flex items-center text-[10px] cursor-pointer text-dark-lighter/40 font-extrabold gap-2 mt-[13px]">
        <p>{"32k Reposts"}</p>
        <p>{"12k Comments"}</p>
      </div>
    </div>
  );
};

export default SocialIcons;
