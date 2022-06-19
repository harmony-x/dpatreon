import Button from "$components/Button/Button";
import { FC } from "react";
import { FinishProfileCardProps } from "./FinishProfileCard.types";

const FinishProfileCard : FC<FinishProfileCardProps> = ({}) => {
  return (
    <article className="pb-5 bg-white border-xs border-opacity-20 border-gray3 w-full flex flex-col items-stretch">
      <h4 className="border-b-xs border-opacity-20 border-gray3 px-6 py-4 font-semibold text-black text-base md:text-lg uppercase">Become a creator</h4>
      <div className="px-6">
        <p className="text-black text-opacity-40 text-sm mt-4 mb-6">You’re almost there! Complete <br/> your page and take it live.</p>
        <Button px="px-5" height='h-42px' link="/edit-profile" text='Finish my page' type='card1'  />
      </div>
    </article>
  )
}

export default FinishProfileCard;