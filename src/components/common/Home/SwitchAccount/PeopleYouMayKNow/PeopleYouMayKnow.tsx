import { peopleYouMayKnow } from "@/data";
import { Button } from "@/components/global/Button";

const PeopleYouMayKnow = () => {
  return (
    <div className="mt-[4.2rem]">
      <div className="flex flex-col gap-1 font-black tracking-wider text-dark-lighter/60 text-xs first-letter:uppercase">
        <p>People you may know</p>
      </div>
      {peopleYouMayKnow.map(({ id, username, connectWith }) => (
        <div className="flex items-center mt-[11px]" key={id}>
          <div className="flex-grow">
            <h2 className="flex flex-col gap-1 font-black  text-white first-letter:uppercase">
              {username}
            </h2>
            <p className="text-[9.5px] cursor-pointer tracking-normal text-dark-lighter/40 font-extrabold -mt-[3px]">
              {connectWith}
            </p>
          </div>
          <Button
            variant="primary"
            className="!bg-transparent border text-dark-lighter/40 border-dark-lighter/40 !px-[7px] -mr-3 !py-0 -mb-1"
          >
            Follow
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PeopleYouMayKnow;
