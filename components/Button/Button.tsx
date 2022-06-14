import { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button : FC<ButtonProps> = ({onClick, text, type, className, disabled, height}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`font-semibold text-base md:text-lg not-italic px-4 md:px-6 rounded-4xl flex items-center justify-center ${type === "primary" ? "bg-primary text-white" : " bg-white text-black" } ${className || " "} ${height}`}>
      {text}
    </button>
  )
}

export default Button;