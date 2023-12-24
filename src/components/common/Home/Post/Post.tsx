import Image from "next/image";

import { MenuIcon } from "@/assets/icons";
import { User1 } from "@/constant/imgs";
import SocialIcons from "./SocialIcons/SocialIcons";
import { Input } from "@/components/global";
import NumberOfLikes from "./NumberOfLIkes/NumberOfLikes";

const Post = () => {
  return (
    <div className="w-full relative px-1">
      <div className="cursor-pointer flex w-full items-start mt-[18px]">
        <Image src={User1} alt="title" className="w-[44px]" objectFit="cover" />
        <p className="mx-3 font-black tracking-wider text-white first-letter:uppercase">
          Morbytesuser123
        </p>
        <div className="ml-auto mr-[54px] mt-1">
          <MenuIcon className="fill-current" />
        </div>
      </div>
      <div className="max-w-[88%] ml-14 -mt-2.5 leading-[22px] tracking-wide">
        <p>
          Lorem ipsum dolor sit amet consectetur. Quis ipsum quisque tellus
          cursus massa nam aliquam magna semper. Donec est purus commodo
          placerat. Ac metus adipiscing duis sollicitudin. Condimentum diam dis
          ultrices pulvinar arcu.{" "}
        </p>
      </div>
      <div className="max-w-[88%] ml-14">
        <div className="flex items-center gap-10">
          <NumberOfLikes />
          <p className="text-[10px] -mt-[.7rem]">38k Likes</p>
        </div>
        <SocialIcons />
        <Input />
      </div>
      <div className="absolute h-[7.5rem] w-[2px] top-[4.8rem] left-[21px] bg-dark-extraBold"></div>
    </div>
  );
};

export default Post;
