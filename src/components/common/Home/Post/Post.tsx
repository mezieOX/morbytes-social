import { MenuIcon } from "@/assets/icons";
import { User1 } from "@/constant/imgs";
import Image from "next/image";
import SocialIcons from "./SocialIcons/SocialIcons";
import NumberOfLIkes from "./NumberOfLIkes/NumberOfLIkes";
import { Input } from "@/components/global";

const Post = () => {
  return (
    <div className="w-full relative">
      <div className="cursor-pointer flex w-full items-start">
        <Image src={User1} alt="title" className="w-[55px]" objectFit="cover" />
        <p className="text-xl text-white first-letter:uppercase">mezie</p>
        <div className="ml-auto">
          <MenuIcon className="fill-current" />
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur. Quis ipsum quisque tellus
          cursus massa nam aliquam magna semper. Donec est purus commodo
          placerat. Ac metus adipiscing duis sollicitudin. Condimentum diam dis
          ultrices pulvinar arcu.{" "}
        </p>
      </div>
      <NumberOfLIkes />
      <SocialIcons />
      <Input />
      <div className="absolute h-20 w-px top-10 left-0 bg-white"></div>
    </div>
  );
};

export default Post;
