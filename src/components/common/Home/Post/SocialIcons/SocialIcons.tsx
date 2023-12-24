import { LikesIcon, MessageIcon, ReTweetIcon, ShareIcon } from "@/assets/icons";

const SocialIcons = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <LikesIcon className="fill-current w-5" />
        <MessageIcon className="fill-current w-5" />
        <ReTweetIcon className="fill-current w-5" />
        <ShareIcon className="fill-current w-5" />
      </div>
      <div className="flex items-center">
        <p>32k Reposts</p>
        <p>12k Comments</p>
      </div>
    </div>
  );
};

export default SocialIcons;
