import RootLayout from "../layout";
import MainLayout from "@/components/layouts";
import { ChatsScreen } from "@/components/common/Chats";

const ChatsPage = () => {
  return (
    <RootLayout title={"Chats"}>
      <MainLayout>
        <ChatsScreen />
      </MainLayout>
    </RootLayout>
  );
};

export default ChatsPage;
