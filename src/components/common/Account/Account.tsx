import Card from "./Card/Card";

const Account = () => {
  return (
    <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
        <div className="flex grow flex-col w-full  pb-2 max-md:max-w-full max-md:px-5">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Account;
