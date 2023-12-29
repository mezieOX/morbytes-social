import { IInput } from "@/interfaces";

const Input2: React.FC<IInput> = ({
  className,
  placeholder = "Enter a new Name...",
  label,
  labelClassName,
  type = "text",
  containerClass,
}) => {
  return (
    <div
      className={`flex items-center gap-[4.2rem] my-[.8rem] ${containerClass}`}
    >
      <label
        htmlFor="input"
        className={`text-white text-xl ${labelClassName}`}
      >
        {label}
      </label>
      <input
        id="input"
        type={type}
        className={`border-0 outline-0 flex-1 rounded-md px-4 py-2 bg-dark/60 font-normal leading-6 text-[10px] text-dark-bolder/60  italic placeholder:text-dark-bolder/60 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input2;
