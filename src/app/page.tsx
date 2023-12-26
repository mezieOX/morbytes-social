import RootLayout from "./layout";
import MainLayout from "@/components/layouts";
import { Post, Reel, SwitchAccount } from "@/components/common/Home";

export default function Home() {
  return (
    <RootLayout title={"Home"}>
      <MainLayout>
        <section className="justify-start flex-col self-start flex gap-4 items-start overflow-y-scroll min-h-screen max-h-screen w-[37.5rem] -ml-[3.5rem] scrollbar-hide pt-[78px] pl-9 bg-dark-light">
          <Reel />
          <Post />
        </section>
        <SwitchAccount />
      </MainLayout>
    </RootLayout>
  );
}
