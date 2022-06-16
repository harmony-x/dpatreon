import { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button : FC<ButtonProps> = ({onClick, text, type, className, disabled, height, px}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`not-italic rounded-4xl flex items-center justify-center font-Gilroy ${type === "primary" ? "bg-primary text-white text-base font-semibold" : type === "secondary" ?  " bg-white text-black text-base font-semibold" : "text-sm text-primary bg-lightPurple font-semibold" } ${className || " "} ${height} ${px}`}>
      {text}
    </button>
  )
}

export default Button;