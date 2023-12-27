import { Tab } from "@headlessui/react";
import TabItem from "./TabItem/TabItem";

const lists = [
  {
    id: 1,
    name: "Images",
  },
  {
    id: 2,
    name: "Videos",
  },
  {
    id: 3,
    name: "Reposts",
  },
];

const TabComponent = () => {
  return (
    <Tab.Group>
      <Tab.List
        className={
          "self-center flex w-full max-w-full items-center justify-center gap-[4rem] mt-6 -ml-20"
        }
      >
        {lists.map((item) => (
          <Tab
            key={item.id}
            as="div"
            className="!outline-none !border-0 px-4 lg:px-1.5 "
          >
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={`text-amber-500 text-[22px] leading-7 whitespace-nowrap justify-center items-stretch  bg-opacity-50 tracking-wider transition px-8 py-2.5 rounded-md max-md:px-5
                    ${
                      selected
                        ? "bg-dark-bolder/5"
                        : "text-white bg-transparent"
                    }
                  `}
              >
                {item.name}
              </button>
            )}
          </Tab>
        ))}
        {/* ...  */}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          {" "}
          <TabItem />
        </Tab.Panel>
        <Tab.Panel>
          {" "}
          <TabItem />
        </Tab.Panel>
        <Tab.Panel>
          {" "}
          <TabItem />
        </Tab.Panel>
        {/* ... */}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabComponent;
