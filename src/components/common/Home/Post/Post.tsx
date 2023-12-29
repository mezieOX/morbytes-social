import Image from "next/image";

import { IPost } from "@/interfaces";
import { post } from "@/data";
import { Input } from "@/components/global";
import { MenuIcon, VerifiedBadge } from "@/assets/icons";
import PostImages from "./PostImages/PostImages";
import NumberOfLikes from "./NumberOfLIkes/NumberOfLikes";
import SocialIcons from "./SocialIcons/SocialIcons";

const Post: React.FC<IPost> = () => {
  return (
    <div className="-mb-20">
      {post.map(
        ({ id, userImg, postImg, verified, postImg2, postImg3, postImg4 }) => (
          <div className="w-full relative px-1 -mb-5" key={id}>
            <div className="cursor-pointer flex w-full items-start mt-[18px]">
              <Image
                src={userImg}
                alt="title"
                className="w-[44px]"
                objectFit="cover"
              />
              <p className="mx-3 flex items-center gap-1 font-black tracking-wider text-white first-letter:uppercase">
                {"Morbytesuser123"}
                {verified && <VerifiedBadge className="!w-[15.5px]" />}
              </p>
              <div className="ml-auto mr-[47px] mt-[5px]">
                <MenuIcon className="fill-current !w-[18px] !h-[18px]" />
              </div>
            </div>
            <div className="max-w-[88%] ml-14 -mt-2.5 leading-[22px] tracking-[0.040em]">
              <p>
                {`Lorem ipsum dolor sit amet consectetur. Quis ipsum quisque tellus
                  cursus massa nam aliquam magna semper. Donec est purus commodo
                  placerat. Ac metus adipiscing duis sollicitudin. Condimentum diam dis
                  ultrices pulvinar arcu.`}{" "}
              </p>
              <PostImages
                key={id}
                postImg={postImg}
                postImg2={postImg2}
                postImg3={postImg3}
                postImg4={postImg4}
              />
            </div>
            <div className="max-w-[88%] ml-14">
              <div className="flex items-center gap-11 cursor-pointer">
                <NumberOfLikes />
                <p className="text-[10px] -mt-[.6rem] cursor-pointer text-dark-lighter/40 font-extrabold -ml-9">
                  {"38k Likes"}
                </p>
              </div>
              <SocialIcons />
              <div className={"mr-[7.6rem]"}>
                <Input />
              </div>
            </div>
            <div
              className={`absolute h-[40.5%] ${
                postImg && !postImg2 ? "!h-[76.5%] mt-4" : ""
              } ${
                postImg && postImg2 && postImg3 && postImg4 ? "!h-[80%]" : ""
              } ${
                postImg && postImg2 && postImg3 ? "!h-[73%]" : ""
              }  w-[2px] top-[4.8rem] left-[21px] bg-dark-semi`}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Post;
