import RootLayout from "./layout";
import MainLayout from "@/components/layouts";
import { Post, Reel } from "@/components/common/Home";

export default function Home() {
  return (
    <RootLayout title={"Home"}>
      <MainLayout>
        <div className="justify-start flex-col self-start flex gap-4 items-start overflow-y-scroll min-h-screen w-[37.5rem] -ml-[3.5rem] scrollbar-hide pt-[78px] pl-9 bg-dark-light">
          <Reel />
          <Post />
        </div>
      </MainLayout>
    </RootLayout>
  );
}
