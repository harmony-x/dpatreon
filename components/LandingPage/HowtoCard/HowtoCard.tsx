import { FC } from "react";
import { HowtoCardProps } from "./HowtoCard.types";

const HowtoCard : FC<HowtoCardProps> = ({title, heading, description, Icon}) => {
  return (
    <article className="border pt-8 pb-20 px-8 w-full lg:w-1/3">
      <h4 className="font-medium text-base md:text-lg pb-8 uppercase text-gray2">{heading}</h4>
      <Icon width={40} height={40} className="mb-10"  />
      <h5 className="font-medium text-lg md:text-3xl mb-2 text-black">{title}</h5>
      <p className="font-light text-base md:text-lg text-black text-opacity-90">{description}</p>
    </article>
  )
}

export default HowtoCard;