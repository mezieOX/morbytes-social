import { Fragment } from "react";
import Image from "next/image";

import { Reel5 } from "@/constant/imgs";
import { Tab } from "@headlessui/react";

const TabComponent = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab as={Fragment}>
          {({ selected }: any) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? "bg-blue-500 text-white" : "bg-white text-black"
              }
            >
              Tab 1
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }: any) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? "bg-blue-500 text-white" : "bg-white text-black"
              }
            >
              Tab 2
            </button>
          )}
        </Tab>
        {/* ...  */}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          {" "}
          <Image
            src={Reel5}
            alt="title"
            className="w-[8px]"
            objectFit="cover"
          />
        </Tab.Panel>
        <Tab.Panel>
          {" "}
          <Image
            src={Reel5}
            alt="title"
            className="w-[8px]"
            objectFit="cover"
          />
        </Tab.Panel>
        {/* ... */}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabComponent;
