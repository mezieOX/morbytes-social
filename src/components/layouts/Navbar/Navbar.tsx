"use client";
import Link from "next/link";

import {
  AddIcon,
  AppIcon,
  BarIcon,
  LikesIcon,
  Message2Icon,
  SearchIcon,
  SettingsIcon,
} from "@/assets/icons";

const routes = [
  {
    name: "Home",
    link: "/",
    Icon: BarIcon,
    id: 1,
  },
  {
    name: "Activities",
    link: "/activities",
    Icon: LikesIcon,
    id: 2,
  },
  {
    name: "Create",
    link: "/create",
    Icon: AddIcon,
    id: 3,
  },
  {
    name: "Search",
    link: "/search",
    Icon: SearchIcon,
    id: 4,
  },
  {
    name: "Chats",
    link: "/chats",
    Icon: Message2Icon,
    id: 5,
  },
  {
    name: "Account",
    link: "/account",
    Icon: SettingsIcon,
    id: 6,
  },
];

const Navbar = () => {
  return (
    <header>
      <nav className="mt-[81px]">
        <Link href="/" className="">
          <AppIcon className="fill-current w-[30px] h-[28px]  lg:w-[83px] lg:h-[55.32px] text-white" />
        </Link>
        <ul className="mt-[7rem]">
          {routes.map((route) => (
            <li
              key={route.id}
              className={`border-0 outline-none text-2xl pt-[11px] pb-[10px]  leading-normal  hover:bg-dark-bolder/10 hover:transition-all relative rounded-[7.57px] hover:duration-500  hover:text-dark-bolder/60 font-normal flex flex-col`}
            >
              <Link href={route.link} className="flex items-center gap-8">
                <route.Icon />
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
