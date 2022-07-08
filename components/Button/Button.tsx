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
}) => {
  return !link ? (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`not-italic rounded-4xl flex items-center justify-center  ${
        type === "primary"
          ? "bg-primary text-white text-base font-semibold"
          : type === "secondary"
          ? " bg-white text-black text-base font-semibold"
          : type === "card1"
          ? "text-sm text-primary bg-lightPurple font-medium"
          : type === "card2"
          ? "text-sm text-primary bg-white font-normal border-xs border-primary"
          : type === "default"
          ? "text-xs text-gray8 text-opacity-60 bg-white font-light border-xs border-gray9"
          : type === "unlock"
          ? "text-sm text-white bg-lightPurple font-semibold bg-opacity-40"
          : ""
      } ${className || " "} ${height} ${px}`}
    >
      {text}
    </button>
  ) : (
    <Link href={link}>
      <a
        className={`not-italic rounded-4xl flex items-center justify-center  ${
          type === "primary"
            ? "bg-primary text-white text-base font-semibold"
            : type === "secondary"
            ? " bg-white text-black text-base font-semibold"
            : type === "card1"
            ? "text-sm text-primary bg-lightPurple font-medium"
            : type === "card2"
            ? "text-sm text-primary bg-white font-normal border-xs border-primary"
            : type === "default"
            ? "text-xs text-gray8 text-opacity-60 bg-white font-light border-xs border-gray9"
            : type === "unlock"
            ? "text-sm text-white bg-lightPurple font-semibold bg-opacity-40"
            : ""
        } ${className || " "} ${height} ${px}`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
