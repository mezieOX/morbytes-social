import { FC } from "react";

import { ILayout } from "@/interfaces/ILayout";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

const MainLayout: FC<ILayout> = ({ children }) => {
  return (
    <div className="flex w-full justify-between px-[5.6rem]">
      <Navbar />
      {children}
      <Sidebar />
    </div>
  );
};

export default MainLayout;
