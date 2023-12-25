import { PostImg1, User1, User2 } from "@/constant/imgs";

export const post = [
  {
    id: 1,
    userImg: User1,
    verified: true,
  },
  { id: 2, userImg: User2, postImg: PostImg1, verified: false },
  {
    id: 3,
    userImg: User1,
    verified: true,
    postImg: PostImg1,
    postImg2: PostImg1,
    postImg3: PostImg1,
    postImg4: PostImg1,
  },
  {
    id: 3,
    userImg: User2,
    verified: true,
    postImg: PostImg1,
    postImg2: PostImg1,
    postImg3: PostImg1,
  },
];
