import { FC } from "react";
import { ActionCardProps } from "./ActionCard.types";

const ActionCard: FC<ActionCardProps> = ({ button, text }) => {
  return (
    <article className="pb-5 bg-white border-xs border-opacity-20 border-gray3 w-full flex flex-col items-stretch">
      <h4 className="border-b-xs border-opacity-20 border-gray3 px-6 py-4 font-semibold text-black text-base md:text-lg uppercase">
        Become a creator
      </h4>
      <div className="px-6">
        <p className="text-black text-opacity-40 text-sm mt-4 mb-6">{text}</p>
        {button}
      </div>
    </article>
  );
};

export default ActionCard;
