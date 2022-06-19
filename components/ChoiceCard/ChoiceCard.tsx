import { FC } from "react";
import { ChoiceCardProps } from "./ChoiceCard.types";

const ChoiceCard: FC<ChoiceCardProps> = ({
  icon,
  title,
  disabled,
  selected,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-lg2 md:max-w-208px w-full disabled:cursor-not-allowed transition-all ${
        disabled
          ? "border-black border-opacity-10"
          : selected
          ? "border-primary"
          : "border-black border-opacity-20 hover:border-primary"
      } border relative flex flex-col justify-center items-center py-7`}
      onClick={() => onClick()}
    >
      {icon}
      <h4
        className={`font-normal text-base ${
          disabled ? "text-opacity-10" : "text-opacity-100"
        } text-black mt-2`}
      >
        {title}
      </h4>
    </button>
  );
};

export default ChoiceCard;
