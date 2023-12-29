import MainLayout from "@/components/layouts";
import RootLayout from "../layout";
import { SettingsScreen } from "@/components/common/Settings";

const SettingsPage = () => {
  return (
    <RootLayout title={"Settings"}>
      <MainLayout>
        <SettingsScreen />
      </MainLayout>
    </RootLayout>
  );
};

export default SettingsPage;
