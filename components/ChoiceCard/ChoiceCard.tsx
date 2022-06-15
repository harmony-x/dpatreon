import { FC } from "react";
import { ChoiceCardProps } from "./ChoiceCard.types";

const ChoiceCard : FC<ChoiceCardProps> = ({icon, title, disabled}) => {
  return (
    <button disabled={disabled} className={`rounded-lg2 md:max-w-208px w-full disabled:cursor-not-allowed ${disabled ? 'border-black border-opacity-10' : 'border-primary border-opacity-60'} border relative flex flex-col justify-center items-center py-7`}>
      {/* {disabled && <div className="absolute top-0 left-0 h-full w-full bg-black opacity-10" />} */}
      {icon}
      <h4 className={`font-normal text-base ${disabled ? 'opacity-10' :  'opacity-100'} text-black mt-2`}>{title}</h4>
    </button>
  )
}

export default ChoiceCard;