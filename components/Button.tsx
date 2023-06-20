import { ReactNode } from "react";

interface ButtonProps {
  label: ReactNode;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
  transform?: boolean;
  noBorder?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
  transform,
  noBorder,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        ${noBorder ? "" : "border-2"}
        ${transform ? "" : "transition-transform duration-300 ease-in-out"}
        ${fullWidth ? "w-full" : "w-fit"}
        ${secondary ? "dark:bg-white bg-sky-500" : "bg-sky-500"}
        ${secondary ? "dark:text-black text-white" : "text-white"}
        ${secondary ? "dark:border-black border-white" : "border-sky-500"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5" : "px-4"}
        ${large ? "py-3" : "py-2"}
        ${outline ? "bg-transparent" : ""}
        ${outline ? "border-white" : ""}
        ${outline ? "text-white" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
