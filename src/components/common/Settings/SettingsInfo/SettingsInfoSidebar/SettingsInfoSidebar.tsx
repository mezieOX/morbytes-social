import { Input2 } from "@/components/global";
import { Button } from "@/components/global/Button";
import { TextArea } from "@/components/global/TextArea";

const SettingsInfoSidebar = () => {
  return (
    <div className="flex flex-col my-5">
      <Input2 label="Name" />
      <Input2
        label="Username"
        placeholder="Enter a new Username..."
        containerClass="!gap-7"
      />
      <TextArea label="Bio" />
      <div className="flex gap-[3.1rem] my-2">
        <label htmlFor="input" className={`text-white text-xl`}>
          Gender
        </label>
        <div className="mt-[6px]">
          <div className="flex items-center gap-1.5 ">
            <label htmlFor="custom" className="order-1 text-[12px]">
              Custom
            </label>
            <input
              id="custom"
              type="radio"
              name="gender"
              className="text-primary bg-primary"
              value="custom"
            />
          </div>
          <div className="flex items-center gap-1.5 my-1">
            <label htmlFor="Male" className="order-1 text-[12px]">
              Male
            </label>
            <input
              id="Male"
              type="radio"
              name="gender"
              className="text-primary bg-primary"
              value="Male"
            />
          </div>
          <div className="flex items-center gap-1.5 my-1">
            <label htmlFor="Female" className="order-1 text-[12px]">
              Female
            </label>
            <input
              id="Female"
              type="radio"
              name="gender"
              className="text-primary bg-primary"
              value="Female"
            />
          </div>
          <div className="flex items-center gap-1.5 my-1">
            <label htmlFor="Prefer not say" className="order-1 text-[12px]">
              Prefer not say
            </label>
            <input
              id="Prefer not say"
              type="radio"
              name="gender"
              className="text-primary bg-primary"
              value="Prefer not say"
            />
          </div>
          <div className="text-[8px] text-dark-bolder/60">
            <p>This would not displayed on your profile publicly</p>
          </div>
        </div>
      </div>
      <Input2
        label="Website"
        placeholder="Enter a new Username..."
        containerClass="!gap-12"
      />
      <Input2
        label="Phone No"
        placeholder="Enter a new Username..."
        containerClass="!gap-8"
      />
      <div className="flex gap-[3.1rem] my-2">
        <label htmlFor="input" className={`text-white text-xl`}>
          Acct Type
        </label>
        <div className="mt-[6px] flex items-center gap-4">
          <div className="flex items-center gap-1.5 ">
            <label htmlFor="custom" className="order-1 text-[12px]">
              Public
            </label>
            <input
              id="custom"
              type="radio"
              name="gender"
              className="text-primary bg-primary"
              value="custom"
            />
          </div>
          <div className="flex items-center gap-1.5 my-1">
            <label htmlFor="Male" className="order-1 text-[12px]">
              Private
            </label>
            <input
              id="Male"
              type="radio"
              name="gender"
              className="text-primary bg-primary"
              value="Male"
            />
          </div>
        </div>
      </div>
      <Button
        variant={"primary"}
        className="text-dark !px-[9px] ml-auto !text-[10px] w-max my-[7px] !py-2  font-black rounded"
      >
        {"Submit"}
      </Button>
    </div>
  );
};

export default SettingsInfoSidebar;
