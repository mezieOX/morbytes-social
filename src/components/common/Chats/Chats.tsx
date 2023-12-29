import Aside from "./Aside/Aside";
import MessageScreen from "./MessageScreen/MessageScreen";

const ChatsScreen = () => {
  return (
    <div className="flex my-[4.4rem] mr-auto  w-full z-40 flex-grow mx-4 gap-[19px]  -ml-12 pr-1">
      <Aside />
      <MessageScreen />
    </div>
  );
};

export default ChatsScreen;
