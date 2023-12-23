import MainLayout from "@/components/layouts";
import RootLayout from "./layout";
import Image from "next/image";
import { User1 } from "@/constant/imgs";

export default function Home() {
  return (
    <RootLayout title={"Home"}>
      <MainLayout>
        <div className="justify-start self-start place-items-stretch flex gap-4 items-center">
          <div>
            <Image src={User1} alt="title" className="" objectFit="cover" />
            <p>user12344</p>
          </div>
          <div>
            <Image src={User1} alt="title" className="" objectFit="cover" />
            <p>user12344</p>
          </div>
          <div>
            <Image src={User1} alt="title" className="" objectFit="cover" />
            <p>user12344</p>
          </div>
          <div>
            <Image src={User1} alt="title" className="" objectFit="cover" />
            <p>user12344</p>
          </div>
          <div>
            <Image src={User1} alt="title" className="" objectFit="cover" />
            <p>user12344</p>
          </div>
        </div>
        <div>
          <div className="flex">
            <Image src={User1} alt="title" className="" objectFit="cover" />
            <p>user12344</p>
          </div>
          <div>
            <h1>Morbytesuser123</h1>
            <small>Best user in here</small>

            <div>
              <h1>People you may know</h1>
              <h3>Username0023</h3>
              <small>Suggested</small>
            </div>
          </div>
        </div>
      </MainLayout>
    </RootLayout>
  );
}
