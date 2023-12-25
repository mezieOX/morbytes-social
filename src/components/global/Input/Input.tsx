import { IInput } from "@/interfaces";

const Input: React.FC<IInput> = ({
  className,
  placeholder = "Leave a Comment as User23464...",
  label,
  labelClassName,
  type = "text",
}) => {
  return (
    <div className="w-full flex flex-col mt-[5.2px]">
      <label
        htmlFor="input"
        className={`text-dark-lighter/40 text-lg mb-1.5 ${labelClassName}`}
      >
        {label}
      </label>
      <input
        id="input"
        type={type}
        className={`border-0 border-dark-extraBold outline-0 flex-1 mx-[5.5px]  bg-transparent font-normal leading-4 text-[6.3px] text-dark-lighter/40 italic placeholder:text-dark-lighter/40 border-b ${className}`}
        placeholder={placeholder}
      />
      <div className="text-primary ml-auto text-[10px] font-black mx-[5px] mt-[7px] cursor-pointer">
        Post
      </div>
    </div>
  );
};

export default Input;
