import Link from "next/link";
import { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({
  onClick,
  text,
  type,
  className,
  disabled,
  height,
  px,
  link,
  target,
}) => {
  return !link ? (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`not-italic rounded-4xl flex items-center justify-center border-xs transition-all duration-300  ${
        type === "primary"
          ? "bg-primary text-white text-base font-semibold hover:bg-white hover:border-primary hover:text-primary"
          : type === "secondary"
          ? " bg-white text-black text-base font-semibold hover:bg-black hover:text-white"
          : type === "card1"
          ? "text-sm text-primary bg-lightPurple font-medium hover:bg-primary hover:text-lightPurple"
          : type === "card2"
          ? "text-sm text-primary bg-white font-normal border-primary hover:bg-primary hover:text-white"
          : type === "default"
          ? "text-xs text-gray8 text-opacity-60 bg-white font-light border-gray9 hover:bg-gray9 hover:text-white hover:border-gray9"
          : type === "unlock"
          ? "text-sm text-white bg-lightPurple font-semibold bg-opacity-40 border-lightPurple border-opacity-40"
          : ""
      } ${className || " "} ${height} ${px}`}
    >
      {text}
    </button>
  ) : (
    <Link href={link}>
      <a
        target={target}
        className={`not-italic rounded-4xl flex items-center justify-center border-xs transition-all duration-300 ${
          type === "primary"
            ? "bg-primary text-white text-base font-semibold hover:bg-white hover:border-primary hover:text-primary"
            : type === "secondary"
            ? " bg-white text-black text-base font-semibold hover:bg-black hover:text-white"
            : type === "card1"
            ? "text-sm text-primary bg-lightPurple font-medium hover:bg-primary hover:text-lightPurple"
            : type === "card2"
            ? "text-sm text-primary bg-white font-normal border-primary hover:bg-primary hover:text-white"
            : type === "default"
            ? "text-xs text-gray8 text-opacity-60 bg-white font-light border-gray9 hover:bg-gray9 hover:text-white hover:border-gray9"
            : type === "unlock"
            ? "text-sm text-white bg-lightPurple font-semibold bg-opacity-40 border-lightPurple border-opacity-40 hover:bg-white hover:text-black"
            : ""
        } ${className || " "} ${height} ${px}`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
