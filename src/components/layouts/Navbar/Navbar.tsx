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
    Icon: Message2Icon,
    id: 6,
  },
  {
    name: "Settings",
    link: "/settings",
    Icon: SettingsIcon,
    id: 7,
  },
];

const Navbar = () => {
  return (
    <header>
      <nav className="mt-[81px]">
        <Link href="/" className="">
          <AppIcon className="fill-current w-[30px] h-[28px]  lg:w-[83px] lg:h-[55.32px] text-white" />
        </Link>
        <ul className="mt-[6.3rem]">
          {routes.map((route) => (
            <li
              key={route.id}
              className={`border-0 outline-none text-2xl leading-normal  hover:transition-all relative  font-normal -ml-4 flex flex-col`}
            >
              <Link
                href={route.link}
                className={`flex items-center pl-4 my-[12px] hover:duration-500 hover:bg-dark-bolder/10 rounded-[7.57px] hover:last:text-dark-bolder/60  gap-[30px] py-[10px] tracking-wider mt-2.5 last:hover:text-white ${
                  route.Icon === SettingsIcon
                    ? "mt-40 hover:bg-transparent hover:text-white"
                    : ""
                }`}
              >
                <route.Icon
                  className={`w-[2.3rem] h-[2.3rem] fill-current ${
                    route.Icon === AddIcon
                      ? "fill-none !w-[2.5rem] !h-[2.5rem]"
                      : ""
                  } ${
                    route.Icon === SearchIcon
                      ? "fill-none !w-[2.5rem] !h-[2.5rem] -mb-[2.5px]"
                      : ""
                  } `}
                />
                <div className="pr-10">{route.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
