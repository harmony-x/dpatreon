import { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button : FC<ButtonProps> = ({onClick, text, type, className, disabled, height, px}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`font-semibold text-base md:text-lg not-italic rounded-4xl flex items-center justify-center ${type === "primary" ? "bg-primary text-white" : " bg-white text-black" } ${className || " "} ${height} ${px}`}>
      {text}
    </button>
  )
}

export default Button;