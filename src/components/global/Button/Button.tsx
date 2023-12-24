import { FC } from "react";

import { IButton } from "@/interfaces";

const Button: FC<IButton> = ({
  className,
  children,
  variant,
  icon,
  title,
  onClick,
}) => {
  return (
    <>
      {variant === "primary" && (
        <button className={`bg-primary text-dark ${className}`}>
          {children}
        </button>
      )}
      {variant === "secondary" && (
        <button
          className="lg:rounded-[3.59px] rounded-[1.44px]  bg-primary  lg:pl-4 pl-2 flex-shrink-0  flex justify-center  items-center"
          onClick={onClick}
        >
          {icon && icon}
          <span className="lg:text-[17.93px] text-[9.19px] mr-[.4rem] lg:ml-2.5 ml-1.5 font-bold leading-normal text-dark lg:pt-4 pt-2.5 lg:pb-2 pb-1.5 text-sm ">
            {title}
          </span>
        </button>
      )}
      {variant === "outline" && (
        <button
          className={` text-dark border border-dark ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
