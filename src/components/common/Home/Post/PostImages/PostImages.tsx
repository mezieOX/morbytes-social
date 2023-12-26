import Image from "next/image";

import { IPost } from "@/interfaces";

const PostImages: React.FC<IPost> = ({
  postImg,
  postImg2,
  postImg3,
  postImg4,
}) => {
  return (
    <>
      {postImg && !postImg2 && (
        <div className={"mt-7 mr-7"}>
          <Image
            src={postImg}
            alt="title"
            className="w-full cursor-pointer"
            objectFit="cover"
          />
        </div>
      )}

      {postImg && postImg2 && postImg3 && postImg4 && (
        <div
          className={
            "mt-9 mb-1.5 mr-[2px] grid grid-cols-2 gap-x-[14px] gap-y-[18px]"
          }
        >
          <Image
            src={postImg}
            alt="title"
            className="w-full cursor-pointer"
            objectFit="cover"
          />
          <Image
            src={postImg}
            alt="title"
            className="w-full cursor-pointer"
            objectFit="cover"
          />
          <Image
            src={postImg}
            alt="title"
            className="w-full cursor-pointer"
            objectFit="cover"
          />
          <Image
            src={postImg}
            alt="title"
            className="w-full cursor-pointer"
            objectFit="cover"
          />
        </div>
      )}

      {postImg && postImg2 && postImg3 && !postImg4 && (
        <div
          className={
            "mt-9 mr-7 -mb-[18.4rem] grid grid-cols-9 grid-rows-2 gap-4"
          }
        >
          <Image
            src={postImg}
            alt="title"
            className="w-full col-start-1 row-start-1 row-end-2 col-end-7 cursor-pointer"
            objectFit="cover"
          />
          <Image
            src={postImg}
            alt="title"
            className="w-full row-start-1 row-end-1 col-start-7 col-end-10 cursor-pointer"
            objectFit="cover"
          />
          <Image
            src={postImg}
            alt="title"
            className="w-full  col-start-7 -mt-[9.8rem] col-end-10 cursor-pointer"
            objectFit="cover"
          />
        </div>
      )}
    </>
  );
};

export default PostImages;
