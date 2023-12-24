import Image from "next/image";

import MainLayout from "@/components/layouts";
import RootLayout from "./layout";
import { Reel } from "@/components/Home";

export default function Home() {
  return (
    <RootLayout title={"Home"}>
      <MainLayout>
        <div className="justify-start self-start flex gap-4 items-start overflow-w-y-scroll min-h-screen w-[37.5rem] -ml-[3.5rem] scrollbar-hide pt-[78px] px-9 bg-[#101010]">
          <Reel />
        </div>
      </MainLayout>
    </RootLayout>
  );
}
