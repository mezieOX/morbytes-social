import RootLayout from "../layout";
import MainLayout from "@/components/layouts";
import Account from "@/components/common/Account/Account";

const AccountPage = () => {
  return (
    <RootLayout title={"Home"}>
      <MainLayout>
        <section className="justify-start flex-col self-start flex gap-4 items-start min-h-screen w-[53rem] pt-[78px] pl-[46px] -mr-[14px] bg-dark-light ">
          <Account />
        </section>
      </MainLayout>
    </RootLayout>
  );
};

export default AccountPage;
