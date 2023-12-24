import { IInput } from "@/interfaces";
import { Button } from "../Button";

const Input: React.FC<IInput> = ({
  className,
  placeholder = "Leave a Comment as User23464...",
  label,
  labelClassName,
  type = "text",
}) => {
  return (
    <>
      <label
        htmlFor="input"
        className={`text-dark text-lg mb-1.5 ${labelClassName}`}
      >
        {label}
      </label>
      <input
        id="input"
        type={type}
        className={`border-0 outline-0 flex-1  bg-transparent font-normal leading-6 text-xs text-dark italic placeholder:text-dark border-b ${className}`}
        placeholder={placeholder}
      />
      <div className="text-primary">Post</div>
    </>
  );
};

export default Input;
